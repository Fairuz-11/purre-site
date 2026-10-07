import { serviceWorkSteps } from "@/lib/data";

/* ============================================
   ServiceProcess — /layanan/[slug]
   4-step "How We Work" section.
   Horizontal timeline on desktop, vertical on mobile.
   Server Component.
   ============================================ */

export default function ServiceProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-surface section-py border-t border-border"
    >
      <div className="container-site">

        {/* Header */}
        <div className="mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
            <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
            How We Work
          </span>
          <h2
            id="process-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-4 leading-tight tracking-tight"
          >
            From first call to final delivery.
          </h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-0" aria-label="Tahapan kerja PUREE">
          {serviceWorkSteps.map((step, i) => (
            <div key={step.number} className="flex flex-col gap-0">
              <div className="flex items-center mb-8" aria-hidden="true">
                <div className="w-9 h-9 rounded-full border-2 border-brand-red bg-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-[0.625rem] font-bold text-brand-red">
                    {step.number}
                  </span>
                </div>
                {i < serviceWorkSteps.length - 1 && (
                  <div className="flex-1 h-px bg-border" />
                )}
              </div>
              <div className="flex flex-col gap-2 pr-8">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <ol className="md:hidden flex flex-col" aria-label="Tahapan kerja PUREE">
          {serviceWorkSteps.map((step, i) => (
            <li key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="w-9 h-9 rounded-full border-2 border-brand-red bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-[0.625rem] font-bold text-brand-red">
                    {step.number}
                  </span>
                </div>
                {i < serviceWorkSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1" />
                )}
              </div>
              <div className={`flex flex-col gap-2 ${i < serviceWorkSteps.length - 1 ? "pb-10" : ""}`}>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
