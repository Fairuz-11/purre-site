import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================
   WhyPuree — PUREE Homepage
   Editorial split layout: heading left, rows right.
   Server Component.
   ============================================ */

const points = [
  {
    number: "01",
    title: "Professional Team",
    description:
      "Ditangani dengan pendekatan kerja yang terstruktur dan profesional.",
  },
  {
    number: "02",
    title: "Quality First",
    description:
      "Setiap proses memperhatikan kualitas material, pengerjaan, dan hasil akhir.",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    description:
      "Perencanaan pekerjaan dilakukan dengan mempertimbangkan target waktu proyek.",
  },
  {
    number: "04",
    title: "Transparent Process",
    description:
      "Komunikasi dan proses kerja dibuat jelas sejak awal hingga proyek selesai.",
  },
] as const;

export default function WhyPuree() {
  return (
    <section
      aria-labelledby="why-puree-heading"
      className="bg-surface-muted section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ===== LEFT — Heading ===== */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why PUREE"
              title="More than construction."
              id="why-puree-heading"
            />
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-sm">
              We build with responsibility.
            </p>

            {/* Decorative red line */}
            <div
              className="mt-8 w-12 h-[3px] bg-brand-red"
              aria-hidden="true"
            />
          </div>

          {/* ===== RIGHT — Rows ===== */}
          <div className="flex flex-col">
            {points.map((point, i) => (
              <div
                key={point.number}
                className={`flex gap-6 py-8 ${i < points.length - 1 ? "border-b border-border" : ""}`}
              >
                {/* Number */}
                <span
                  className="font-display text-[0.8125rem] font-bold text-brand-red tracking-wide flex-shrink-0 w-7 pt-0.5"
                  aria-hidden="true"
                >
                  {point.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
