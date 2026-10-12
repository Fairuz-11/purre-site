# 02 — Architecture and Routing

## 1. Technical Framework Architecture

The application is built on the **Next.js 16 App Router** with React 19 Server Components by default, selectively using Client Components (`"use client"`) for interactivity.

### Routing Table

| Route | Type | Component Source | Key Subcomponents |
|---|---|---|---|
| `/` | Static (SSG) | `src/app/page.tsx` | Hero, AboutPreview, ServicesPreview, WhyPuree, FeaturedProjects, FinalCTA |
| `/tentang` | Static (SSG) | `src/app/tentang/page.tsx` | AboutHero, CompanyIntro, VisionMission, CoreValues, Approach, AboutCTA |
| `/layanan` | Static (SSG) | `src/app/layanan/page.tsx` | ServicesHero, ServicesList, ServicesCTA |
| `/layanan/[slug]` | Dynamic Static (`generateStaticParams`) | `src/app/layanan/[slug]/page.tsx` | Breadcrumb, ServiceDetailHero, ServiceOverview, ServiceFeatures, ServiceProcess, RelatedServices, ServiceDetailCTA |
| `/portofolio` | Static (SSG) | `src/app/portofolio/page.tsx` | PortfolioHero, ProjectGrid, PortfolioCTA |
| `/portofolio/[slug]` | Dynamic Static (`generateStaticParams`) | `src/app/portofolio/[slug]/page.tsx` | Breadcrumb, ProjectDetailHero, ProjectOverview, ProjectGallery, RelatedProjects, PortfolioCTA |
| `/kontak` | Static (SSG) with Client Form | `src/app/kontak/page.tsx` | ContactHero, ContactInfo, ConsultationSection (ConsultationForm), LocationSection, ContactCTA |
| `/*` (404) | Fallback | `src/app/not-found.tsx` | Custom branded 404 container |

## 2. Dynamic Route Generation (`generateStaticParams`)

Both dynamic routes pre-render all possible paths at build time using the static data arrays in `src/lib/data.ts`:

- `/layanan/[slug]`:
  ```ts
  export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
  }
  ```
  Generates 4 routes:
  1. `/layanan/kontraktor-bangunan`
  2. `/layanan/renovasi-bangunan`
  3. `/layanan/desain-arsitektur`
  4. `/layanan/desain-interior`

- `/portofolio/[slug]`:
  ```ts
  export function generateStaticParams() {
    return portfolioProjects.map((p) => ({ slug: p.slug }));
  }
  ```
  Generates 6 routes:
  1. `/portofolio/modern-residence`
  2. `/portofolio/contemporary-house`
  3. `/portofolio/commercial-space`
  4. `/portofolio/modern-office`
  5. `/portofolio/minimalist-interior`
  6. `/portofolio/renovation-project`

## 3. Server vs. Client Boundary

- **Server Components**:
  - `RootLayout` (`src/app/layout.tsx`)
  - All `page.tsx` entrypoints
  - `Footer` (`src/components/layout/Footer.tsx`)
  - All informational sections (`Hero`, `AboutHero`, `ServicesList`, `ProjectOverview`, etc.)
- **Client Components (`"use client"`)**:
  - `Navbar` (`src/components/layout/Navbar.tsx`) — handles scroll position, mobile navigation overlay, route-based active state.
  - `WhyPuree` (`src/components/home/WhyPuree.tsx`) — uses Framer Motion / Motion for viewport animations.
  - `ConsultationForm` (`src/components/contact/ConsultationForm.tsx`) — manages multi-field state, inline errors, and submit lifecycle.
  - `ProjectGrid` (`src/components/portfolio/ProjectGrid.tsx`) — client-side category filtering state.
