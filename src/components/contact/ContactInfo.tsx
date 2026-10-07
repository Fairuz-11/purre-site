import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

/* ============================================
   ContactInfo — /kontak
   Contact details with icons.
   Server Component.
   ============================================ */

const items = [
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    ariaLabel: `Kirim email ke PUREE: ${companyInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\D/g, "")}`,
    ariaLabel: `Telepon PUREE: ${companyInfo.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: companyInfo.whatsapp,
    href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`,
    ariaLabel: `Chat WhatsApp PUREE: ${companyInfo.whatsapp}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: companyInfo.address,
    href: null,
    ariaLabel: null,
  },
] as const;

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      aria-labelledby="contact-info-heading"
      className="bg-surface border-t border-border section-py"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left — heading */}
          <div>
            <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase text-brand-red">
              <span className="block w-5 h-px bg-brand-red" aria-hidden="true" />
              Contact Information
            </span>
            <h2
              id="contact-info-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-4 leading-tight tracking-tight"
            >
              Ways to reach us.
            </h2>
            <div className="w-8 h-[2px] bg-brand-red mt-4" aria-hidden="true" />
          </div>

          {/* Right — contact items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isLast = i === items.length - 1;
              const isLastRow = i >= items.length - 2;

              return (
                <div
                  key={item.label}
                  className={`flex gap-4 py-6 pr-6
                    ${!isLastRow ? "border-b border-border" : ""}
                    ${i % 2 === 0 && i !== items.length - 1 ? "sm:border-r sm:border-border" : ""}
                  `}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border bg-surface-muted rounded-sm"
                    aria-hidden="true"
                  >
                    <Icon size={16} className="text-brand-red" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={item.ariaLabel ?? undefined}
                        className="text-sm font-medium text-foreground hover:text-brand-red transition-colors duration-150 break-words focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground break-words">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
