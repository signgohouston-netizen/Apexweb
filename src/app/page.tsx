import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { ServicesGrid } from "@/components/home/services-grid";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { PricingCard } from "@/components/pricing-card";
import { ProjectCard } from "@/components/project-card";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { websitePlans, socialPlans } from "@/content/pricing";
import { featuredProjects, generalFaqs } from "@/content/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesGrid />

      {/* ---------------- Website packages ---------------- */}
      <Section tone="cream" id="packages">
        <div className="container-x">
          <SectionHeading
            eyebrow="Website packages"
            title="Fixed prices."
            accent="No surprises."
            lead="Every package below is a complete website — designed for you, not dragged out of a template. The price you're quoted is the price you pay."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-4 lg:items-start">
            {websitePlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <PricingCard plan={plan} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <p className="text-[14.5px] text-muted">
                Not sure which fits? We&apos;ll tell you honestly — even if
                it&apos;s the cheaper one.
              </p>
              <Button href="/websites" variant="outline" size="sm" arrow>
                Compare all packages
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Social media ---------------- */}
      <Section tone="dark">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Social media management"
              title="Your socials, run properly —"
              accent="without you lifting a finger"
              lead="Posting once a fortnight and hoping isn't a strategy. We build a content plan, produce everything, publish it on schedule and tell you plainly what it did for the business."
              tone="light"
              align="left"
            />

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Original graphics & short-form video",
                "Captions written in your voice",
                "Calendar approved by you monthly",
                "We reply to comments & DMs",
                "Competitor and hashtag research",
                "Monthly report you can actually read",
              ].map((item) => (
                <Tick key={item} tone="light">
                  {item}
                </Tick>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/social-media" variant="gold" size="md" arrow>
                See social plans
              </Button>
              <Button
                href="/quote?service=social-media"
                variant="light"
                size="md"
              >
                Request a strategy call
              </Button>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid gap-4 sm:grid-cols-3">
              {socialPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="glass-dark rounded-2xl p-5 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-gold-300/45"
                >
                  <h3 className="font-display text-[20px] text-cream">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-[15px] text-gold-300">
                      £
                    </span>
                    <span className="font-display text-[32px] leading-none text-cream">
                      {typeof plan.price === "number"
                        ? plan.price.toLocaleString("en-GB")
                        : plan.price}
                    </span>
                    <span className="pb-1 text-[11.5px] text-forest-100/50">
                      /mo
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-gold-300/12 pt-5 text-[12.5px] text-forest-100/60">
                    {plan.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex gap-2">
                        <Icons.check className="mt-0.5 size-3 shrink-0 stroke-[2.5] text-gold-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass-dark mt-4 flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                <Icons.users className="size-5" />
              </span>
              <p className="text-[13.5px] leading-relaxed text-forest-100/65">
                <span className="font-semibold text-cream">
                  Instagram, Facebook, TikTok, LinkedIn and X.
                </span>{" "}
                We&apos;ll tell you which ones are worth your money — and which
                aren&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Featured work ---------------- */}
      <Section tone="white">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Recent work"
              title="Sites that pay for themselves."
              lead="A look at what happens when design, search and social pull in the same direction."
              align="left"
              className="max-w-2xl"
            />
            <Button
              href="/work"
              variant="outline"
              size="md"
              arrow
              className="shrink-0"
            >
              View all work
            </Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 110}>
                <ProjectCard project={project} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ProcessSection />
      <TestimonialsSection />

      {/* ---------------- FAQ ---------------- */}
      <Section tone="white">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="The things everyone asks"
              lead="Straight answers on cost, timing and what you actually get. If yours isn't here, just ask."
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="outline" size="md" arrow>
                Ask us anything
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Faq items={generalFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Your competitors already have a better website than you."
        lead="That's usually fixable within a fortnight. Tell us about your business and we'll send a fixed-price proposal by tomorrow."
        secondary={{ label: "See packages", href: "/websites" }}
      />
    </>
  );
}
