import SectionHeading from "@/components/ui/SectionHeading";
import { coreValues } from "@/lib/data";

/* ============================================
   CoreValues — /tentang
   2×2 clean grid, numbered cards.
   Server Component.
   ============================================ */

export default function CoreValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-surface section-py border-t border-border"
    >
      <div className="container-site">

        {/* Header */}
        <SectionHeading
          eyebrow="Our Values"
          title="What guides our work."
          id="values-heading"
          className="mb-12 lg:mb-16 max-w-xl"
        />

        {/* 2×2 grid — gap via bg-border technique */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {coreValues.map((value) => (
            <article
              key={value.number}
              className="group bg-surface p-8 lg:p-10 flex flex-col gap-5 hover:bg-brand-red-light transition-colors duration-300"
            >
              {/* Number */}
              <span
                className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-brand-red"
                aria-hidden="true"
              >
                {value.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-brand-red transition-colors duration-200">
                {value.title}
              </h3>

              {/* Thin red bar */}
              <div
                className="w-8 h-[2px] bg-border group-hover:bg-brand-red transition-colors duration-300"
                aria-hidden="true"
              />

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
