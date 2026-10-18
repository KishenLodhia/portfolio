import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.tsx";

export { pages, renderHead } from "./seo.ts";

// Renders one route to HTML for scripts/prerender.js.
export const render = (url: string) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
