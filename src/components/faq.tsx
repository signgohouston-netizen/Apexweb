"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icons } from "@/components/icons";

export function Faq({
  items,
  tone = "dark",
  className,
}: {
  items: readonly { q: string; a: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      className={cn(
        "divide-y",
        tone === "light" ? "divide-gold-300/12" : "divide-forest-800/10",
        className,
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-[17.5px] leading-snug transition-colors sm:text-[19px]",
                    isOpen
                      ? tone === "light"
                        ? "text-gold-300"
                        : "text-gold-600"
                      : tone === "light"
                        ? "text-cream"
                        : "text-forest-900",
                  )}
                >
                  {item.q}
                </span>
                <span
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-[var(--ease-out-expo)]",
                    isOpen && "rotate-180",
                    tone === "light"
                      ? "border-gold-300/25 text-gold-300"
                      : "border-forest-800/15 text-forest-700",
                  )}
                >
                  <Icons.chevron className="size-3.5" />
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[var(--ease-out-expo)]",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-6 pr-10 text-[15.5px] leading-relaxed",
                    tone === "light" ? "text-forest-100/70" : "text-muted",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
