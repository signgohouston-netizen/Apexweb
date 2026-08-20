import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icons } from "@/components/icons";
import type { Project } from "@/content/work";

/**
 * Abstract browser mockup, tinted with each project's palette.
 * Used until a real screenshot is dropped into /public/work/ and
 * referenced via the project's `image` field.
 */
function ProjectVisual({ project }: { project: Project }) {
  const [bg, accent] = project.palette;
  const id = `pv-${project.slug}`;
  // Stable per-project layout so the placeholder mockups do not all look alike
  const variant =
    project.slug.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 3;

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.client} website`}
        fill
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 640 400"
      className="size-full transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor="#04180F" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="540" cy="60" r="150" fill={accent} opacity="0.08" />
      <circle cx="90" cy="360" r="120" fill={accent} opacity="0.06" />

      {/* Browser chrome */}
      <g transform="translate(64 62)">
        <rect width="512" height="300" rx="14" fill="#ffffff" opacity="0.07" />
        <rect
          width="512"
          height="300"
          rx="14"
          fill="none"
          stroke={accent}
          strokeOpacity="0.24"
        />
        <path d="M0 34h512" stroke={accent} strokeOpacity="0.2" />
        <circle cx="20" cy="17" r="4" fill={accent} opacity="0.55" />
        <circle cx="36" cy="17" r="4" fill={accent} opacity="0.35" />
        <circle cx="52" cy="17" r="4" fill={accent} opacity="0.22" />
        <rect
          x="76"
          y="11"
          width="180"
          height="12"
          rx="6"
          fill="#ffffff"
          opacity="0.09"
        />

        {variant === 0 && (
          <>
            {/* Split hero: headline left, image right */}
            <rect
              x="28"
              y="62"
              width="190"
              height="13"
              rx="6.5"
              fill={`url(#${id}-accent)`}
            />
            <rect
              x="28"
              y="86"
              width="270"
              height="13"
              rx="6.5"
              fill="#ffffff"
              opacity="0.28"
            />
            <rect
              x="28"
              y="110"
              width="150"
              height="13"
              rx="6.5"
              fill="#ffffff"
              opacity="0.16"
            />
            <rect
              x="28"
              y="144"
              width="104"
              height="30"
              rx="15"
              fill={accent}
              opacity="0.85"
            />
            <rect
              x="330"
              y="62"
              width="154"
              height="112"
              rx="10"
              fill="#ffffff"
              opacity="0.1"
            />
            <path
              d="M330 150l38-34 30 26 26-22 60 54H330z"
              fill={accent}
              opacity="0.3"
            />
            <circle cx="452" cy="86" r="11" fill={accent} opacity="0.45" />
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${28 + i * 152} 206)`}>
                <rect
                  width="128"
                  height="66"
                  rx="10"
                  fill="#ffffff"
                  opacity="0.06"
                />
                <rect
                  width="128"
                  height="66"
                  rx="10"
                  fill="none"
                  stroke={accent}
                  strokeOpacity="0.16"
                />
                <rect
                  x="14"
                  y="16"
                  width="24"
                  height="6"
                  rx="3"
                  fill={accent}
                  opacity="0.65"
                />
                <rect
                  x="14"
                  y="32"
                  width="84"
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  opacity="0.2"
                />
                <rect
                  x="14"
                  y="44"
                  width="60"
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  opacity="0.12"
                />
              </g>
            ))}
          </>
        )}

        {variant === 1 && (
          <>
            {/* Product gallery: centred title over a tile grid */}
            <rect
              x="176"
              y="60"
              width="160"
              height="12"
              rx="6"
              fill={`url(#${id}-accent)`}
            />
            <rect
              x="140"
              y="82"
              width="232"
              height="10"
              rx="5"
              fill="#ffffff"
              opacity="0.2"
            />
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${28 + (i % 4) * 118} 116)`}>
                <rect
                  width="98"
                  height="82"
                  rx="10"
                  fill="#ffffff"
                  opacity={0.06 + (i % 2) * 0.04}
                />
                <rect
                  width="98"
                  height="82"
                  rx="10"
                  fill="none"
                  stroke={accent}
                  strokeOpacity="0.18"
                />
                <circle
                  cx="49"
                  cy="34"
                  r="17"
                  fill={accent}
                  opacity={0.2 + (i % 3) * 0.12}
                />
                <rect
                  x="18"
                  y="60"
                  width="62"
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  opacity="0.18"
                />
              </g>
            ))}
            <rect
              x="28"
              y="214"
              width="330"
              height="10"
              rx="5"
              fill="#ffffff"
              opacity="0.14"
            />
            <rect
              x="28"
              y="234"
              width="240"
              height="10"
              rx="5"
              fill="#ffffff"
              opacity="0.09"
            />
            <rect
              x="380"
              y="212"
              width="104"
              height="34"
              rx="17"
              fill={accent}
              opacity="0.8"
            />
          </>
        )}

        {variant === 2 && (
          <>
            {/* Dashboard: sidebar, stat row and a chart */}
            <rect
              x="16"
              y="50"
              width="86"
              height="236"
              rx="10"
              fill="#ffffff"
              opacity="0.06"
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x="30"
                y={72 + i * 26}
                width={i === 0 ? 52 : 44}
                height="8"
                rx="4"
                fill={i === 0 ? accent : "#ffffff"}
                opacity={i === 0 ? 0.8 : 0.16}
              />
            ))}
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${118 + i * 124} 50)`}>
                <rect
                  width="108"
                  height="60"
                  rx="10"
                  fill="#ffffff"
                  opacity="0.06"
                />
                <rect
                  width="108"
                  height="60"
                  rx="10"
                  fill="none"
                  stroke={accent}
                  strokeOpacity="0.16"
                />
                <rect
                  x="14"
                  y="16"
                  width="36"
                  height="12"
                  rx="6"
                  fill={accent}
                  opacity="0.7"
                />
                <rect
                  x="14"
                  y="36"
                  width="66"
                  height="6"
                  rx="3"
                  fill="#ffffff"
                  opacity="0.16"
                />
              </g>
            ))}
            <rect
              x="118"
              y="126"
              width="356"
              height="160"
              rx="12"
              fill="#ffffff"
              opacity="0.05"
            />
            <rect
              x="118"
              y="126"
              width="356"
              height="160"
              rx="12"
              fill="none"
              stroke={accent}
              strokeOpacity="0.16"
            />
            <path
              d="M142 250l52-38 44 22 48-54 46 30 44-52 46 26"
              fill="none"
              stroke={accent}
              strokeOpacity="0.75"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={142 + i * 56}
                y={262}
                width="34"
                height="8"
                rx="4"
                fill="#ffffff"
                opacity="0.1"
              />
            ))}
          </>
        )}
      </g>
    </svg>
  );
}

export function ProjectCard({
  project,
  className,
  size = "md",
}: {
  project: Project;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-forest-800/10 bg-white transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-[0_34px_70px_-30px_rgba(11,59,45,.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-forest-900",
          size === "lg" ? "aspect-16/10" : "aspect-16/11",
        )}
      >
        <ProjectVisual project={project} />
        {/* Sits at the bottom so it never covers the site's own header */}
        <span className="absolute bottom-4 left-4 rounded-full bg-forest-950/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-300 shadow-lg backdrop-blur-md">
          {project.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2.5 text-[12.5px] text-muted">
          <span className="font-semibold text-forest-700">
            {project.client}
          </span>
          <span className="size-1 rounded-full bg-gold-400" />
          <span>{project.year}</span>
        </div>

        <h3
          className={cn(
            "mt-3 leading-snug text-forest-900 transition-colors group-hover:text-gold-600",
            size === "lg" ? "text-[24px]" : "text-[20px]",
          )}
        >
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-forest-800/8 pt-5">
          {project.results.map((r) => (
            <div key={r.label}>
              <div className="font-display text-[21px] leading-none text-gold-600">
                {r.metric}
              </div>
              <div className="mt-1.5 text-[11.5px] leading-tight text-muted">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-forest-800">
          Read the case study
          <Icons.arrow className="size-4 text-gold-500 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
