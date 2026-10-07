import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

/* ============================================
   Approach — /tentang
   4-step process: horizontal on desktop, vertical on mobile.
   Server Component.
   ============================================ */

export default function Approach() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="bg-background section-py border-t border-border"
    >
      <div className="container-site">

        {/* Header */}
        <SectionHeading
          eyebrow="Our Approach"
          title="From idea to execution."
          id="approach-heading"
          className="mb-14 lg:mb-20 max-w-xl"
        />

        {/* ===== DESKTOP: horizontal timeline ===== */}
        <div
          className="hidden md:grid grid-cols-4 gap-0"
          aria-label="Tahapan proses PUREE"
        >
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-0">

              {/* Connector line across the top */}
              <div className="flex items-center mb-8" aria-hidden="true">
                {/* Circle */}
                <div className="w-9 h-9 rounded-full border-2 border-brand-red bg-white flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-[0.625rem] font-bold text-brand-red">
                    {step.number}
                  </span>
                </div>
                {/* Horizontal line — not on last item */}
                {i < processSteps.length - 1 && (
                  <div className="flex-1 h-px bg-border ml-0" />
                )}
              </div>

              {/* Content */}
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

        {/* ===== MOBILE: vertical stack ===== */}
        <ol
          className="md:hidden flex flex-col"
          aria-label="Tahapan proses PUREE"
        >
          {processSteps.map((step, i) => (
            <li key={step.number} className="flex gap-6">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="w-9 h-9 rounded-full border-2 border-brand-red bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-[0.625rem] font-bold text-brand-red">
                    {step.number}
                  </span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1" />
                )}
              </div>

              {/* Right: content */}
              <div
                className={`flex flex-col gap-2 ${
                  i < processSteps.length - 1 ? "pb-10" : ""
                }`}
              >
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
