import type { SVGProps } from "react";
import type { IconName } from "@/content/services";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons = {
  browser: (p: P) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 9h19" />
      <circle cx="6" cy="6.5" r=".6" fill="currentColor" />
      <circle cx="8.5" cy="6.5" r=".6" fill="currentColor" />
      <path d="M6 12.5h7M6 16h10" />
    </svg>
  ),
  megaphone: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l1.7 4.3a1.5 1.5 0 0 0 2.8-1.1L9.2 15" />
      <path d="M6 15V9l11-5.2a1 1 0 0 1 1.4.9v14.6a1 1 0 0 1-1.4.9L6 15Z" />
      <path d="M20.5 9.5a3 3 0 0 1 0 5" />
    </svg>
  ),
  search: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.6-4.6" />
      <path d="M7.5 10.5h6M10.5 7.5v6" />
    </svg>
  ),
  palette: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.3-9-7.3Z" />
      <circle cx="7.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17.3" cy="11" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  phone: (p: P) => (
    <svg {...base} {...p}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 5.5h3" />
      <path d="M11 18.5h2" />
    </svg>
  ),
  layers: (p: P) => (
    <svg {...base} {...p}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5L20.5 12" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </svg>
  ),
  server: (p: P) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="6.5" rx="2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
      <path d="M7 7.2h.01M7 16.8h.01" />
      <path d="M11 7.2h5M11 16.8h5" />
    </svg>
  ),
  globe: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  ),
  check: (p: P) => (
    <svg {...base} {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  ),
  minus: (p: P) => (
    <svg {...base} {...p}>
      <path d="M6 12h12" />
    </svg>
  ),
  arrow: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  ),
  star: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 2.5 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6-4.8-4.6 6.6-.9L12 2.5Z" />
    </svg>
  ),
  shield: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 2.5 4.5 5.5v6c0 4.7 3.1 8.9 7.5 10 4.4-1.1 7.5-5.3 7.5-10v-6L12 2.5Z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
    </svg>
  ),
  bolt: (p: P) => (
    <svg {...base} {...p}>
      <path d="M13.5 2.5 4 13.5h6.5L10 21.5 20 10.5h-6.5l0-8Z" />
    </svg>
  ),
  headset: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M19.5 19v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
    </svg>
  ),
  users: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.8 20a6.4 6.4 0 0 1 12.4 0" />
      <path d="M16.2 5.1a3.4 3.4 0 0 1 0 6.5" />
      <path d="M17.8 14.3A6.4 6.4 0 0 1 21.2 20" />
    </svg>
  ),
  chart: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6M11 20.5V7M15.5 20.5v-9M20 20.5V4.5" />
    </svg>
  ),
  sparkle: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
      <path d="M18.5 16.5 19.2 18.8 21.5 19.5 19.2 20.2 18.5 22.5 17.8 20.2 15.5 19.5 17.8 18.8 18.5 16.5Z" />
    </svg>
  ),
  clock: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  ),
  mail: (p: P) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
  phoneCall: (p: P) => (
    <svg {...base} {...p}>
      <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  ),
  chevron: (p: P) => (
    <svg {...base} {...p}>
      <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
    </svg>
  ),
  menu: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p: P) => (
    <svg {...base} {...p}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ),
  instagram: (p: P) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.28-.1-2.42-.1-2.4 0-4.03 1.46-4.03 4.14v2.31H7.5V13h2.75v8h3.25Z" />
    </svg>
  ),
  tiktok: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16.6 2h-3v13.1a2.6 2.6 0 1 1-2.1-2.55V9.4a5.7 5.7 0 1 0 5.1 5.67V8.9a6.6 6.6 0 0 0 3.9 1.26V7.1a3.9 3.9 0 0 1-3.9-3.9V2Z" />
    </svg>
  ),
  x: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.7 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L1.3 3H8l4.7 6.2L17.7 3Zm-1.2 16h1.8L7.6 4.8H5.7L16.5 19Z" />
    </svg>
  ),
  whatsapp: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12 2Zm0 1.9a8 8 0 0 1 6.6 12.5l-.3.4.8 2.9-3-.8-.4.2A8 8 0 1 1 12 3.9Zm-3.6 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.8-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.3Z" />
    </svg>
  ),
  quote: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9.4 5.5C6.3 7 4.5 9.7 4.5 13v5.5h6.2V13H7.6c0-2.4 1-4 3-5.1l-1.2-2.4Zm10 0C16.3 7 14.5 9.7 14.5 13v5.5h6.2V13h-3.1c0-2.4 1-4 3-5.1l-1.2-2.4Z" />
    </svg>
  ),
} satisfies Record<string, (p: P) => React.ReactElement>;

export function ServiceIcon({ name, ...p }: { name: IconName } & P) {
  const C = Icons[name];
  return <C {...p} />;
}
