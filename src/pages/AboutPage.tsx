import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, education, interests, profile } from "@/data/profile";

const principles = [
  {
    title: "Start with the people",
    body: "I sit down with users and stakeholders before writing code, from CEOs and marketing teams to students and clinic patients.",
  },
  {
    title: "Ship the whole thing",
    body: "APIs, web portals and mobile apps. I'm comfortable owning a feature from the database through to the UI.",
  },
  {
    title: "Make it dependable",
    body: "Automated end-to-end tests, secure integrations and measurable improvements over clever code.",
  },
];

const AboutPage = () => (
  <PageShell title="About">
    <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />

    <div className="relative grid gap-12 md:grid-cols-[1fr_16rem]">
      <div>
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">About</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tighter md:text-6xl">
            Engineer, builder and lifelong student of how things work.
          </h1>
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {about.map((paragraph, index) => (
            <Reveal key={index} delay={80 + index * 80}>
              <p className="text-pretty">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={160} className="h-fit space-y-6 rounded-2xl border bg-card p-6 text-sm md:mt-24">
        <div>
          <p className="text-muted-foreground">Now</p>
          <p className="mt-1 font-medium">
            {profile.currently.role} at {profile.currently.company}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Based in</p>
          <p className="mt-1 font-medium">{profile.location}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Studied</p>
          {education.map((school) => (
            <p key={school.short} className="mt-1 font-medium">
              {school.degree}, {school.short}
            </p>
          ))}
        </div>
      </Reveal>
    </div>

    <section className="relative pt-24">
      <SectionHeading eyebrow="How I work" title="Principles I keep coming back to" />
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 80} className="rounded-2xl border bg-card p-6">
            <span className="font-mono text-xs text-brand">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="pt-24">
      <SectionHeading eyebrow="Beyond code" title="When I'm not at a keyboard" />
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
        {interests.map((interest, index) => (
          <Reveal key={interest.title} delay={(index % 3) * 60} className="bg-card p-6">
            <h3 className="font-medium">{interest.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{interest.body}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <Reveal className="pt-16">
      <Link
        to="/resume"
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Read my resume
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Reveal>
  </PageShell>
);

export default AboutPage;
