"use client";

import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/* ============================================
   WhyPuree — Pinned Scroll Storytelling

   DOM structure (critical):
   ┌─ <section>  outer — tall, gives scroll distance
   │   height: 300vh desktop / 220vh mobile
   │
   └─ <div sticky top-0 h-screen>  inner — pins to viewport
       while outer section is scrolled through.
       useScroll measures outer, maps 0→1 to animation.

   Animation timeline (desktop, scrollYProgress 0→1):
     0.00–0.12  heading + subtitle enter  (y 40→0, opacity 0→1)
     0.15–0.28  item 01  (y 40→0, scale 0.94→1, opacity 0→1)
     0.28–0.41  item 02
     0.41–0.54  item 03
     0.54–0.68  item 04
     0.68–1.00  hold — all visible, section hasn't released yet

   After progress reaches 1.0 the outer section ends,
   sticky is released, and Featured Projects scrolls in normally.

   Mobile: same structure, height 220vh so the hold is shorter.
   prefers-reduced-motion: plain static layout, no animation.
   ============================================ */

/* ── Motion physics spring — smooths the raw transform values ── */
const SPRING_CONFIG = { stiffness: 80, damping: 22, restDelta: 0.001 };

/* ── Build a single element's scroll-driven motion values ── */
function usePin(
  progress: MotionValue<number>,
  start: number,
  end: number
): { opacity: MotionValue<number>; y: MotionValue<number>; scale: MotionValue<number> } {
  const rawOpacity = useTransform(progress, [start, end], [0, 1]);
  const rawY       = useTransform(progress, [start, end], [40, 0]);
  const rawScale   = useTransform(progress, [start, end], [0.94, 1]);

  return {
    opacity: useSpring(rawOpacity, SPRING_CONFIG),
    y:       useSpring(rawY,       SPRING_CONFIG),
    scale:   useSpring(rawScale,   SPRING_CONFIG),
  };
}

/* ── Content data ── */
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

/* ═══════════════════════════════════════════════════════════
   ANIMATED version — used on desktop AND mobile
   (different outerHeight passed in as prop)
   ═══════════════════════════════════════════════════════════ */
interface AnimatedProps {
  /** Total outer section height in vh units */
  outerVh: number;
}

function WhyPureeAnimated({ outerVh }: AnimatedProps) {
  const outerRef = useRef<HTMLElement>(null);

  /*
   * Track scroll progress of the outer section.
   * offset ["start end", "end start"]:
   *   0 when section's top reaches viewport bottom
   *   1 when section's bottom leaves viewport top
   *
   * Because the outer section is much taller than the viewport,
   * the inner sticky div holds position for the entire 0→1 range.
   */
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start end", "end start"],
  });

  /* ── Heading & subtitle ── */
  const heading  = usePin(scrollYProgress, 0.02, 0.13);
  const subtitle = usePin(scrollYProgress, 0.09, 0.19);

  /* ── Four items, evenly spaced, completing by 0.68 ── */
  const item0 = usePin(scrollYProgress, 0.16, 0.29);
  const item1 = usePin(scrollYProgress, 0.29, 0.42);
  const item2 = usePin(scrollYProgress, 0.42, 0.55);
  const item3 = usePin(scrollYProgress, 0.55, 0.68);

  const itemMotions = [item0, item1, item2, item3];

  return (
    /*
     * OUTER: tall section.
     * overflow-clip prevents inner sticky from painting outside.
     */
    <section
      ref={outerRef}
      aria-labelledby="why-puree-heading"
      className="relative bg-surface-muted overflow-clip"
      style={{ height: `${outerVh}vh` }}
    >
      {/*
       * INNER STICKY: pins to top of viewport.
       * h-screen = 100vh, fills the viewport exactly.
       * overflow-hidden clips anything that exceeds the viewport.
       */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="container-site w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 lg:py-0">

            {/* ═══ LEFT: Heading column ═══ */}
            <div className="flex flex-col gap-4">
              {/* Eyebrow — always visible, no animation */}
              <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-brand-red">
                <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
                Why PUREE
              </span>

              {/* Main heading — enters with scroll */}
              <motion.h2
                id="why-puree-heading"
                style={{
                  opacity: heading.opacity,
                  y:       heading.y,
                  scale:   heading.scale,
                }}
                className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-foreground"
              >
                More than
                <br />
                construction.
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                style={{
                  opacity: subtitle.opacity,
                  y:       subtitle.y,
                  scale:   subtitle.scale,
                }}
                className="text-muted-foreground text-base leading-relaxed max-w-xs"
              >
                We build with responsibility.
              </motion.p>

              {/* Red accent */}
              <motion.div
                style={{ opacity: subtitle.opacity, y: subtitle.y }}
                className="w-12 h-[3px] bg-brand-red"
                aria-hidden="true"
              />
            </div>

            {/* ═══ RIGHT: Principles column ═══ */}
            <div className="flex flex-col">
              {POINTS.map((point, i) => {
                const fm = itemMotions[i];
                return (
                  <motion.div
                    key={point.number}
                    style={{
                      opacity: fm.opacity,
                      y:       fm.y,
                      scale:   fm.scale,
                    }}
                    className={[
                      "flex gap-6 py-6 lg:py-7",
                      i < POINTS.length - 1 ? "border-b border-border" : "",
                    ].join(" ")}
                  >
                    {/* Number */}
                    <span
                      className="font-display text-[0.8125rem] font-bold text-brand-red tracking-wide flex-shrink-0 w-7 pt-0.5"
                      aria-hidden="true"
                    >
                      {point.number}
                    </span>

                    {/* Text */}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATIC fallback for prefers-reduced-motion
   ═══════════════════════════════════════════════════════════ */
function WhyPureeStatic() {
  return (
    <section
      aria-labelledby="why-puree-heading"
      className="bg-surface-muted section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Heading */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-4">
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
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {POINTS.map((point, i) => (
              <div
                key={point.number}
                className={`flex gap-6 py-8 ${i < POINTS.length - 1 ? "border-b border-border" : ""}`}
              >
                <span
                  className="font-display text-[0.8125rem] font-bold text-brand-red tracking-wide flex-shrink-0 w-7 pt-0.5"
                  aria-hidden="true"
                >
                  {point.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function WhyPuree() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <WhyPureeStatic />;

  /*
   * Desktop gets 300vh — plenty of room for the full sequence
   * plus a comfortable hold before Featured Projects appears.
   *
   * Mobile gets 220vh — same storytelling but tighter.
   * We render both and hide with CSS to avoid conditional hooks.
   */
  return (
    <>
      {/* Desktop ≥ 1024px */}
      <div className="hidden lg:block">
        <WhyPureeAnimated outerVh={300} />
      </div>
      {/* Mobile / tablet < 1024px */}
      <div className="lg:hidden">
        <WhyPureeAnimated outerVh={220} />
      </div>
    </>
  );
}
