import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui";
import { Icons } from "@/components/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Web Solutions UK — call +44 7377 349883, email us, or send a message and we'll reply within one working day.",
  alternates: { canonical: "/contact" },
};

const socialIcon = {
  Instagram: Icons.instagram,
  Facebook: Icons.facebook,
  TikTok: Icons.tiktok,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's have a"
        accent="proper conversation"
        lead="Whether it's a full rebuild or a question about your existing site, we'll give you a straight answer. No sales scripts."
        breadcrumbs={[{ label: "Contact" }]}
        size="sm"
      />

      {/* Contact methods */}
      <section className="border-b border-forest-800/8 bg-white">
        <div className="container-x grid gap-px sm:grid-cols-3">
          {[
            {
              icon: Icons.phoneCall,
              label: "Call us",
              value: site.contact.phone,
              href: site.contact.phoneHref,
              note: site.contact.hours,
            },
            {
              icon: Icons.mail,
              label: "Email us",
              value: site.contact.email,
              href: site.contact.emailHref,
              note: "Replies within one working day",
            },
            {
              icon: Icons.whatsapp,
              label: "WhatsApp",
              value: "Message us directly",
              href: site.contact.whatsappHref,
              note: "Quickest for small questions",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <a
                href={item.href}
                className="group flex h-full flex-col py-10 transition-colors sm:pr-8"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-forest-950">
                  <item.icon className="size-5" />
                </span>
                <span className="mt-5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-600">
                  {item.label}
                </span>
                <span className="mt-2 text-[18px] font-semibold text-forest-900 transition-colors group-hover:text-gold-600">
                  {item.value}
                </span>
                <span className="mt-1.5 text-[13.5px] text-muted">
                  {item.note}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Section tone="cream">
        <div className="container-x grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <h2 className="mb-7 text-[clamp(1.6rem,3.2vw,2.2rem)] leading-tight text-forest-900">
              Send us a message
            </h2>
            <Suspense
              fallback={
                <div className="h-[640px] animate-pulse rounded-3xl border border-forest-800/10 bg-white/60" />
              }
            >
              <QuoteForm compact />
            </Suspense>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-emerald-mesh p-7 text-cream">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  {site.legalName}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-forest-100/70">
                  {site.description}
                </p>
                <div className="mt-6 space-y-3.5 border-t border-gold-300/12 pt-6 text-[14.5px]">
                  <p className="flex items-center gap-3 text-forest-100/75">
                    <Icons.globe className="size-4 text-gold-400" />
                    Serving businesses across the {site.contact.location}
                  </p>
                  <p className="flex items-center gap-3 text-forest-100/75">
                    <Icons.clock className="size-4 text-gold-400" />
                    {site.contact.hours}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-forest-800/10 bg-white p-7">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                  Follow our work
                </h3>
                <div className="mt-5 space-y-2">
                  {site.socials.map((s) => {
                    const Icon = socialIcon[s.name as keyof typeof socialIcon];
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl px-3 py-3 transition-colors hover:bg-forest-50"
                      >
                        <span className="grid size-10 place-items-center rounded-xl bg-forest-800/6 text-forest-700 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                          <Icon className="size-[18px]" />
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold text-forest-900">
                            {s.name}
                          </span>
                          <span className="block text-[12.5px] text-muted">
                            {s.handle}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-gold-400/30 bg-gold-400/[.07] p-7">
                <h3 className="text-[17.5px] leading-snug text-forest-900">
                  Want a price instead of a chat?
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                  Use the full quote form and we&apos;ll send an itemised,
                  fixed-price proposal.
                </p>
                <a
                  href="/quote"
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-forest-800 transition-colors hover:text-gold-600"
                >
                  Get a free quote
                  <Icons.arrow className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
