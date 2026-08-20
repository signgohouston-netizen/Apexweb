"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui";
import { mainNav, site } from "@/content/site";
import { services } from "@/content/services";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 hidden bg-forest-950 text-cream md:block">
        <div className="container-x flex h-9 items-center justify-between text-[12.5px]">
          <p className="flex items-center gap-2 text-forest-100/70">
            <Icons.sparkle className="size-3.5 text-gold-400" />
            <span>
              Free domain &amp; 12 months hosting with every Business Site —{" "}
              <Link
                href="/websites"
                className="text-gold-300 underline-offset-4 hover:underline"
              >
                see packages
              </Link>
            </span>
          </p>
          <div className="flex items-center gap-5 text-forest-100/70">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Icons.phoneCall className="size-3.5" />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.emailHref}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <Icons.mail className="size-3.5" />
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-b border-forest-800/10 bg-cream/85 backdrop-blur-xl shadow-[0_1px_30px_-12px_rgba(11,59,45,.3)]"
            : "border-b border-transparent bg-cream/0",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Logo showTagline={!scrolled} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) =>
              item.label === "Services" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors",
                      isActive(item.href)
                        ? "text-forest-800"
                        : "text-ink/70 hover:text-forest-800",
                    )}
                  >
                    {item.label}
                    <Icons.chevron
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </Link>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-300 ease-[var(--ease-out-expo)]",
                      servicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                    )}
                  >
                    <div className="grid grid-cols-2 gap-1 rounded-3xl border border-forest-800/10 bg-white p-3 shadow-[0_30px_70px_-30px_rgba(11,59,45,.45)]">
                      {services.map((s) => {
                        const Icon = Icons[s.icon];
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-forest-50"
                          >
                            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-forest-800/6 text-forest-700 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                              <Icon className="size-[18px]" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[13.5px] font-semibold text-forest-900">
                                {s.title
                                  .replace(" & Development", "")
                                  .replace(" Writing", "")}
                              </span>
                              <span className="mt-0.5 block truncate text-[12px] text-muted">
                                {s.short}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors",
                    isActive(item.href)
                      ? "text-forest-800"
                      : "text-ink/70 hover:text-forest-800",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* Wrapped rather than given `hidden` directly: the Button base class
                sets `inline-flex`, which would win over `hidden` at the same
                specificity and leave these visible on mobile. */}
            <span className="hidden xl:block">
              <Button href="/contact" variant="ghost" size="sm">
                Contact
              </Button>
            </span>
            <span className="hidden sm:block">
              <Button href="/quote" variant="gold" size="sm" arrow>
                Free Quote
              </Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-forest-800/15 text-forest-800 transition-colors hover:bg-forest-800/5 lg:hidden"
            >
              {open ? (
                <Icons.close className="size-5" />
              ) : (
                <Icons.menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-forest-950/50 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 max-h-[92dvh] overflow-y-auto rounded-b-[2rem] bg-cream pb-8 pt-[112px] shadow-2xl transition-transform duration-500 ease-[var(--ease-out-expo)]",
            open ? "translate-y-0" : "-translate-y-full",
          )}
        >
          {/* Any navigation from inside the drawer closes it */}
          <nav
            className="container-x flex flex-col"
            aria-label="Mobile"
            onClick={() => setOpen(false)}
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between border-b border-forest-800/8 py-4 font-display text-xl text-forest-900"
              >
                {item.label}
                <Icons.arrow className="size-4 text-gold-500" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-between border-b border-forest-800/8 py-4 font-display text-xl text-forest-900"
            >
              Contact
              <Icons.arrow className="size-4 text-gold-500" />
            </Link>

            <div className="mt-7 grid gap-3">
              <Button
                href="/quote"
                variant="gold"
                size="lg"
                arrow
                className="w-full"
              >
                Get a Free Quote
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-forest-800/15 py-3 text-sm font-semibold text-forest-800"
                >
                  <Icons.phoneCall className="size-4" /> Call
                </a>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-forest-800/15 py-3 text-sm font-semibold text-forest-800"
                >
                  <Icons.whatsapp className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
