import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSection } from "@/components/sections/process";
import { MarketComparison } from "@/components/sections/market-comparison";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading } from "@/components/ui";
import { Icons } from "@/components/icons";
import {
  websitePlans,
  comparisonRows,
  carePlans,
  displayPrice,
} from "@/content/pricing";
import { generalFaqs } from "@/content/work";

export const metadata: Metadata = {
  title: "Website Packages & Prices",
  description:
    "Fixed-price website packages from £865 — around 13% below the going UK rate. Custom design, free domain, hosting included and no hidden costs.",
  alternates: { canonical: "/websites" },
};

// Labels are fixed; prices come straight from the plan data so the
// comparison table can never drift out of sync with the cards above it.
const columnLabels = {
  starter: "Starter",
  business: "Business",
  ecommerce: "E-commerce",
  bespoke: "Bespoke",
} as const;

const columns = (
  Object.keys(columnLabels) as (keyof typeof columnLabels)[]
).map((key) => ({
  key,
  label: columnLabels[key],
  price: displayPrice(websitePlans.find((p) => p.id === key)!.price),
}));

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-forest-800/8 text-forest-600">
        <Icons.check className="size-3.5 stroke-[2.5]" />
      </span>
    );
  if (value === false)
    return (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-forest-800/4 text-muted/40">
        <Icons.minus className="size-3.5" />
      </span>
    );
  return (
    <span className="text-[13.5px] font-semibold text-forest-800">{value}</span>
  );
}

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Website packages"
        title="Buy a website that's built for you,"
        accent="not dragged from a template"
        lead="Four packages, four fixed prices. Every one includes custom design, a free domain, hosting and a real person to ring when you need something changed."
        breadcrumbs={[{ label: "Websites" }]}
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {[
            { icon: Icons.check, label: "Fixed price, agreed upfront" },
            { icon: Icons.check, label: "You own everything" },
            { icon: Icons.check, label: "No lock-in contracts" },
          ].map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 text-[14px] text-forest-100/70"
            >
              <item.icon className="size-4 stroke-[2.5] text-gold-400" />
              {item.label}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Packages */}
      <Section tone="cream">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-4 lg:items-start">
            {websitePlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <PricingCard plan={plan} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-gold-400/25 bg-gold-400/[.07] px-8 py-7 text-center sm:flex-row sm:text-left">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold-400 text-forest-950">
                <Icons.sparkle className="size-5" />
              </span>
              <p className="flex-1 text-[15px] leading-relaxed text-ink/80">
                <span className="font-semibold text-forest-900">
                  Payment plans available.
                </span>{" "}
                Most projects run 50% to start and 50% on launch. Larger builds
                can be spread across monthly instalments — just mention it when
                you request your quote.
              </p>
              <Button
                href="/quote"
                variant="forest"
                size="md"
                arrow
                className="shrink-0"
              >
                Get a quote
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <MarketComparison />

      {/* Comparison table */}
      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Side by side"
            title="Compare every package"
            lead="The full feature list, laid out plainly, so you can see exactly where the money goes."
          />

          <Reveal className="mt-14">
            <div className="overflow-x-auto rounded-3xl border border-forest-800/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-forest-800 text-cream">
                    <th className="px-6 py-5 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      Feature
                    </th>
                    {columns.map((col) => (
                      <th key={col.key} className="px-4 py-5 text-center">
                        <span className="block font-display text-[18px] text-cream">
                          {col.label}
                        </span>
                        <span className="mt-1 block text-[12.5px] font-normal text-forest-100/55">
                          {col.price}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i % 2 === 1 ? "bg-forest-800/[.025]" : "bg-white"
                      }
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-[14.5px] font-medium text-ink/85"
                      >
                        {row.feature}
                      </th>
                      {columns.map((col) => (
                        <td key={col.key} className="px-4 py-4 text-center">
                          <Cell value={row[col.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-forest-50/70">
                    <th scope="row" className="px-6 py-6" />
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-6 text-center">
                        <Button
                          href={`/quote?package=${col.key}`}
                          variant="outline"
                          size="sm"
                        >
                          Choose {col.label}
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Care plans */}
      <Section tone="dark" id="care">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="After launch"
              title="Website care plans,"
              accent="so it never goes stale"
              lead="Software ages, plugins break, and an out-of-date site is a security risk. A care plan keeps yours fast, safe and current — and gives you a pair of hands for edits."
              tone="light"
              align="left"
            />
            <Button
              href="/hosting"
              variant="light"
              size="md"
              arrow
              className="mt-8"
            >
              See hosting plans
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              {carePlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} tone="dark" />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <ProcessSection id="how-it-works" />
      <TestimonialsSection />

      <Section tone="white">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Before you buy"
              title="Questions worth asking"
              lead="The honest answers to what most people want to know before committing."
              align="left"
            />
          </Reveal>
          <Reveal delay={120}>
            <Faq items={generalFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Pick a package, or let us recommend one"
        lead="Send us a few details about your business and we'll tell you which package fits — including if that's the cheapest one."
      />
    </>
  );
}
