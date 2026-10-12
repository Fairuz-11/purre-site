# 04 — Data Layer & Content Structure

## 1. Single Source of Truth (`src/lib/data.ts`)

Site content is designed as an in-code content repository located in `src/lib/data.ts`. All dynamic views pull directly from this typed data structure.

### Models & Schema

### `CompanyInfo`
```ts
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}
```

### `Service`
```ts
export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}
```

### `PortfolioProject`
```ts
export type PortfolioCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Renovation";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  year: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  services: string[];
}
```

## 2. In-Memory Data Collections

1. `services` (4 items):
   - `kontraktor-bangunan` ("Jasa Kontraktor Bangunan")
   - `renovasi-bangunan` ("Jasa Renovasi Bangunan")
   - `desain-arsitektur` ("Jasa Desain Arsitektur")
   - `desain-interior` ("Jasa Desain Interior")

2. `portfolioProjects` (6 items):
   - `modern-residence` (Residential)
   - `contemporary-house` (Residential)
   - `commercial-space` (Commercial)
   - `modern-office` (Commercial)
   - `minimalist-interior` (Interior)
   - `renovation-project` (Renovation)

3. `navigation` & `ctaNavigation`:
   - Primary site routes (Beranda, Tentang, Layanan, Portofolio, Kontak).

4. `companyVision`, `companyMission`, `coreValues`, `processSteps`:
   - Foundational content powering `/tentang`.

## 3. Form Input Data Specification (`ConsultationForm`)

The contact intake form defines the following payload shape:
- `name`: string (required)
- `email`: string (valid email regex)
- `phone`: string (optional)
- `projectType`: "Jasa Kontraktor Bangunan" | "Jasa Renovasi Bangunan" | "Jasa Desain Arsitektur" | "Jasa Desain Interior" | "Other"
- `projectLocation`: string (optional)
- `message`: string (required)
