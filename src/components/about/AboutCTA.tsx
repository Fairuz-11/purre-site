import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ============================================
   AboutCTA — /tentang
   Dark charcoal closing CTA.
   Server Component.
   ============================================ */

export default function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="bg-[#1F1F1F] section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />
            <h2
              id="about-cta-heading"
              className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white"
            >
              Have a project in mind?
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Let&rsquo;s discuss how PUREE can help bring your ideas into reality.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Konsultasi Proyek
              <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </Link>

            <Link
              href="/layanan"
              className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Lihat Layanan
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
