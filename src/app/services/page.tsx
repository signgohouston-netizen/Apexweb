import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSection } from "@/components/sections/process";
import { Reveal } from "@/components/reveal";
import { Button, Section, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, social media management, SEO, graphic design, app development, UI/UX, managed hosting and domain registration — delivered by one UK team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to compete online,"
        accent="done properly"
        lead="Eight services, one team, one invoice. Take the whole lot or just the piece you're missing — we'll tell you honestly which you actually need."
        breadcrumbs={[{ label: "Services" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/quote" variant="gold" size="lg" arrow>
            Get a Free Quote
          </Button>
          <Button href="/websites" variant="light" size="lg">
            See packages &amp; prices
          </Button>
        </div>
      </PageHero>

      <Section tone="cream">
        <div className="container-x space-y-6">
          {services.map((service, i) => {
            const Icon = Icons[service.icon];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <article
                  className={`group grid overflow-hidden rounded-3xl border border-forest-800/10 bg-white transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-gold-400/40 hover:shadow-[0_30px_70px_-34px_rgba(11,59,45,.4)] lg:grid-cols-[1.1fr_0.9fr]`}
                >
                  <div
                    className={`p-8 sm:p-10 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-forest-950">
                        <Icon className="size-5" />
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-[12px]">
                        <span className="rounded-full bg-forest-50 px-3 py-1 font-bold text-forest-700">
                          From {service.startingAt}
                        </span>
                        <span className="rounded-full border border-forest-800/12 px-3 py-1 text-muted">
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                    <h2 className="mt-6 text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-forest-900">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted">
                      {service.blurb}
                    </p>

                    <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                      {service.highlights.map((h) => (
                        <Tick key={h}>{h}</Tick>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="forest"
                        size="sm"
                        arrow
                      >
                        Full details
                      </Button>
                      <Button
                        href={`/quote?service=${service.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        Request a quote
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`relative flex flex-col justify-center gap-px bg-forest-800/8 p-px ${reversed ? "lg:order-1" : ""}`}
                  >
                    <div className="flex h-full flex-col justify-center bg-forest-50/60 p-8 sm:p-10">
                      <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">
                        What you get
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {service.deliverables.slice(0, 5).map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/75"
                          >
                            <Icons.check className="mt-0.5 size-3.5 shrink-0 stroke-[2.5] text-gold-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-forest-800 transition-colors hover:text-gold-600"
                      >
                        See the full deliverables list
                        <Icons.arrow className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
