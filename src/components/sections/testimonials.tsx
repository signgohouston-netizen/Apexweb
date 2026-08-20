import { Icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading, Stars } from "@/components/ui";
import { testimonials } from "@/content/work";

export function TestimonialsSection() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client feedback"
          title="They came for a website."
          accent="They stayed for the results."
          lead="A sample of what our clients say once the dust settles and the enquiries start arriving."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-forest-800/10 bg-white p-8 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_28px_60px_-30px_rgba(11,59,45,.4)]">
                <Icons.quote className="size-8 text-gold-400/35" />
                <Stars count={t.rating} className="mt-5" />
                <blockquote className="mt-5 flex-1 font-display text-[19px] leading-[1.5] text-forest-900">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-forest-800/8 pt-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-[15px] text-gold-300">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14.5px] font-semibold text-forest-900">
                      {t.name}
                    </span>
                    <span className="block truncate text-[13px] text-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Secondary quotes */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.slice(3).map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="flex h-full items-start gap-5 rounded-3xl border border-forest-800/10 bg-forest-800/[.03] p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-[15px] text-gold-300">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <Stars count={t.rating} />
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-[13px] text-muted">
                    <span className="font-semibold text-forest-800">
                      {t.name}
                    </span>{" "}
                    — {t.role}, {t.company}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
