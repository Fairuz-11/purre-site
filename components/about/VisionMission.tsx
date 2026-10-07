import { companyVision, companyMission } from "@/lib/data";

/* ============================================
   VisionMission — /tentang
   Editorial composition: vision statement + mission rows.
   Background: surface-muted.
   Server Component.
   ============================================ */

export default function VisionMission() {
  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="bg-surface-muted section-py border-t border-border"
    >
      <div className="container-site">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-12 lg:mb-16">
          <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
          <span
            id="vision-mission-heading"
            className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red"
          >
            Vision &amp; Mission
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ===== VISION ===== */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Vision
            </h2>

            {/* Red accent line */}
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <blockquote className="font-display text-[clamp(1.25rem,3vw,1.875rem)] font-bold leading-snug tracking-tight text-foreground">
              &ldquo;{companyVision}&rdquo;
            </blockquote>
          </div>

          {/* ===== MISSION ===== */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Mission
            </h2>

            {/* Red accent line */}
            <div className="w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <ol className="flex flex-col" aria-label="Misi PUREE">
              {companyMission.map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-5 py-5 ${i < companyMission.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span
                    className="font-display text-[0.75rem] font-bold text-brand-red tracking-wide flex-shrink-0 w-6 pt-0.5"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
