# Phase 0 — Reconnaissance & Initial Map

**Date**: 2026-10-12  
**Target Repository**: `purre-site` (`Fairuz-11/purre-site`)  
**Resolved Agent Folder**: `agy/`

---

## 1. Repository Topology & Tech Stack

- **Project Type**: Static & Interactive Corporate/Company Website for "PUREE — Construction & Design"
- **Framework**: Next.js 16.4.0 (Canary / Next 16 App Router)
- **Runtime / UI Library**: React 19.3.0, React DOM 19.3.0
- **Language**: TypeScript 5.x (`tsconfig.json` target ES2017, bundler resolution, strict mode enabled)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack: ^4`, `tailwindcss: ^4`) with CSS theme variables in `src/app/globals.css`
- **Animation**: `motion` (`motion/react` v14.0.0)
- **Icons**: `lucide-react` (^1.52.0)
- **Linter**: ESLint 9 flat config (`eslint.config.mjs` extending `nextVitals` and `nextTs`)

## 2. Directory Structure Overview

```
purre-site/
├── .git/                  # Git repository metadata
├── .next/                 # Next.js build cache
├── AGENTS.md              # Context file with Next.js agent instructions
├── eslint.config.mjs      # ESLint 9 configuration
├── next.config.ts         # Next.js 16 config with Turbopack CSS loaders & experimental flags
├── package.json           # Project manifest
├── public/                # Static assets (logo SVGs, favicons)
│   └── logo/
│       ├── puree-logo-placeholder.svg
│       └── puree-logo.png
└── src/
    ├── app/               # App Router pages & layouts
    │   ├── layout.tsx     # Root layout (Inter + Barlow fonts, Navbar + Footer)
    │   ├── page.tsx       # Homepage (Hero, AboutPreview, ServicesPreview, WhyPuree, FeaturedProjects, FinalCTA)
    │   ├── globals.css    # Tailwind v4 theme, CSS variables, utility classes
    │   ├── not-found.tsx  # Custom 404 page
    │   ├── tentang/       # About page (/tentang)
    │   ├── layanan/       # Services landing & [slug] dynamic routes (/layanan, /layanan/[slug])
    │   ├── portofolio/    # Portfolio landing & [slug] dynamic routes (/portofolio, /portofolio/[slug])
    │   └── kontak/        # Contact page (/kontak) with ConsultationForm
    ├── components/        # Modular UI components
    │   ├── about/         # 6 components for About page
    │   ├── contact/       # 6 components for Contact page
    │   ├── home/          # 6 components for Homepage
    │   ├── layout/        # Navbar & Footer
    │   ├── portfolio/     # 9 components for Portfolio section & detail
    │   ├── services/      # 9 components for Services section & detail
    │   └── ui/            # Reusable primitives (Breadcrumb, Button, SectionHeading)
    └── lib/
        ├── data.ts        # Single source of truth for static site data & TypeScript interfaces
        └── utils.ts       # Utility functions (cn, formatRupiah, slugify, truncate)
```

## 3. Git Status & History

- **Current Branch**: `main` (tracked with `origin/main`)
- **Current HEAD**: `aabac4e` ("redesign -why purre")
- **Commit History Summary**:
  - Total commits: 12
  - First commit: `0e4a7a9` on 2026-10-07 ("Initial commit from Create Next App")
  - Active feature development landed on 2026-10-07 and 2026-10-08
  - Recent commits focused on refining homepage sections (`WhyPuree` component animation and redesign)
- **Working Tree State**:
  - `package-lock.json` has unstaged modifications (libc platform variations from Windows install).
  - Clean source tree otherwise.

## 4. Build, Lint & Execution Environment

- Node.js on Windows environment.
- TypeScript check (`npx.cmd tsc --noEmit`) passes with zero errors.
- Script invocation requires `.cmd` on Windows due to PowerShell execution policy on `.ps1`.
