// Per-route <head> tags, written into each prerendered page by scripts/prerender.js.
import { caseStudies } from "@/data/caseStudies";

export const SITE_URL = "https://kishen-lodhia.vercel.app";
const OG_IMAGE = {
  url: `${SITE_URL}/kishen.png`,
  width: 500,
  height: 500,
  alt: "Kishen Lodhia",
};

export type PageMeta = { path: string; title: string; description: string };

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "Kishen Lodhia · Software Engineer",
    description:
      "Kishen Lodhia is a Brisbane-based software engineer building web and mobile products end to end.",
  },
  {
    path: "/about",
    title: "About · Kishen Lodhia",
    description:
      "Kishen Lodhia is a Brisbane-based full-stack engineer working on marketplace, payments and LLM features at Truckit, with solo-built healthtech and POS products.",
  },
  {
    path: "/resume",
    title: "Resume · Kishen Lodhia",
    description:
      "Experience, projects, skills and education of Kishen Lodhia, a Brisbane-based full-stack engineer.",
  },
  {
    path: "/portfolio",
    title: "GitHub · Kishen Lodhia",
    description: "Public repositories and side projects by Kishen Lodhia.",
  },
  ...caseStudies.map((study) => ({
    path: `/work/${study.slug}`,
    title: `${study.name} · Kishen Lodhia`,
    description: study.tagline,
  })),
];

const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const renderHead = ({ path, title, description }: PageMeta) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const tags: [string, string, string][] = [
    ["name", "description", description],
    ["property", "og:type", "website"],
    ["property", "og:site_name", "Kishen Lodhia"],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:url", url],
    ["property", "og:image", OG_IMAGE.url],
    ["property", "og:image:width", String(OG_IMAGE.width)],
    ["property", "og:image:height", String(OG_IMAGE.height)],
    ["property", "og:image:alt", OG_IMAGE.alt],
    ["name", "twitter:card", "summary"],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:image", OG_IMAGE.url],
  ];
  return [
    `<title>${escape(title)}</title>`,
    `<link rel="canonical" href="${escape(url)}" />`,
    ...tags.map(
      ([attr, key, value]) =>
        `<meta ${attr}="${key}" content="${escape(value)}" />`,
    ),
  ].join("\n    ");
};
