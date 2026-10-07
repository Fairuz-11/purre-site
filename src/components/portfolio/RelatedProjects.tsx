import { portfolioProjects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

/* ============================================
   RelatedProjects — /portofolio/[slug]
   Shows 3 other projects (excludes current).
   Server Component.
   ============================================ */

interface Props {
  currentSlug: string;
}

export default function RelatedProjects({ currentSlug }: Props) {
  const related = portfolioProjects
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section
      aria-labelledby="related-projects-heading"
      className="bg-background section-py border-t border-border"
    >
      <div className="container-site">
        <h2
          id="related-projects-heading"
          className="font-display text-xl font-bold text-foreground mb-10 lg:mb-12"
        >
          More Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {related.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
