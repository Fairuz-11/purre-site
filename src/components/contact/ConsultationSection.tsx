import ConsultationForm from "./ConsultationForm";

/* ============================================
   ConsultationSection — /kontak
   Server wrapper that provides heading/layout,
   renders client ConsultationForm inside.
   ============================================ */

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      aria-labelledby="consultation-heading"
      className="bg-surface-muted section-py border-t border-border"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left — heading + context */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
              <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
              Start a Conversation
            </span>

            <h2
              id="consultation-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight"
            >
              Tell us about
              <br />
              your project.
            </h2>

            <div className="w-8 h-[2px] bg-brand-red" aria-hidden="true" />

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Tell us a little about your project and our team can better
              understand what you need.
            </p>

            {/* What to expect */}
            <div className="flex flex-col gap-3 mt-2 border-t border-border pt-5">
              <p className="text-[0.6875rem] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                What happens next
              </p>
              {[
                "We review your inquiry.",
                "Our team reaches out within 1–2 business days.",
                "We schedule a free initial consultation.",
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    className="font-display text-[0.6875rem] font-bold text-brand-red flex-shrink-0 w-5"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form (client component) */}
          <div className="bg-white border border-border rounded-sm p-7 sm:p-8 lg:p-10 shadow-sm">
            <ConsultationForm />
          </div>

        </div>
      </div>
    </section>
  );
}
