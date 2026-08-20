import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Reveal } from "@/components/reveal";
import { Button, Section } from "@/components/ui";
import { projects } from "@/content/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from UK businesses we've built websites, apps and social media for — with the results those projects actually produced.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects measured in enquiries,"
        accent="not compliments"
        lead="A good-looking website that doesn't sell anything is a failure with nice typography. Here's what happened when design, search and social pulled together."
        breadcrumbs={[{ label: "Work" }]}
      >
        <Button href="/quote" variant="gold" size="lg" arrow>
          Start your project
        </Button>
      </PageHero>

      <Section tone="cream">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 100}>
              <ProjectCard project={project} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <TestimonialsSection />

      <CtaBand
        eyebrow="Your turn"
        title="Let's put your business on this page"
        lead="Tell us what you're trying to achieve and we'll show you exactly how we'd approach it — before you commit to anything."
      />
    </>
  );
}
