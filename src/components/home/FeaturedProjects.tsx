import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/lib/data";

/* ============================================
   FeaturedProjects — PUREE Homepage
   Editorial layout: 1 large + 2 small.
   Server Component.
   ============================================ */

/* Placeholder fill shown when project image is missing */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex flex-col items-center justify-center gap-1"
    >
      <p className="text-neutral-500 text-[10px] font-medium tracking-widest uppercase">
        Project Image
      </p>
      <p className="text-neutral-400 text-[9px]">{label}</p>
    </div>
  );
}

export default function FeaturedProjects() {
  const large = featuredProjects.find((p) => p.size === "large");
  const smalls = featuredProjects.filter((p) => p.size === "small");

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-background section-py border-t border-border"
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Projects that speak for themselves."
            description="Beberapa proyek pilihan yang merepresentasikan pendekatan PUREE terhadap kualitas, fungsi, dan desain."
            id="projects-heading"
          />
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 lg:gap-5">

          {/* Large featured card */}
          {large && (
            <Link
              href={`/portofolio/${large.slug}`}
              className="group relative block overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              aria-label={`Lihat proyek: ${large.title}`}
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px] w-full overflow-hidden">
                <Image
                  src={large.image}
                  alt={large.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <ImagePlaceholder label={large.image} />

                {/* Overlay gradient for text readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Card info */}
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/70 mb-1">
                    {large.category} · {large.location}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {large.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          )}

          {/* Small cards stack */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {smalls.map((project) => (
              <Link
                key={project.id}
                href={`/portofolio/${project.slug}`}
                className="group relative block overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                aria-label={`Lihat proyek: ${project.title}`}
              >
                <div className="relative aspect-[16/9] lg:h-[248px] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <ImagePlaceholder label={project.image} />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[0.625rem] font-semibold tracking-[0.16em] uppercase text-white/65 mb-0.5">
                      {project.category} · {project.location}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2}
                      className="text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <div className="mt-10 lg:mt-12 flex justify-center">
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border-strong hover:border-brand-red hover:text-brand-red transition-colors duration-200 px-6 h-11 rounded focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
          >
            Lihat Semua Proyek
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
