import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui";
import { Icons } from "@/components/icons";

export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  breadcrumbs,
  children,
  align = "left",
  size = "md",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  align?: "left" | "center";
  size?: "sm" | "md";
}) {
  return (
    <section className="relative overflow-hidden bg-emerald-mesh text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-forest-400/10 blur-3xl"
      />

      <div
        className={cn(
          "container-x relative",
          size === "sm" ? "py-16 sm:py-20" : "py-20 sm:py-28",
          align === "center" && "text-center",
        )}
      >
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol
              className={cn(
                "flex flex-wrap items-center gap-2 text-[12.5px] text-forest-100/45",
                align === "center" && "justify-center",
              )}
            >
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-gold-300"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <Icons.chevron className="size-3 -rotate-90 text-gold-400/50" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-gold-300"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-forest-100/70">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Eyebrow tone="light">{eyebrow}</Eyebrow>

        <h1
          className={cn(
            "mt-5 max-w-4xl text-[clamp(2.2rem,5.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.028em] text-cream",
            align === "center" && "mx-auto",
          )}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-gold-gradient">{accent}</span>
            </>
          )}
        </h1>

        {lead && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-[17.5px] leading-relaxed text-forest-100/72",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
