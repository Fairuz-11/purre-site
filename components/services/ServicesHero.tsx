import Image from "next/image";

/* ============================================
   ServicesHero — /layanan
   Editorial page hero, lighter than homepage.
   Server Component.
   ============================================ */

export default function ServicesHero() {
  return (
    <section
      aria-label="Services hero"
      className="bg-background border-b border-border overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[380px] lg:min-h-[460px]">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[3px] bg-brand-red flex-shrink-0" aria-hidden="true" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                Our Services
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.0] tracking-tight text-foreground mb-6">
              Solutions built around
              <br />
              <span className="text-muted-foreground font-semibold">
                your needs.
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
              Mulai dari pembangunan hingga detail interior, PUREE menghadirkan
              solusi yang terintegrasi untuk kebutuhan ruang Anda.
            </p>
          </div>

          {/* RIGHT — image */}
          <div className="relative flex items-center py-10 lg:py-16 lg:pl-8">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[380px] rounded-sm overflow-hidden">
              <Image
                src="/images/services/services-hero.jpg"
                alt="PUREE — layanan konstruksi dan desain profesional"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Placeholder */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
              >
                <div className="text-center select-none pointer-events-none">
                  <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                    Services Image
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1">
                    /images/services/services-hero.jpg
                  </p>
                </div>
              </div>
            </div>
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
