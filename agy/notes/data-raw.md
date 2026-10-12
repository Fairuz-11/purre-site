# Phase 1 — Data Layer Raw Analysis

## 1. Centralized Data Architecture (`src/lib/data.ts`)

All site content is stored statically in TypeScript data structures within `src/lib/data.ts`. This acts as an in-code content management layer.

### Key Data Entities & Interfaces

1. **`NavItem`**:
   - Navigation links for the header and footer (`navigation`, `ctaNavigation`).
   - Links: Beranda (`/`), Tentang (`/tentang`), Layanan (`/layanan`), Portofolio (`/portofolio`), Kontak (`/kontak`).

2. **`Service`**:
   - Services offered by the company:
     - `kontraktor-bangunan`: Jasa Kontraktor Bangunan (number "01")
     - `renovasi-bangunan`: Jasa Renovasi Bangunan (number "02")
     - `desain-arsitektur`: Jasa Desain Arsitektur (number "03")
     - `desain-interior`: Jasa Desain Interior (number "04")
   - Fields: `id`, `number`, `title`, `slug`, `shortDescription`, `description`, `icon`, `features`, `image`.

3. **`ServiceWorkStep` & `ProcessStep`**:
   - 4-step workflow: Consultation / Understand ("01"), Planning / Plan ("02"), Execution / Build ("03"), Completion / Deliver ("04").

4. **`PortfolioProject`**:
   - 6 detailed projects currently defined in `portfolioProjects`:
     - `modern-residence` (Residential, Malang, 2026)
     - `contemporary-house` (Residential, Malang, 2025)
     - `commercial-space` (Commercial, Malang, 2025)
     - `modern-office` (Commercial, Malang, 2024)
     - `minimalist-interior` (Interior, Malang, 2024)
     - `renovation-project` (Renovation, Malang, 2023)
   - Categories: `Residential`, `Commercial`, `Interior`, `Renovation`.

5. **`CompanyInfo`**:
   - Name: `PUREE`
   - Tagline: "Building with Purpose."
   - Founded: 2015
   - Address: "Malang, Jawa Timur, Indonesia"
   - Phone / WhatsApp / Email / Social links (Instagram, Facebook, LinkedIn).

6. **`CoreValue`**:
   - 4 values: Quality ("01"), Integrity ("02"), Precision ("03"), Collaboration ("04").

## 2. Utility Layer (`src/lib/utils.ts`)

- `cn(...classes)`: Lightweight class concatenator and falsy-filter.
- `formatRupiah(value)`: Currency formatter for Indonesian Rupiah (`Intl.NumberFormat('id-ID', ...)`).
- `slugify(text)`: Transforms titles to URL-safe kebab-case strings.
- `truncate(text, maxLength)`: Ellipsis truncation helper.

## 3. Image Asset Observations

- Projects and services point to `/images/projects/...` and `/images/services/...`.
- However, physical raster image files in `public/images/` are currently missing; components use graceful fallbacks (e.g. placeholder gradients in `ProjectCard.tsx`).
- Logos are stored in `public/logo/` (`puree-logo-placeholder.svg` and `puree-logo.png`).
