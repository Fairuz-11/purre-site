# Phase 1 — Frontend Raw Analysis

## 1. App Router & Route Hierarchy

- **`/` (`src/app/page.tsx`)**:
  - Main landing page.
  - Composed of: `Hero`, `AboutPreview`, `ServicesPreview`, `WhyPuree`, `FeaturedProjects`, `FinalCTA`.
  - Uses `motion/react` for entry transitions and scroll-triggered reveals in several sections (notably `WhyPuree`).

- **`/tentang` (`src/app/tentang/page.tsx`)**:
  - Corporate about page.
  - Composed of: `AboutHero`, `CompanyIntro`, `VisionMission`, `CoreValues`, `Approach`, `AboutCTA`.

- **`/layanan` (`src/app/layanan/page.tsx`)**:
  - Overview list of all services offered by PUREE.
  - Composed of: `ServicesHero`, `ServicesList`, `ServicesCTA`.

- **`/layanan/[slug]` (`src/app/layanan/[slug]/page.tsx`)**:
  - Dynamic detail page for each individual service.
  - Implements `generateStaticParams()` reading from `services` in `src/lib/data.ts`.
  - Next.js 16 async params handling: `props: { params: Promise<{ slug: string }> }`.
  - Dynamic metadata generation based on slug.
  - Composed of: `Breadcrumb`, `ServiceDetailHero`, `ServiceOverview`, `ServiceFeatures`, `ServiceProcess`, `RelatedServices`, `ServiceDetailCTA`.

- **`/portofolio` (`src/app/portofolio/page.tsx`)**:
  - Filterable portfolio project gallery.
  - Composed of: `PortfolioHero`, `ProjectGrid` (with category filter buttons), `PortfolioCTA`.

- **`/portofolio/[slug]` (`src/app/portofolio/[slug]/page.tsx`)**:
  - Dynamic project detail page.
  - Implements `generateStaticParams()` reading from `portfolioProjects` in `src/lib/data.ts`.
  - Dynamic metadata per project slug.
  - Composed of: `Breadcrumb`, `ProjectDetailHero`, `ProjectOverview`, `ProjectGallery`, `RelatedProjects`, `PortfolioCTA`.

- **`/kontak` (`src/app/kontak/page.tsx`)**:
  - Contact and consultation request page.
  - Composed of: `ContactHero`, `ContactInfo`, `ConsultationSection` (embedding `ConsultationForm`), `LocationSection`, `ContactCTA`.

- **`not-found.tsx` (`src/app/not-found.tsx`)**:
  - Custom 404 page matching the light industrial brand aesthetic with big 404 numerals and return home CTA.

## 2. Component Hierarchy & State Strategy

- **Client Components (`"use client"`)**:
  - `Navbar.tsx`: Controls hydration-safe scroll detection, mobile menu open/close, body scroll lock, and pathname-based link highlighting.
  - `WhyPuree.tsx`: Uses `useRef` and `useInView` from `motion/react` to trigger coordinated staggered entry animations.
  - `ConsultationForm.tsx`: Fully interactive form with field validation (name, email, projectType, message), loading state simulation, and success message toggle. No external backend API call is configured yet.
  - `ProjectGrid.tsx`: Client-side category filtering using React state.
- **Server Components**:
  - All route wrappers (`page.tsx`), `layout.tsx`, `Footer.tsx`, and static presentation sections.
  - Zero hydration overhead for purely informational sections.

## 3. Styling & Theme System

- Rooted in `src/app/globals.css` using Tailwind CSS v4 `@theme inline`.
- Palette tokens:
  - Surface & background: `--background: #F7F7F5`, `--surface: #FFFFFF`, `--surface-muted: #F0F0ED`
  - Text: `--foreground: #1F1F1F`, `--muted-foreground: #666666`
  - Borders: `--border: #E5E5E5`, `--border-strong: #D0D0CC`
  - Brand accents: `--brand-red: #C90000`, `--brand-red-hover: #A80000`, `--brand-gold: #E5A900`
- Typography:
  - Sans-serif: `Inter` loaded via `next/font/google` (`--font-inter`)
  - Display/Headings: `Barlow` loaded via `next/font/google` (`--font-barlow`, weights 400-900)
- Utilities:
  - `.container-site`: `max-w-[1280px]` with fluid responsive padding.
  - `.section-py`: Fluid vertical section padding `clamp(4rem, 8vw, 7rem)`.
  - `.accent-line`: 3px brand red indicator line.
