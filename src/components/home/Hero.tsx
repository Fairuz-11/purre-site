"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================
   Hero — PUREE Homepage
   Split layout: text left, image right (desktop).
   Stack on mobile.
   Client Component: entrance animations via motion.
   ============================================ */

/* Shared easing — as const tuple for motion type safety */
const EASE = [0.25, 0.1, 0.25, 1] as const;

/* Helper to build fade-up motion props inline */
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE, delay },
  } as const;
}

export default function Hero() {
  return (
    <section aria-label="Hero" className="bg-background overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100svh-84px)] lg:min-h-[640px] xl:min-h-[720px]">

          {/* ===== LEFT — Text ===== */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-12 xl:pr-16">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
              <span
                className="block w-8 h-[3px] bg-brand-red flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                Construction &amp; Design
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.1)}
              className={cn(
                "font-display font-extrabold leading-[0.95] tracking-tight",
                "text-[clamp(2.75rem,7vw,5rem)]",
                "text-foreground mb-6"
              )}
            >
              BUILDING
              <br />
              <span className="text-brand-red">WHAT</span>
              <br />
              MATTERS.
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mb-10"
            >
              Solusi konstruksi, renovasi, arsitektur, dan interior untuk
              membangun ruang yang berkualitas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/kontak"
                className={cn(
                  "inline-flex items-center gap-2 h-12 px-7 rounded",
                  "text-sm font-semibold tracking-wide text-white",
                  "bg-brand-red hover:bg-brand-red-hover",
                  "transition-colors duration-200",
                  "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                )}
              >
                Konsultasi Proyek
                <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </Link>

              <Link
                href="/portofolio"
                className={cn(
                  "inline-flex items-center gap-2 h-12 px-7 rounded",
                  "text-sm font-semibold tracking-wide text-foreground",
                  "border border-border-strong",
                  "hover:border-brand-red hover:text-brand-red",
                  "transition-colors duration-200",
                  "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                )}
              >
                Lihat Portofolio
              </Link>
            </motion.div>

            {/* Services strip */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-14 pt-8 border-t border-border"
            >
              {[
                "Kontraktor Bangunan",
                "Renovasi",
                "Desain Arsitektur",
                "Desain Interior",
              ].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ===== RIGHT — Image ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
            className="relative flex items-center py-10 lg:py-16 lg:pl-8"
          >
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] xl:h-[580px] rounded-sm overflow-hidden">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Proyek konstruksi PUREE — bangunan modern berkualitas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Fallback shown when image file not yet present */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
              >
                <div className="text-center select-none pointer-events-none">
                  <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                    Hero Image
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1">
                    /images/hero/hero-main.jpg
                  </p>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div
              aria-hidden="true"
              className="absolute bottom-14 lg:bottom-20 left-0 lg:left-4 bg-white border border-border rounded-sm px-4 py-3 shadow-sm"
            >
              <p className="text-[0.625rem] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                Construction &amp; Design
              </p>
              <p className="text-xs font-semibold text-foreground mt-0.5">
                Professional. Reliable. Quality.
              </p>
            </div>

            {/* Red accent bar */}
            <div
              aria-hidden="true"
              className="absolute top-10 lg:top-16 right-0 w-3 h-16 bg-brand-red"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
