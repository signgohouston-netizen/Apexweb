import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { Icons } from "@/components/icons";
import { marketComparison, averageSaving } from "@/content/pricing";

const gbp = (value: number) => `£${value.toLocaleString("en-GB")}`;

/**
 * Shows our price against the going UK rate for the same scope.
 * Figures come from `marketComparison` in src/content/pricing.ts.
 */
export function MarketComparison() {
  return (
    <Section tone="white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Priced against the market"
          title="The same work,"
          accent={`${averageSaving}% less`}
          lead="We benchmark every package against what UK agencies and freelancers actually charge for the same scope, then price deliberately under it. Not by cutting corners — by running lean and keeping clients on for hosting and care."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-forest-800/10">
            {/* Header row */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_0.9fr] bg-forest-800 text-cream">
              <div className="px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300 sm:px-7 sm:py-5 sm:text-[12px]">
                What you need
              </div>
              <div className="px-2 py-4 text-center font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-forest-100/60 sm:py-5 sm:text-[12px]">
                Typical UK
              </div>
              <div className="px-2 py-4 text-center font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300 sm:py-5 sm:text-[12px]">
                Apex
              </div>
              <div className="px-2 py-4 text-center font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-forest-100/60 sm:py-5 sm:text-[12px]">
                You save
              </div>
            </div>

            {marketComparison.map((row, i) => {
              const saving = Math.round((1 - row.ours / row.market) * 100);
              return (
                <div
                  key={row.item}
                  className={`grid grid-cols-[1.6fr_1fr_1fr_0.9fr] items-center ${
                    i % 2 === 1 ? "bg-forest-800/[.025]" : "bg-white"
                  }`}
                >
                  <div className="px-5 py-4 sm:px-7 sm:py-5">
                    <span className="block text-[14px] font-medium leading-snug text-ink/85 sm:text-[15px]">
                      {row.item}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-muted">
                      {row.unit}
                    </span>
                  </div>
                  <div className="px-2 py-4 text-center text-[15px] text-muted line-through decoration-muted/40 sm:py-5 sm:text-[16px]">
                    {gbp(row.market)}
                  </div>
                  <div className="px-2 py-4 text-center font-display text-[19px] text-forest-900 sm:py-5 sm:text-[21px]">
                    {gbp(row.ours)}
                  </div>
                  <div className="px-2 py-4 text-center sm:py-5">
                    <span className="inline-flex items-center rounded-full bg-gold-400/18 px-2.5 py-1 text-[12.5px] font-bold text-gold-700">
                      −{saving}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2.5 text-center text-[13px] leading-relaxed text-muted">
            <Icons.shield className="mt-0.5 size-4 shrink-0 text-gold-500" />
            <span>
              &ldquo;Typical UK&rdquo; figures are the going rate for the same
              scope from UK freelancers and small agencies, reviewed against
              published 2026 pricing guides. London agencies generally charge
              considerably more.
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
