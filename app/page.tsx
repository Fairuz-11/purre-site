import { companyInfo } from "@/lib/data";

/* ============================================
   Temporary Foundation Page
   Tahap 1 — Design System verification only.
   Homepage final akan dibuat di Tahap berikutnya.
   ============================================ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="max-w-lg w-full flex flex-col gap-8">

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <span className="block w-2 h-2 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-red">
            Foundation Ready
          </span>
        </div>

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-6xl sm:text-8xl font-black tracking-tight text-foreground leading-none">
            {companyInfo.name}
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            Construction &amp; Design
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-brand-red" aria-hidden="true" />

        {/* Status message */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Project foundation is ready. Design system, brand system, dan
          component dasar telah dikonfigurasi. Siap untuk Tahap 2.
        </p>

        {/* Design System Swatches */}
        <div className="flex flex-col gap-3" aria-label="Design system preview">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
            Color System
          </p>
          <div className="flex gap-2 flex-wrap">
            {[
              { bg: "bg-brand-red",    label: "Red"        },
              { bg: "bg-brand-gold",   label: "Gold"       },
              { bg: "bg-foreground",   label: "Foreground" },
              { bg: "bg-surface",      label: "Surface"    },
              { bg: "bg-surface-muted",label: "Muted"      },
            ].map(({ bg, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 ${bg} border border-border`}
                  title={label}
                  aria-label={label}
                />
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography preview */}
        <div
          className="flex flex-col gap-2 border-t border-border pt-6"
          aria-label="Typography preview"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2">
            Typography
          </p>
          <p className="font-display text-2xl font-bold text-foreground">
            Display — Barlow Bold
          </p>
          <p className="font-sans text-base text-muted-foreground">
            Body — Inter Regular. Nyaman dibaca di semua ukuran layar.
          </p>
          <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
            LABEL — Inter Small Caps
          </p>
        </div>

        {/* Component preview */}
        <div
          className="flex flex-col gap-4 border-t border-border pt-6"
          aria-label="Component preview"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
            Components
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {/* Primary */}
            <button
              className="inline-flex items-center h-10 px-5 text-sm font-semibold tracking-wide text-white bg-brand-red hover:bg-brand-red-hover transition-colors"
              type="button"
            >
              Primary CTA
            </button>
            {/* Secondary */}
            <button
              className="inline-flex items-center h-10 px-5 text-sm font-semibold tracking-wide text-foreground bg-surface border border-border hover:border-brand-red hover:text-brand-red transition-colors"
              type="button"
            >
              Secondary
            </button>
            {/* Outline */}
            <button
              className="inline-flex items-center h-10 px-5 text-sm font-semibold tracking-wide text-foreground border border-border-strong hover:border-brand-red hover:text-brand-red transition-colors bg-transparent"
              type="button"
            >
              Outline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
