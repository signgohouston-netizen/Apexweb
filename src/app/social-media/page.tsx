import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { socialPlans } from "@/content/pricing";
import { getService } from "@/content/services";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Done-for-you social media management from £265/month. Content planning, original graphics, video, captions, posting and community management across Instagram, Facebook, TikTok, LinkedIn and X.",
  alternates: { canonical: "/social-media" },
};

const platforms = [
  {
    name: "Instagram",
    icon: Icons.instagram,
    note: "Reels, Stories, carousels",
  },
  {
    name: "Facebook",
    icon: Icons.facebook,
    note: "Pages, groups, local reach",
  },
  { name: "TikTok", icon: Icons.tiktok, note: "Short-form video that travels" },
  { name: "LinkedIn", icon: Icons.users, note: "B2B authority and hiring" },
  { name: "X", icon: Icons.x, note: "Announcements and reactive posts" },
];

const deliverables = [
  {
    icon: Icons.palette,
    title: "We design it",
    copy: "Original graphics, carousels and short-form video edited to your brand — never recycled stock.",
  },
  {
    icon: Icons.sparkle,
    title: "We write it",
    copy: "Captions in your voice, with hooks that stop the scroll and hashtags researched, not guessed.",
  },
  {
    icon: Icons.clock,
    title: "We post it",
    copy: "Scheduled at the times your audience is actually online, across every channel on your plan.",
  },
  {
    icon: Icons.users,
    title: "We reply",
    copy: "Comments and DMs handled daily, so nobody who's interested gets left on read.",
  },
  {
    icon: Icons.chart,
    title: "We report it",
    copy: "One clear monthly summary: reach, growth, engagement, and what we're changing next month.",
  },
  {
    icon: Icons.shield,
    title: "You approve it",
    copy: "Nothing goes live without your sign-off. You see the whole month's calendar in advance.",
  },
];

export default function SocialMediaPage() {
  const service = getService("social-media")!;

  return (
    <>
      <PageHero
        eyebrow="Social media management"
        title="Content, posted consistently,"
        accent="by people who know why"
        lead="You didn't start a business to write captions at 11pm. Hand it over — we plan it, make it, post it and prove it's working."
        breadcrumbs={[{ label: "Social Media" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#plans" variant="gold" size="lg" arrow>
            See plans &amp; pricing
          </Button>
          <Button href="/quote?service=social-media" variant="light" size="lg">
            Book a strategy call
          </Button>
        </div>
      </PageHero>

      {/* Platforms */}
      <section className="border-b border-forest-800/8 bg-white py-10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
            Platforms we manage
          </span>
          {platforms.map((p) => (
            <span key={p.name} className="group flex items-center gap-2.5">
              <p.icon className="size-5 text-forest-700 transition-colors group-hover:text-gold-500" />
              <span className="text-[14.5px] font-semibold text-forest-900">
                {p.name}
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* What's included */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Fully managed"
            title="Six things we take off your plate"
            accent="every single month"
            lead="This isn't a scheduling tool with a login. It's a team producing your content and answering for the results."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-forest-800/10 bg-white p-7 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_28px_60px_-30px_rgba(11,59,45,.4)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-[20px] leading-tight text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {item.copy}
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
            eyebrow="Monthly plans"
            title="Three plans."
            accent="Cancel with 30 days' notice."
            lead="Three-month minimum, because social media doesn't produce meaningful results in four weeks. After that it's rolling."
            tone="light"
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
            {socialPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <PricingCard plan={plan} tone="dark" className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] leading-relaxed text-forest-100/50">
              Ad spend is billed separately and paid directly to the platform —
              we never mark it up. Need something between two plans? We&apos;ll
              build a custom package.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Bundle offer */}
      <Section tone="cream" size="sm">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-gold-400/30 bg-white p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold-700">
                  <Icons.sparkle className="size-3.5" />
                  Best value
                </span>
                <h2 className="mt-5 text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-forest-900">
                  Bundle a website with social and save
                </h2>
                <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted">
                  A great website with nobody visiting it is a very expensive
                  business card. Take a website package alongside any social
                  plan and we&apos;ll build the two to work together — shared
                  content, shared branding, shared reporting.
                </p>
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "One team, one point of contact",
                    "Content repurposed across both",
                    "Combined monthly reporting",
                    "Discounted setup on the social plan",
                  ].map((item) => (
                    <Tick key={item}>{item}</Tick>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  href="/quote?package=bundle"
                  variant="gold"
                  size="lg"
                  arrow
                >
                  Ask about bundles
                </Button>
                <Button href="/websites" variant="outline" size="lg">
                  See website packages
                </Button>
              </div>
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
              title="Social media FAQs"
              lead="What people ask before handing over their accounts."
              align="left"
            />
          </Reveal>
          <Reveal delay={120}>
            <Faq items={service.faqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Stop posting into the void"
        lead="Tell us about your business and we'll audit your current accounts for free — including an honest view on whether you need us at all."
        primary={{
          label: "Request a free audit",
          href: "/quote?service=social-media",
        }}
      />
    </>
  );
}
