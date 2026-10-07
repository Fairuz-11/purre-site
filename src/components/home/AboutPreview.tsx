import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ============================================
   AboutPreview — PUREE Homepage
   Two-column editorial intro section.
   Server Component.
   ============================================ */

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="bg-background section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ===== LEFT — Heading ===== */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
              <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
              About PUREE
            </span>

            {/* Red accent bar */}
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            {/* Heading */}
            <h2
              id="about-preview-heading"
              className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Built with precision.
              <br />
              <span className="text-muted-foreground font-semibold">
                Designed with purpose.
              </span>
            </h2>

            {/* CTA */}
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 w-fit mt-2 text-sm font-semibold text-brand-red hover:text-brand-red-hover transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
            >
              Kenal Lebih Dekat
              <ArrowRight
                size={15}
                strokeWidth={2.2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* ===== RIGHT — Body ===== */}
          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              PUREE hadir sebagai partner dalam menghadirkan solusi konstruksi
              dan desain yang mengutamakan kualitas, ketepatan, dan proses kerja
              yang profesional.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Kami bekerja di empat bidang utama — konstruksi bangunan, renovasi,
              desain arsitektur, dan desain interior — dengan pendekatan yang
              terintegrasi agar setiap proyek berjalan efisien dari awal hingga
              selesai.
            </p>

            {/* Feature list */}
            <ul
              className="grid grid-cols-2 gap-3 mt-2"
              aria-label="Bidang layanan PUREE"
            >
              {[
                "Kontraktor Bangunan",
                "Renovasi",
                "Desain Arsitektur",
                "Desain Interior",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground font-medium"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
