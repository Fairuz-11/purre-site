"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ============================================
   WhyPuree — Editorial premium section.
   Normal page scroll, no sticky/scroll tricks.

   Layout:
   ─ Header band (full-width): eyebrow + large heading
   ─ Body: 2-col on desktop
     LEFT : short description + red accent + subtle "04" watermark
     RIGHT: 2×2 grid of benefit items
   ============================================ */

const POINTS = [
  {
    number: "01",
    title: "Professional Team",
    description:
      "Ditangani dengan pendekatan kerja yang terstruktur dan profesional.",
  },
  {
    number: "02",
    title: "Quality First",
    description:
      "Setiap proses memperhatikan kualitas material, pengerjaan, dan hasil akhir.",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    description:
      "Perencanaan pekerjaan dilakukan dengan mempertimbangkan target waktu proyek.",
  },
  {
    number: "04",
    title: "Transparent Process",
    description:
      "Komunikasi dan proses kerja dibuat jelas sejak awal hingga proyek selesai.",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyPuree() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.12,
  });

  return (
    <section
      ref={ref}
      aria-labelledby="why-puree-heading"
      className="bg-surface-muted border-t border-border overflow-hidden"
    >

      {/* ═══════════════════════════════════════
          HEADER BAND
          Full-width top strip with eyebrow + heading.
          ─────────────────────────────────────── */}
      <div className="border-b border-border">
        <div className="container-site py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end">

            {/* Eyebrow + heading */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}
              className="flex flex-col gap-4"
            >
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                <span className="block w-6 h-px bg-brand-red" aria-hidden="true" />
                Why PUREE
              </span>

              {/* Main heading */}
              <h2
                id="why-puree-heading"
                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-foreground"
              >
                More than
                <br />
                <span className="text-brand-red">construction.</span>
              </h2>
            </motion.div>

            {/* Short description — sits to the right on desktop */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
              className="text-muted-foreground text-base leading-relaxed max-w-xs lg:max-w-[280px] lg:text-right lg:pb-1"
            >
              We build with responsibility,
              <br className="hidden lg:block" />
              precision, and purpose.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BODY
          Left: decorative / context
          Right: 2×2 benefit grid
          ─────────────────────────────────────── */}
      <div className="container-site py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
            className="flex flex-col gap-6 relative"
          >
            {/* Red accent line */}
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            {/* Context text */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              Setiap proyek ditangani dengan standar yang konsisten — dari
              perencanaan hingga penyelesaian.
            </p>

            {/* Decorative watermark number */}
            <div
              className="select-none pointer-events-none mt-auto pt-8 hidden lg:block"
              aria-hidden="true"
            >
              <span
                className="font-display font-extrabold leading-none text-[7rem] text-border tracking-tight"
                style={{ WebkitTextStroke: "1px #D0D0CC" }}
              >
                04
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: 2×2 grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                  delay: 0.22 + i * 0.09,
                }}
                className="group bg-surface-muted hover:bg-surface transition-colors duration-300 p-7 lg:p-8 flex flex-col gap-4"
              >
                {/* Number */}
                <span
                  className="font-display text-[0.6875rem] font-bold tracking-[0.2em] text-brand-red"
                  aria-hidden="true"
                >
                  {point.number}
                </span>

                {/* Thin red rule */}
                <div
                  className="w-8 h-[2px] bg-border group-hover:bg-brand-red transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Title */}
                <h3 className="font-display text-[0.9375rem] font-bold tracking-wide uppercase text-foreground leading-snug">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
