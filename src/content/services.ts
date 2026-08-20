import { startingPrices } from "@/content/pricing";

/* ============================================================
   SERVICES
   Each entry generates a card on /services and a full page at
   /services/[slug]. Add or remove entries freely.
   ============================================================ */

export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  icon: IconName;
  startingAt: string;
  timeline: string;
  highlights: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export type IconName =
  | "browser"
  | "megaphone"
  | "search"
  | "palette"
  | "phone"
  | "layers"
  | "server"
  | "globe";

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Custom Web Design & Development",
    short: "Bespoke websites built around your business, not a template.",
    blurb:
      "Every custom build starts with your customers — what they need to see, and what you need them to do. We design it, build it fast, and make sure it converts on every screen.",
    icon: "browser",
    startingAt: startingPrices.website,
    timeline: "2–5 weeks",
    highlights: [
      "Designed from scratch to match your brand",
      "Sub-2-second load times as standard",
      "Built to rank: clean semantic markup and schema",
      "Easy-edit content — change text without a developer",
    ],
    deliverables: [
      "Discovery call and sitemap",
      "Two design concepts, unlimited revisions on the chosen route",
      "Fully responsive build (mobile, tablet, desktop)",
      "Contact and enquiry forms wired to your inbox",
      "Google Analytics and Search Console setup",
      "30 days of post-launch support",
    ],
    process: [
      {
        step: "Discovery",
        detail:
          "We learn your business, audience and goals in a 45-minute call.",
      },
      {
        step: "Design",
        detail:
          "You get real page designs to react to — never a stock template.",
      },
      {
        step: "Build",
        detail:
          "Hand-built, fast, accessible and tested on every major browser.",
      },
      {
        step: "Launch",
        detail: "We handle DNS, SSL, redirects and indexing. Zero downtime.",
      },
    ],
    faqs: [
      {
        q: "Do I own the website when it's finished?",
        a: "Yes. Once the final invoice is settled, the design, code and content are yours outright, along with every account we set up in your name.",
      },
      {
        q: "Can I update the site myself afterwards?",
        a: "Absolutely. We build in an editing layer so you can change text, images and pages yourself, and we record a walkthrough video for your team.",
      },
      {
        q: "What if I already have a website?",
        a: "We migrate your content, preserve your search rankings with proper 301 redirects, and keep the old site live until the new one is signed off.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short: "Content, posting and growth — handled end to end.",
    blurb:
      "We plan the content, design the graphics, write the captions and post them for you. You approve everything in advance and see exactly what it's doing for the business each month.",
    icon: "megaphone",
    startingAt: startingPrices.social,
    timeline: "Ongoing",
    highlights: [
      "Original graphics and short-form video, not recycled stock",
      "Monthly content calendar approved by you before anything goes live",
      "Community management — we answer comments and DMs",
      "Plain-English monthly report on reach, followers and leads",
    ],
    deliverables: [
      "Account audit and competitor review",
      "Content pillars and tone-of-voice guide",
      "12–30 designed posts per month depending on plan",
      "Caption writing and hashtag research",
      "Scheduling and publishing across your channels",
      "Monthly performance report with next-month actions",
    ],
    process: [
      {
        step: "Audit",
        detail:
          "We review your accounts and the three competitors you care about.",
      },
      {
        step: "Strategy",
        detail: "Content pillars, posting cadence and the metrics that matter.",
      },
      {
        step: "Produce",
        detail: "Graphics, video edits and captions, delivered for approval.",
      },
      {
        step: "Publish & report",
        detail: "We post, engage, and send you a clear monthly summary.",
      },
    ],
    faqs: [
      {
        q: "Which platforms do you cover?",
        a: "Instagram, Facebook, TikTok, LinkedIn and X. Your plan covers a set number of channels — pick the ones your customers actually use and we will tell you honestly if one isn't worth it.",
      },
      {
        q: "Do I have to supply photos?",
        a: "It helps, and real photos always outperform stock. But we can work entirely from designed graphics and licensed footage if you'd rather not.",
      },
      {
        q: "Is there a minimum contract?",
        a: "Three months, because social media does not produce meaningful results in four weeks. After that it's rolling with 30 days' notice.",
      },
    ],
  },
  {
    slug: "seo-content",
    title: "SEO & Content Writing",
    short: "Get found by the people already searching for you.",
    blurb:
      "Technical fixes, local visibility and genuinely useful content — the three things that move you up the results page and keep you there.",
    icon: "search",
    startingAt: startingPrices.seo,
    timeline: "3–6 months to compound",
    highlights: [
      "Full technical audit and fix list",
      "Local SEO and Google Business Profile optimisation",
      "Keyword research based on buying intent, not vanity volume",
      "Monthly ranking and traffic reporting",
    ],
    deliverables: [
      "Technical SEO audit with prioritised fixes",
      "Keyword and competitor gap analysis",
      "On-page optimisation across key pages",
      "Two to four written articles per month",
      "Google Business Profile setup and management",
      "Monthly rank tracking report",
    ],
    process: [
      {
        step: "Audit",
        detail:
          "Crawl, index and speed analysis — we find what's holding you back.",
      },
      {
        step: "Fix",
        detail:
          "Technical issues resolved first, because content can't outrank broken.",
      },
      {
        step: "Create",
        detail:
          "Content mapped to real search intent across the buying journey.",
      },
      {
        step: "Earn",
        detail: "Local citations and authority building, reported monthly.",
      },
    ],
    faqs: [
      {
        q: "How long before I see results?",
        a: "Technical wins can show inside a month. Competitive keywords realistically take three to six months. Anyone promising page one in two weeks is selling you something else.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No, and neither should anyone else — Google doesn't sell guarantees. What we do guarantee is transparent reporting so you can see exactly what your money bought.",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Print",
    short: "Logos, brand identity and everything you hand to a customer.",
    blurb:
      "Business cards, banners, flyers, leaflets, stickers, labels and logos — designed properly and supplied print-ready.",
    icon: "palette",
    startingAt: startingPrices.graphics,
    timeline: "3–10 days",
    highlights: [
      "Logo design with full brand guidelines",
      "Print-ready artwork with correct bleed and colour profiles",
      "Matching digital assets for web and social",
      "All source files handed over",
    ],
    deliverables: [
      "Logo suite: primary, stacked, icon and monochrome",
      "Colour palette and typography system",
      "Business cards, flyers, leaflets and banners",
      "Stickers, labels and packaging artwork",
      "Social media profile and cover artwork",
      "Editable source files plus PNG, SVG and PDF exports",
    ],
    process: [
      {
        step: "Brief",
        detail:
          "We pin down the audience, the mood and what you must not look like.",
      },
      {
        step: "Concepts",
        detail:
          "Three distinct directions — genuinely different, not colour swaps.",
      },
      {
        step: "Refine",
        detail: "We develop your chosen route until it's right.",
      },
      {
        step: "Handover",
        detail: "Every format you'll ever need, organised and labelled.",
      },
    ],
    faqs: [
      {
        q: "Can you arrange the printing too?",
        a: "Yes. We work with UK trade printers and can manage the whole run, or simply hand you press-ready files to take anywhere.",
      },
      {
        q: "How many logo revisions do I get?",
        a: "Unlimited revisions on the concept you choose. We keep going until you're genuinely happy with it.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "Native and cross-platform apps for Android and iOS.",
    blurb:
      "From booking systems to internal tools — apps designed for real use, built to ship, and supported after launch.",
    icon: "phone",
    startingAt: startingPrices.app,
    timeline: "8–16 weeks",
    highlights: [
      "One codebase, both app stores",
      "We handle App Store and Play Store submission",
      "Secure authentication and payments",
      "Offline-capable where it makes sense",
    ],
    deliverables: [
      "Product scoping and feature prioritisation",
      "Interactive prototype before a line of code",
      "Cross-platform build for iOS and Android",
      "Backend API and admin dashboard",
      "Store listing, screenshots and submission",
      "Three months of bug-fix support",
    ],
    process: [
      {
        step: "Scope",
        detail: "We cut the feature list to what version one actually needs.",
      },
      {
        step: "Prototype",
        detail: "A clickable app you can test before we build it properly.",
      },
      {
        step: "Build",
        detail: "Two-week sprints with a working build at the end of each.",
      },
      {
        step: "Ship",
        detail: "Store submission, review handling and launch monitoring.",
      },
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "Cross-platform for the overwhelming majority — one build, both stores, roughly half the cost. We only recommend native when you need deep hardware access.",
      },
      {
        q: "What are the ongoing costs?",
        a: "Apple charges £79/year for a developer account, Google a one-off £20. Beyond that you'll want a maintenance plan for OS updates — we'll quote that upfront.",
      },
    ],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    short: "Interfaces people understand without being taught.",
    blurb:
      "User research, wireframes and interface design for products where the difference between good and bad is measured in revenue.",
    icon: "layers",
    startingAt: startingPrices.uiux,
    timeline: "2–6 weeks",
    highlights: [
      "Research-led, not decoration-led",
      "Interactive prototypes you can click through",
      "WCAG 2.2 AA accessibility built in",
      "A reusable design system, not one-off screens",
    ],
    deliverables: [
      "User research and journey mapping",
      "Information architecture and wireframes",
      "High-fidelity interface design",
      "Clickable prototype for testing",
      "Component library and design tokens",
      "Developer handoff documentation",
    ],
    process: [
      {
        step: "Research",
        detail: "Who uses it, what for, and where they currently give up.",
      },
      {
        step: "Structure",
        detail: "Wireframes first — we settle the logic before the looks.",
      },
      {
        step: "Design",
        detail: "High-fidelity screens built from a consistent system.",
      },
      {
        step: "Validate",
        detail: "Prototype tested with real users, then refined.",
      },
    ],
    faqs: [
      {
        q: "Do you hand off to our own developers?",
        a: "Regularly. You get a documented design system, spec'd components and a walkthrough session with your engineering team.",
      },
    ],
  },
  {
    slug: "hosting",
    title: "Managed Hosting & Care",
    short: "Fast, secure, monitored hosting — with a human on the end of it.",
    blurb:
      "We keep your site online, backed up, updated and quick. If something breaks at 2am, our monitoring catches it before your customers do.",
    icon: "server",
    startingAt: startingPrices.hosting,
    timeline: "Live same day",
    highlights: [
      "99.9% uptime, UK and EU data centres",
      "Free SSL, daily backups, 30-day restore points",
      "Malware scanning and firewall included",
      "Real support from the people who built your site",
    ],
    deliverables: [
      "Migration from your current host at no charge",
      "SSL certificate installed and auto-renewing",
      "Daily automated backups with one-click restore",
      "Uptime monitoring with alerting",
      "Security patching and plugin updates",
      "Monthly performance and uptime report",
    ],
    process: [
      {
        step: "Migrate",
        detail: "We copy everything across and test it before switching DNS.",
      },
      {
        step: "Secure",
        detail: "SSL, firewall, malware scanning and hardened configuration.",
      },
      {
        step: "Monitor",
        detail: "Checked every 60 seconds, around the clock.",
      },
      {
        step: "Maintain",
        detail: "Updates, backups and a monthly report you can actually read.",
      },
    ],
    faqs: [
      {
        q: "Can you move my existing site over?",
        a: "Yes, free of charge on every annual plan. We migrate outside business hours so there's no visible downtime.",
      },
      {
        q: "What happens if my site goes down?",
        a: "Our monitoring alerts us within a minute and we start work immediately. On Business and Enterprise plans you also get a direct emergency line.",
      },
    ],
  },
  {
    slug: "domains",
    title: "Domain Registration",
    short: "Find it, register it, and let us wire it up properly.",
    blurb:
      "Every domain includes free privacy protection and DNS management. We handle the technical setup so your site and email just work.",
    icon: "globe",
    startingAt: startingPrices.domain,
    timeline: "Live in minutes",
    highlights: [
      "Free WHOIS privacy on supported extensions",
      "Full DNS management handled for you",
      "Business email setup included",
      "Free transfer-in from any other registrar",
    ],
    deliverables: [
      "Domain search and availability advice",
      "Registration in your name, with your ownership",
      "DNS records configured for web and email",
      "Email routing set up and tested",
      "Auto-renewal reminders so you never lose it",
    ],
    process: [
      {
        step: "Search",
        detail: "We help you land a name that's short, clear and memorable.",
      },
      {
        step: "Register",
        detail: "Secured in your name — you are always the legal owner.",
      },
      {
        step: "Configure",
        detail: "DNS, SSL and email records set up and verified.",
      },
      {
        step: "Protect",
        detail: "Privacy, registrar lock and renewal reminders switched on.",
      },
    ],
    faqs: [
      {
        q: "Who legally owns the domain?",
        a: "You do, always. It is registered to you as the legal registrant — we simply manage it on your behalf and you can transfer it away whenever you like.",
      },
      {
        q: "Can I move a domain I already own?",
        a: "Yes. Transfers are free, usually add a year to your registration, and we manage the whole process for you.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
