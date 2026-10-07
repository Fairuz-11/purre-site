/* ============================================
   ContactHero — /kontak
   Editorial hero, text-dominant, clean whitespace.
   Server Component.
   ============================================ */

export default function ContactHero() {
  return (
    <section
      aria-label="Contact hero"
      className="bg-background border-b border-border"
    >
      <div className="container-site py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">

          {/* Left — main heading */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[3px] bg-brand-red flex-shrink-0" aria-hidden="true" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                Get in Touch
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-tight text-foreground">
              LET&rsquo;S BUILD
              <br />
              <span className="text-brand-red">SOMETHING</span>
              <br />
              GREAT.
            </h1>
          </div>

          {/* Right — supporting text + quick links */}
          <div className="flex flex-col gap-6 lg:pb-2">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
              Have a project in mind? Tell us what you are planning and
              let&rsquo;s discuss how PUREE can help bring it to life.
            </p>

            {/* Quick anchor links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center h-11 px-6 rounded bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              >
                Start a Conversation
              </a>
              <a
                href="#contact-info"
                className="inline-flex items-center justify-center h-11 px-6 rounded border border-border-strong hover:border-brand-red hover:text-brand-red text-foreground text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              >
                Contact Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
