import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ============================================
   Breadcrumb — reusable navigation trail
   ============================================ */

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for current (last) item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
      <div className="container-site py-3">
        <ol className="flex items-center flex-wrap gap-1" role="list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && (
                  <ChevronRight
                    size={12}
                    strokeWidth={2}
                    className="text-neutral-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-brand-red transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-xs text-foreground font-medium"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
