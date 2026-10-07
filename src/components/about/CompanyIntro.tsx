import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================
   CompanyIntro — /tentang
   Editorial two-column intro + wide image below.
   Server Component.
   ============================================ */

export default function CompanyIntro() {
  return (
    <section
      aria-labelledby="company-intro-heading"
      className="bg-background section-py"
    >
      <div className="container-site flex flex-col gap-16 lg:gap-20">

        {/* ===== Top: two-column ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — heading */}
          <SectionHeading
            eyebrow="Who We Are"
            title="More than a contractor."
            id="company-intro-heading"
          />

          {/* Right — body */}
          <div className="flex flex-col gap-5 lg:pt-3">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              PUREE adalah perusahaan yang bergerak di bidang konstruksi,
              renovasi, arsitektur, dan desain interior. Kami memandang setiap
              proyek sebagai proses untuk menciptakan ruang yang memiliki fungsi,
              karakter, dan kualitas.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Dengan pendekatan yang terstruktur dan perhatian terhadap detail,
              kami berusaha menghadirkan hasil yang sesuai dengan kebutuhan dan
              tujuan setiap klien.
            </p>

            {/* Services tags */}
            <div
              className="flex flex-wrap gap-2 mt-2"
              aria-label="Bidang layanan"
            >
              {[
                "Kontraktor Bangunan",
                "Renovasi",
                "Desain Arsitektur",
                "Desain Interior",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-border text-xs font-medium text-foreground tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom: wide image ===== */}
        <div className="relative w-full aspect-[16/7] lg:aspect-[21/8] rounded-sm overflow-hidden">
          <Image
            src="/images/company/intro-wide.jpg"
            alt="Suasana pekerjaan konstruksi PUREE — detail material dan proses pengerjaan"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Placeholder */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
          >
            <div className="text-center select-none pointer-events-none">
              <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                Company Image
              </p>
              <p className="text-neutral-400 text-[10px] mt-1">
                /images/company/intro-wide.jpg
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
