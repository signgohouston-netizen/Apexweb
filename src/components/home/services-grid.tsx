import Link from "next/link";
import { Icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading, Button } from "@/components/ui";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <Section tone="dark">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Eight services."
            accent="One accountable team."
            lead="Whether you need a single logo or an entire digital operation run for you, it comes from the same people — no subcontractors, no finger-pointing."
            tone="light"
            align="left"
            className="max-w-2xl"
          />
          <Button
            href="/services"
            variant="light"
            size="md"
            arrow
            className="shrink-0"
          >
            All services
          </Button>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-gold-300/12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = Icons[service.icon];
            return (
              <Reveal key={service.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col bg-forest-950 p-7 transition-colors duration-500 hover:bg-forest-900"
                >
                  <span className="grid size-11 place-items-center rounded-xl border border-gold-300/20 text-gold-300 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="mt-6 text-[19px] leading-snug text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-forest-100/60">
                    {service.short}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gold-300/12 pt-5">
                    <span className="text-[13px] font-semibold text-gold-300">
                      {service.startingAt}
                    </span>
                    <Icons.arrow className="size-4 text-forest-100/40 transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-gold-300" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
