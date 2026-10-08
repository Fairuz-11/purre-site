"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ============================================
   WhyPuree — Normal section, no scroll tricks.
   2-col desktop / 1-col mobile.
   Simple viewport-enter animation only.
   ============================================ */

const POINTS = [
  {
    number: "01",
    title: "Professional Team",
    description: "Ditangani dengan pendekatan kerja yang terstruktur dan profesional.",
  },
  {
    number: "02",
    title: "Quality First",
    description: "Setiap proses memperhatikan kualitas material, pengerjaan, dan hasil akhir.",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    description: "Perencanaan pekerjaan dilakukan dengan mempertimbangkan target waktu proyek.",
  },
  {
    number: "04",
    title: "Transparent Process",
    description: "Komunikasi dan proses kerja dibuat jelas sejak awal hingga proyek selesai.",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyPuree() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      ref={ref}
      aria-labelledby="why-puree-heading"
      className="bg-surface-muted section-py border-t border-border"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-brand-red">
              <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
              Why PUREE
            </span>

            <h2
              id="why-puree-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground"
            >
              More than construction.
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              We build with responsibility.
            </p>

            <div className="w-12 h-[3px] bg-brand-red" aria-hidden="true" />
          </motion.div>

          {/* ── RIGHT: Principles ── */}
          <div className="flex flex-col">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.08 }}
                className={`flex gap-6 py-7 ${
                  i < POINTS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span
                  className="font-display text-[0.8125rem] font-bold text-brand-red tracking-wide flex-shrink-0 w-7 pt-0.5"
                  aria-hidden="true"
                >
                  {point.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
