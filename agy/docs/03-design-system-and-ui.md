# 03 — Design System and UI Architecture

## 1. Aesthetic Direction: Clean Industrial & Modern Corporate

The visual language reflects precision, architecture, and durability:
- Strong structural grid lines (`bg-border` with `gap-px` grid items).
- Subtle, high-legibility contrasts with architectural warm-whites and deep charcoals.
- Minimalist geometry: sharp or very slight border-radius (`rounded-sm`).
- Vivid accentuation: Brand Red (`#C90000`) for focal points, CTA highlights, and micro-accents.

## 2. Design Tokens (`src/app/globals.css`)

### Color Palette

| Token | Variable | Hex / Value | Role |
|---|---|---|---|
| Background | `--background` | `#F7F7F5` | Off-white warm stone page canvas |
| Surface | `--surface` | `#FFFFFF` | Primary card and container fill |
| Muted Surface | `--surface-muted` | `#F0F0ED` | Secondary sections and alternates |
| Foreground | `--foreground` | `#1F1F1F` | High-contrast body text and headers |
| Muted Text | `--muted-foreground` | `#666666` | Secondary labels, descriptions |
| Border | `--border` | `#E5E5E5` | Structural hairline dividers |
| Strong Border | `--border-strong` | `#D0D0CC` | Accented boundaries |
| Brand Red | `--brand-red` | `#C90000` | Primary brand call-to-action & accents |
| Brand Red Hover | `--brand-red-hover` | `#A80000` | Hover state for interactive primary CTAs |
| Brand Red Light | `--brand-red-light` | `#FFF0F0` | Error field tinting and subtle badges |
| Brand Gold | `--brand-gold` | `#E5A900` | Secondary accent / badge color |

### Typography

Configured via `next/font/google` in `src/app/layout.tsx`:
- **Sans Serif (`--font-sans` / `--font-inter`)**: Inter (Latin subset) — used for all body text, navigation labels, forms, and general readability.
- **Display (`--font-display` / `--font-barlow`)**: Barlow (weights 400 through 900) — used for prominent editorial headings, oversized numerals, numbers, and hero titles.

### Layout Utilities

- `.container-site`: Fluid width container with `max-w-[1280px]` and `padding-inline: clamp(1rem, 4vw, 2rem)`.
- `.section-py`: Consistent vertical rhythm `padding-block: clamp(4rem, 8vw, 7rem)`.
- `.accent-line`: Decorative 3px brand red line (`w-12 h-[3px] bg-brand-red`).

## 3. UI Primitives (`src/components/ui/`)

- **`Button.tsx`**: Versatile button/link supporting variants (`primary`, `secondary`, `outline`, `ghost`), sizes (`sm`, `md`, `lg`), and icon adornments.
- **`SectionHeading.tsx`**: Standardized eyebrow tag + display heading + optional description layout.
- **`Breadcrumb.tsx`**: Accessible navigation hierarchy trail for nested service and portfolio detail pages.
