import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading } from "@/components/ui";
import { Icons } from "@/components/icons";
import { hostingPlans, carePlans } from "@/content/pricing";
import { getService } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Managed Web Hosting",
  description:
    "Fast, secure managed hosting from £12/month. Free SSL, daily backups, malware scanning, 99.9% uptime and free migration — supported by the people who built your site.",
  alternates: { canonical: "/hosting" },
};

const features = [
  {
    icon: Icons.bolt,
    title: "NVMe SSD speed",
    copy: "Solid-state storage and modern caching. Pages load in about a second, everywhere.",
  },
  {
    icon: Icons.shield,
    title: "Secured by default",
    copy: "Free SSL, a managed firewall, malware scanning and automatic security patching.",
  },
  {
    icon: Icons.server,
    title: "Daily backups",
    copy: "Automated every day with 30-day restore points. One click puts things back.",
  },
  {
    icon: Icons.chart,
    title: "99.9% uptime",
    copy: "Monitored every 60 seconds. If it wobbles, we know before your customers do.",
  },
  {
    icon: Icons.headset,
    title: "Support from builders",
    copy: "You speak to the team that made your site — not a first-line script reader.",
  },
  {
    icon: Icons.globe,
    title: "Free migration",
    copy: "We move your existing site across at no charge, out of hours, with no downtime.",
  },
];

export default function HostingPage() {
  const service = getService("hosting")!;

  return (
    <>
      <PageHero
        eyebrow="Managed hosting"
        title="Hosting that someone actually"
        accent="looks after"
        lead="Cheap hosting is only cheap until the day it goes down. Ours is fast, monitored around the clock, and backed by people who answer the phone."
        breadcrumbs={[{ label: "Hosting" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#plans" variant="gold" size="lg" arrow>
            See hosting plans
          </Button>
          <Button href="/quote?service=hosting" variant="light" size="lg">
            Free migration enquiry
          </Button>
        </div>
      </PageHero>

      {/* Features */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's included"
            title="Everything on every plan,"
            accent="not just the expensive one"
            lead="SSL, backups, security and monitoring aren't upsells here. They're the minimum a business website should have."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-forest-800/10 bg-white p-7 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_28px_60px_-30px_rgba(11,59,45,.4)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-[20px] leading-tight text-forest-900">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {f.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Plans */}
      <Section tone="dark" id="plans">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hosting plans"
            title="Priced annually."
            accent="Cancel any time."
            lead="All plans are billed yearly for the best rate — monthly billing is available at the rate shown under each price."
            tone="light"
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
            {hostingPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <PricingCard plan={plan} tone="dark" className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="glass-dark mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-3xl p-7 text-center sm:flex-row sm:text-left">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold-400/15 text-gold-300">
                <Icons.shield className="size-5" />
              </span>
              <p className="flex-1 text-[14.5px] leading-relaxed text-forest-100/70">
                <span className="font-semibold text-cream">
                  Website security add-on.
                </span>{" "}
                Need advanced malware removal and a dedicated WAF? We resell
                enterprise-grade site security alongside every plan.
              </p>
              <Button
                href={site.reseller.security}
                variant="light"
                size="sm"
                external
                arrow
              >
                View security
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Care plans */}
      <Section tone="white" id="care">
        <div className="container-x">
          <SectionHeading
            eyebrow="Add-on"
            title="Care plans:"
            accent="a pair of hands on your site"
            lead="Hosting keeps the lights on. A care plan keeps the site current — updates, edits, speed checks and someone to do them for you."
          />
          <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
            {carePlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <PricingCard plan={plan} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Migration band */}
      <Section tone="cream" size="sm">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl border border-gold-400/30 bg-white p-8 sm:p-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-700">
                  <Icons.globe className="size-3.5" />
                  Free migration
                </span>
                <h2 className="mt-5 text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-forest-900">
                  Already hosted somewhere else? We&apos;ll move you for
                  nothing.
                </h2>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">
                  We copy everything across, test it thoroughly on a staging
                  URL, and only switch your DNS once it&apos;s confirmed
                  working. Migrations run outside business hours, so your
                  customers never see a thing. Free on every annual plan.
                </p>
              </div>
              <Button
                href="/quote?service=hosting"
                variant="gold"
                size="lg"
                arrow
                className="lg:justify-self-end"
              >
                Start my migration
              </Button>
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
              title="Hosting FAQs"
              lead="The practical stuff people want to know before switching host."
              align="left"
            />
          </Reveal>
          <Reveal delay={120}>
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Hosting"
        title="Move to hosting that doesn't need chasing"
        lead="Free migration, no downtime, and support from the people who understand your site."
        primary={{ label: "Get hosting", href: "/quote?service=hosting" }}
        secondary={{ label: "Register a domain", href: "/domains" }}
      />
    </>
  );
}
