import { cn } from "@/lib/utils";

/* ============================================
   Button Component
   Variants: primary | secondary | outline | ghost
   Light Industrial palette.
   ============================================ */

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as a full-width block button */
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  /** Red fill — main CTA */
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover active:scale-[0.98]",
  /** White surface with dark border — secondary action */
  secondary:
    "bg-surface text-foreground border border-border hover:border-brand-red hover:text-brand-red active:scale-[0.98]",
  /** Transparent with dark border — tertiary / on-surface */
  outline:
    "bg-transparent text-foreground border border-border-strong hover:border-brand-red hover:text-brand-red active:scale-[0.98]",
  /** No border, subtle hover */
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface-muted active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "inline-flex items-center justify-center",
        "font-medium tracking-wide rounded-none",
        "transition-all duration-200 ease-out",
        "cursor-pointer select-none",
        "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100",
        // Variant
        variantClasses[variant],
        // Size
        sizeClasses[size],
        // Full width
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* --- Anchor variant for link buttons --- */

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center",
        "font-medium tracking-wide rounded-none",
        "transition-all duration-200 ease-out",
        "cursor-pointer select-none no-underline",
        "focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
