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
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyPuree />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
