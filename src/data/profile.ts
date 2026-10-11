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
  role: "Software Engineer",
  location: "Brisbane, Australia",
  email: "kishan1999lodhia@gmail.com",
  github: "KishenLodhia",
  tagline: "I build reliable web and mobile products end to end, from API design to the pixels people touch.",
  // TODO: confirm job title at Truckit.net.
  currently: { role: "Software Engineer", company: "Truckit.net", href: "https://www.truckit.net" },
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
  `I'm a Brisbane-based Software Engineer who likes turning messy business problems into software that feels simple.
  I've worked across the whole stack, designing APIs, building web portals and shipping Flutter and React Native apps,
  usually as the person who sits between engineering, product and the people who use the thing.`,
  `I started out at The University of the South Pacific, where I graduated with a Gold Medal in Software Engineering and
  led the team that built the university's mobile app for 20,000 students. Since then I've consulted on CRM and
  government apps, built a patient platform at LifeShape Clinic, and finished a Master of IT (Computer Science) at QUT
  with two Dean's Excellence Awards.`,
];

export const interests = [
  { title: "Sport", body: "Badminton, table tennis and cricket." },
  { title: "Outdoors", body: "Hiking and landscape photography." },
  { title: "Quantum", body: "Reading about wave-particle duality and entanglement." },
  { title: "Space", body: "Following exploration missions and launches." },
  { title: "Cinema", body: "Films across every genre and era." },
  { title: "Community", body: "Treasurer of Queensland Soni Samaj." },
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
};

export const experience: Experience[] = [
  {
    company: "Truckit.net",
    role: profile.currently.role,
    location: "Brisbane, QLD",
    // TODO: confirm start date and add highlights from this role.
    start: "Oct 2024",
    end: "Present",
    summary: "Engineering on Truckit's online freight and transport marketplace.",
    points: [],
    stack: [],
  },
  {
    company: "LifeShape Clinic",
    role: "Software Engineer",
    location: "Brisbane, QLD",
    start: "Apr 2023",
    end: "Jun 2024",
    points: [
      "Built a patient platform spanning web and mobile in collaboration with a leading medical system provider.",
      "Led negotiations with Health Track to build a secure API, cutting system errors by 60%.",
      "Introduced Cypress end-to-end testing, improving testing efficiency by over 40%.",
      "Designed the API between the mobile app and the portal, reducing latency by over 20%.",
      "Built the mobile app from the ground up after UX research with Marketing, HR and the CEO, reaching full parity with the web app.",
    ],
    stack: ["JavaScript", "PHP", "WordPress", "Flutter", "Dart", "REST", "Cypress"],
  },
  {
    company: "Solutions Studio",
    role: "Developer / Consultant",
    location: "Suva, Fiji",
    start: "Dec 2021",
    end: "Jun 2022",
    points: [
      "Engineered a property management and CRM web app for a real estate agency, removing 85% of manual tasks.",
      "Built a personal location diary for the Tongan Government's COVID-19 contact tracing app, improving tracing efficiency by 70%.",
      "Re-architected a Flutter app with the Provider pattern: 20% higher frame rate and 25% fewer API calls.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Kotlin", "SQLite", "Flutter"],
  },
  {
    company: "The University of the South Pacific",
    role: "Lead Software Engineer",
    location: "Suva, Fiji",
    start: "Jun 2021",
    end: "Dec 2021",
    points: [
      "Led a Scrum team that delivered two weeks ahead of schedule.",
      "Architected and launched a mobile app, web portal and API serving 20,000 students per semester.",
      "Built a content management portal that lifted staff throughput by over 30%.",
      "Designed a JWT-secured API that improved data synchronisation by 45%.",
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
    title: "Eviole Patient Platform",
    context: "LifeShape Clinic",
    description:
      "An all-in-one web and mobile platform supporting patients on weight-loss medication, with a secure integration into Health Track.",
    tags: ["Flutter", "PHP", "REST", "Cypress"],
  },
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
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Expo"] },
  { group: "Backend", items: ["Node.js", "Express", "FastAPI", "Laravel", "REST APIs"] },
  { group: "Data & Cloud", items: ["MySQL", "MongoDB", "Firebase", "AWS", "Serverless"] },
  { group: "ML", items: ["Hugging Face", "scikit-learn", "Pandas", "NumPy", "TensorFlow"] },
  { group: "Practice", items: ["Cypress", "Git", "CI/CD", "Agile / Scrum", "Figma", "Jira"] },
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
