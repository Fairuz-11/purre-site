"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ============================================
   ProjectGallery — /portofolio/[slug]
   Editorial grid + lightweight lightbox.
   Client Component (lightbox interaction).
   ============================================ */

interface Props {
  project: PortfolioProject;
}

/* Simple placeholder displayed when image file not present */
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center"
    >
      <p className="text-neutral-500 text-[10px] font-medium tracking-widest uppercase select-none pointer-events-none">
        {label}
      </p>
    </div>
  );
}

export default function ProjectGallery({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = project.gallery;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  /* Keyboard navigation */
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  /* Lock body scroll while lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section
        aria-labelledby="gallery-heading"
        className="bg-surface-muted section-py border-t border-border"
      >
        <div className="container-site">
          <h2
            id="gallery-heading"
            className="font-display text-xl font-bold text-foreground mb-8 lg:mb-10"
          >
            Project Gallery
          </h2>

          {/* Editorial grid: 1st image large, rest smaller */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {images.map((src, i) => {
              const isFirst = i === 0;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => openLightbox(i)}
                  aria-label={`Buka gambar ${i + 1} dari ${images.length}: ${project.title}`}
                  className={cn(
                    "group relative block overflow-hidden rounded-sm text-left",
                    "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
                    isFirst ? "sm:col-span-2 lg:col-span-2" : ""
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden",
                      isFirst ? "aspect-[16/9]" : "aspect-[4/3]"
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — gambar ${i + 1}`}
                      fill
                      sizes={isFirst ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <ImgPlaceholder label={`Gallery ${i + 1}`} />
                    <div
                      className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Lightbox ===== */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${project.title} — gambar ${lightboxIndex + 1} dari ${images.length}`}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            className="relative w-full max-w-5xl max-h-[90svh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[lightboxIndex]}
                alt={`${project.title} — gambar ${lightboxIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <ImgPlaceholder label={`Gallery ${lightboxIndex + 1}`} />
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Tutup lightbox"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
          >
            <X size={20} strokeWidth={2} aria-hidden="true" />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Gambar sebelumnya"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Gambar berikutnya"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
