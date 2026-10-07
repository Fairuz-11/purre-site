"use client";

import { portfolioCategories } from "@/lib/data";
import type { PortfolioCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ============================================
   PortfolioFilters — client component
   Category filter bar for /portofolio.
   ============================================ */

interface Props {
  active: PortfolioCategory | "All";
  onChange: (cat: PortfolioCategory | "All") => void;
}

export default function PortfolioFilters({ active, onChange }: Props) {
  return (
    <nav
      aria-label="Filter portofolio berdasarkan kategori"
      className="flex items-center gap-0 flex-wrap border-b border-border"
    >
      {portfolioCategories.map((cat) => {
        const isActive = active === cat.value;
        return (
          <button
            key={cat.value}
            type="button"
            onClick={() => onChange(cat.value)}
            aria-pressed={isActive}
            className={cn(
              "px-5 py-3.5 text-[0.75rem] font-semibold tracking-[0.12em] uppercase",
              "transition-colors duration-150 border-b-2 -mb-px",
              "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
              isActive
                ? "text-brand-red border-brand-red"
                : "text-muted-foreground border-transparent hover:text-foreground hover:border-border-strong"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
