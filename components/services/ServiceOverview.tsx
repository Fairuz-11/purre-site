import type { Service } from "@/lib/data";

/* ============================================
   ServiceOverview — /layanan/[slug]
   Two-column editorial body copy.
   Server Component.
   ============================================ */

interface Props {
  service: Service;
}

export default function ServiceOverview({ service }: Props) {
  return (
    <section
      aria-labelledby="service-overview-heading"
      className="bg-background section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16 items-start">

          {/* LEFT — label */}
          <div>
            <span
              id="service-overview-heading"
              className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-muted-foreground"
            >
              Overview
            </span>
            <div className="w-8 h-[2px] bg-brand-red mt-3" aria-hidden="true" />
          </div>

          {/* RIGHT — body */}
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
              {service.description}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Setiap proyek ditangani dengan mempertimbangkan kebutuhan spesifik
              klien, kondisi lokasi, dan tujuan akhir yang ingin dicapai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
