import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icons } from "@/components/icons";

/* ---------------- Button ---------------- */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "forest" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

const buttonBase =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] will-change-transform active:scale-[.97]";

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

const buttonVariants = {
  gold: "bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 text-forest-950 shadow-[0_8px_28px_-8px_rgba(176,133,64,.75)] hover:shadow-[0_14px_38px_-8px_rgba(176,133,64,.95)] hover:-translate-y-0.5",
  forest:
    "bg-forest-800 text-cream shadow-[0_8px_28px_-10px_rgba(11,59,45,.7)] hover:bg-forest-700 hover:shadow-[0_14px_36px_-10px_rgba(11,59,45,.85)] hover:-translate-y-0.5",
  outline:
    "border border-forest-800/25 text-forest-800 hover:border-forest-800/60 hover:bg-forest-800/5 hover:-translate-y-0.5",
  ghost: "text-forest-800 hover:bg-forest-800/6",
  light:
    "border border-gold-300/30 bg-white/6 text-cream backdrop-blur-md hover:bg-white/12 hover:border-gold-300/60 hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  className,
  arrow,
  external,
}: ButtonProps) {
  const classes = cn(
    buttonBase,
    buttonSizes[size],
    buttonVariants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <Icons.arrow className="size-4 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ---------------- Eyebrow ---------------- */

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        tone === "light" ? "text-gold-300" : "text-gold-600",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-7",
          tone === "light" ? "bg-gold-300/60" : "bg-gold-600/50",
        )}
      />
      {children}
    </span>
  );
}

/* ---------------- Section ---------------- */

export function Section({
  children,
  className,
  id,
  tone = "cream",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "dark" | "forest" | "none";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
    dark: "bg-emerald-mesh text-cream",
    forest: "bg-forest-800 text-cream",
    none: "",
  };
  const sizes = {
    sm: "py-16 sm:py-20",
    md: "py-20 sm:py-28",
    lg: "py-24 sm:py-36",
  };
  return (
    <section
      id={id}
      className={cn("relative", tones[tone], sizes[size], className)}
    >
      {children}
    </section>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  tone = "dark",
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.08]",
          tone === "light" ? "text-cream" : "text-forest-900",
        )}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-gold-gradient">{accent}</span>
          </>
        )}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed",
            align === "center" && "mx-auto",
            tone === "light" ? "text-forest-100/75" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ---------------- Card ---------------- */

export function Card({
  children,
  className,
  tone = "light",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl transition-all duration-500 ease-[var(--ease-out-expo)]",
        tone === "light"
          ? "border border-forest-800/10 bg-white shadow-[0_2px_20px_-12px_rgba(11,59,45,.35)]"
          : "glass-dark",
        hover &&
          (tone === "light"
            ? "hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_28px_60px_-28px_rgba(11,59,45,.45)]"
            : "hover:-translate-y-1.5 hover:border-gold-300/45"),
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------- Star rating ---------------- */

export function Stars({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex gap-0.5 text-gold-400", className)}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Icons.star key={i} className="size-4" />
      ))}
    </div>
  );
}

/* ---------------- Feature tick ---------------- */

export function Tick({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full",
          tone === "light"
            ? "bg-gold-400/20 text-gold-300"
            : "bg-forest-800/8 text-forest-600",
        )}
      >
        <Icons.check className="size-3 stroke-[2.5]" />
      </span>
      <span
        className={cn(
          "text-[15px] leading-relaxed",
          tone === "light" ? "text-forest-100/80" : "text-ink/78",
        )}
      >
        {children}
      </span>
    </li>
  );
}
