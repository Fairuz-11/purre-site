import { cn } from "@/lib/utils";

/* ============================================
   SectionHeading Component
   Reusable heading block for all page sections.
   ============================================ */

type Alignment = "left" | "center";

interface SectionHeadingProps {
  /** Short uppercase label above the title, e.g. "OUR SERVICES" */
  eyebrow?: string;
  /** Main section title */
  title: string;
  /** Optional supporting description */
  description?: string;
  /** Text alignment */
  align?: Alignment;
  /** Swap title color to gold accent */
  accentTitle?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accentTitle = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
          <span className="block w-5 h-px bg-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
          accentTitle ? "text-gold" : "text-off-white",
          align === "center" && "max-w-2xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-gray-light text-base sm:text-lg leading-relaxed",
            align === "center" ? "max-w-xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
