import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

/* ============================================
   ServicesList — /layanan
   Horizontal editorial rows for all services.
   Server Component.
   ============================================ */

export default function ServicesList() {
  return (
    <section
      aria-labelledby="services-list-heading"
      className="bg-background section-py"
    >
      <div className="container-site">
        <h2 id="services-list-heading" className="sr-only">
          Daftar Layanan PUREE
        </h2>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className={`
                group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10
                py-8 lg:py-10
                ${i < services.length - 1 ? "border-b border-border" : ""}
                hover:bg-surface-muted -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8
                transition-colors duration-200 rounded-sm
                focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2
              `}
              aria-label={`Lihat layanan: ${service.title}`}
            >
              {/* Number */}
              <span
                className="font-display text-[0.75rem] font-bold tracking-[0.2em] text-brand-red flex-shrink-0 w-8"
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Title */}
              <h3
                className="font-display text-xl lg:text-2xl font-bold text-foreground
                  group-hover:text-brand-red transition-colors duration-200
                  flex-shrink-0 w-full sm:w-64 lg:w-72"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                {service.shortDescription}
              </p>

              {/* Arrow */}
              <div className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-brand-red">
                <span className="hidden sm:inline">Lihat layanan</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
