import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

/* ============================================
   Portfolio Landing Page — /portofolio
   ============================================ */

export const metadata: Metadata = {
  title: "Portfolio — PUREE Construction & Design",
  description:
    "Explore selected PUREE projects across construction, renovation, architecture, and interior design.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <ProjectGrid />
      <PortfolioCTA />
    </main>
  );
}
