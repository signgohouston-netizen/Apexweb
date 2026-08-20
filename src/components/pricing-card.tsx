import { cn } from "@/lib/cn";
import { Button, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import type { Plan } from "@/content/pricing";

export function PricingCard({
  plan,
  tone = "light",
  className,
}: {
  plan: Plan;
  tone?: "light" | "dark";
  className?: string;
}) {
  const featured = plan.featured;
  const isNumber = typeof plan.price === "number";

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-[var(--ease-out-expo)] sm:p-8",
        featured
          ? "bg-emerald-mesh text-cream shadow-[0_30px_70px_-30px_rgba(11,59,45,.6)] ring-1 ring-gold-400/40 lg:-my-4 lg:py-12"
          : tone === "dark"
            ? "glass-dark text-cream hover:-translate-y-1.5 hover:border-gold-300/45"
            : "border border-forest-800/10 bg-white hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_28px_60px_-28px_rgba(11,59,45,.4)]",
        className,
      )}
    >
      {featured && (
        <>
          <div className="rule-gold absolute inset-x-0 top-0 h-px" />
          <span className="absolute right-6 top-6 rounded-full bg-gold-400 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-forest-950">
            Most popular
          </span>
        </>
      )}

      <h3
        className={cn(
          "font-display text-[26px] leading-tight",
          featured || tone === "dark" ? "text-cream" : "text-forest-900",
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-2 text-[14.5px] leading-relaxed",
          featured || tone === "dark" ? "text-forest-100/70" : "text-muted",
        )}
      >
        {plan.tagline}
      </p>

      {/* Price */}
      <div className="mt-7 flex items-end gap-1.5">
        {isNumber && (
          <span
            className={cn(
              "font-display text-[28px] leading-none",
              featured || tone === "dark" ? "text-gold-300" : "text-gold-600",
            )}
          >
            £
          </span>
        )}
        <span
          className={cn(
            "font-display leading-[0.95] tracking-tight text-balance",
            // Word prices ("From £5,495") need a smaller size to stay on one line
            isNumber ? "text-[46px] leading-[0.9]" : "text-[30px]",
            featured || tone === "dark" ? "text-cream" : "text-forest-900",
          )}
        >
          {isNumber ? plan.price.toLocaleString("en-GB") : plan.price}
        </span>
        <span
          className={cn(
            "pb-1.5 text-[13.5px] font-medium",
            featured || tone === "dark" ? "text-forest-100/55" : "text-muted",
          )}
        >
          {plan.period}
        </span>
      </div>

      {(plan.setup || plan.note) && (
        <p
          className={cn(
            "mt-2 text-[12.5px]",
            featured || tone === "dark"
              ? "text-forest-100/45"
              : "text-muted/80",
          )}
        >
          {plan.setup ?? plan.note}
        </p>
      )}

      <p
        className={cn(
          "mt-6 border-t pt-6 text-[13.5px] leading-relaxed",
          featured || tone === "dark"
            ? "border-gold-300/15 text-forest-100/65"
            : "border-forest-800/10 text-muted",
        )}
      >
        <span
          className={cn(
            "font-semibold",
            featured || tone === "dark" ? "text-gold-300" : "text-forest-700",
          )}
        >
          Best for:{" "}
        </span>
        {plan.bestFor}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <Tick key={f} tone={featured || tone === "dark" ? "light" : "dark"}>
            {f}
          </Tick>
        ))}
        {plan.excludes?.map((f) => (
          <li key={f} className="flex items-start gap-3 opacity-45">
            <span
              className={cn(
                "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full",
                featured || tone === "dark" ? "bg-white/10" : "bg-forest-800/8",
              )}
            >
              <Icons.minus className="size-3" />
            </span>
            <span
              className={cn(
                "text-[15px] leading-relaxed line-through",
                featured || tone === "dark"
                  ? "text-forest-100/60"
                  : "text-ink/60",
              )}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={plan.cta.href}
        variant={featured ? "gold" : tone === "dark" ? "light" : "outline"}
        size="md"
        arrow
        className="mt-8 w-full"
      >
        {plan.cta.label}
      </Button>
    </div>
  );
}
