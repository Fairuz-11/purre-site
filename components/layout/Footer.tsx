import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { navigation, companyInfo } from "@/lib/data";

/* ============================================
   Footer Component
   Server Component — no client hooks needed.
   ============================================ */

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="bg-charcoal border-t border-border"
    >
      {/* Main Footer Grid */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="/"
              aria-label="PUREE — Kembali ke Beranda"
              className="inline-block focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
            >
              <Image
                src="/logo/puree-logo-placeholder.svg"
                alt="PUREE"
                width={110}
                height={40}
                className="h-9 w-auto object-contain"
                unoptimized
              />
            </Link>

            <p className="text-gray-light text-sm leading-relaxed max-w-xs">
              {companyInfo.description}
            </p>

            {/* Social Media */}
            <div
              className="flex items-center gap-3"
              aria-label="Media sosial PUREE"
            >
              {companyInfo.socialMedia.instagram && (
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1.5 px-3 h-9 border border-border text-xs font-medium text-gray-light hover:text-off-white hover:border-gray transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  IG
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              )}
              {companyInfo.socialMedia.facebook && (
                <a
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1.5 px-3 h-9 border border-border text-xs font-medium text-gray-light hover:text-off-white hover:border-gray transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  FB
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              )}
              {companyInfo.socialMedia.linkedin && (
                <a
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1.5 px-3 h-9 border border-border text-xs font-medium text-gray-light hover:text-off-white hover:border-gray transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                >
                  LI
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray">
              Navigasi
            </h3>
            <nav
              aria-label="Navigasi footer"
              className="flex flex-col gap-3"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-light hover:text-off-white transition-colors duration-150 w-fit focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray">
              Hubungi Kami
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-gray-light hover:text-off-white transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
              >
                <Phone
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-gray group-hover:text-gold transition-colors"
                  aria-hidden="true"
                />
                <span>{companyInfo.phone}</span>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-2.5 text-sm text-gray-light hover:text-off-white transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
              >
                <Mail
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-gray group-hover:text-gold transition-colors"
                  aria-hidden="true"
                />
                <span>{companyInfo.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-sm text-gray-light">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-gray"
                  aria-hidden="true"
                />
                <span>{companyInfo.address}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray order-2 sm:order-1">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray order-1 sm:order-2">
            Construction & Design
          </p>
        </div>
      </div>
    </footer>
  );
}
