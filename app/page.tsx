import { companyInfo } from "@/lib/data";

/* ============================================
   Temporary Foundation Page
   Tahap 1 — Design System verification only.
   Homepage final akan dibuat di Tahap berikutnya.
   ============================================ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-lg w-full flex flex-col gap-8">

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <span className="block w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
            Foundation Ready
          </span>
        </div>

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-6xl sm:text-8xl font-black tracking-tight text-off-white leading-none">
            {companyInfo.name}
          </h1>
          <p className="text-gray-light text-lg font-medium">
            Construction &amp; Design
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-red" aria-hidden="true" />

        {/* Status message */}
        <p className="text-gray text-sm leading-relaxed max-w-sm">
          Project foundation is ready. Design system, brand system, dan
          component dasar telah dikonfigurasi. Siap untuk Tahap 2.
        </p>

        {/* Design System Swatches */}
        <div className="flex flex-col gap-3" aria-label="Design system preview">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray">
            Color System
          </p>
          <div className="flex gap-2 flex-wrap">
            {[
              { bg: "bg-red",       label: "Red"       },
              { bg: "bg-gold",      label: "Gold"      },
              { bg: "bg-charcoal",  label: "Charcoal"  },
              { bg: "bg-off-white", label: "Off-white" },
              { bg: "bg-gray",      label: "Gray"      },
            ].map(({ bg, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 ${bg} border border-border`}
                  title={label}
                  aria-label={label}
                />
                <span className="text-[10px] text-gray">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography preview */}
        <div className="flex flex-col gap-2 border-t border-border pt-6" aria-label="Typography preview">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray mb-2">
            Typography
          </p>
          <p className="font-display text-2xl font-bold text-off-white">
            Display — Barlow Bold
          </p>
          <p className="font-sans text-base text-gray-light">
            Body — Inter Regular. Nyaman dibaca di semua ukuran layar.
          </p>
          <p className="font-sans text-xs tracking-widest uppercase text-gray">
            LABEL — Inter Small Caps
          </p>
        </div>
      </div>
    </div>
  );
}
