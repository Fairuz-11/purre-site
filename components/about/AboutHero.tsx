import Image from "next/image";

/* ============================================
   AboutHero — /tentang
   Elegant page hero, lighter than homepage hero.
   Server Component.
   ============================================ */

export default function AboutHero() {
  return (
    <section
      aria-label="About hero"
      className="bg-background border-b border-border overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[420px] lg:min-h-[500px]">

          {/* ===== LEFT — Text ===== */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-14">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[3px] bg-brand-red flex-shrink-0" aria-hidden="true" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                About PUREE
              </span>
            </div>

            {/* Heading — h1 for this page */}
            <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.0] tracking-tight text-foreground mb-6">
              Building with purpose.
              <br />
              <span className="text-muted-foreground font-semibold">
                Creating with precision.
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
              PUREE hadir sebagai partner dalam menghadirkan solusi konstruksi
              dan desain yang mengutamakan kualitas, fungsi, dan proses kerja
              yang profesional.
            </p>
          </div>

          {/* ===== RIGHT — Image ===== */}
          <div className="relative flex items-center py-10 lg:py-16 lg:pl-8">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-sm overflow-hidden">
              <Image
                src="/images/company/about-hero.jpg"
                alt="Tim PUREE bekerja pada proyek konstruksi berkualitas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Placeholder gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
              >
                <div className="text-center select-none pointer-events-none">
                  <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                    About Image
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1">
                    /images/company/about-hero.jpg
                  </p>
                </div>
              </div>
            </div>

            {/* Red accent */}
            <div
              aria-hidden="true"
              className="absolute top-10 lg:top-16 right-0 w-3 h-14 bg-brand-red"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
