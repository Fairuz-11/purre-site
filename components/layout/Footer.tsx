import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import {
  navigation,
  companyInfo,
  footerServices,
  footerLegal,
} from "@/lib/data";

/* ============================================
   Footer — PUREE
   Dark Charcoal / Clean Industrial
   Server Component — no client hooks needed.
   ============================================ */

const CURRENT_YEAR = new Date().getFullYear();

/* Shared heading style for footer columns */
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-5">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Footer situs PUREE" className="bg-[#1F1F1F]">

      {/* =================== MAIN GRID =================== */}
      <div className="container-site pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ---- Column 1: Brand ---- */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
            {/* Logo */}
            <Link
              href="/"
              aria-label="PUREE — Kembali ke Beranda"
              className="inline-block w-fit focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-4 rounded-sm"
            >
              {/* White background pill so logo is readable on dark bg */}
              <span className="flex items-center bg-white px-4 py-2.5 rounded-sm">
                <Image
                  src="/logo/puree-logo-placeholder.svg"
                  alt="PUREE"
                  width={100}
                  height={36}
                  className="h-7 w-auto object-contain"
                  unoptimized
                />
              </span>
            </Link>

            {/* Description */}
            <p className="text-sm text-neutral-400 leading-relaxed max-w-[22rem]">
              {companyInfo.description}
            </p>

            {/* Social links */}
            <div
              className="flex items-center gap-2"
              aria-label="Media sosial PUREE"
            >
              {companyInfo.socialMedia.instagram && (
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1 px-3 h-8 border border-neutral-700 rounded-sm text-[0.6875rem] font-semibold tracking-wider uppercase text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                >
                  IG
                  <ArrowUpRight size={10} strokeWidth={2.5} aria-hidden="true" />
                </a>
              )}
              {companyInfo.socialMedia.facebook && (
                <a
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1 px-3 h-8 border border-neutral-700 rounded-sm text-[0.6875rem] font-semibold tracking-wider uppercase text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                >
                  FB
                  <ArrowUpRight size={10} strokeWidth={2.5} aria-hidden="true" />
                </a>
              )}
              {companyInfo.socialMedia.linkedin && (
                <a
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PUREE (buka di tab baru)"
                  className="inline-flex items-center gap-1 px-3 h-8 border border-neutral-700 rounded-sm text-[0.6875rem] font-semibold tracking-wider uppercase text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                >
                  LI
                  <ArrowUpRight size={10} strokeWidth={2.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* ---- Column 2: Navigasi ---- */}
          <div className="flex flex-col">
            <FooterHeading>Navigasi</FooterHeading>
            <nav aria-label="Navigasi footer" className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-150 w-fit focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ---- Column 3: Layanan ---- */}
          <div className="flex flex-col">
            <FooterHeading>Layanan</FooterHeading>
            <nav aria-label="Layanan PUREE" className="flex flex-col gap-2.5">
              {footerServices.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-150 w-fit focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ---- Column 4: Kontak ---- */}
          <div className="flex flex-col">
            <FooterHeading>Kontak</FooterHeading>
            <address className="not-italic flex flex-col gap-3">
              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
              >
                <Mail
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-neutral-600 group-hover:text-brand-red transition-colors duration-150"
                  aria-hidden="true"
                />
                <span>{companyInfo.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="group flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
              >
                <Phone
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-neutral-600 group-hover:text-brand-red transition-colors duration-150"
                  aria-hidden="true"
                />
                <span>{companyInfo.phone}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-neutral-600"
                  aria-hidden="true"
                />
                <span>{companyInfo.address}</span>
              </div>
            </address>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-red hover:text-[#FF2222] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
              aria-label="Chat via WhatsApp (buka di tab baru)"
            >
              Chat via WhatsApp
              <ArrowUpRight size={12} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>

      {/* =================== BOTTOM BAR =================== */}
      <div className="border-t border-neutral-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright */}
          <p className="text-xs text-neutral-600 order-2 sm:order-1">
            &copy; {CURRENT_YEAR} {companyInfo.name}. All rights reserved.
          </p>

          {/* Legal links */}
          <nav
            aria-label="Legal"
            className="flex items-center gap-5 order-1 sm:order-2"
          >
            {footerLegal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
