import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { Icons } from "@/components/icons";
import { legalDocs, getLegalDoc } from "@/content/legal";

export function generateStaticParams() {
  return legalDocs.map((d) => ({ doc: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/legal/[doc]">): Promise<Metadata> {
  const { doc } = await params;
  const found = getLegalDoc(doc);
  if (!found) return { title: "Not found" };
  return {
    title: found.title,
    description: found.intro,
    alternates: { canonical: `/legal/${found.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({ params }: PageProps<"/legal/[doc]">) {
  const { doc } = await params;
  const found = getLegalDoc(doc);
  if (!found) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Last updated ${found.updated}`}
        title={found.title}
        lead={found.intro}
        breadcrumbs={[{ label: "Legal" }, { label: found.title }]}
        size="sm"
      />

      <Section tone="cream">
        <div className="container-x grid gap-12 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Contents */}
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
              On this page
            </h2>
            <ol className="mt-5 space-y-2.5">
              {found.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s${i}`}
                    className="text-[14px] text-muted transition-colors hover:text-forest-800"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-8 space-y-2 border-t border-forest-800/10 pt-6">
              {legalDocs
                .filter((d) => d.slug !== found.slug)
                .map((d) => (
                  <Link
                    key={d.slug}
                    href={`/legal/${d.slug}`}
                    className="flex items-center gap-2 text-[14px] font-medium text-forest-800 transition-colors hover:text-gold-600"
                  >
                    <Icons.arrow className="size-3.5 text-gold-500" />
                    {d.title}
                  </Link>
                ))}
            </div>
          </nav>

          {/* Body */}
          <div className="rounded-3xl border border-forest-800/10 bg-white p-8 sm:p-12">
            {found.sections.map((section, i) => (
              <section
                key={section.heading}
                id={`s${i}`}
                className="scroll-mt-28 [&+&]:mt-10"
              >
                <h2 className="text-[clamp(1.3rem,2.4vw,1.75rem)] leading-tight text-forest-900">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((p, j) => (
                    <p
                      key={j}
                      className="text-[15.5px] leading-relaxed text-ink/78"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <p className="mt-12 rounded-2xl bg-forest-50 px-6 py-5 text-[13.5px] leading-relaxed text-muted">
              This document is provided as a starting point and is not legal
              advice. Have it reviewed by a qualified adviser and complete any
              remaining placeholders before relying on it.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
