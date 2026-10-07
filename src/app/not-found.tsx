import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ============================================
   404 Not Found — PUREE
   Clean industrial design, matches brand.
   ============================================ */

export const metadata: Metadata = {
  title: "404 — Page Not Found | PUREE",
  description: "The page you are looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center bg-background">
      <div className="container-site py-20">
        <div className="max-w-lg">
          {/* Red accent */}
          <div className="w-10 h-[3px] bg-brand-red mb-8" aria-hidden="true" />

          {/* 404 number */}
          <p className="font-display text-[clamp(5rem,15vw,9rem)] font-extrabold leading-none tracking-tight text-border-strong select-none">
            404
          </p>

          {/* Heading */}
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-4 mb-4 leading-tight tracking-tight">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-11 px-6 rounded bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
