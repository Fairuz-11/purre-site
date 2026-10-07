import Image from "next/image";
import type { PortfolioProject } from "@/lib/data";

/* ============================================
   ProjectDetailHero — /portofolio/[slug]
   Full-width project title + large hero image.
   Server Component.
   ============================================ */

interface Props {
  project: PortfolioProject;
}

export default function ProjectDetailHero({ project }: Props) {
  return (
    <section aria-label={`Hero — ${project.title}`} className="bg-background">

      {/* Title block */}
      <div className="container-site pt-12 pb-8 lg:pt-16 lg:pb-10">
        <div className="flex items-start gap-6 flex-wrap">
          {/* Category badge */}
          <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
            <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
            {project.category}
          </span>
        </div>

        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-tight text-foreground mt-5 mb-6">
          {project.title}
        </h1>

        {/* Meta row */}
        <div className="flex items-center flex-wrap gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              Location
            </span>
            <span className="text-[0.6875rem] font-medium text-foreground">
              {project.location}
            </span>
          </div>
          <span className="w-px h-3 bg-border" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              Year
            </span>
            <span className="text-[0.6875rem] font-medium text-foreground">
              {project.year}
            </span>
          </div>
          <span className="w-px h-3 bg-border" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              Services
            </span>
            <span className="text-[0.6875rem] font-medium text-foreground">
              {project.services.join(", ")}
            </span>
          </div>
        </div>
      </div>

      {/* Large hero image */}
      <div className="container-site pb-0">
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src={project.image}
            alt={`${project.title} — PUREE`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Placeholder */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
          >
            <div className="text-center select-none pointer-events-none">
              <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                Project Image
              </p>
              <p className="text-neutral-400 text-[10px] mt-1">{project.image}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
