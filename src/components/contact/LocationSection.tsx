import { MapPin } from "lucide-react";
import { companyInfo } from "@/lib/data";

/* ============================================
   LocationSection — /kontak
   Styled location panel (no Maps API required).
   Replace inner content with Google Maps embed
   when a real address is available.
   Server Component.
   ============================================ */

export default function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-background section-py border-t border-border"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex items-center gap-2 mb-10 lg:mb-14">
          <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
          <span
            id="location-heading"
            className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red"
          >
            Find Us
          </span>
        </div>

        {/* Location panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8">

          {/* Map placeholder */}
          <div
            className="relative h-64 sm:h-80 lg:h-full min-h-[280px] rounded-sm overflow-hidden border border-border bg-surface-muted flex items-center justify-center"
            role="img"
            aria-label="Lokasi PUREE di Malang, Jawa Timur, Indonesia"
          >
            {/* Grid pattern — architectural feel */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center marker */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shadow-md">
                <MapPin size={22} strokeWidth={2} className="text-white" aria-hidden="true" />
              </div>
              <div className="bg-white border border-border px-5 py-3 rounded-sm text-center shadow-sm">
                <p className="font-display text-lg font-bold text-foreground tracking-tight">
                  MALANG
                </p>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase mt-0.5">
                  East Java, Indonesia
                </p>
              </div>
            </div>

            {/* Replace this div with:
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PUREE"
                />
            */}
          </div>

          {/* Address details */}
          <div className="flex flex-col justify-center gap-6 lg:pl-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight">
                Our Location
              </h2>
              <div className="w-8 h-[2px] bg-brand-red" aria-hidden="true" />
            </div>

            <address className="not-italic flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-0.5 text-brand-red"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {companyInfo.address}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Exact address available upon inquiry.
                  </p>
                </div>
              </div>
            </address>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm border-l-2 border-brand-red pl-4">
              We serve projects across Malang and surrounding areas.
              For out-of-town projects, reach out to discuss scope and availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
