import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { site, trustStats } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Apex Web Solutions UK Ltd is a UK digital agency building, hosting and marketing websites for growing businesses. Design. Innovate. Dominate.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Icons.shield,
    title: "Straight answers",
    copy: "If a feature won't earn its keep, we say so before you pay for it. We've talked more than one client into a cheaper package.",
  },
  {
    icon: Icons.bolt,
    title: "Speed as a feature",
    copy: "Slow sites lose customers and rankings. Every build is measured, optimised and tested before it goes anywhere near your domain.",
  },
  {
    icon: Icons.users,
    title: "One accountable team",
    copy: "Design, build, hosting and social all come from us. No subcontractors, no passing the blame when something needs fixing.",
  },
  {
    icon: Icons.chart,
    title: "Judged on results",
    copy: "Compliments are nice. Enquiries pay wages. Every project has a number attached to it before we start.",
  },
  {
    icon: Icons.headset,
    title: "Support that answers",
    copy: "You get the people who built your site, not a ticket queue. Most questions are dealt with the same day.",
  },
  {
    icon: Icons.sparkle,
    title: "No lock-in",
    copy: "You own your domain, your site and your accounts. If you ever want to leave, we'll help you pack.",
  },
];

const differences = [
  "Fixed prices agreed in writing before any work starts",
  "Everything under one roof — no juggling three suppliers",
  "Real designs of your real pages, never a stock template",
  "Hosting, security and backups handled as standard",
  "Plain English — we explain, we don't baffle",
  "You own every asset and account we create",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Design. Innovate."
        accent="Dominate."
        lead="Apex Web Solutions UK Ltd builds the digital side of British businesses — the website, the hosting, the search visibility and the social media — and stays accountable for what it produces."
        breadcrumbs={[{ label: "About" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/work" variant="gold" size="lg" arrow>
            See our work
          </Button>
          <Button href="/contact" variant="light" size="lg">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* Story */}
      <Section tone="cream">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A UK agency that treats your website"
              accent="like a business asset"
              align="left"
            />
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-ink/78">
              <p>
                Too many small businesses have been sold a website they
                can&apos;t edit, hosted somewhere they can&apos;t access, by
                someone who stopped answering the phone six months after launch.
                We started Apex because that&apos;s a solvable problem.
              </p>
              <p>
                Our approach is deliberately unglamorous: agree a fixed price,
                design something genuinely made for your business, build it fast
                and properly, then keep it running. We host what we build, so we
                can&apos;t blame anyone else when something goes wrong — and
                that focuses the mind considerably.
              </p>
              <p>
                We work with trades, restaurants, professional practices,
                retailers and startups across the UK. Some want a five-page site
                and nothing more. Others hand us the whole digital operation.
                Both are fine — what matters is that it earns its keep.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {differences.map((d) => (
                <Tick key={d}>{d}</Tick>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-emerald-mesh p-8 text-cream">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Our mission
                </h3>
                <p className="mt-4 font-display text-[21px] leading-[1.45] text-cream">
                  To give British businesses the kind of online presence that
                  usually costs three times as much — and the support to keep it
                  working.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-forest-800/10 bg-white p-6"
                  >
                    <div className="font-display text-[32px] leading-none text-gold-600">
                      {stat.value}
                    </div>
                    <div className="mt-2.5 text-[12.5px] leading-snug text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gold-400/30 bg-white p-7">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                  Get in touch
                </h3>
                <div className="mt-5 space-y-3.5 text-[14.5px]">
                  <a
                    href={site.contact.phoneHref}
                    className="flex items-center gap-3 text-forest-800 transition-colors hover:text-gold-600"
                  >
                    <Icons.phoneCall className="size-4 text-gold-500" />
                    {site.contact.phone}
                  </a>
                  <a
                    href={site.contact.emailHref}
                    className="flex items-center gap-3 text-forest-800 transition-colors hover:text-gold-600"
                  >
                    <Icons.mail className="size-4 text-gold-500" />
                    {site.contact.email}
                  </a>
                  <p className="flex items-center gap-3 text-muted">
                    <Icons.clock className="size-4 text-gold-500" />
                    {site.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="dark">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we operate"
            title="Six things we won't"
            accent="compromise on"
            lead="These aren't posters on a wall. They're the reasons clients stay with us after the build is finished."
            tone="light"
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-gold-300/12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 90}>
                <div className="group flex h-full flex-col bg-forest-950 p-8 transition-colors duration-500 hover:bg-forest-900">
                  <span className="grid size-12 place-items-center rounded-2xl border border-gold-300/20 text-gold-300 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-[21px] leading-tight text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-forest-100/60">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ProcessSection />
      <TestimonialsSection />

      <CtaBand
        eyebrow="Work with us"
        title="Have a look at what we'd do for you"
        lead="No obligation and no pushy follow-ups. Just a straight answer on what your project needs and what it costs."
      />
    </>
  );
}
