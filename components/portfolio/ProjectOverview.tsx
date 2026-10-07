import Link from "next/link";
import { services } from "@/lib/data";
import type { PortfolioProject } from "@/lib/data";

/* ============================================
   ProjectOverview — /portofolio/[slug]
   Two-column: description left, details right.
   Server Component.
   ============================================ */

interface Props {
  project: PortfolioProject;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section
      aria-labelledby="project-overview-heading"
      className="bg-background section-py border-t border-border"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

          {/* LEFT — Overview */}
          <div className="flex flex-col gap-6">
            <span
              id="project-overview-heading"
              className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-muted-foreground"
            >
              Project Overview
            </span>
            <div className="w-8 h-[2px] bg-brand-red" aria-hidden="true" />
            <p className="text-foreground text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
              {project.description}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
              Setiap aspek proyek ditangani dengan mempertimbangkan kebutuhan
              spesifik, kondisi lokasi, dan tujuan akhir yang ingin dicapai.
            </p>
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-0 border border-border rounded-sm overflow-hidden">
            <div className="px-6 py-4 bg-surface-muted border-b border-border">
              <p className="text-[0.6875rem] font-bold tracking-[0.18em] uppercase text-foreground">
                Project Details
              </p>
            </div>

            {/* Detail rows */}
            {[
              { label: "Category", value: project.category },
              { label: "Location", value: project.location },
              { label: "Year", value: project.year },
            ].map((row) => (
              <div
                key={row.label}
                className="px-6 py-4 border-b border-border flex justify-between items-start gap-4"
              >
                <span className="text-xs text-muted-foreground font-medium">
                  {row.label}
                </span>
                <span className="text-xs text-foreground font-semibold text-right">
                  {row.value}
                </span>
              </div>
            ))}

            {/* Services */}
            <div className="px-6 py-4 flex flex-col gap-2">
              <span className="text-xs text-muted-foreground font-medium mb-1">
                Services
              </span>
              {project.services.map((serviceTitle) => {
                const matched = services.find((s) => s.title === serviceTitle);
                return matched ? (
                  <Link
                    key={serviceTitle}
                    href={`/layanan/${matched.slug}`}
                    className="text-xs text-brand-red font-semibold hover:text-brand-red-hover transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm w-fit"
                  >
                    {serviceTitle} →
                  </Link>
                ) : (
                  <span key={serviceTitle} className="text-xs text-foreground font-medium">
                    {serviceTitle}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
