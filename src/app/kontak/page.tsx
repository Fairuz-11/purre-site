import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ConsultationSection from "@/components/contact/ConsultationSection";
import LocationSection from "@/components/contact/LocationSection";
import ContactCTA from "@/components/contact/ContactCTA";

/* ============================================
   Contact Page — /kontak
   Step 7: Full contact page assembly.
   ============================================ */

export const metadata: Metadata = {
  title: "Contact PUREE — Construction & Design",
  description:
    "Get in touch with PUREE for construction, renovation, architectural design, and interior design projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ConsultationSection />
      <LocationSection />
      <ContactCTA />
    </>
  );
}
