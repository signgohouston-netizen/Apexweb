import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Wordmark + crest. The crest is drawn in SVG so it stays crisp at any size
 * and inherits the current colour — no image request, no layout shift.
 */
export function Logo({
  tone = "dark",
  className,
  showTagline = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Apex Web Solutions UK — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid size-11 shrink-0 place-items-center">
        <svg viewBox="0 0 48 48" className="size-11" aria-hidden="true">
          <defs>
            <linearGradient id="apexGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DDBE79" />
              <stop offset="45%" stopColor="#B08540" />
              <stop offset="100%" stopColor="#8A6526" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="22.2" fill="url(#apexGold)" />
          <circle cx="24" cy="24" r="19.4" fill="#0B3B2D" />
          <circle
            cx="24"
            cy="24"
            r="19.4"
            fill="none"
            stroke="url(#apexGold)"
            strokeWidth="0.7"
            opacity="0.55"
          />
          {/* Apex "A" mark */}
          <path
            d="M24 12.6 33.4 34h-4.5l-1.9-4.6h-6l-1.9 4.6h-4.5L24 12.6Zm0 8.4-1.9 5h3.8L24 21Z"
            fill="url(#apexGold)"
          />
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60 bg-gold-400/40" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-semibold tracking-[-0.01em]",
            tone === "light" ? "text-cream" : "text-forest-900",
          )}
        >
          Apex <span className="text-gold-gradient">Web Solutions</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[8.5px] font-bold uppercase tracking-[0.28em]",
              tone === "light" ? "text-forest-200/65" : "text-muted/75",
            )}
          >
            Design · Innovate · Dominate
          </span>
        )}
      </span>
    </Link>
  );
}
