# 05 — Risks & Technical Debt

## 1. ESLint / React 19 Linting Findings

When running `npm.cmd run lint` (ESLint 9 flat config + Next.js 16 core-web-vitals + TypeScript):

1. **`Navbar.tsx` (Errors - `react-hooks/set-state-in-effect`)**:
   - Lines 27 & 36: Synchronously calling `setIsScrolled(window.scrollY > 16)` and `setIsMobileOpen(false)` inside `useEffect` causes React cascading render warnings.
   - *Impact*: Linter fails in CI/CD pipeline.
   - *Remediation recommendation*: Initial scroll can be initialized via a listener callback or ref-derived check; route change menu close can be handled with an event handler or keying on pathname rather than raw effect state trigger.

2. **`ContactInfo.tsx` (Warning - `@typescript-eslint/no-unused-vars`)**:
   - Line 70: `'isLast'` variable destructured/assigned but never read.

3. **`ProjectGrid.tsx` (Warning - `@typescript-eslint/no-unused-vars`)**:
   - Line 4: `'portfolioCategories'` imported but not used.

## 2. Missing Static Raster Assets (`public/images/`)

- `src/lib/data.ts` references paths like `/images/projects/project-01.jpg` and `/images/services/kontraktor-bangunan.jpg`.
- The physical directory `public/images/` does not currently exist in the repository; only `public/logo/` is present.
- Components currently display placeholder background gradients or Next.js image loading placeholders. When real images or production builds are required, these files should either be populated or routed to a remote CDN/storage bucket.

## 3. Consultation Form Backend Connection

- `ConsultationForm.tsx` simulates submission via local `setTimeout` delay.
- It does not dispatch to a live API route or third-party CRM / email delivery service (e.g. Resend, SendGrid, Webhook).

## 4. Next.js 16 Breaking Conventions

- Note in root `AGENTS.md`: Next.js 16 introduces breaking API changes (e.g., dynamic params are now Promises: `params: Promise<{ slug: string }>`).
- The project already correctly uses `await props.params` in `/layanan/[slug]` and `/portofolio/[slug]`, adhering to Next.js 16 requirements.
