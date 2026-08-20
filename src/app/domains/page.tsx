import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { domainPricing, domainIncludes } from "@/content/pricing";
import { getService } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Domain Registration",
  description:
    "Register .co.uk, .com, .uk and more from £8.49/year. Free WHOIS privacy, full DNS management, business email setup and free transfers in — registered in your name.",
  alternates: { canonical: "/domains" },
};

const tips = [
  {
    title: "Short beats clever",
    copy: "If someone has to spell it over the phone twice, it's too long. Aim for two or three syllables.",
  },
  {
    title: "Match your trading name",
    copy: "Your domain should be the name customers already use for you — not a keyword-stuffed variation.",
  },
  {
    title: "Buy the obvious variants",
    copy: "Grab .co.uk and .com if you can. Point the spares at your main site so nobody else can use them.",
  },
  {
    title: "Avoid hyphens and numbers",
    copy: "They get lost in conversation, misheard in adverts and mistyped constantly.",
  },
];

export default function DomainsPage() {
  const service = getService("domains")!;

  return (
    <>
      <PageHero
        eyebrow="Domain registration"
        title="Your name, secured,"
        accent="and wired up properly"
        lead="Registering a domain takes two minutes. Getting DNS, SSL and email working together is the bit people get stuck on — so we do that for you."
        breadcrumbs={[{ label: "Domains" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={site.reseller.domains}
            variant="gold"
            size="lg"
            arrow
            external
          >
            Search available domains
          </Button>
          <Button href="/quote?service=domains" variant="light" size="lg">
            Ask us to handle it
          </Button>
        </div>
      </PageHero>

      {/* Pricing table */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Domain pricing"
            title="Transparent yearly pricing"
            lead="Registration prices are for the first year. Renewal prices are shown alongside so you know exactly what year two costs — no bait-and-switch."
          />

          <Reveal className="mt-14">
            <div className="overflow-x-auto rounded-3xl border border-forest-800/10 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-forest-800 text-cream">
                    <th className="px-6 py-5 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      Extension
                    </th>
                    <th className="px-6 py-5 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      Best for
                    </th>
                    <th className="px-6 py-5 text-right font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      First year
                    </th>
                    <th className="px-6 py-5 text-right font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      Renewal
                    </th>
                    <th className="px-6 py-5" />
                  </tr>
                </thead>
                <tbody>
                  {domainPricing.map((row, i) => (
                    <tr
                      key={row.tld}
                      className={i % 2 === 1 ? "bg-forest-800/[.025]" : ""}
                    >
                      <th scope="row" className="px-6 py-4">
                        <span className="font-display text-[19px] text-forest-900">
                          {row.tld}
                        </span>
                        {row.popular && (
                          <span className="ml-2.5 rounded-full bg-gold-400/20 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-gold-700">
                            Popular
                          </span>
                        )}
                      </th>
                      <td className="px-6 py-4 text-[14px] text-muted">
                        {row.note}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-forest-800">
                        {row.register}
                      </td>
                      <td className="px-6 py-4 text-right text-[14px] text-muted">
                        {row.renew}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          href={site.reseller.domains}
                          variant="outline"
                          size="sm"
                          external
                        >
                          Check
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-center text-[13px] text-muted">
              Prices include VAT where applicable and are reviewed annually.
              Hundreds of other extensions are available on request.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Included + tips */}
      <Section tone="dark">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Included as standard"
              title="Every domain comes with"
              accent="the essentials"
              tone="light"
              align="left"
            />
            <ul className="mt-8 space-y-3.5">
              {domainIncludes.map((item) => (
                <Tick key={item} tone="light">
                  {item}
                </Tick>
              ))}
            </ul>

            <div className="glass-dark mt-9 flex items-start gap-4 rounded-2xl p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                <Icons.shield className="size-5" />
              </span>
              <p className="text-[14px] leading-relaxed text-forest-100/70">
                <span className="font-semibold text-cream">
                  You own it, not us.
                </span>{" "}
                Every domain is registered with you as the legal registrant. We
                manage it on your behalf, and you can transfer it away at any
                time without asking permission.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Choosing well"
              title="Four rules for picking"
              accent="a domain you won't regret"
              tone="light"
              align="left"
            />
            <div className="mt-8 space-y-4">
              {tips.map((tip, i) => (
                <div key={tip.title} className="glass-dark rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-gold-400/15 font-display text-[13px] text-gold-300">
                      {i + 1}
                    </span>
                    <h3 className="text-[17.5px] text-cream">{tip.title}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-forest-100/65">
                    {tip.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Domain FAQs"
              lead="Ownership, transfers and the things registrars don't make obvious."
              align="left"
            />
          </Reveal>
          <Reveal delay={120}>
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Domains"
        title="Not sure what to call it? Ask us."
        lead="Send us your business name and a couple of ideas — we'll check what's available and tell you which one we'd pick."
        primary={{ label: "Get domain advice", href: "/quote?service=domains" }}
        secondary={{ label: "See hosting plans", href: "/hosting" }}
      />
    </>
  );
}
