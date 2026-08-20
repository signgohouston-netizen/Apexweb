import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui";
import { footerNav, site } from "@/content/site";

const socialIcon = {
  Instagram: Icons.instagram,
  Facebook: Icons.facebook,
  TikTok: Icons.tiktok,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-emerald-mesh text-cream">
      {/* Top hairline */}
      <div className="rule-gold h-px w-full opacity-40" />

      {/* CTA band */}
      <div className="container-x border-b border-gold-300/12 py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.1] text-cream">
              Ready to <span className="text-gold-gradient">dominate</span> your
              market?
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-forest-100/70">
              Tell us about your business and we&apos;ll send back a fixed-price
              proposal within one working day. No pressure, no jargon, no
              obligation.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/quote" variant="gold" size="lg" arrow>
              Get a Free Quote
            </Button>
            <Button
              href={site.contact.phoneHref}
              variant="light"
              size="lg"
              external
            >
              {site.contact.phone}
            </Button>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-forest-100/60">
            {site.description}
          </p>

          <div className="mt-7 space-y-3 text-[14.5px]">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-3 text-forest-100/75 transition-colors hover:text-gold-300"
            >
              <Icons.phoneCall className="size-4 text-gold-400" />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.emailHref}
              className="flex items-center gap-3 text-forest-100/75 transition-colors hover:text-gold-300"
            >
              <Icons.mail className="size-4 text-gold-400" />
              {site.contact.email}
            </a>
            <p className="flex items-center gap-3 text-forest-100/75">
              <Icons.clock className="size-4 text-gold-400" />
              {site.contact.hours}
            </p>
            {site.registration.registeredAddress && (
              <p className="flex items-start gap-3 text-forest-100/75">
                <Icons.globe className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span>{site.registration.registeredAddress}</span>
              </p>
            )}
          </div>

          <div className="mt-7 flex gap-2.5">
            {site.socials.map((s) => {
              const Icon = socialIcon[s.name as keyof typeof socialIcon];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.name}`}
                  className="grid size-10 place-items-center rounded-full border border-gold-300/20 text-forest-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300/60 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-forest-100/65 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal strip */}
      <div className="border-t border-gold-300/12">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-[13px] text-forest-100/45 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-center sm:text-right">
            <Icons.shield className="size-3.5 shrink-0 text-gold-400/70" />
            <span>
              Registered in {site.registration.jurisdiction}
              {site.registration.companyNumber &&
                ` · Company no. ${site.registration.companyNumber}`}
              {site.registration.vatNumber
                ? ` · VAT ${site.registration.vatNumber}`
                : " · VAT details on request"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
