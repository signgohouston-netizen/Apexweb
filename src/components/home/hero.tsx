import Image from "next/image";
import { Button, Eyebrow } from "@/components/ui";
import { Icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { trustStats } from "@/content/site";

const heroPoints = [
  { icon: Icons.bolt, label: "Live in 14 days" },
  { icon: Icons.shield, label: "Hosting & security included" },
  { icon: Icons.headset, label: "UK support, real people" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-mesh text-cream">
      {/* Decorative glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 size-[34rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 size-[38rem] rounded-full bg-forest-400/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow tone="light">Web · Social · Hosting</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-cream">
              Websites that win you
              <br className="hidden sm:block" />{" "}
              <span className="text-gold-gradient">the work.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-[17.5px] leading-relaxed text-forest-100/75">
              We design, build, host and market websites for UK businesses. Buy
              a ready-made package or commission something entirely bespoke —
              either way, one team handles the lot, from the domain name to the
              last Instagram post.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/quote" variant="gold" size="lg" arrow>
                Get a Free Quote
              </Button>
              <Button href="/websites" variant="light" size="lg">
                See Packages &amp; Prices
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {heroPoints.map((point) => (
                <li
                  key={point.label}
                  className="flex items-center gap-2.5 text-[14px] text-forest-100/70"
                >
                  <point.icon className="size-4 text-gold-400" />
                  {point.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative">
          <HeroVisual />
        </Reveal>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-gold-300/12">
        <div className="container-x grid grid-cols-2 divide-x divide-gold-300/10 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="px-2 py-8 text-center first:pl-0 lg:py-10"
            >
              <div className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none text-gold-300">
                {stat.value}
              </div>
              <div className="mt-2.5 text-[12.5px] uppercase tracking-[0.14em] text-forest-100/50">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[560px]">
      {/* Main browser */}
      <div className="glass-dark relative overflow-hidden rounded-3xl p-3 shadow-[0_40px_90px_-40px_rgba(0,0,0,.8)]">
        <div className="mb-3 flex items-center gap-2 px-2">
          <span className="size-2.5 rounded-full bg-gold-400/70" />
          <span className="size-2.5 rounded-full bg-gold-400/40" />
          <span className="size-2.5 rounded-full bg-gold-400/25" />
          <div className="ml-3 flex h-6 flex-1 items-center rounded-full bg-white/6 px-3 text-[10px] text-forest-100/45">
            yourbusiness.co.uk
          </div>
        </div>

        <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-forest-950/60">
          <Image
            src="/work/northgate-joinery.jpg"
            alt="A fitted-kitchen website we designed, shown on desktop"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Floating phone */}
      <div className="absolute -bottom-12 -left-14 hidden w-[116px] animate-[float_7s_ease-in-out_infinite] lg:block">
        <div className="glass-dark overflow-hidden rounded-[1.6rem] p-2 shadow-[0_30px_60px_-25px_rgba(0,0,0,.9)]">
          <div className="relative aspect-[420/900] overflow-hidden rounded-[1.15rem] bg-forest-950/70">
            <Image
              src="/work/mobile-saffron.jpg"
              alt="A restaurant website we designed, shown on mobile"
              fill
              sizes="128px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Floating metric chip */}
      <div className="absolute -right-3 -top-6 hidden animate-[float_8s_ease-in-out_infinite_0.8s] sm:block">
        <div className="glass-dark flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_24px_50px_-25px_rgba(0,0,0,.9)]">
          <span className="grid size-9 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
            <Icons.chart className="size-4" />
          </span>
          <span>
            <span className="block font-display text-[19px] leading-none text-cream">
              +184%
            </span>
            <span className="mt-1 block text-[10.5px] uppercase tracking-wider text-forest-100/50">
              Enquiries
            </span>
          </span>
        </div>
      </div>

      {/* Floating speed chip */}
      <div className="absolute -bottom-4 right-4 hidden animate-[float_6.5s_ease-in-out_infinite_0.4s] md:block">
        <div className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-[0_24px_50px_-25px_rgba(0,0,0,.9)]">
          <Icons.bolt className="size-4 text-gold-300" />
          <span className="text-[12.5px] font-semibold text-cream">
            1.1s load
          </span>
        </div>
      </div>
    </div>
  );
}
