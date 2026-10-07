import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/data";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProjectDetailHero from "@/components/portfolio/ProjectDetailHero";
import ProjectOverview from "@/components/portfolio/ProjectOverview";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import RelatedProjects from "@/components/portfolio/RelatedProjects";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

/* ============================================
   Portfolio Detail Page — /portofolio/[slug]
   Dynamic route for all portfolio projects.
   ============================================ */

/* Pre-generate all known slugs at build time */
export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

/* Dynamic metadata per project */
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Proyek Tidak Ditemukan | PUREE" };
  }

  return {
    title: `${project.title} — PUREE`,
    description: project.shortDescription,
  };
}

/* Page */
export default async function PortfolioDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: project.title },
        ]}
      />
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <ProjectGallery project={project} />
      <RelatedProjects currentSlug={project.slug} />
      <PortfolioCTA />
    </>
  );
}
