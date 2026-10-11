import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience, profile, projects, skills, socials, stats } from "@/data/profile";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  Instagram: <FaInstagram />,
};

const marqueeItems = skills.flatMap((group) => group.items);

// Syntax-highlighted "profile object" shown beside the hero copy.
const CodeCard = () => (
  <div className="relative overflow-hidden rounded-2xl border bg-card/80 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/10 backdrop-blur">
    <div className="flex items-center gap-1.5 border-b px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      <span className="ml-3 text-xs text-muted-foreground">kishen.ts</span>
    </div>
    <pre className="overflow-x-auto p-5 text-muted-foreground">
      <span className="text-purple-500 dark:text-purple-400">const</span>{" "}
      <span className="text-foreground">engineer</span> = {"{\n"}
      {"  "}name: <span className="text-brand">"{profile.name}"</span>,{"\n"}
      {"  "}role: <span className="text-brand">"{profile.currently.role}"</span>,{"\n"}
      {"  "}company: <span className="text-brand">"{profile.currently.company}"</span>,{"\n"}
      {"  "}based: <span className="text-brand">"Brisbane, AU"</span>,{"\n"}
      {"  "}stack: [<span className="text-brand">"Laravel"</span>, <span className="text-brand">"Angular"</span>,{"\n"}
      {"          "}
      <span className="text-brand">"Flutter"</span>, <span className="text-brand">"AWS"</span>],{"\n"}
      {"  "}shipsTo: [<span className="text-brand">"web"</span>, <span className="text-brand">"mobile"</span>],
      {"\n"}
      {"}"};
    </pre>
  </div>
);

const HomePage = () => {
  const current = experience[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 animate-glow rounded-full bg-brand/20 blur-[120px]" />

        <PageShell title="Software Engineer" className="pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <a
                  href={profile.currently.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mb-8 inline-flex items-center gap-2 rounded-full border bg-background/60 py-1 pl-1.5 pr-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
                >
                  <span className="relative flex h-2 w-2 translate-x-1">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="ml-2">
                    Currently {profile.currently.role} at{" "}
                    <span className="text-foreground">{profile.currently.company}</span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
                  Hi, I'm {profile.firstName}.
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-transparent">
                    I build software people rely on.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">{profile.tagline}</p>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
              </Reveal>

              <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  See my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
                >
                  Read resume
                </Link>
                <div className="ml-1 flex items-center gap-1">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="grid h-11 w-11 place-items-center rounded-full text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {socialIcons[social.name]}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={320} className="hidden lg:block">
              <CodeCard />
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal delay={400} className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background/80 p-6 backdrop-blur">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </PageShell>
      </section>

      {/* Skills marquee */}
      <section
        aria-label="Technologies"
        className="relative overflow-hidden border-y py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="flex items-center gap-10">
              {item}
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Products, research and experiments"
          description="A mix of production systems I've shipped for clients and employers, and projects from study and side work."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Wrapper = project.href ? "a" : "div";
            return (
              <Reveal key={project.title} delay={(index % 3) * 80} className="h-full">
                <Wrapper
                  {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="group relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {project.context}
                    </p>
                    {project.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse all repositories on GitHub
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="border-y bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <div className="divide-y border-y">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 60}>
                <div className="grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8">
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.start} — {job.end}
                  </p>
                  <div>
                    <h3 className="font-medium">
                      {job.role} <span className="text-muted-foreground">· {job.company}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.summary ?? job.points[0]}</p>
                  </div>
                  <p className="text-sm text-muted-foreground md:text-right">{job.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              to="/resume"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Full resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]" />
            <p className="relative mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">Contact</p>
            <h2 className="relative mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Have a project or role in mind? Let's talk.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
              I'm always happy to chat about engineering, product ideas or opportunities in {current.location.split(",")[0]} and
              beyond.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a
                href={socials.find((social) => social.name === "LinkedIn")?.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <FaLinkedinIn /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default HomePage;
