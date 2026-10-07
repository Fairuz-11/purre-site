import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

/* ============================================
   RelatedServices — /layanan/[slug]
   Shows the other 3 services (not the current one).
   Server Component.
   ============================================ */

interface Props {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: Props) {
  const related = services.filter((s) => s.slug !== currentSlug);

  return (
    <section
      aria-labelledby="related-heading"
      className="bg-surface-muted section-py border-t border-border"
    >
      <div className="container-site">

        <h2
          id="related-heading"
          className="font-display text-xl font-bold text-foreground mb-10 lg:mb-12"
        >
          You may also need
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
          {related.map((service) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className="group bg-surface p-7 lg:p-8 flex flex-col gap-4 hover:bg-brand-red-light transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              aria-label={`Lihat layanan: ${service.title}`}
            >
              <span
                className="font-display text-[0.6875rem] font-bold tracking-[0.2em] text-brand-red"
                aria-hidden="true"
              >
                {service.number}
              </span>

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-brand-red transition-colors duration-200 leading-tight">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
