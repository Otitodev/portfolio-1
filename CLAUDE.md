# CLAUDE.md — AI Assistant Guide for portfolio-1

## Project Overview

**portfolio-1** is a personal portfolio website for Otito Ogene, a Python Backend Engineer specializing in AI Agents & Automation. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, it showcases work experience, projects, skills, and a technical blog.

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.33 (App Router) |
| Language | TypeScript 5.8.3 |
| UI Library | React 18.3.1 |
| Styling | Tailwind CSS 3.4.17 + shadcn/ui |
| Animation | Framer Motion 11, Motion 12 |
| Content | MDX (gray-matter + unified pipeline) |
| Syntax Highlighting | Shiki + rehype-pretty-code |
| Theme | next-themes (light/dark) |
| Analytics | Vercel Analytics |
| Deployment | Netlify |

## Project Structure

```
portfolio-1/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Homepage (hero, projects, work, education, skills, hackathons)
│   │   ├── layout.tsx           # Root layout (ThemeProvider, Navbar, Analytics)
│   │   ├── globals.css          # Global styles (Tailwind directives, CSS variables)
│   │   └── blog/
│   │       ├── page.tsx         # Blog listing page
│   │       └── [slug]/page.tsx  # Dynamic blog post page
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives (avatar, badge, button, card, input, etc.)
│   │   ├── magicui/             # Animation components (blur-fade, blur-fade-text, dock)
│   │   ├── navbar.tsx           # Fixed bottom dock navigation
│   │   ├── project-card.tsx     # Project showcase card
│   │   ├── resume-card.tsx      # Work/education card with expandable description
│   │   ├── hackathon-card.tsx   # Hackathon timeline card
│   │   ├── contact-form.tsx     # Contact form (client-side only)
│   │   ├── mode-toggle.tsx      # Light/dark theme toggle
│   │   ├── theme-provider.tsx   # next-themes context wrapper
│   │   ├── icons.tsx            # SVG icon components (GitHub, LinkedIn, X, Email)
│   │   └── mdx.tsx              # MDX HTML renderer
│   ├── data/
│   │   ├── resume.tsx           # Central DATA object — all portfolio content lives here
│   │   └── blog.ts              # Blog post parsing utilities
│   └── lib/
│       └── utils.ts             # Utility functions (cn, formatDate)
├── content/                     # Blog posts in MDX format
├── public/                      # Static assets (images, GIFs, logos)
├── tailwind.config.ts           # Tailwind theme with CSS variable color system
├── next.config.mjs              # Minimal Next.js config (React strict mode)
├── tsconfig.json                # TypeScript config (strict mode, @/* path alias)
├── components.json              # shadcn/ui config (new-york style, neutral base)
├── .eslintrc.json               # ESLint (next/core-web-vitals)
└── netlify.toml                 # Netlify build config
```

## Development Workflows

### Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

> **Note:** The project uses **npm** (not pnpm). `netlify.toml` still references pnpm but local development uses npm. Use `npm` for all commands.

### Path Aliases

The `@/*` alias maps to `src/*`:

```typescript
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
```

## Key Conventions

### 1. All Content Comes from `src/data/resume.tsx`

This is the **single source of truth** for all portfolio content. To update any text, links, projects, skills, or experience — edit `DATA` in this file only. Do not hardcode content in page components.

```typescript
// src/data/resume.tsx
export const DATA = {
  name: "Otito Ogene",
  skills: ["Python", "FastAPI", ...],
  work: [{ company, title, start, end, description, ... }],
  projects: [{ title, description, technologies, links, ... }],
  hackathons: [{ title, dates, description, ... }],
  // ...
};
```

### 2. Styling Conventions

- **Tailwind CSS only** — no inline styles, no CSS modules
- Use the `cn()` helper from `@/lib/utils` to merge class names:
  ```typescript
  import { cn } from "@/lib/utils";
  className={cn("base-class", conditional && "extra-class")}
  ```
- Colors use **HSL CSS variables** (`--background`, `--foreground`, `--primary`, etc.) — avoid hardcoding hex values
- Dark mode is **class-based**: the `dark` class on `<html>` triggers dark styles
- shadcn/ui uses the **"new-york"** style variant

### 3. Component Patterns

- **shadcn/ui components** live in `src/components/ui/` — these are copied in (not tree-shaken from a package) and can be edited directly
- **Animation**: Use `BlurFade` from `@/components/magicui/blur-fade` for staggered entrance animations. Increment `delay` by `0.05` per item:
  ```tsx
  <BlurFade delay={BLUR_FADE_DELAY * 2}>...</BlurFade>
  ```
- **Resume/Work cards**: Use `ResumeCard` with `altText`, `title`, `subtitle`, `period`, `description`, and optional expandable content via Framer Motion
- **Project cards**: Use `ProjectCard` with `href`, `title`, `dates`, `image`/`video`, `tags` (technologies), and `links` array

### 4. Blog Posts

Blog posts are **MDX files** in `/content` with YAML frontmatter:

```mdx
---
title: "Post Title"
publishedAt: "2025-11-27"
summary: "Short description for SEO and listing"
image: "/optional-image.png"
---

Content here with **markdown** and `code blocks`.
```

- Filenames become the URL slug: `content/my-post.mdx` → `/blog/my-post`
- Code blocks get syntax highlighting via Shiki
- GitHub Flavored Markdown (tables, strikethrough, etc.) is supported
- Blog metadata is generated server-side for Open Graph / Twitter cards

### 5. TypeScript

- **Strict mode enabled** — all code must be type-safe
- Prefer explicit types over `any`
- React components use `React.FC` pattern or inline function declarations with typed props
- Next.js `Metadata` type from `"next"` is used for page metadata

### 6. Icons

Icons are defined in `src/components/icons.tsx` as named SVG components. The navbar uses these alongside Lucide React icons. For new social/brand icons, add them to `icons.tsx`.

## Data Models

Key TypeScript shapes inferred from `src/data/resume.tsx`:

```typescript
// Work Experience
{
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

// Project
{
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
  video?: string;
}

// Hackathon
{
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: { title: string; href: string; icon: React.ReactNode }[];
}

// Blog Post (from gray-matter frontmatter)
{
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}
```

## Architecture Decisions

### Static-First

- No API routes — this is a fully static site
- Blog posts are parsed at build time via `generateStaticParams()`
- All data is statically typed and bundled at build time

### Contact Form

The `ContactForm` component (`src/components/contact-form.tsx`) is **client-side only** and not yet wired to a backend. It's a UI placeholder — integration with a form service (Formspree, Resend, etc.) is still needed.

### Deployment

- **Netlify** is the deployment target (`netlify.toml`)
- Build output is `.next` (Netlify Next.js plugin handles SSR)
- Vercel Analytics is included but the site is hosted on Netlify — this works in production without Vercel hosting

## Common Tasks

### Add a new project

Edit `DATA.projects` in `src/data/resume.tsx`. Add project images to `public/`.

### Add a new blog post

Create a new `.mdx` file in `/content/` with the required frontmatter fields (`title`, `publishedAt`, `summary`).

### Add a new skill

Add the skill string to `DATA.skills` array in `src/data/resume.tsx`.

### Update work experience

Edit `DATA.work` array entries in `src/data/resume.tsx`. Logo images go in `public/`.

### Add a shadcn/ui component

Follow the shadcn/ui "new-york" style and place it in `src/components/ui/`. The `components.json` config governs aliases and style defaults.

### Modify navigation

Edit `DATA.navbar` (for page links) or the social links in `DATA.contact.social` in `src/data/resume.tsx`. The `Navbar` component reads from these arrays automatically.

## Linting & Code Quality

- ESLint config extends `next/core-web-vitals` — run `npm run lint` before committing
- No Prettier config is present; maintain consistent formatting manually (2-space indentation, single quotes in TypeScript)
- TypeScript strict mode will catch type errors at build time

## Notes for AI Assistants

1. **Never hardcode content** — all portfolio text, links, and data belong in `src/data/resume.tsx`
2. **Prefer editing existing components** over creating new ones
3. **Test the build** with `npm run build` after making changes to catch type errors
4. **Dark mode matters** — always check that new UI elements look correct in both light and dark themes using Tailwind's `dark:` variants
5. **Animation delays** use the `BLUR_FADE_DELAY` constant defined at the top of `src/app/page.tsx` — maintain the staggered pattern when adding new sections
6. **The contact form needs backend integration** — do not mark it as "complete" without a form submission endpoint
