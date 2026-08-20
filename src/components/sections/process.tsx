import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { processSteps } from "@/content/work";

export function ProcessSection({ id = "process" }: { id?: string }) {
  return (
    <Section tone="white" id={id}>
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title="Five steps from first call to"
          accent="fully booked"
          lead="No mystery, no radio silence. You always know what's happening, what's next, and exactly what it costs."
        />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* Connecting line on desktop */}
          <span
            aria-hidden="true"
            className="rule-gold absolute left-0 right-0 top-[26px] hidden h-px opacity-40 lg:block"
          />

          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 100}
              className="relative"
            >
              <span className="relative z-10 grid size-[52px] place-items-center rounded-full border border-gold-400/40 bg-white font-display text-[17px] text-gold-600 shadow-[0_6px_20px_-8px_rgba(176,133,64,.5)]">
                {step.number}
              </span>
              <h3 className="mt-6 text-[21px] leading-tight text-forest-900">
                {step.title}
              </h3>
              <span className="mt-1.5 block text-[11.5px] font-bold uppercase tracking-[0.16em] text-gold-600">
                {step.duration}
              </span>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
