// Single source of truth for all personal content shown on the site.
// Update this file to change what appears on the landing, about and resume pages.
import weatherAppImage from "@/assets/weather-app.webp";
import weatherAppStill from "@/assets/weather-app-still.webp";
import linkedInFeatured from "@/assets/linkedin-featured.jpeg";
import cosApp from "@/assets/cos-app.jpeg";
import goldMedal from "@/assets/gold-medal.jpeg";
import uspApp from "@/assets/usp-app.jpeg";

export const profile = {
  name: "Kishen Lodhia",
  firstName: "Kishen",
  role: "Full-Stack Software Engineer",
  location: "Brisbane, Australia",
  email: "kishan1999lodhia@gmail.com",
  github: "KishenLodhia",
  tagline: "I build reliable web, mobile and AI-powered products end to end, from API design to the pixels people touch.",
  currently: { role: "Software Engineer, Marketplace & Apps", company: "Truckit", href: "https://www.truckit.net" },
};

export const socials = [
  { name: "GitHub", href: "https://github.com/KishenLodhia" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kishenlodhia" },
  { name: "Instagram", href: "https://www.instagram.com/kishen_lodhia/" },
];

export const stats = [
  { value: "5+", label: "Years shipping software" },
  { value: "20k", label: "Students served by apps I led" },
  { value: "Gold", label: "Medal, top SE graduate" },
  { value: "6.4/7", label: "GPA, Master of IT (QUT)" },
];

export const about = [
  `I'm a Brisbane-based software engineer who likes turning messy business problems into software that feels simple.
  I've worked across the whole stack, designing APIs, building web portals and shipping Flutter and React Native apps,
  usually as the person who sits between engineering, product and the people who use the thing.`,
  `I started out at The University of the South Pacific, where I graduated with a Gold Medal in Software Engineering and
  led the team that built the university's mobile app for 20,000 students. Since then I've consulted on CRM and
  government apps, built a patient platform at LifeShape Clinic, and finished a Master of IT (Computer Science) at QUT
  with two Dean's Excellence Awards.`,
];

export const interests = [
  { title: "Sport", body: "Badminton, table tennis and cricket." },
  { title: "Community", body: "Treasurer of Queensland Soni Samaj." },
  { title: "Curiosity", body: "Hiking, landscape photography, space launches, quantum physics and films." },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  points: string[];
  stack: string[];
  // Slug of the matching entry in caseStudies, linked from the experience lists.
  caseStudy?: string;
};

export const experience: Experience[] = [
  {
    company: "Truckit",
    role: profile.currently.role,
    location: "Milton, QLD",
    start: "Oct 2024",
    end: "Present",
    summary: "Online freight marketplace connecting customers with transport providers.",
    points: [
      "Built the new homepage quote flow, where customers upload a photo and an LLM fills in the quote details. This halved the time it takes to get a quote and brought in 30% more listings.",
      "Run deployments and go-lives, review the team's code, and write and scope tickets for junior developers.",
      "Work with the project manager to plan and prioritise the next set of work.",
      "Integrated Instant Rates with a new pricing microservice, so customers see live prices instead of waiting for manual quotes.",
      "Built new 3D Secure (3DS) payment flows, updated existing payment workflows and fixed payment bugs in production.",
      "Work mostly on the backend across Laravel and an older custom PHP framework, with Angular changes when needed.",
      "Build features and fixes in the Truckit mobile app with Flutter, along with the backend changes they need.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Angular", "Flutter", "Dart", "Docker", "AWS", "Cursor"],
    caseStudy: "truckit-ai-quote",
  },
  {
    company: "Eviole",
    role: "Contract Software Engineer (part-time)",
    location: "Brisbane, QLD",
    start: "Apr 2026",
    end: "Present",
    summary: "Healthtech SaaS for clinics running weight-management programs.",
    points: [
      "Built the platform from scratch, solo: a web app where clinics run structured weight-management programs, with a member portal and a staff back office.",
      "Members move through their program period by period, read modules and library articles, and track weight, measurements and progress photos on charts.",
      "Built the staff side: user and enrollment management, a TipTap content editor with autosave, and PDF clinical progress reports.",
      "Built a partner REST API (v1 and v2) with token auth, rate limiting, request logs and OpenAPI docs, so clinic systems can create members and enrollments.",
      "Automated program progression with a scheduled job that handles pauses, stalled enrollments and completions, and stopped it from running twice at once.",
    ],
    stack: ["Laravel 13", "Inertia", "React", "TypeScript", "Tailwind", "MySQL", "Laravel Cloud"],
    caseStudy: "eviole-platform",
  },
  {
    company: "Shreeji Jewellers",
    role: "Sole Developer",
    location: "Fiji (remote)",
    start: "Apr 2025",
    end: "Present",
    summary: "Independent project: point of sale, back office and website for my family's jewellery store in Nadi.",
    points: [
      "Built the store's point-of-sale and back-office system solo. Staff use it on iPads for sales, laybuys, refunds, stock, customers, buying old gold, signatures and PDF invoices.",
      "Made sure a sale can't be saved twice or sell the same piece twice, even with dropped connections or two tills at once (idempotency keys, conditional updates, row locks). Money is stored in cents.",
      "Added ID scanning with Google Gemini. Staff photograph the seller's ID and the form fills itself in, with manual entry as a fallback.",
      "Built the dashboard, PDF and Excel reports, staff roles and an audit log, with Pest tests running in GitHub Actions and Playwright browser tests.",
      "Moved the store's website off Shopify to Next.js on Vercel. Opening hours and notices update from the admin system.",
    ],
    stack: ["Laravel 13", "React 19", "TypeScript", "Inertia", "Tailwind", "MySQL", "Laravel Cloud", "Next.js", "Vercel"],
    caseStudy: "shreeji-jewellers",
  },
  {
    company: "LifeShape Clinic",
    role: "Software Engineer",
    location: "Brisbane, QLD",
    start: "Apr 2023",
    end: "May 2024",
    points: [
      "Built the patient web portal and a Flutter app from scratch, working with marketing, HR and the CEO on what patients needed.",
      "Led the Health Track integration, connecting the clinic's systems to their medical platform through a secure REST API.",
    ],
    stack: ["JavaScript", "PHP", "WordPress", "Flutter", "Dart", "REST", "Cypress"],
    caseStudy: "eviole",
  },
  {
    company: "Solutions Studio",
    role: "Developer / Consultant",
    location: "Suva, Fiji",
    start: "Dec 2021",
    end: "Jun 2022",
    points: [
      "Built a property management and CRM web app for a real estate agency in Laravel and MySQL.",
      "Built a COVID-19 contact tracing app in Kotlin for the Government of Tonga.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Kotlin", "SQLite"],
  },
  {
    company: "The University of the South Pacific",
    role: "Lead Software Engineer",
    location: "Suva, Fiji",
    start: "Jun 2021",
    end: "Dec 2021",
    points: [
      "Led a Scrum team that shipped a student app, web portal and API used by 20,000 students each semester, two weeks early.",
      "Built the admin web app staff use to update app content.",
    ],
    stack: ["Flutter", "Laravel", "Firebase", "MySQL", "JWT"],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "USP Mobile App",
    context: "The University of the South Pacific",
    description:
      "Mobile app, web portal and API for 20,000+ students, with campus-security geolocation, offline mode and push notifications.",
    tags: ["Flutter", "Laravel", "Firebase"],
  },
  {
    title: "LLM Sentiment Analysis",
    context: "QUT research · Grade 7/7",
    description:
      "Fine-tuned BERT transformers to 89% accuracy on hydrogen-energy discourse, outperforming classical models that overfit.",
    tags: ["Python", "Hugging Face", "TensorFlow"],
    href: "https://github.com/KishenLodhia/Sentiment-Analysis-Hydrogen-Energy",
  },
  {
    title: "Toucan Health UX",
    context: "Mettlesome · Grade 7/7",
    description:
      "User research and a Figma redesign of a mood-tracking app, lifting satisfaction by 25% and earning a certificate of recognition.",
    tags: ["Figma", "Usability testing", "Research"],
  },
  {
    title: "Fitness Tracker",
    context: "QUT · Grade 7/7",
    description: "A React Native app with an Express and MySQL API for tracking water intake, steps and wellbeing.",
    tags: ["React Native", "Expo", "Express", "MySQL"],
    href: "https://github.com/KishenLodhia/fitness-app",
  },
  {
    title: "Weather App",
    context: "Side project",
    description: "A minimal Flutter weather app with location detection and live data from weatherapi.com.",
    tags: ["Flutter", "Dart", "REST"],
    href: "https://github.com/KishenLodhia/weather_app_flutter",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Dart", "PHP", "C#", "Java"] },
  { group: "Frontend", items: ["React", "Angular", "Next.js", "Inertia.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Expo"] },
  { group: "Backend", items: ["Laravel", "Node.js", "Express", "FastAPI", "REST APIs (OpenAPI)", "API auth and rate limiting", "Payments (3DS)"] },
  { group: "Data & Cloud", items: ["MySQL", "Transactions and row locks", "Idempotency", "MongoDB", "Firebase", "AWS (EC2, ALB, S3, Amplify, Route 53)", "Laravel Cloud", "Vercel", "Docker", "Serverless", "Sentry"] },
  { group: "AI & ML", items: ["LLM integration", "Laravel AI SDK", "Gemini", "Hugging Face", "scikit-learn", "Pandas", "NumPy", "TensorFlow"] },
  { group: "Practice", items: ["Pest", "PHPUnit", "Playwright", "Cypress", "GitHub Actions (CI/CD)", "Code review", "Git", "Agile / Scrum", "Cursor", "Claude Code", "Figma", "Jira"] },
];

export const education = [
  {
    school: "Queensland University of Technology",
    short: "QUT",
    degree: "Master of IT (Computer Science)",
    start: "Jul 2022",
    end: "Jul 2024",
    gpa: "6.4 / 7",
    awards: ["2× Dean's Excellence Award", "International Merit Scholarship"],
  },
  {
    school: "The University of the South Pacific",
    short: "USP",
    degree: "Bachelor of Software Engineering",
    start: "Jan 2018",
    end: "Dec 2021",
    gpa: "4.1 / 4.5",
    awards: ["Gold Medal, Most Outstanding SE Graduate", "Outstanding Discipline Award, Computer Science"],
  },
];

export type Highlight = {
  title: string;
  caption: string;
  image: string;
  // Lightweight preview for the grid; the full image only loads in the lightbox.
  thumb?: string;
};

export const highlights: Highlight[] = [
  {
    title: "Gold Medal",
    caption: "Most outstanding Software Engineering graduate at USP.",
    image: goldMedal,
  },
  {
    title: "Featured by USP",
    caption: "Featured on the university's official LinkedIn page.",
    image: linkedInFeatured,
  },
  {
    title: "USP Mobile App",
    caption: "Mobile app, portal and API serving 20,000+ students.",
    image: uspApp,
  },
  {
    title: "Cafeteria Ordering System",
    caption: "My first large project: web and mobile ordering for USP's cafeteria, shipped in three releases.",
    image: cosApp,
  },
  {
    title: "Weather App",
    caption: "A minimal Flutter weather app with live location data.",
    image: weatherAppImage,
    thumb: weatherAppStill,
  },
];
