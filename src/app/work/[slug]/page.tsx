import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";
import { Button, Section, SectionHeading, Stars } from "@/components/ui";
import { Icons } from "@/components/icons";
import { projects, getProject, getTestimonialForClient } from "@/content/work";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const testimonial = getTestimonialForClient(project.client);

  return (
    <>
      <PageHero
        eyebrow={`${project.sector} · ${project.year}`}
        title={project.title}
        lead={project.summary}
        breadcrumbs={[
          { label: "Work", href: "/work" },
          { label: project.client },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gold-300/25 px-3.5 py-1.5 text-[12.5px] text-forest-100/70"
            >
              {s}
            </span>
          ))}
        </div>
      </PageHero>

      {/* The site itself */}
      {project.image && (
        <section className="relative bg-emerald-mesh pb-16 sm:pb-20">
          <div className="container-x">
            <Reveal>
              <figure className="glass-dark overflow-hidden rounded-3xl p-2.5 shadow-[0_40px_90px_-40px_rgba(0,0,0,.75)] sm:p-3">
                <div className="mb-2.5 flex items-center gap-2 px-2 sm:mb-3">
                  <span className="size-2.5 rounded-full bg-gold-400/70" />
                  <span className="size-2.5 rounded-full bg-gold-400/40" />
                  <span className="size-2.5 rounded-full bg-gold-400/25" />
                  <span className="ml-3 flex h-6 flex-1 items-center rounded-full bg-white/6 px-3 text-[10.5px] text-forest-100/45">
                    {project.liveUrl ?? `${project.slug}.co.uk`}
                  </span>
                </div>
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-forest-950/60">
                  <Image
                    src={project.image}
                    alt={`The ${project.client} website we designed`}
                    fill
                    priority
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* Results strip */}
      <section className="border-b border-forest-800/8 bg-white">
        <div className="container-x grid divide-y divide-forest-800/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {project.results.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 90}
              className="px-2 py-10 text-center"
            >
              <div className="font-display text-[clamp(2.2rem,4.4vw,3.2rem)] leading-none text-gold-600">
                {r.metric}
              </div>
              <div className="mt-3 text-[13px] uppercase tracking-[0.14em] text-muted">
                {r.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <Section tone="cream">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.35fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600">
                Project details
              </h2>
              <dl className="mt-6 space-y-5">
                {[
                  { term: "Client", value: project.client },
                  { term: "Sector", value: project.sector },
                  { term: "Year", value: project.year },
                  { term: "Services", value: project.services.join(", ") },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="border-b border-forest-800/8 pb-5"
                  >
                    <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
                      {item.term}
                    </dt>
                    <dd className="mt-1.5 text-[15.5px] font-medium text-forest-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Button
                href="/quote"
                variant="forest"
                size="md"
                arrow
                className="mt-8"
              >
                Start a similar project
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-10">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] leading-tight text-forest-900">
                The challenge
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/78">
                {project.summary}
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/78">
                Like most businesses at this stage, {project.client}{" "}
                weren&apos;t short of demand — they were short of a way for the
                right people to find them and take the next step without
                friction. Everything we built was aimed squarely at that gap.
              </p>
            </div>

            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] leading-tight text-forest-900">
                What we did
              </h2>
              <ul className="mt-6 space-y-4">
                {project.services.map((s) => (
                  <li
                    key={s}
                    className="flex gap-4 rounded-2xl border border-forest-800/10 bg-white p-5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-300">
                      <Icons.check className="size-4 stroke-[2.5]" />
                    </span>
                    <div>
                      <h3 className="text-[17px] leading-tight text-forest-900">
                        {s}
                      </h3>
                      <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                        Delivered end to end by our own team, built to work
                        alongside everything else in the project rather than as
                        an isolated piece.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gold-400/30 bg-white p-8">
              <h2 className="text-[clamp(1.4rem,2.8vw,1.9rem)] leading-tight text-forest-900">
                The outcome
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {project.results.map((r) => (
                  <div key={r.label}>
                    <div className="font-display text-[30px] leading-none text-gold-600">
                      {r.metric}
                    </div>
                    <div className="mt-2 text-[13px] leading-snug text-muted">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink/78">
                {project.client} stayed on with us afterwards for hosting and
                ongoing support, which is the outcome we care about most — the
                project didn&apos;t end at launch.
              </p>
            </div>

            {testimonial && (
              <figure className="relative overflow-hidden rounded-3xl bg-emerald-mesh p-8 text-cream sm:p-10">
                <Icons.quote className="size-9 text-gold-400/40" />
                <Stars count={testimonial.rating} className="mt-5" />
                <blockquote className="mt-5 font-display text-[clamp(1.25rem,2.4vw,1.6rem)] leading-[1.45] text-cream">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-gold-300/15 pt-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold-400 font-display text-[16px] text-forest-950">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-[15.5px] font-semibold text-cream">
                      {testimonial.name}
                    </span>
                    <span className="block text-[13.5px] text-forest-100/60">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )}
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="More work"
            title="Other projects"
            align="left"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
