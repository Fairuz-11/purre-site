import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";

/* ============================================
   Service Detail Page — /layanan/[slug]
   Dynamic route — all 4 service pages.
   ============================================ */

/* Pre-generate all known service slugs at build time */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* Dynamic metadata per service */
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Layanan Tidak Ditemukan | PUREE" };
  }

  return {
    title: `${service.title} | PUREE`,
    description: service.shortDescription,
  };
}

/* Page component */
export default async function ServiceDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Layanan", href: "/layanan" },
          { label: service.title },
        ]}
      />
      <ServiceDetailHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess />
      <RelatedServices currentSlug={service.slug} />
      <ServiceDetailCTA />
    </>
  );
}
