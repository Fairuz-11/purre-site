import type { Service } from "@/lib/data";

/* ============================================
   ServiceFeatures — /layanan/[slug]
   Numbered list of scope-of-service items.
   Background: surface-muted.
   Server Component.
   ============================================ */

interface Props {
  service: Service;
}

export default function ServiceFeatures({ service }: Props) {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-surface-muted section-py border-t border-border"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left — heading */}
          <div>
            <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
              <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
              Scope of Service
            </span>
            <h2
              id="features-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-4 leading-tight tracking-tight"
            >
              Apa yang
              <br />
              kami kerjakan.
            </h2>
          </div>

          {/* Right — numbered list */}
          <ol aria-label={`Scope of service — ${service.title}`} className="flex flex-col">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className={`flex items-center gap-6 py-5 ${
                  i < service.features.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span
                  className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-brand-red flex-shrink-0 w-7"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground text-base font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
