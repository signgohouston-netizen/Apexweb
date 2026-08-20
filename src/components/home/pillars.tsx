import Link from "next/link";
import { Icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Section, Tick } from "@/components/ui";
import { startingPrices } from "@/content/pricing";

const pillars = [
  {
    icon: Icons.browser,
    title: "Buy a website",
    href: "/websites",
    price: `From ${startingPrices.website}`,
    copy: "Fixed-price packages with everything included — design, build, domain, hosting and support. Pick a package, we do the rest.",
    points: [
      "5 to unlimited pages",
      "Free domain & hosting",
      "Live in 2–4 weeks",
    ],
  },
  {
    icon: Icons.megaphone,
    title: "Grow on social",
    href: "/social-media",
    price: `From ${startingPrices.social}`,
    copy: "We plan, design, write and post your content across the platforms your customers actually use — and report on what it earned you.",
    points: [
      "12–30 posts a month",
      "Video & Reels included",
      "Community management",
    ],
  },
  {
    icon: Icons.server,
    title: "Host it with us",
    href: "/hosting",
    price: `From ${startingPrices.hosting}`,
    copy: "Fast UK hosting, free SSL, daily backups and 24/7 monitoring. Domains registered in your name and wired up properly.",
    points: [
      "99.9% uptime guarantee",
      "Free migration",
      "Real humans on support",
    ],
  },
];

export function Pillars() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="One team, one invoice"
          title="Everything your business needs online,"
          accent="under one roof"
          lead="Most agencies build the website and disappear. We build it, host it, secure it, and keep it filling your inbox — so you have one number to ring when anything needs doing."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 110}>
              <Link
                href={pillar.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-forest-800/10 bg-white p-8 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-[0_34px_70px_-32px_rgba(11,59,45,.45)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 rule-gold" />

                <span className="grid size-14 place-items-center rounded-2xl bg-forest-800 text-gold-300 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-forest-950">
                  <pillar.icon className="size-6" />
                </span>

                <div className="mt-6 flex items-baseline justify-between gap-3">
                  <h3 className="text-[25px] leading-tight text-forest-900">
                    {pillar.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-forest-50 px-3 py-1 text-[12px] font-bold text-forest-700">
                    {pillar.price}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {pillar.copy}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-forest-800/8 pt-6">
                  {pillar.points.map((p) => (
                    <Tick key={p}>{p}</Tick>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-forest-800">
                  Explore
                  <Icons.arrow className="size-4 text-gold-500 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
