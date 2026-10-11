import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, GitFork, Search, Star } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import LanguageBar from "@/components/LanguageBar";
import { Skeleton } from "@/components/ui/skeleton";
import { profile } from "@/data/profile";
import { colorFor, reposPath, timeAgo, useGitHub, userPath, type GitHubRepo, type GitHubUser } from "@/lib/github";

const PortfolioPage = () => {
  const user = useGitHub<GitHubUser>(userPath);
  const repos = useGitHub<GitHubRepo[]>(reposPath);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string | null>(null);

  // Skip forks and the profile README repo, which isn't a project.
  const ownRepos = useMemo(
    () => (repos.data ?? []).filter((repo) => !repo.fork && repo.name.toLowerCase() !== profile.github.toLowerCase()),
    [repos.data]
  );

  // Repo count per primary language, for the breakdown bar and filter chips.
  const languageCounts = useMemo(
    () =>
      ownRepos.reduce<Record<string, number>>((counts, repo) => {
        if (repo.language) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
        return counts;
      }, {}),
    [ownRepos]
  );

  const visible = ownRepos.filter((repo) => {
    const haystack = `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""} ${(repo.topics ?? []).join(" ")}`;
    return (!language || repo.language === language) && haystack.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <PageShell title="GitHub">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />

      {/* Profile header */}
      <Reveal className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-5">
          {user.data ? (
            <img src={user.data.avatar_url} alt="" className="h-20 w-20 rounded-2xl border" />
          ) : (
            <Skeleton className="h-20 w-20 rounded-2xl" />
          )}
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-brand">Open source</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">GitHub</h1>
            {user.data && (
              <p className="mt-1 text-sm text-muted-foreground">
                @{user.data.login} · {ownRepos.length || user.data.public_repos} public repositories
              </p>
            )}
          </div>
        </div>
        {user.data && (
          <a
            href={user.data.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            View profile <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </Reveal>

      {/* Language breakdown */}
      {ownRepos.length > 0 && (
        <Reveal delay={80} className="relative mt-10 rounded-2xl border bg-card p-6">
          <p className="mb-4 text-sm font-medium">Primary languages across repositories</p>
          <LanguageBar
            data={languageCounts}
            unit={(value) => `${value} ${value === 1 ? "repo" : "repos"}`}
          />
        </Reveal>
      )}

      {/* Filters */}
      <Reveal delay={120} className="relative mt-10 flex flex-col gap-4 md:flex-row md:items-center">
        <label className="relative flex-1 md:max-w-xs">
          <span className="sr-only">Search repositories</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search repositories"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-10 w-full rounded-full border bg-background pl-10 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-brand/40"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {[null, ...Object.keys(languageCounts).sort()].map((name) => (
            <button
              key={name ?? "all"}
              type="button"
              onClick={() => setLanguage(name)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                language === name ? "border-foreground bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {name ?? "All"}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Repositories */}
      <div className="relative mt-8 grid gap-4 md:grid-cols-2">
        {repos.loading &&
          Array.from({ length: 6 }, (_, index) => <Skeleton key={index} className="h-40 rounded-2xl" />)}

        {repos.error && (
          <p className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground md:col-span-2">
            {repos.error}
          </p>
        )}

        {!repos.loading && !repos.error && visible.length === 0 && (
          <p className="p-8 text-center text-sm text-muted-foreground md:col-span-2">No repositories match.</p>
        )}

        {visible.map((repo, index) => (
          <Reveal key={repo.id} delay={(index % 2) * 60}>
            <Link
              to={`/portfolio/${repo.name}`}
              className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-mono text-base font-medium break-all">{repo.name}</h2>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                {repo.description ?? "No description provided."}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorFor(repo.language) }} />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                  </span>
                )}
                <span>Updated {timeAgo(repo.pushed_at)}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
};

export default PortfolioPage;
