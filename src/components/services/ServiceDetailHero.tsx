import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

/* ============================================
   ServiceDetailHero — /layanan/[slug]
   Hero section for individual service pages.
   Server Component.
   ============================================ */

interface Props {
  service: Service;
}

export default function ServiceDetailHero({ service }: Props) {
  return (
    <section
      aria-label={`Hero — ${service.title}`}
      className="bg-background border-b border-border overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[480px]">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-14">
            {/* Number + eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="font-display text-[0.6875rem] font-bold tracking-[0.22em] text-brand-red"
                aria-hidden="true"
              >
                {service.number}
              </span>
              <span className="w-px h-4 bg-border" aria-hidden="true" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
                Our Service
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.0] tracking-tight text-foreground mb-6">
              {service.title}
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mb-8">
              {service.shortDescription}
            </p>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 w-fit h-11 px-6 rounded bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Konsultasi Proyek
              <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          {/* RIGHT — image */}
          <div className="relative flex items-center py-10 lg:py-16 lg:pl-8">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-sm overflow-hidden">
              <Image
                src={service.image}
                alt={`PUREE — ${service.title}`}
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
                    Service Image
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1">
                    {service.image}
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
