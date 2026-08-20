import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { Icons } from "@/components/icons";
import { site } from "@/content/site";
import { generalFaqs } from "@/content/work";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell us about your project and we'll send back a fixed-price proposal within one working day. No obligation, no sales calls.",
  alternates: { canonical: "/quote" },
};

const promises = [
  {
    icon: Icons.clock,
    title: "A reply within one working day",
    copy: "Usually the same day. Always from a person, never an autoresponder.",
  },
  {
    icon: Icons.check,
    title: "A fixed price, in writing",
    copy: "Itemised so you can see exactly what each part costs and drop anything you don't want.",
  },
  {
    icon: Icons.shield,
    title: "No pressure, ever",
    copy: "We don't do follow-up sequences or sales calls. If it's not right, tell us and that's the end of it.",
  },
  {
    icon: Icons.sparkle,
    title: "An honest recommendation",
    copy: "Including when that means a cheaper package than the one you asked about.",
  },
];

function FormFallback() {
  return (
    <div className="h-[720px] animate-pulse rounded-3xl border border-forest-800/10 bg-white/60" />
  );
}

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote"
        title="Tell us what you need."
        accent="We'll price it honestly."
        lead="Fill this in and you'll have a fixed-price proposal by tomorrow. It takes about two minutes and commits you to nothing."
        breadcrumbs={[{ label: "Get a Quote" }]}
        size="sm"
      />

      <Section tone="cream">
        <div className="container-x grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <Suspense fallback={<FormFallback />}>
              <QuoteForm />
            </Suspense>
          </Reveal>

          <Reveal delay={140}>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                What happens next
              </h2>

              <ul className="mt-7 space-y-6">
                {promises.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-forest-800 text-gold-300">
                      <p.icon className="size-[18px]" />
                    </span>
                    <div>
                      <h3 className="text-[16.5px] leading-snug text-forest-900">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                        {p.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 rounded-3xl bg-emerald-mesh p-7 text-cream">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Prefer to talk?
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-forest-100/70">
                  Some things are quicker said than typed. Give us a ring —
                  you&apos;ll get a person, not a queue.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={site.contact.phoneHref}
                    className="flex items-center gap-3 text-[15px] font-semibold text-cream transition-colors hover:text-gold-300"
                  >
                    <Icons.phoneCall className="size-4 text-gold-400" />
                    {site.contact.phone}
                  </a>
                  <a
                    href={site.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[15px] font-semibold text-cream transition-colors hover:text-gold-300"
                  >
                    <Icons.whatsapp className="size-4 text-gold-400" />
                    Message us on WhatsApp
                  </a>
                  <p className="flex items-center gap-3 text-[14px] text-forest-100/55">
                    <Icons.clock className="size-4 text-gold-400" />
                    {site.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Before you send"
              title="Things people ask first"
              lead="Answers to the questions that usually come before a quote request."
              align="left"
            />
          </Reveal>
          <Reveal delay={120}>
            <Faq items={generalFaqs.slice(0, 5)} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
