"use client";

import { useState } from "react";
import { portfolioProjects, portfolioCategories } from "@/lib/data";
import type { PortfolioCategory } from "@/lib/data";
import PortfolioFilters from "./PortfolioFilters";
import ProjectCard from "./ProjectCard";

/* ============================================
   ProjectGrid — client component
   Wraps filters + filtered grid.
   Only this component is a Client Component.
   ============================================ */

export default function ProjectGrid() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered =
    active === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active);

  return (
    <section
      aria-label="Daftar proyek"
      className="bg-background section-py"
    >
      <div className="container-site">

        {/* Filters */}
        <PortfolioFilters active={active} onChange={setActive} />

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground text-sm">
            Tidak ada proyek dalam kategori ini.
          </p>
        ) : (
          <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {filtered.map((project, i) => {
              // First project in "All" view gets a tall variant spanning 2 rows on lg
              const isFeatured = active === "All" && i === 0;
              return (
                <div
                  key={project.id}
                  className={isFeatured ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <ProjectCard
                    project={project}
                    variant={isFeatured ? "tall" : "default"}
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Result count */}
        <p className="mt-6 text-xs text-muted-foreground" aria-live="polite">
          {filtered.length} proyek
          {active !== "All" ? ` dalam kategori ${active}` : ""} ditampilkan
        </p>
      </div>
    </section>
  );
}
