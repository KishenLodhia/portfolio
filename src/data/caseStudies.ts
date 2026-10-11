// In-depth write-ups for flagship projects, shown on the landing page and at /work/:slug.
import shreejiWeb from "@/assets/shreeji-web.webp";
import shreejiCollections from "@/assets/shreeji-collections.webp";
import shreejiLogo from "@/assets/shreeji-logo.webp";
import evioleLogo from "@/assets/eviole-logo.webp";

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  period: string;
  role: string;
  tagline: string;
  summary: string;
  // Which illustrated preview to render (see CaseVisual).
  visual: "truckit" | "shreeji" | "eviole";
  logo?: string;
  gallery?: { src: string; caption: string }[];
  stats: { value: string; label: string }[];
  // Grouped feature write-ups; each part is one product or phase of the work.
  parts: { title: string; period?: string; body: string; features: string[]; stack: string[] }[];
  timeline?: { date: string; text: string }[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "truckit-ai-quote",
    name: "AI Photo-to-Quote",
    client: "Truckit.net",
    period: "2024 — Present",
    role: "Idea, product and engineering",
    tagline: "Snap a photo. Get a quote. No tape measure.",
    summary:
      "Truckit is an online marketplace connecting people who need things moved with transport providers. I came up with an AI-powered homepage that looks at customer photos, works out the item's measurements, and prefills the Get a Quote and Create Listing forms, turning the slowest part of booking a move into a single upload.",
    visual: "truckit",
    stats: [
      { value: "Photo → form", label: "Measurements inferred from images" },
      { value: "2 flows", label: "Get a Quote and Create Listing prefilled" },
      { value: "Owner", label: "Marketplace and provider app" },
    ],
    parts: [
      {
        title: "AI-powered homepage",
        body: "The feature was my idea. Customers upload photos of what they need moved, and AI estimates dimensions and fills in the details that used to be typed by hand, so customers get to a quote faster and providers get more accurate listings.",
        features: [
          "Measurement estimation from customer photos",
          "Prefilled Get a Quote form",
          "Prefilled Create Listing form",
          "Built into the marketplace homepage experience",
        ],
        stack: ["Laravel", "PHP", "Angular", "MySQL", "AWS", "Docker"],
      },
      {
        title: "Marketplace and provider app",
        body: "Beyond the AI work, I look after Truckit's core marketplace and the provider app that transport providers use day to day, shipping features in close collaboration with Product, Operations, the COO and the CEO.",
        features: [
          "End-to-end feature delivery across the marketplace",
          "Ownership of the Flutter provider app",
          "Roadmap shaping with Product, Ops and leadership",
          "AI-assisted development workflow with Cursor",
        ],
        stack: ["Flutter", "Dart", "Laravel", "Angular", "Cursor"],
      },
    ],
    links: [{ label: "Visit Truckit", href: "https://www.truckit.net" }],
  },
  {
    slug: "shreeji-jewellers",
    name: "Shreeji Jewellers Platform",
    client: "Shreeji Jewellers · Nadi, Fiji",
    period: "2023 — Present",
    role: "Sole developer",
    tagline: "A point of sale, back office and website for a 22-year-old family jeweller.",
    summary:
      "Shreeji Jewellers is my family's 22ct gold and diamond jewellery store on Main Street, Nadi. I've built its software end to end: a full point-of-sale and back-office system the staff run the shop on every day, and a new public website that replaced their Shopify store.",
    visual: "shreeji",
    logo: shreejiLogo,
    gallery: [
      { src: shreejiWeb, caption: "The new public website, built with Next.js." },
      { src: shreejiCollections, caption: "Collection pages for 22ct gold and diamond jewellery." },
    ],
    stats: [
      { value: "240+", label: "Commits on the POS, all mine" },
      { value: "45k", label: "Lines of PHP and TypeScript" },
      { value: "100+", label: "Routes across POS and back office" },
      { value: "7k", label: "Lines of automated tests" },
    ],
    parts: [
      {
        title: "Point of sale and back office",
        period: "2025 — Present",
        body: "A web app staff use on an iPad at the counter and managers use on a laptop. It handles every sale, layby and refund in the shop, with signed PDF paperwork and a full audit trail.",
        features: [
          "POS for tagged stock, counted piles, new stock and repairs",
          "Split tender, trade-in credit and inclusive VAT",
          "Tourist VAT Refund (TVRS) flagging",
          "Laybuy: open, pay, extend, change, cancel and complete",
          "Refunds and changes workflow",
          "PDF invoices, statements and receipts with on-screen signatures",
          "Stock catalogue, bulk stock, customers and staff records",
          "Dashboard, reports and Excel exports",
          "Admin and staff roles, audit log and error logs",
          "⌘K global search with a natural-language query parser",
          "Queued sale notifications by email",
          "In-app user manual and staff cheat sheet",
        ],
        stack: ["Laravel 13", "PHP 8.3", "Inertia", "React 19", "TypeScript", "Tailwind 4", "MySQL", "S3", "Laravel Cloud", "Pest", "GitHub Actions"],
      },
      {
        title: "Public website",
        period: "2026",
        body: "A fast, fully static website that replaced the store's Shopify site, built for locals, tourists from Denarau and Fijians living overseas. There's no online checkout; it's designed to bring people into the shop.",
        features: [
          "Collection and piece pages with ~70 product photos",
          "Journal with ~28 articles and categories",
          "Bridal enquiry form and ring-size guide",
          "Seasonal Diwali campaign page with automatic banner",
          "Live open-now status",
          "Local SEO pages, schema.org data, sitemap and llms.txt",
          "308 redirects preserving the old Shopify URLs",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Vercel"],
      },
    ],
    timeline: [
      { date: "2013", text: "Started helping in the family business, later building its first website and a 14K+ social following." },
      { date: "2023", text: "Analysed sales and tourist VAT refund data in Python to understand the business." },
      { date: "Apr 2025", text: "Began building the point-of-sale and back-office system." },
      { date: "Mar 2026", text: "Biggest month of development, with 70 commits." },
      { date: "Oct 2026", text: "Built the new Next.js website, live on Vercel, to replace Shopify." },
    ],
    links: [{ label: "Visit the website", href: "https://shreeji-web.vercel.app" }],
  },
  {
    slug: "eviole",
    name: "Eviole",
    client: "LifeShape Clinic · Brisbane",
    period: "2023 — 2026",
    role: "Lead engineer",
    tagline: "A digital program supporting patients on weight-loss medication.",
    summary:
      "Eviole is LifeShape Clinic's online weight-loss program. I built the patient experience across web and mobile, the APIs behind it, and the integration with partner health systems. Over three years it grew from a WordPress portal and Flutter app into a Laravel platform with a dedicated partner API.",
    visual: "eviole",
    logo: evioleLogo,
    stats: [
      { value: "60%", label: "Fewer system errors after the partner API" },
      { value: "40%", label: "Faster testing with Cypress E2E" },
      { value: "20%", label: "Lower latency between app and portal" },
    ],
    parts: [
      {
        title: "Patient mobile app",
        period: "2023 — 2024",
        body: "A Flutter companion app built from the ground up after UX research with Marketing, HR and the CEO, reaching full parity with the web portal.",
        features: [
          "Onboarding and secure JWT login",
          "Dashboard with skeleton loading states",
          "Weight, waist and body measurement tracking with charts",
          "Progress photos with on-device compression",
          "Weekly check-ins and program and medication details",
          "Educational library and resources",
          "Profile editing, dark mode and deep links",
        ],
        stack: ["Flutter", "Dart", "Provider", "Dio", "fl_chart", "Secure storage"],
      },
      {
        title: "Web portal, APIs and testing",
        period: "2023 — 2024",
        body: "A hybrid web platform built on WordPress, with a custom REST API plugin that powers the mobile app, plus a secure integration with Health Track negotiated with its engineers.",
        features: [
          "Custom WordPress REST API for the mobile app",
          "Secure Health Track integration",
          "Cypress end-to-end suite for login, profile and tracking",
        ],
        stack: ["PHP", "WordPress", "JavaScript", "MySQL", "Cypress"],
      },
      {
        title: "Eviole v2 platform and Partner API",
        period: "2026",
        body: "A new Laravel web app with a versioned partner API, so external practice-management systems can sync patients and enrolments and pull measurement data back.",
        features: [
          "Bearer-authenticated /api/v2/partner endpoints",
          "User and enrolment upserts keyed by external ID",
          "Document uploads per enrolment",
          "Bulk current-period updates",
          "Date-range measurement exports",
        ],
        stack: ["Laravel", "PHP", "MySQL", "Laravel Cloud", "REST"],
      },
    ],
    timeline: [
      { date: "Jun 2023", text: "First commit on the Flutter app: login, profile and resources." },
      { date: "Aug 2023", text: "Progress photos, measurement tracking and charts." },
      { date: "Dec 2023", text: "Migrated to a new API layer and redesigned the UI." },
      { date: "Mar 2024", text: "Added the Cypress E2E suite and moved the app onto production APIs." },
      { date: "2026", text: "Eviole v2 on Laravel with the Partner API." },
    ],
    links: [{ label: "Visit Eviole", href: "https://eviole.com.au" }],
  },
];
