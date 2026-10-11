# Kishen Lodhia · Portfolio

Personal site and portfolio for [Kishen Lodhia](https://www.linkedin.com/in/kishenlodhia), a Brisbane-based software engineer.

## Stack

- **React 19** with **React Router 8**
- **Vite 8** and **TypeScript 6**
- **Tailwind CSS 4** (CSS-first config in `src/index.css`)
- **Radix UI** primitives, **lucide-react** and **react-icons**
- **Vercel Analytics**

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Landing page: hero, stats, selected work, experience and contact |
| `/about` | Background, working principles and interests |
| `/resume` | Full resume with a print-friendly "Save as PDF" layout |
| `/portfolio` | Live GitHub repositories with search and language filters |
| `/portfolio/:repoName` | Repository details and language breakdown |

## Editing content

All personal content (experience, projects, skills, education, highlights and socials) lives in
[`src/data/profile.ts`](src/data/profile.ts). Update that file and every page picks up the change.

GitHub data is fetched from the public GitHub API without a token, so no secrets ship in the client bundle.

## Development

Requires Node 22.22 or newer.

```bash
npm install
npm run dev      # start the dev server
npm run build    # typecheck and build to dist/
npm run lint     # ESLint
npm run format   # Prettier with Tailwind class sorting
```

## Deployment

Pushes to `main` deploy automatically on Vercel. `vercel.json` rewrites all routes to `index.html` for client-side routing.

## Licence

MIT. See [LICENSE](LICENSE).
