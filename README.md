# Personal Portfolio

A clean, dark-themed personal portfolio website built with React, TypeScript, and Tailwind CSS. Deployed on Railway via Docker.

![Screenshot](./screenshot.png)

## Tech Stack

- **Framework:** React 18 + React Router v6
- **Build Tool:** Vite
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Icons:** react-icons
- **Deployment:** Docker + Nginx (Railway)

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Format
npm run format

# Production build
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, PageWrapper
│   ├── ui/          # Button, Card, Badge, SectionHeading, SocialIcon
│   └── sections/    # HeroSection, Timeline, ProjectGrid, ContactForm
├── pages/           # HomePage, ExperiencePage, ProjectsPage, ContactPage
├── data/            # Editable content files (see below)
├── hooks/           # useScrollToTop
├── types/           # TypeScript interfaces
├── App.tsx          # Router setup
├── main.tsx         # Entry point
└── index.css        # Tailwind directives + global styles
```

## Customizing Content

All personal content lives in `src/data/` — edit these files to make the site yours:

| File | What it controls |
|------|-----------------|
| `siteConfig.ts` | Name, tagline, bio, tech stack |
| `projects.ts` | Portfolio project cards |
| `experience.ts` | Work history timeline |
| `socialLinks.ts` | GitHub, LinkedIn, Twitter, Email links |

Each file uses TypeScript interfaces from `src/types/` for type safety. Look for `TODO` comments marking placeholder content.

## Docker

### Build & Run Locally

```bash
docker build -t personal-site .
docker run -p 8080:8080 personal-site
```

Then open http://localhost:8080.

### Deploy to Railway

1. Push this repo to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect the GitHub repo — Railway will detect the Dockerfile automatically
4. Deploy. The app listens on port 8080 by default.

## License

MIT
