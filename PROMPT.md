# Claude Code Prompt — Personal Portfolio Website

## Overview

Build a production-ready personal portfolio website for a software engineer with 3+ years of experience. The site will be deployed on **Railway** using a **Dockerfile**. The repo is brand new and currently only contains a `README.md`.

---

## Tech Stack

- **Framework:** React 18+ with React Router v6 (multi-page routing)
- **Build tool:** Vite
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Linting/Formatting:** ESLint + Prettier (pre-configured)
- **Deployment:** Dockerized with an Nginx production build served as static files

---

## Design Direction

**Dark mode / developer aesthetic.** Think terminal-inspired, monospace accents, deep dark backgrounds (#0a0a0a / #111111 range), with a single accent color (electric blue, green, or cyan — pick one and be consistent). The design should feel like a developer's personal space — clean, intentional, slightly techy without being gimmicky.

Key design principles:

- Generous whitespace and clear visual hierarchy
- Subtle animations on scroll and hover (no flashy transitions — keep it tasteful)
- Monospace font for headings or code-like accents (e.g. JetBrains Mono or Fira Code from Google Fonts), paired with a clean sans-serif for body text (e.g. Inter)
- A subtle grid or dot-pattern background texture on the hero section
- Responsive across mobile, tablet, and desktop breakpoints
- Smooth scroll behavior for any in-page anchor links
- A consistent component-level design system (buttons, cards, section headings all share a cohesive style)

---

## Site Structure & Pages

### 1. Navbar (persistent across all pages)

- Logo or name on the left (styled like a terminal prompt, e.g. `> yourname`)
- Navigation links on the right: Home, Experience, Projects, Contact
- Mobile: hamburger menu with a slide-in drawer
- Active page indicator (underline or accent highlight)
- Sticky on scroll with a subtle backdrop blur

### 2. Home / Hero Page (`/`)

- Large greeting: a headline like "Hi, I'm [Your Name]" with a subtitle/tagline like "Software Engineer · Building things for the web"
- A short 2-3 sentence "About Me" paragraph (placeholder text is fine — make it easy to find and edit in the code, clearly marked with comments like `{/* TODO: Replace with your bio */}`)
- A "View My Work" call-to-action button linking to the Projects page
- Tech stack icons or badges showing key skills (React, TypeScript, Node.js, Python, Docker, AWS — use placeholder set, clearly editable)
- Optional: a subtle animated terminal-style typing effect on the tagline

### 3. Experience Page (`/experience`)

- A vertical timeline layout showing work experience
- Each entry has: Job Title, Company Name, Date Range, and 2-4 bullet points describing the role
- Include 2-3 placeholder entries with realistic but clearly fake data, marked with `{/* TODO: Replace */}` comments
- Timeline should have a visual line/connector with dots or nodes at each entry
- Consider alternating left/right layout on desktop, stacked on mobile

### 4. Projects Page (`/projects`)

- A grid of project cards (2 columns on desktop, 1 on mobile)
- Each card has: Project Name, Short Description (1-2 sentences), Tech Tags (small badges), and two links — GitHub repo and Live Demo (both optional, conditionally rendered)
- Include 3-4 placeholder project entries
- All project data should live in a single data file (`src/data/projects.ts`) as a typed array so it's trivially easy to add/remove/edit projects later
- Cards should have a subtle hover effect (slight lift + border glow in accent color)

### 5. Contact Page (`/contact`)

- Social links section with icons: GitHub, LinkedIn, Email, Twitter/X (all placeholder URLs, easy to edit)
- Use a simple icon library like `react-icons` for social icons
- A short message like "Want to work together? Reach out!" above the links
- Optionally, a simple contact form with Name, Email, and Message fields — the form doesn't need a real backend, but wire it up with a `handleSubmit` function that logs to console and shows a success toast, with a `// TODO: Connect to backend or email service` comment
- The contact form should have basic client-side validation (required fields, email format)

### 6. Footer (persistent across all pages)

- Simple and minimal: "© 2025 [Your Name]. Built with React & Tailwind."
- Small row of social icon links (same as contact page)
- A "Back to top" link or button

---

## Project Structure

Follow a clean, scalable project structure:

```
src/
├── components/          # Reusable UI components
│   ├── layout/          # Navbar, Footer, PageWrapper
│   ├── ui/              # Button, Card, Badge, SectionHeading, etc.
│   └── sections/        # Page-specific composed sections (HeroSection, Timeline, ProjectGrid, etc.)
├── pages/               # Route-level page components (HomePage, ExperiencePage, ProjectsPage, ContactPage)
├── data/                # Static data files (projects.ts, experience.ts, socialLinks.ts)
├── hooks/               # Custom hooks if needed (e.g. useScrollToTop)
├── styles/              # Global styles, Tailwind config overrides
├── types/               # TypeScript interfaces/types
├── App.tsx              # Router setup
├── main.tsx             # Entry point
└── index.css            # Tailwind directives + global CSS
```

---

## Data Layer

All personal content should be centralized in `src/data/` as typed TypeScript files so I can edit my info in one place without touching components:

- `projects.ts` — array of project objects
- `experience.ts` — array of experience objects
- `socialLinks.ts` — array of social link objects
- `siteConfig.ts` — site-wide config: name, tagline, bio, meta description, etc.

Each file should export strongly-typed data using interfaces defined in `src/types/`.

---

## Code Quality Requirements

- **TypeScript:** Strict mode enabled. No `any` types. All props and data properly typed with interfaces.
- **Components:** Functional components only. Small, focused, and reusable. Each component in its own file.
- **Documentation:** JSDoc comments on all components describing their purpose and props. Inline comments for non-obvious logic. A comprehensive README.md explaining how to run, develop, and deploy.
- **Accessibility:** Semantic HTML (nav, main, section, article, footer). Proper ARIA labels on interactive elements. Keyboard navigable. Sufficient color contrast ratios for dark mode.
- **Performance:** Lazy load route-level pages with `React.lazy` + `Suspense`. Optimize images if any. Keep bundle size lean — no unnecessary dependencies.

---

## Dockerfile (Production)

Create a multi-stage Dockerfile:

1. **Stage 1 — Build:** Use `node:20-alpine`. Install dependencies, run `npm run build`.
2. **Stage 2 — Serve:** Use `nginx:alpine`. Copy the built `dist/` folder into Nginx's html directory. Include a custom `nginx.conf` that handles SPA routing (all routes fallback to `index.html`). Expose port 8080 (Railway's default).

Also create:

- `.dockerignore` — ignore `node_modules`, `.git`, etc.
- `nginx.conf` — minimal config for serving the SPA with proper fallback routing and caching headers for static assets.

---

## Railway Deployment Notes

- The app must listen on port **8080** (or respect the `$PORT` environment variable)
- The Nginx config should use `listen $PORT` or hardcode 8080
- Include a `railway.toml` or `railway.json` if it simplifies deployment config, but the Dockerfile alone should be sufficient

---

## README.md

Replace the existing README with a comprehensive one that includes:

- Project title and short description
- Screenshot placeholder (`![Screenshot](./screenshot.png)`)
- Tech stack list
- Getting started (prerequisites, install, dev server)
- Project structure overview
- How to customize content (point to `src/data/` files)
- How to build and run with Docker locally
- How to deploy to Railway
- License (MIT)

---

## Summary of Deliverables

After running this prompt, the repo should contain:

1. A fully working React + TypeScript + Tailwind portfolio site with 4 pages
2. Clean, well-documented, production-grade code
3. All personal content centralized in editable data files with placeholder values
4. A multi-stage Dockerfile ready for Railway deployment
5. Nginx config for SPA routing
6. A comprehensive README
7. ESLint + Prettier configs
8. Everything builds and runs with `npm run dev` (local) and `docker build / docker run` (production)
