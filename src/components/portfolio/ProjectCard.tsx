import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ============================================
   ProjectCard — reusable portfolio card
   Used by ProjectGrid and RelatedProjects.
   Server Component.
   ============================================ */

interface Props {
  project: PortfolioProject;
  /** "default" = standard aspect, "tall" = taller editorial card */
  variant?: "default" | "tall";
  className?: string;
}

export default function ProjectCard({
  project,
  variant = "default",
  className,
}: Props) {
  return (
    <Link
      href={`/portofolio/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-sm",
        "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
        className
      )}
      aria-label={`Lihat proyek: ${project.title}`}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          variant === "tall"
            ? "aspect-[3/4]"
            : "aspect-[4/3]"
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Placeholder gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
        >
          <div className="text-center select-none pointer-events-none">
            <p className="text-neutral-500 text-[10px] font-medium tracking-widest uppercase">
              {project.category}
            </p>
            <p className="text-neutral-400 text-[9px] mt-0.5">{project.image}</p>
          </div>
        </div>

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent transition-opacity duration-300 group-hover:from-foreground/65"
          aria-hidden="true"
        />
      </div>

      {/* Info bar */}
      <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase text-white/65 mb-1">
            {project.category} &middot; {project.location}
          </p>
          <h3 className="font-display text-lg lg:text-xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        <div
          className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  );
}
