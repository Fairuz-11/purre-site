/* ============================================
   PortfolioHero — /portofolio
   Compact editorial page hero.
   Server Component.
   ============================================ */

export default function PortfolioHero() {
  return (
    <section
      aria-label="Portfolio hero"
      className="bg-background border-b border-border"
    >
      <div className="container-site py-16 lg:py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-[3px] bg-brand-red flex-shrink-0" aria-hidden="true" />
          <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
            Our Portfolio
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.0] tracking-tight text-foreground">
            Projects that speak
            <br />
            <span className="text-muted-foreground font-semibold">
              for themselves.
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed lg:max-w-md lg:pb-1">
            Explore a selection of projects representing our approach to
            construction, architecture, renovation, and interior design.
          </p>
        </div>
      </div>
    </section>
  );
}
