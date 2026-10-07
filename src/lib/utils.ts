/* ============================================
   Utility Functions
   ============================================ */

/**
 * Merge class names — lightweight cn() helper.
 * Joins truthy values, dedupes whitespace.
 * No need for clsx/tailwind-merge at this stage.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number as Indonesian Rupiah.
 * Example: formatRupiah(1500000) → "Rp 1.500.000"
 */
export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Slugify a string for use in URLs.
 * Example: slugify("Jasa Renovasi Bangunan") → "jasa-renovasi-bangunan"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

/**
 * Truncate a string to a maximum length with an ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
