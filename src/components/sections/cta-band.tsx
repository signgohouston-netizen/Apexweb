import { Button, Eyebrow } from "@/components/ui";
import { Icons } from "@/components/icons";
import { site } from "@/content/site";

export function CtaBand({
  eyebrow = "Next step",
  title = "Let's talk about your project",
  lead = "Tell us what you need and we'll come back with a fixed price and a realistic timeline — usually the same day.",
  primary = { label: "Get a Free Quote", href: "/quote" },
  secondary,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-forest-800 py-20 text-cream sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-forest-400/10 blur-3xl"
      />

      <div className="container-x relative text-center">
        <Eyebrow tone="light" className="mb-6">
          {eyebrow}
        </Eyebrow>
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.06] text-cream">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-forest-100/70">
          {lead}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={primary.href} variant="gold" size="lg" arrow>
            {primary.label}
          </Button>
          <Button
            href={secondary?.href ?? site.contact.phoneHref}
            variant="light"
            size="lg"
            external={!secondary}
          >
            {secondary?.label ?? `Call ${site.contact.phone}`}
          </Button>
        </div>

        <p className="mt-7 inline-flex items-center gap-2 text-[13.5px] text-forest-100/50">
          <Icons.clock className="size-4 text-gold-400" />
          {site.contact.responseTime}
        </p>
      </div>
    </section>
  );
}
