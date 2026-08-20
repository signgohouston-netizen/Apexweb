import Link from "next/link";
import { Button, Eyebrow } from "@/components/ui";
import { Icons } from "@/components/icons";
import { mainNav } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-emerald-mesh py-28 text-cream sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div className="container-x relative text-center">
        <Eyebrow tone="light" className="justify-center">
          Error 404
        </Eyebrow>
        <h1 className="mx-auto mt-6 max-w-2xl text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] text-cream">
          That page has gone{" "}
          <span className="text-gold-gradient">walkabout</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-forest-100/70">
          The link may be out of date, or the page may have moved. Here&apos;s
          the way back.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold" size="lg" arrow>
            Back to home
          </Button>
          <Button href="/contact" variant="light" size="lg">
            Report a broken link
          </Button>
        </div>

        <nav
          className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-2.5"
          aria-label="Popular pages"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 rounded-full border border-gold-300/20 px-4 py-2 text-[13.5px] text-forest-100/70 transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
            >
              {item.label}
              <Icons.arrow className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
