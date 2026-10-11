import { Link } from "react-router";
import { ArrowUpRight, Mail, MapPin, Printer, X } from "lucide-react";
import { Dialog } from "radix-ui";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education, experience, highlights, profile, skills, socials } from "@/data/profile";
import { caseStudies } from "@/data/caseStudies";

const summary = `Software Engineer with 5+ years of full-stack experience across web, mobile and APIs. At
${profile.currently.company} I own the marketplace and provider app and lead AI-driven features. Gold Medal graduate in Software Engineering and Master of IT (Computer Science) from QUT.
Known for leading projects, working closely with cross-functional teams, and shipping software that measurably
improves user experience and operational efficiency.`;

const ResumePage = () => (
  <PageShell title="Resume">
    {/* Header */}
    <Reveal className="flex flex-col gap-6 border-b pb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">Resume</p>
        <h1 className="text-5xl font-semibold tracking-tighter md:text-6xl">{profile.name}</h1>
        <p className="mt-2 text-xl text-muted-foreground">{profile.role}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-foreground">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          {socials
            .filter((social) => social.name !== "Instagram")
            .map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                {social.name}
              </a>
            ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent print:hidden"
      >
        <Printer className="h-4 w-4" /> Save as PDF
      </button>
    </Reveal>

    <Reveal className="py-12">
      <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{summary}</p>
    </Reveal>

    {/* Experience timeline */}
    <section className="py-12">
      <SectionHeading eyebrow="01" title="Experience" />
      <ol className="relative ml-1.5 border-l">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background" />
            <Reveal>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {job.role} <span className="font-normal text-muted-foreground">at {job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-muted-foreground">
                  {job.start} — {job.end} · {job.location}
                </p>
              </div>
              {job.summary && <p className="mt-3 text-muted-foreground">{job.summary}</p>}
              {job.points.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>

    {/* Featured projects */}
    <section className="py-12">
      <SectionHeading eyebrow="02" title="Featured projects" />
      <div className="divide-y border-y">
        {caseStudies.map((study) => (
          <Reveal key={study.slug}>
            <Link
              to={`/work/${study.slug}`}
              className="group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {study.name} <span className="font-normal text-muted-foreground">· {study.client}</span>
                </h3>
                <p className="mt-1 text-muted-foreground">{study.tagline}</p>
              </div>
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                {study.period}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand print:hidden" />
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Skills */}
    <section className="py-12">
      <SectionHeading eyebrow="03" title="Skills" />
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal
            key={group.group}
            delay={(index % 2) * 60}
            // Let an odd final group fill the row instead of leaving an empty cell.
            className={`bg-card p-6 ${index === skills.length - 1 && skills.length % 2 ? "sm:col-span-2" : ""}`}
          >
            <p className="mb-3 text-sm font-medium">{group.group}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border px-2.5 py-1 text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Education */}
    <section className="py-12">
      <SectionHeading eyebrow="04" title="Education" />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((school, index) => (
          <Reveal key={school.short} delay={index * 80} className="rounded-2xl border bg-card p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand">
                {school.short}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {school.start} — {school.end}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{school.degree}</h3>
            <p className="text-sm text-muted-foreground">{school.school}</p>
            <p className="mt-4 text-sm">
              GPA <span className="font-semibold">{school.gpa}</span>
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {school.awards.map((award) => (
                <li key={award} className="flex gap-2">
                  <span className="text-brand">✦</span> {award}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Highlights gallery */}
    <section className="py-12 print:hidden">
      <SectionHeading eyebrow="05" title="Highlights" description="A few moments and projects I'm proud of." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 60}>
            <Dialog.Root>
              <Dialog.Trigger className="group block w-full overflow-hidden rounded-2xl border bg-card text-left">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumb ?? item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border bg-card shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                  <img src={item.image} alt={item.title} className="max-h-[70vh] w-full bg-black object-contain" />
                  <div className="p-6">
                    <Dialog.Title className="text-lg font-semibold">{item.title}</Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-muted-foreground">{item.caption}</Dialog.Description>
                  </div>
                  <Dialog.Close
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </Reveal>
        ))}
      </div>
    </section>
  </PageShell>
);

export default ResumePage;
