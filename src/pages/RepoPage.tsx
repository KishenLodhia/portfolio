import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import LanguageBar from "@/components/LanguageBar";
import { Skeleton } from "@/components/ui/skeleton";
import { languagesPath, repoPath, timeAgo, useGitHub, type GitHubRepo } from "@/lib/github";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });

const formatSize = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);

const RepoPage = () => {
  const { repoName = "" } = useParams();
  const repo = useGitHub<GitHubRepo>(repoPath(repoName));
  const languages = useGitHub<Record<string, number>>(languagesPath(repoName));

  return (
    <PageShell title={repoName}>
      <Link
        to="/portfolio"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> All repositories
      </Link>

      {repo.error && (
        <p className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground">{repo.error}</p>
      )}

      {repo.loading && (
        <div className="space-y-4">
          <Skeleton className="h-12 w-2/3 rounded-xl" />
          <Skeleton className="h-5 w-1/2 rounded-full" />
          <Skeleton className="mt-8 h-32 rounded-2xl" />
        </div>
      )}

      {repo.data && (
        <>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brand">Repository</p>
              <h1 className="font-mono text-3xl font-semibold tracking-tight break-all md:text-5xl">{repo.data.name}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {repo.data.description ?? "No description provided."}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              {repo.data.homepage && (
                <a
                  href={repo.data.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  Live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <a
                href={repo.data.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View on GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3"
          >
            {[
              ["Created", formatDate(repo.data.created_at)],
              ["Last push", timeAgo(repo.data.pushed_at)],
              ["Primary language", repo.data.language ?? "—"],
              ["Stars", repo.data.stargazers_count.toString()],
              ["Forks", repo.data.forks_count.toString()],
              ["Size", formatSize(repo.data.size)],
            ].map(([label, value]) => (
              <div key={label} className="bg-card p-6">
                <div className="text-sm text-muted-foreground">{label}</div>
                <div className="mt-1 text-xl font-semibold tracking-tight">{value}</div>
              </div>
            ))}
          </Reveal>

          {languages.data && Object.keys(languages.data).length > 0 && (
            <Reveal delay={160} className="mt-6 rounded-2xl border bg-card p-6">
              <p className="mb-4 text-sm font-medium">Languages</p>
              <LanguageBar data={languages.data} />
            </Reveal>
          )}

          {repo.data.topics && repo.data.topics.length > 0 && (
            <Reveal delay={200} className="mt-6 flex flex-wrap gap-2">
              {repo.data.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-brand/10 px-3 py-1 text-xs text-brand">
                  {topic}
                </span>
              ))}
            </Reveal>
          )}
        </>
      )}
    </PageShell>
  );
};

export default RepoPage;
