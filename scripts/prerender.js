// Renders every static route to HTML after `vite build`, so crawlers and link previews
// get the page text and per-page meta tags without running JavaScript.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssr = path.join(root, "dist-ssr");

const { render, pages, renderHead } = await import(
  pathToFileURL(path.join(ssr, "entry-server.js")).href
);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

const head = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
const mount = '<div id="root"></div>';
if (!head.test(template) || !template.includes(mount))
  throw new Error("index.html is missing the seo markers or #root");

// Routes that can't be prerendered (GitHub repo pages, 404s) fall back to the empty shell.
await fs.writeFile(path.join(dist, "spa.html"), template);

for (const page of pages) {
  const html = template
    .replace(
      head,
      () => `<!-- seo:start -->\n    ${renderHead(page)}\n    <!-- seo:end -->`,
    )
    .replace(mount, () => `<div id="root">${render(page.path)}</div>`);
  const file = path.join(
    dist,
    page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`,
  );
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
  console.log(`prerendered ${page.path}`);
}

await fs.rm(ssr, { recursive: true, force: true });
