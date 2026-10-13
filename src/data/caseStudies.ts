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
  visual: "truckit" | "shreeji" | "eviole" | "eviole-platform";
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
    period: "2023 — 2024",
    role: "Lead engineer",
    tagline: "A digital program supporting patients on weight-loss medication.",
    summary:
      "Eviole is LifeShape Clinic's online weight-management program. I built the first generation of its patient experience: a Flutter mobile app, the WordPress portal and custom APIs behind it, and a secure integration with partner health systems, backed by an end-to-end test suite.",
    visual: "eviole",
    logo: evioleLogo,
    stats: [
      { value: "60%", label: "Fewer system errors after the Health Track API" },
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
    ],
    timeline: [
      { date: "Jun 2023", text: "First commit on the Flutter app: login, profile and resources." },
      { date: "Aug 2023", text: "Progress photos, measurement tracking and charts." },
      { date: "Dec 2023", text: "Migrated to a new API layer and redesigned the UI." },
      { date: "Mar 2024", text: "Added the Cypress E2E suite and moved the app onto production APIs." },
    ],
    links: [{ label: "Visit Eviole", href: "https://eviole.com.au" }],
  },
  {
    slug: "eviole-platform",
    name: "Eviole Platform",
    client: "LifeShape Clinic · Brisbane",
    period: "2026",
    role: "Lead engineer, largely solo",
    tagline: "A program platform for clinics, with a staff back office and partner API.",
    summary:
      "Eviole Platform runs structured weight-management programs for clinics. Members are enrolled in programs made of periods, content unlocks as they progress, and they log their weight, measurements, photos and medication. Clinic staff manage everything from a back office with clinical reporting and a rich content editor, and partner practice-management systems integrate through a versioned REST API. I designed and built it end to end, largely solo, on Laravel.",
    visual: "eviole-platform",
    logo: evioleLogo,
    stats: [
      { value: "270+", label: "Commits, designed and built largely solo" },
      { value: "400+", label: "Automated tests" },
      { value: "140+", label: "Screens across member and staff apps" },
      { value: "45", label: "Database migrations" },
    ],
    parts: [
      {
        title: "Member experience",
        body: "Members are enrolled in programs made of periods. Content unlocks as they move through each step, and everything they need sits on one dashboard.",
        groups: [
          {
            title: "Dashboard and modules",
            items: [
              "Dashboard showing the current program step and its content",
              "Switch between enrollments when a member is on more than one program",
              "Learning modules scoped to each program, unlocking period by period",
              "Custom plans tab for documents the care team adds for the member",
              "Read-only access to modules and library once a program is complete",
            ],
          },
          {
            title: "Library",
            items: [
              "Reference articles with multi-category filtering and debounced search",
              "Articles visible to everyone, unlocked at a program step, or link-only",
              "Period badges on articles that unlock later in the program",
              "Back navigation that returns to the module or article it was opened from",
              "Navigation context that survives refresh and open-in-new-tab",
            ],
          },
          {
            title: "Tracking and progress",
            items: [
              "One check-in per program step: weight, body measurements and medication",
              "Optional front and side progress photos",
              "Medication and dose picked from a clinic-managed catalogue",
              "Progress chart across the whole program",
              "Documents, photos and tiles served through signed, authorised links",
            ],
          },
        ],
        stack: ["Laravel 13", "Inertia", "React", "TypeScript", "Tailwind 4", "shadcn", "Recharts"],
      },
      {
        title: "Enrollment engine",
        body: "The engine that moves members through their program automatically. Each step change runs on a schedule, and staff stay in control of it with a full audit trail.",
        groups: [
          {
            title: "Progression",
            items: [
              "Scheduled job that advances due enrollments every minute",
              "Each advance runs in its own locked transaction, on a single server",
              "Configurable rollover time and timezone for when steps change",
              "Staff can pause progression or override the next step date",
              "Event trail of every advance, override and automatic completion",
            ],
          },
          {
            title: "Completion and recovery",
            items: [
              "Staff can complete an enrollment, or it completes when its end date passes",
              "Clinic-managed enrollments complete after a full cycle on the final step",
              "Completion locks learning content but keeps tracking and custom plans open",
              "Reopening an enrollment restarts the final-step clock",
              "Stalled enrollments resume automatically when a program gains more steps",
              "Safety-net check on every scheduler run as well as on save",
            ],
          },
        ],
        stack: ["Laravel Scheduler", "MySQL", "Laravel Cloud"],
      },
      {
        title: "Staff back office",
        body: "A back office where clinic staff manage members, enrollments, content and reporting, with contextual help built into every area.",
        groups: [
          {
            title: "Enrollment hub",
            items: [
              "One page per enrollment with an overview band",
              "Current step, goal and latest weight, last check-in and next progression",
              "Program steps, weight chart and documents side by side",
              "Merged activity feed of member check-ins, staff edits and automated advances",
              "Staff can create, correct or delete tracking with before-and-after auditing",
            ],
          },
          {
            title: "Clinical progress report",
            items: [
              "Clinic-branded PDF letter for a member's referring GP",
              "Change from baseline, % of starting weight, lowest weight and weekly rate",
              "BMI with its WHO category and a weight-trend chart",
              "Girths plus waist-to-height and waist-to-hip ratios",
              "Optional medication timeline, history, photos and clinician comments",
              "Generated on demand and streamed for download, never stored",
            ],
          },
          {
            title: "Users and content management",
            items: [
              "User directory with inline filters",
              "Account creation with welcome or set-password emails",
              "Verification and invite actions",
              "Editors for programs, modules, library, media and site settings",
              "Drag-to-reorder FAQs, medication and dose catalogue, privacy policy",
            ],
          },
          {
            title: "Built-in help",
            items: [
              "A guide page for each area of the console, written in Markdown",
              "Guides filtered by the viewer's role",
              "Contextual help tags whose popover text is read from the guide itself",
            ],
          },
        ],
        stack: ["Laravel", "Inertia", "React", "TypeScript", "Base UI", "DomPDF", "Recharts"],
      },
      {
        title: "Content editor",
        body: "A guided TipTap editor so clinical and marketing staff can write rich, consistent articles and modules without touching code.",
        groups: [
          {
            title: "Writing",
            items: [
              "Resizable Settings and Write layout with an edit/preview toggle",
              "Full toolbar: tables, alignment, highlight, sub and superscript, YouTube",
              "Custom blocks: callout, pull quote, checklist and section break",
              "Embedded video, audio and document players",
              "Variant-based styling so blocks stay on-brand",
            ],
          },
          {
            title: "Workflow and safety",
            items: [
              "Autosave after a short pause, including on published content",
              "Save status in the top bar, with pending saves flushed before preview",
              "Inline library cards edited in place, linked by stable ID so they never go stale",
              "Right-click duplicate of any module or article as an unpublished draft",
              "Server- and client-side sanitisation of all authored HTML",
            ],
          },
        ],
        stack: ["TipTap 3", "React", "TypeScript", "HTMLPurifier", "DOMPurify"],
      },
      {
        title: "Partner API and integrations",
        body: "A versioned REST API that lets partner practice-management systems sync members and enrollments and pull measurement data back, replacing manual double entry.",
        groups: [
          {
            title: "Partner API",
            items: [
              "Two API versions running side by side",
              "Token authentication with per-partner rate limits",
              "Every request and response logged for support and auditing",
              "Partner-owned external IDs for users and enrollments",
              "Strict full and partial update semantics",
              "Bulk current-period updates, document upload and measurement export",
            ],
          },
          {
            title: "Tooling and integrations",
            items: [
              "OpenAPI documentation, visible to admins only",
              "Admins issue and revoke partner tokens from the console",
              "Browsable partner request log",
              "Secured enquiry webhook for the marketing website, with validation and rate limits",
            ],
          },
        ],
        stack: ["Laravel Sanctum", "REST", "OpenAPI", "Swagger", "Scramble"],
      },
      {
        title: "Email, security and governance",
        body: "Health data needs careful handling, so security, auditing and communication were designed in from the start rather than added later.",
        groups: [
          {
            title: "Transactional email",
            items: [
              "Welcome, set-password, enrollment started, new content and new document emails",
              "Written in the clinic's voice and signed with its trading name from settings",
              "Every send logged as sent, blocked or failed, with tokens redacted",
              "Send log browsable by staff and pruned automatically",
              "Allow list that stops dev and staging from emailing real patients",
            ],
          },
          {
            title: "Security and governance",
            items: [
              "Member, staff and admin roles enforced by both middleware and policies",
              "No public self-registration, and inactive users are signed out automatically",
              "Health data on private storage, served only through signed routes",
              "User audits, activity log and progression events as layered audit trails",
              "Architecture notes, decision records, product ground truth and a domain glossary in the repo",
            ],
          },
        ],
        stack: ["Resend", "Spatie Permission", "Spatie Activity Log", "S3"],
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
        title: "Navigation that remembers",
        body: "Opening an article from a module or another article keeps its context, so Back always returns to the right place, even after a refresh.",
      },
      {
        title: "Safe by default for patients",
        body: "Non-production environments can't email real patients, and every send is logged with sensitive tokens redacted.",
      },
      {
        title: "Documented decisions",
        body: "Architecture notes, decision records and a domain glossary live alongside the code, with AI-assisted work run as staged spec, review and approval steps.",
      },
    ],
    links: [{ label: "Visit Eviole", href: "https://eviole.com.au" }],
  },
];
