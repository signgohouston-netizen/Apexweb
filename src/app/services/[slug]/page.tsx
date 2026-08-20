import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Tick } from "@/components/ui";
import { Icons } from "@/components/icons";
import { services, getService } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.blurb,
    provider: { "@type": "Organization", name: "Apex Web Solutions UK Ltd" },
    areaServed: "GB",
  };

  return (
    <>
      <PageHero
        eyebrow={`From ${service.startingAt} · ${service.timeline}`}
        title={service.title}
        lead={service.blurb}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={`/quote?service=${service.slug}`}
            variant="gold"
            size="lg"
            arrow
          >
            Request a quote
          </Button>
          <Button href="/contact" variant="light" size="lg">
            Book a call
          </Button>
        </div>
      </PageHero>

      {/* Highlights strip */}
      <section className="border-b border-forest-800/8 bg-white">
        <div className="container-x grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {service.highlights.map((h, i) => (
            <Reveal key={h} delay={i * 80} className="py-8 sm:pr-8">
              <span className="grid size-9 place-items-center rounded-xl bg-gold-400/15 text-gold-600">
                <Icons.check className="size-4 stroke-[2.5]" />
              </span>
              <p className="mt-4 text-[14.5px] font-medium leading-snug text-forest-900">
                {h}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deliverables + process */}
      <Section tone="cream">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="What's included"
              title="Exactly what you get"
              lead="Everything below is part of the standard engagement. Anything outside it gets quoted separately, in writing, before we start."
              align="left"
            />
            <ul className="mt-8 space-y-3.5">
              {service.deliverables.map((d) => (
                <Tick key={d}>{d}</Tick>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="How it runs"
              title="The process, step by step"
              lead="No black boxes. You'll know what's happening at every stage and what we need from you."
              align="left"
            />
            <ol className="mt-8 space-y-5">
              {service.process.map((step, i) => (
                <li
                  key={step.step}
                  className="flex gap-5 rounded-2xl border border-forest-800/10 bg-white p-5 transition-all duration-400 hover:border-gold-400/40"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-[14px] text-gold-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[17.5px] leading-tight text-forest-900">
                      {step.step}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <Section tone="white">
          <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Questions"
                title="Questions we get asked"
                lead="If your question isn't covered, send it over — we answer every one personally."
                align="left"
              />
              <Button
                href="/contact"
                variant="outline"
                size="md"
                arrow
                className="mt-8"
              >
                Ask a question
              </Button>
            </Reveal>
            <Reveal delay={120}>
              <Faq items={service.faqs} />
            </Reveal>
          </div>
        </Section>
      )}

      {/* Related services */}
      <Section tone="dark" size="sm">
        <div className="container-x">
          <SectionHeading
            eyebrow="Also available"
            title="Pairs well with"
            tone="light"
            align="left"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-gold-300/12 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => {
              const Icon = Icons[other.icon];
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group flex flex-col bg-forest-950 p-7 transition-colors duration-500 hover:bg-forest-900"
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-gold-300/20 text-gold-300 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <Icon className="size-[18px]" />
                  </span>
                  <h3 className="mt-5 text-[17px] leading-snug text-cream">
                    {other.title}
                  </h3>
                  <span className="mt-4 flex items-center gap-2 text-[13px] text-gold-300">
                    From {other.startingAt}
                    <Icons.arrow className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand
        title={`Ready to get started with ${service.title.toLowerCase()}?`}
        lead="Tell us what you're trying to achieve and we'll send a fixed-price proposal within one working day."
        primary={{
          label: "Request a quote",
          href: `/quote?service=${service.slug}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
