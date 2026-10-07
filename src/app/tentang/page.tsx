import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import Approach from "@/components/about/Approach";
import AboutCTA from "@/components/about/AboutCTA";

/* ============================================
   About Page — /tentang
   Step 4: Full about page assembly.
   ============================================ */

export const metadata: Metadata = {
  title: "About PUREE — Construction & Design",
  description:
    "Kenali PUREE, perusahaan yang menghadirkan solusi konstruksi, renovasi, arsitektur, dan desain interior dengan pendekatan profesional.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <VisionMission />
      <CoreValues />
      <Approach />
      <AboutCTA />
    </>
  );
}
