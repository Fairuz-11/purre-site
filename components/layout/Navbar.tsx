"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, ctaNavigation } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ============================================
   Navbar Component
   Sticky header with mobile menu support.
   ============================================ */

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Detect scroll to add backdrop */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            aria-label="PUREE — Kembali ke Beranda"
            className="relative flex-shrink-0 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
          >
            <Image
              src="/logo/puree-logo-placeholder.svg"
              alt="PUREE"
              width={100}
              height={36}
              className="h-8 md:h-9 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-8"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-200",
                    "relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-red",
                    "after:transition-all after:duration-200",
                    isActive
                      ? "text-off-white after:w-full"
                      : "text-gray-light hover:text-off-white after:w-0 hover:after:w-full"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href={ctaNavigation.href}
              className={cn(
                "inline-flex items-center h-10 px-5",
                "text-sm font-semibold tracking-wide text-off-white",
                "bg-red hover:bg-red-hover",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              )}
            >
              {ctaNavigation.label}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 -mr-2",
              "text-off-white transition-colors hover:text-gold",
              "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
            )}
          >
            {isMobileOpen ? (
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        aria-hidden={!isMobileOpen}
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40",
          "bg-black border-t border-border",
          "flex flex-col",
          "transition-all duration-300 ease-in-out",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav
          aria-label="Navigasi mobile"
          className="container-site flex flex-col py-8 gap-1"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-3 text-lg font-medium tracking-wide border-b border-border",
                  "transition-colors duration-150",
                  isActive
                    ? "text-off-white"
                    : "text-gray-light hover:text-off-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-6">
            <Link
              href={ctaNavigation.href}
              className={cn(
                "flex items-center justify-center h-12 w-full",
                "text-sm font-semibold tracking-wide text-off-white",
                "bg-red hover:bg-red-hover",
                "transition-colors duration-200"
              )}
            >
              {ctaNavigation.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
