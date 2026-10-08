"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navigation, ctaNavigation, companyInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ============================================
   Navbar — PUREE
   Clean Industrial / Modern Corporate
   Client Component: scroll, active route, mobile menu
   ============================================ */

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* ---- Hydration-safe scroll detection ---- */
  useEffect(() => {
    // Read initial scroll position after mount (avoids SSR mismatch)
    setIsScrolled(window.scrollY > 16);

    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Close mobile menu on navigation ---- */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  /* ---- Lock body scroll while mobile menu is open ---- */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      {/* ===================== NAVBAR BAR ===================== */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50",
          "bg-white",
          "transition-shadow duration-300",
          isScrolled
            ? "shadow-[0_1px_0_0_#E5E5E5,0_4px_16px_-4px_rgba(0,0,0,0.08)]"
            : "shadow-[0_1px_0_0_#E5E5E5]"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] md:h-[84px]">

            {/* ---- Logo ---- */}
            <Link
              href="/"
              aria-label="PUREE — Kembali ke Beranda"
              className="flex-shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-4 rounded-sm"
            >
              <Image
                src="/logo/puree-logo-placeholder.svg"
                alt="PUREE"
                width={108}
                height={40}
                className="h-9 w-auto object-contain"
                unoptimized
              />
            </Link>

            {/* ---- Desktop Nav ---- */}
            <nav
              aria-label="Navigasi utama"
              className="hidden md:flex items-center gap-1"
            >
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-4 py-2 text-[0.8125rem] font-medium tracking-wide",
                      "transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm",
                      isActive
                        ? "text-brand-red"
                        : "text-neutral-700 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {/* Active indicator — thin red bar at bottom */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-red rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ---- Desktop Right: phone + CTA ---- */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone quick contact */}
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground hover:text-brand-red transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                aria-label={`Telepon PUREE: ${companyInfo.phone}`}
              >
                <Phone size={13} aria-hidden="true" />
                <span>{companyInfo.phone}</span>
              </a>

              {/* Divider */}
              <span className="w-px h-5 bg-border" aria-hidden="true" />

              {/* CTA */}
              <Link
                href={ctaNavigation.href}
                className={cn(
                  "inline-flex items-center h-10 px-5 rounded",
                  "text-[0.8125rem] font-semibold tracking-wide text-white",
                  "bg-brand-red hover:bg-brand-red-hover",
                  "transition-colors duration-200",
                  "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                )}
              >
                {ctaNavigation.label}
              </Link>
            </div>

            {/* ---- Mobile: hamburger ---- */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMobileOpen}
              aria-controls="navbar-mobile-menu"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className={cn(
                "md:hidden flex items-center justify-center",
                "w-10 h-10 -mr-2 rounded",
                "text-foreground transition-colors",
                "hover:bg-surface-muted hover:text-brand-red",
                "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              )}
            >
              {isMobileOpen ? (
                <X size={20} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px] md:hidden"
              aria-hidden="true"
              onClick={closeMobileMenu}
            />

            {/* Panel */}
            <motion.div
              key="mobile-panel"
              id="navbar-mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className={cn(
                "fixed inset-x-0 top-[72px] z-40 md:hidden",
                "bg-white border-b border-border",
                "shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)]"
              )}
            >
              <div className="container-site pb-6 pt-2">
                {/* Nav links */}
                <nav
                  aria-label="Navigasi mobile"
                  className="flex flex-col"
                >
                  {navigation.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.18 }}
                      >
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between",
                            "py-4 border-b border-border",
                            "text-base font-medium tracking-wide",
                            "transition-colors duration-150",
                            "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm",
                            isActive
                              ? "text-brand-red"
                              : "text-foreground hover:text-brand-red"
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-brand-red"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA + contact */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.2 }}
                  className="flex flex-col gap-3 pt-6"
                >
                  <Link
                    href={ctaNavigation.href}
                    className={cn(
                      "flex items-center justify-center h-12 w-full rounded",
                      "text-sm font-semibold tracking-wide text-white",
                      "bg-brand-red hover:bg-brand-red-hover",
                      "transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                    )}
                  >
                    {ctaNavigation.label}
                  </Link>

                  <a
                    href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                    className={cn(
                      "flex items-center justify-center gap-2 h-11 w-full rounded",
                      "text-sm font-medium text-muted-foreground",
                      "border border-border hover:border-brand-red hover:text-brand-red",
                      "transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                    )}
                    aria-label={`Telepon PUREE: ${companyInfo.phone}`}
                  >
                    <Phone size={14} aria-hidden="true" />
                    {companyInfo.phone}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===================== SPACER ===================== */}
      {/* Pushes page content below the fixed navbar */}
      <div className="h-[72px] md:h-[84px]" aria-hidden="true" />
    </>
  );
}
