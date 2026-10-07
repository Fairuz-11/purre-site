import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyPuree from "@/components/home/WhyPuree";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FinalCTA from "@/components/home/FinalCTA";

/* ============================================
   Homepage — PUREE
   Step 3: Full homepage assembly.
   ============================================ */

export const metadata: Metadata = {
  title: "PUREE — Construction & Design",
  description:
    "PUREE menyediakan solusi konstruksi, renovasi, arsitektur, dan interior dengan pendekatan profesional dan berkualitas.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Services */}
      <ServicesPreview />

      {/* 4. Why PUREE */}
      <WhyPuree />

      {/* 5. Featured Projects */}
      <FeaturedProjects />

      {/* 6. Final CTA */}
      <FinalCTA />
    </>
  );
}
