import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

/* ============================================
   Services Landing Page — /layanan
   ============================================ */

export const metadata: Metadata = {
  title: "Layanan — PUREE Construction & Design",
  description:
    "Layanan konstruksi, renovasi, desain arsitektur, dan desain interior oleh PUREE — solusi terintegrasi untuk kebutuhan ruang Anda.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}
