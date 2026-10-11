import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CaseVisual from "@/components/CaseVisual";
import NotFoundPage from "./NotFoundPage";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return <NotFoundPage />;

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <PageShell title={study.name}>
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />

      <Link
        to="/#work"
        className="group relative mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> All work
      </Link>

      {/* Header */}
      <Reveal className="relative">
        <div className="flex items-center gap-3">
          {study.logo && <img src={study.logo} alt="" className="h-10 w-10 rounded-xl border bg-white object-contain" />}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{study.client}</p>
        </div>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tighter md:text-6xl">{study.name}</h1>
        <p className="mt-4 max-w-2xl text-balance text-xl text-foreground/80">{study.tagline}</p>
      </Reveal>

      <Reveal delay={80} className="relative mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y py-5 text-sm">
        <div>
          <p className="text-muted-foreground">Role</p>
          <p className="mt-0.5 font-medium">{study.role}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Timeline</p>
          <p className="mt-0.5 font-medium">{study.period}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {study.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-90"
            >
              {link.label} <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <CaseVisual visual={study.visual} className="aspect-[16/10] md:aspect-[2/1]" />
      </Reveal>

      {/* Overview and stats */}
      <section className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">Overview</p>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
        </Reveal>
        <Reveal delay={80} className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border bg-border">
          {study.stats.map((stat, statIndex) => (
            <div
              key={stat.label}
              className={`bg-card p-5 ${statIndex === study.stats.length - 1 && study.stats.length % 2 ? "col-span-2" : ""}`}
            >
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* What I built */}
      <section className="space-y-6">
        {study.parts.map((part, partIndex) => (
          <Reveal key={part.title} className="rounded-3xl border bg-card p-7 md:p-10">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="mr-3 font-mono text-sm text-brand">0{partIndex + 1}</span>
                {part.title}
              </h2>
              {part.period && <p className="font-mono text-xs text-muted-foreground">{part.period}</p>}
            </div>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{part.body}</p>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {part.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-1.5 border-t pt-6">
              {part.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Gallery */}
      {study.gallery && (
        <section className="grid gap-4 pt-16 md:grid-cols-2">
          {study.gallery.map((image, imageIndex) => (
            <Reveal key={image.caption} delay={imageIndex * 80}>
              <figure>
                <img src={image.src} alt={image.caption} loading="lazy" className="aspect-[16/10] w-full rounded-2xl border object-cover object-top" />
                <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </section>
      )}

      {/* Timeline */}
      {study.timeline && (
        <section className="pt-16">
          <Reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-brand">How it progressed</p>
          </Reveal>
          <ol className="relative ml-1.5 border-l">
            {study.timeline.map((entry, entryIndex) => (
              <li key={entry.date + entryIndex} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background" />
                <Reveal>
                  <p className="font-mono text-xs text-muted-foreground">{entry.date}</p>
                  <p className="mt-1">{entry.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Next case study */}
      <Reveal className="pt-20">
        <Link
          to={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-3xl border bg-card p-7 transition-colors hover:border-foreground/20 md:p-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Next case study</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{next.name}</p>
          </div>
          <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </PageShell>
  );
};

export default CaseStudyPage;
