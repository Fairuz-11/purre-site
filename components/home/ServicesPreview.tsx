import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesPreviews } from "@/lib/data";

/* ============================================
   ServicesPreview — PUREE Homepage
   2×2 clean white service cards.
   Server Component.
   ============================================ */

export default function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-surface section-py border-t border-border"
    >
      <div className="container-site">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Our Services"
            title="Solusi lengkap untuk kebutuhan ruang Anda."
            id="services-heading"
          />
          <p className="text-muted-foreground text-base leading-relaxed lg:max-w-md">
            Mulai dari pembangunan hingga detail interior, PUREE menghadirkan
            layanan yang terintegrasi dalam satu proses.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {servicesPreviews.map((service) => (
            <article
              key={service.id}
              className="group bg-surface p-8 lg:p-10 flex flex-col gap-5 hover:bg-brand-red-light transition-colors duration-300"
            >
              {/* Number */}
              <span
                className="text-[0.6875rem] font-bold tracking-[0.2em] text-brand-red"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Title + arrow */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-brand-red transition-colors duration-200">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={`/layanan/${service.slug}`}
                className="text-xs font-semibold tracking-wide text-brand-red hover:text-brand-red-hover transition-colors duration-150 w-fit focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                aria-label={`Selengkapnya tentang ${service.title}`}
              >
                Selengkapnya →
              </Link>
            </article>
          ))}
        </div>

        {/* All services CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border-strong hover:border-brand-red hover:text-brand-red transition-colors duration-200 px-6 h-11 rounded focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
          >
            Lihat Semua Layanan
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
