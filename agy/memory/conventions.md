# Observed Repository Conventions

## 1. Framework & Routing Conventions (Next.js 16 & React 19)

- **Server Components by Default**: Pages (`page.tsx`) and static display sections omit `"use client"` and render strictly on the server.
- **Client Boundary**: `"use client"` directive is placed at line 1 of files requiring event listeners, browser DOM access, React state (`useState`, `useEffect`), or `motion/react` animations.
- **Next.js 16 Async Dynamic Segments**: In dynamic routes (`[slug]`), `params` is a Promise and must be awaited:
  ```ts
  export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    // ...
  }
  ```
- **Static Param Pre-generation**: Dynamic routes export `generateStaticParams()` returning slug objects.
- **Explicit Metadata**: Each route exports typed `metadata: Metadata` or an async `generateMetadata(props)` function.

## 2. Directory & Component Organization

- `src/app/`: Application routing and layout definitions.
- `src/components/<domain>/`: Domain-grouped modular components:
  - `about/`: Company story, vision/mission, values, approach.
  - `contact/`: Consultation form, contact cards, map/location details.
  - `home/`: Hero, preview sections, feature banners.
  - `layout/`: Top navigation (`Navbar`) and site footer (`Footer`).
  - `portfolio/`: Project grids, cards, galleries, and detail views.
  - `services/`: Service listing, steps, process breakdowns, and detail headers.
  - `ui/`: Reusable primitives (`Button`, `Breadcrumb`, `SectionHeading`).
- `src/lib/`:
  - `data.ts`: Central data repository and TypeScript interfaces for all static content.
  - `utils.ts`: General helper utilities (`cn`, `formatRupiah`, `slugify`, `truncate`).

## 3. Styling & CSS Conventions

- **Tailwind CSS v4**: Uses `@theme inline` in `src/app/globals.css` mapping CSS custom properties to Tailwind utility tokens.
- **Class Merging**: Always use `cn(...)` from `@/lib/utils` for conditional classes.
- **Design Tokens**: Prefer semantic tokens (`bg-background`, `bg-surface`, `bg-surface-muted`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-brand-red`) over hardcoded hex values.
- **Visual Stylings**:
  - Border radius: Almost exclusively `rounded-sm` or `rounded` (subtle corners).
  - Typography: `font-display` (`--font-barlow`) for uppercase tags and headings; `font-sans` (`--font-inter`) for body copy.
  - Tracking: Frequent use of wide uppercase tracking (`tracking-[0.18em]` to `tracking-[0.22em]`) for eyebrows and category labels.
