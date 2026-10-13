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
  // Larger parts split their features into titled groups instead of one flat list.
  parts: {
    title: string;
    period?: string;
    body: string;
    features?: string[];
    groups?: { title: string; items: string[] }[];
    stack: string[];
  }[];
  highlights?: { title: string; body: string }[];
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
      "Shreeji Jewellers is my family's 22ct gold and diamond jewellery store on Main Street, Nadi. I've built its software end to end: a point-of-sale and back-office system that replaced paper tag books, handwritten laybuy cards and separate invoices, and a new public website, fed live from that system, that replaced their Shopify store. One sale at the counter records the customer, pieces and payment, updates stock and produces the signed paperwork in a single step.",
    visual: "shreeji",
    logo: shreejiLogo,
    gallery: [
      { src: shreejiWeb, caption: "The new public website, built with Next.js." },
      { src: shreejiCollections, caption: "Collection pages for 22ct gold and diamond jewellery." },
    ],
    stats: [
      { value: "250+", label: "Commits on the POS, all mine" },
      { value: "300+", label: "Automated tests, run in CI" },
      { value: "39", label: "Screens across till and back office" },
      { value: "15+", label: "PDF reports for managers" },
    ],
    parts: [
      {
        title: "Point of sale and back office",
        period: "2025 — Present",
        body: "A web app staff use on an iPad at the counter and managers use on a laptop in the office. Both groups are non-technical, so the till is built around large type, large tap targets and one obvious next step. It handles every sale, laybuy and refund in the shop, with signed PDF paperwork and a full audit trail.",
        groups: [
          {
            title: "Point of sale (iPad-first)",
            items: [
              "One scrolling checkout: customer, items, staff, payment, review and on-screen signatures",
              "Tagged stock, new stock, legacy tags registered on the spot, and repairs",
              "Price-lock step: every tag price is confirmed before checkout unlocks",
              "Split tender across shop-defined payment methods, validated to the cent",
              "Inclusive VAT with Tourist VAT Refund Scheme flagging",
              "Trade-in credit for old gold",
              "Walk-in customers matched by phone number to avoid duplicates",
              "Unfinished sales survive a refresh or iPad rotation",
              "Invoices print straight to AirPrint from iPad Safari",
            ],
          },
          {
            title: "Laybuy (hold now, pay over time)",
            items: [
              "Opening a laybuy reserves the pieces so they can't be sold twice",
              "Optional deposit and any number of signed, receipted payments",
              "Completes automatically into a sale when the balance reaches zero",
              "Swap pieces in or out, with fees and refunds worked out for staff",
              "Extend pay-off dates with history kept, or cancel piece by piece",
              "Laybuy book with status views, overdue filter and live search",
            ],
          },
          {
            title: "Stock",
            items: [
              "Tagged pieces or counted piles, chosen per category",
              "Collision-free stock codes, safe when several managers add stock at once",
              "Bulk add with pricing derived from weight",
              "Enforced status lifecycle from available through reserved to sold",
              "Stock-count reconciliation against the physical book",
            ],
          },
          {
            title: "Refunds",
            items: [
              "Partial or full refunds without ever changing the original invoice",
              "Per-piece choice to return to stock or write off",
              "Limits that stop the shop refunding more than was sold",
              "Signed refund receipts",
            ],
          },
          {
            title: "Manager dashboard and reports",
            items: [
              "Needs-attention queue: overdue laybuys, balances due soon, today's refunds",
              "Sales compared with a usual day and past periods, written as plain sentences",
              "Takings by method, product mix, staff sales, best customers and slow stock",
              "15+ PDF reports with Excel export",
            ],
          },
          {
            title: "Documents, search and help",
            items: [
              "Branded A5 invoices, statements and receipts with signatures",
              "⌘K command palette that understands phrases like \"laybuy statement\"",
              "In-app user guide and staff cheat sheet",
              "Managers edit the website's hours, holidays, banner and contact details",
            ],
          },
        ],
        stack: ["Laravel 13", "PHP 8.3", "Inertia", "React 19", "TypeScript", "Tailwind 4", "shadcn/Radix", "MySQL", "S3", "Laravel Cloud", "Pest", "GitHub Actions"],
      },
      {
        title: "Public website",
        period: "2026",
        body: "A content-only rebuild of the shop's Shopify store for locals, tourists from Denarau and Fijians overseas. Every page is prerendered static HTML, built to rank in Google and to be quoted accurately by AI assistants. There's no online checkout; it's designed to bring people into the shop.",
        groups: [
          {
            title: "Search and AI discoverability",
            items: [
              "Per-page metadata, canonical URLs and generated share images",
              "schema.org structured data for the store, FAQs, collections and articles",
              "llms.txt fact sheet for AI assistants, generated from the same data as the pages",
              "Sitemap with images, open to all crawlers",
              "Redirects for every old Shopify URL so rankings carry over",
              "Local landing pages for nearby towns and resorts",
            ],
          },
          {
            title: "Live data from the shop system",
            items: [
              "Hours, holidays, banner and contact details fed from the back office",
              "Changes show on the live site within seconds of a manager saving",
              "Validated section by section, falling back safely if the feed is bad",
              "Open-now badge computed in Fiji time, even on cached pages",
              "Dismissible announcement strip that reappears when the message changes",
            ],
          },
          {
            title: "Content and pages",
            items: [
              "28 Markdown articles with FAQs, migrated from Shopify by script",
              "Collection and piece pages with photo galleries",
              "Seasonal Diwali campaign page with a banner that switches on automatically",
              "Bridal viewing request form that works with no backend",
              "Printable ring and bangle size guide",
              "In-store tools: review QR page, printable counter card and link-in-bio page",
            ],
          },
          {
            title: "Measurement",
            items: [
              "One listener classifies every outbound click (call, Viber, directions, review)",
              "Calls and directions reported as conversions for an in-store business",
              "Every analytics integration is optional",
            ],
          },
        ],
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Markdown", "Vercel", "Vercel Analytics"],
      },
    ],
    highlights: [
      {
        title: "Money is never taken twice",
        body: "Every write from the till is idempotent. After a dropped connection the till checks whether the request already landed before retrying.",
      },
      {
        title: "Exact to the cent",
        body: "Money is stored and compared as integer cents throughout, so tender and balance checks never drift.",
      },
      {
        title: "Safe under concurrency",
        body: "Row locks and commit-time checks mean two tills can't sell the same piece or issue the same stock code.",
      },
      {
        title: "Audit that can't break a sale",
        body: "Who changed what is logged after each transaction commits, so a failed audit write never rolls back a sale.",
      },
      {
        title: "Role-based access",
        body: "Staff run the till and laybuys. Managers also get the dashboard, reports, catalogue, staff, settings and logs.",
      },
      {
        title: "The shop's own language",
        body: "A domain glossary and product spec live in the repo, so the UI uses the words the shop actually uses.",
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
      "Eviole is LifeShape Clinic's online weight-management program. Members are enrolled in structured programs whose content unlocks as they progress, and they log their weight, measurements, photos and medication along the way. Over three years it grew from a WordPress portal and Flutter app into a Laravel platform with a staff back office and a versioned partner API.",
    visual: "eviole",
    logo: evioleLogo,
    stats: [
      { value: "60%", label: "Fewer system errors after the partner API" },
      { value: "40%", label: "Faster testing with Cypress E2E" },
      { value: "400+", label: "Automated tests on the v2 platform" },
      { value: "140+", label: "Screens across member and staff apps" },
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
        body: "A new Laravel platform covering the member experience, an automated enrollment engine, a staff back office with a rich content editor, and a versioned API so partner practice-management systems can integrate directly.",
        groups: [
          {
            title: "Member experience",
            items: [
              "Dashboard showing the current program step and its content",
              "Learning modules that unlock as members progress",
              "Searchable library with category filters and step-based unlocking",
              "Back navigation that remembers where an article was opened from",
              "Weight, measurement, progress photo and medication tracking with charts",
              "Secure, authorised delivery of documents and images",
            ],
          },
          {
            title: "Enrollment engine",
            items: [
              "Scheduled, automatic progression through program steps",
              "Staff can pause progression or override the next step date",
              "Full event trail of every advance, override and completion",
              "Completion and reopening rules that keep tracking available",
              "Stalled enrollments resume automatically when a program is extended",
            ],
          },
          {
            title: "Staff back office",
            items: [
              "Enrollment hub with progress, weight chart, documents and merged activity",
              "Clinic-branded clinical progress report PDF for referring GPs",
              "Staff can correct member tracking, with field-level auditing",
              "User directory with invites, verification and welcome emails",
              "Editors for programs, modules, library, FAQs, media and medication catalogue",
              "In-console help guides, filtered by role, with contextual help tags",
            ],
          },
          {
            title: "Content editor (TipTap)",
            items: [
              "Guided article editor with live preview and a full formatting toolbar",
              "Custom blocks: callouts, pull quotes, checklists and media players",
              "Embedded library cards that never go stale when articles change",
              "Autosave with save status in the top bar",
              "One-click duplication of modules and articles as drafts",
              "Server- and client-side sanitisation of all authored HTML",
            ],
          },
          {
            title: "Partner API and integrations",
            items: [
              "Versioned REST API with token auth, rate limiting and request logging",
              "Partner-owned IDs, bulk updates, document upload and measurement export",
              "OpenAPI documentation and token management for admins",
              "Secured enquiry webhook from the marketing website",
            ],
          },
          {
            title: "Email, security and governance",
            items: [
              "Event-driven emails in the clinic's voice, with a searchable send log",
              "Safeguards so dev and staging can never email real patients",
              "Member, staff and admin roles enforced by middleware and policies",
              "Health data on private storage with signed routes and audit trails",
            ],
          },
        ],
        stack: ["Laravel 13", "PHP 8.3", "Inertia", "React", "TypeScript", "Tailwind 4", "shadcn", "TipTap", "Sanctum", "OpenAPI", "Laravel Cloud"],
      },
    ],
    highlights: [
      {
        title: "Reliable scheduled progression",
        body: "Enrollments advance inside locked transactions on a single server, with self-repair logic. I traced and fixed a production issue in this engine and recorded the decisions behind the fix.",
      },
      {
        title: "Clinical reports, never stored",
        body: "Progress letters with headline metrics, trend charts and body ratios are generated on demand and streamed for download only.",
      },
      {
        title: "Content that can't go stale",
        body: "Embedded cards reference articles by stable ID, so titles, images and links are rebuilt at render time.",
      },
      {
        title: "Documented decisions",
        body: "Architecture notes, decision records and a domain glossary live alongside the code, with AI-assisted work run as staged spec, review and approval steps.",
      },
    ],
    timeline: [
      { date: "Jun 2023", text: "First commit on the Flutter app: login, profile and resources." },
      { date: "Aug 2023", text: "Progress photos, measurement tracking and charts." },
      { date: "Dec 2023", text: "Migrated to a new API layer and redesigned the UI." },
      { date: "Mar 2024", text: "Added the Cypress E2E suite and moved the app onto production APIs." },
      { date: "2026", text: "Eviole v2 on Laravel with a staff back office and the Partner API." },
    ],
    links: [{ label: "Visit Eviole", href: "https://eviole.com.au" }],
  },
];
