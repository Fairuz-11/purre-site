import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ============================================
   FinalCTA — PUREE Homepage
   Dark charcoal closing section.
   Server Component.
   ============================================ */

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-[#1F1F1F] section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* ===== Text ===== */}
          <div className="flex flex-col gap-6">
            {/* Red accent bar */}
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <h2
              id="final-cta-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.0] tracking-tight text-white"
            >
              LET&rsquo;S BUILD
              <br />
              SOMETHING GREAT.
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Diskusikan kebutuhan proyek Anda bersama tim PUREE.
            </p>

            {/* Secondary note */}
            <p className="text-neutral-600 text-sm">
              Hubungi kami untuk konsultasi awal — tanpa biaya, tanpa kewajiban.
            </p>
          </div>

          {/* ===== CTA block ===== */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Konsultasi Proyek
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>

            <Link
              href="/portofolio"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Lihat Portofolio
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
