# AGENTS.md

## Project

Next.js 14 App Router portfolio site for Otito Ogene. Static site, no API routes, deployed on Netlify.

## Quick Commands

```bash
npm install        # install deps (package-lock.json present)
npm run dev        # dev server on localhost:3000
npm run build      # production build
npm run lint       # ESLint (next/core-web-vitals)
```

> **Package manager note:** `netlify.toml` references `pnpm run build` but the repo has `package-lock.json` (npm). Locally, use `npm`. If deploying to Netlify, either fix `netlify.toml` or switch to pnpm and commit `pnpm-lock.yaml`.

## Architecture

- **Single content source:** `src/data/resume.tsx` — the `DATA` object holds ALL portfolio content (name, bio, skills, work, projects, education, navbar links, socials, contact). Edit this file only to change site content.
- **Blog:** MDX files in `/content/` with YAML frontmatter (`title`, `publishedAt`, `summary`, optional `image`). Filename = URL slug. Blog utilities live in `src/data/blog.ts`.
- **Pages:** `src/app/page.tsx` (home), `src/app/blog/page.tsx` (listing), `src/app/blog/[slug]/page.tsx` (post), `src/app/contact/page.tsx`, `src/app/services/page.tsx`, plus `/privacy`, `/refund`, `/terms`.
- **Components:** `src/components/ui/` (shadcn/ui), `src/components/magicui/` (blur-fade reveals, word-rotate, border-beam, dot-pattern, scroll-progress, dock), `src/components/` (page-level components).
- **Path alias:** `@/*` → `src/*` (configured in `tsconfig.json`).

## Styling

- Tailwind CSS + shadcn/ui ("new-york" style, `components.json`).
- Dark mode: class-based via `next-themes`. Always check `dark:` variants.
- Use `cn()` from `@/lib/utils` to merge class names.
- Colors use HSL CSS variables (`--background`, `--primary`, etc.) — never hardcode hex.
- Animations use `BLUR_FADE_DELAY` constant in `src/app/page.tsx` — stagger by incrementing delay per section/item.

## Conventions

- All content lives in `DATA` in `src/data/resume.tsx`. Never hardcode text in page components.
- Blog posts: MDX in `/content/`, frontmatter required fields: `title`, `publishedAt`, `summary`.
- No env variables needed — the site is fully static with no backend.
- No tests or CI configured.
- TypeScript strict mode enabled — no `any` types.
