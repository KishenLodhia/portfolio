import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, education, interests, profile, socials } from "@/data/profile";

const principles = [
  {
    title: "Start with the people",
    body: "I sit down with users and stakeholders before writing code, from CEOs and marketing teams to students and clinic patients.",
    example:
      "Eviole helps people change their lives, so I built it around the members and clinic staff who use it every day.",
  },
  {
    title: "Ship the whole thing",
    body: "APIs, web portals and mobile apps. I'm comfortable owning a feature from the database through to the UI.",
    example:
      "Built Shreeji POS solo, from the database and till logic to the iPad screens and the website.",
  },
  {
    title: "Make it dependable",
    body: "Automated end-to-end tests, secure integrations and measurable improvements over clever code.",
    example:
      "Errors in Shreeji POS go to Sentry, where an AI agent triages new issues and drafts fixes for me to review.",
  },
];

const techStack = [
  "Laravel",
  "PHP",
  "React",
  "Inertia.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
  "MySQL",
  "REST APIs",
];

const linkedIn = socials.find((social) => social.name === "LinkedIn")!.href;
const gitHub = socials.find((social) => social.name === "GitHub")!.href;

const inlineLink =
  "font-medium text-foreground underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand";
const primaryButton =
  "group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90";
const secondaryButton =
  "inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent";

const AboutPage = () => (
  <PageShell title="About">
    <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />

    <div className="relative grid gap-12 md:grid-cols-[1fr_16rem]">
      <div className="hero-in">
        <p className="text-brand mb-3 font-mono text-xs tracking-[0.2em] uppercase">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tighter text-balance md:text-6xl">
          Full-stack engineer who ships marketplace, payments and LLM features
          end to end.
        </h1>
        <div className="text-muted-foreground mt-10 space-y-6 text-lg leading-relaxed">
          {about.map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
          <p className="text-pretty">
            Today I work at {profile.currently.company} on quoting, payments and
            LLM features for a freight marketplace, where my work has [METRIC_1]
            and [METRIC_2].
          </p>
          <p className="text-pretty">
            Outside work, I've designed, built and run two production systems on
            my own:{" "}
            <Link to="/work/eviole-platform" className={inlineLink}>
              Eviole
            </Link>
            , a healthtech platform with a partner API, and{" "}
            <Link to="/work/shreeji-jewellers" className={inlineLink}>
              Shreeji POS
            </Link>
            , a point-of-sale system for my family's jewellery store that keeps
            money and stock correct even with two tills running at once.
          </p>
        </div>
      </div>

      <div className="hero-in space-y-4 md:mt-24">
        <img
          src="/kishen.png"
          alt="Kishen Lodhia"
          width={500}
          height={500}
          fetchPriority="high"
          decoding="async"
          className="bg-card aspect-square w-full rounded-2xl border object-cover"
        />
        <div className="bg-card space-y-6 rounded-2xl border p-6 text-sm">
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
          <div>
            <p className="text-muted-foreground">Tech stack</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="bg-secondary rounded-full px-2.5 py-1 font-mono text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section className="relative pt-24">
      <SectionHeading
        eyebrow="How I work"
        title="Principles I keep coming back to"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((principle, index) => (
          <Reveal
            key={principle.title}
            delay={index * 80}
            className="bg-card flex flex-col rounded-2xl border p-6"
          >
            <span className="text-brand font-mono text-xs">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {principle.title}
            </h3>
            <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
              {principle.body}
            </p>
            <p className="mt-4 border-t pt-4 text-sm leading-relaxed">
              {principle.example}
            </p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="pt-24">
      <SectionHeading
        eyebrow="Beyond code"
        title="When I'm not at a keyboard"
      />
      <div className="bg-border grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3">
        {interests.map((interest, index) => (
          <Reveal
            key={interest.title}
            delay={index * 60}
            className="bg-card p-6"
          >
            <h3 className="font-medium">{interest.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {interest.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="pt-24">
      <Reveal className="bg-card flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <p className="max-w-md text-2xl font-semibold tracking-tight text-balance">
          Open to full-stack engineering roles in Brisbane or remote.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/#contact" className={primaryButton}>
            Contact
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className={secondaryButton}
          >
            LinkedIn
          </a>
          <a
            href={gitHub}
            target="_blank"
            rel="noreferrer"
            className={secondaryButton}
          >
            GitHub
          </a>
          <Link to="/resume" className={secondaryButton}>
            Resume
          </Link>
        </div>
      </Reveal>
    </section>
  </PageShell>
);

export default AboutPage;
