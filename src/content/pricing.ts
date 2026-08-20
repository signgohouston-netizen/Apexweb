/* ============================================================
   PRICING — BENCHMARKED AGAINST THE UK MARKET (August 2026)
   ------------------------------------------------------------
   Every price below is deliberately set 12–13% BELOW the
   comparable UK market rate, so Apex is the value option
   without looking cheap.

   The `ukMarket` table records the benchmark each price was
   derived from. If you want to change the discount, change the
   price and update the benchmark note beside it — the rest of
   the site reads these values, so nothing else needs editing.

   Benchmark sources (UK, 2026 market guides):
   · Small business websites .... £1,200–£2,000 freelance /
                                  £2,500–£8,000 agency
   · E-commerce builds .......... £2,500 entry / £3,000–£15,000 SME
   · Social media management .... £250–£500 light-touch,
                                  £600–£1,200 multi-platform,
                                  £1,500–£3,000 full service
   · Managed hosting ............ £10–£40/mo (avg renewal £18.32)
   · Website care plans ......... £40–£120/mo, £130+ retainer level
   · Small business SEO ......... £300 local / £500–£2,000 typical
   · Logo & brand identity ...... £500–£1,000 freelance
   · .co.uk domains ............. £12.99–£14.39 renewal at the
                                  major UK registrars
   ============================================================ */

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number | string;
  period: string;
  setup?: string;
  note?: string;
  /** UK market rate this price was benchmarked against. */
  benchmark?: string;
  featured?: boolean;
  bestFor: string;
  features: string[];
  excludes?: string[];
  cta: { label: string; href: string };
};

/* ---------- Headline "from" prices used across the site ---------- */

export const startingPrices = {
  website: "£865",
  social: "£265/mo",
  seo: "£385/mo",
  graphics: "£129",
  app: "£4,250",
  uiux: "£995",
  hosting: "£12/mo",
  care: "£39/mo",
  domain: "£8.49/yr",
} as const;

/* ---------- WEBSITE PACKAGES (one-off builds) ---------- */

export const websitePlans: Plan[] = [
  {
    id: "starter",
    name: "Starter Site",
    tagline: "A sharp, credible presence — live in two weeks.",
    price: 865,
    period: "one-off",
    benchmark: "UK freelance rate for a 4–5 page build: £995–£1,200",
    bestFor:
      "Sole traders and new businesses that need to look established fast.",
    features: [
      "Up to 5 pages, custom designed",
      "Mobile, tablet and desktop responsive",
      "Contact form to your inbox",
      "Basic on-page SEO and sitemap",
      "Google Analytics installed",
      "Social media links and icons",
      "Free domain for the first year",
      "3 months managed hosting included",
      "30 days post-launch support",
    ],
    excludes: ["Online payments", "Booking system", "Blog"],
    cta: { label: "Start a Starter Site", href: "/quote?package=starter" },
  },
  {
    id: "business",
    name: "Business Site",
    tagline: "The complete package for a growing company.",
    price: 1725,
    period: "one-off",
    benchmark: "UK average for a professional business site: £1,500–£2,500",
    featured: true,
    bestFor:
      "Established businesses that want the site to actively bring in work.",
    features: [
      "Up to 12 pages, custom designed",
      "Everything in Starter, plus:",
      "Blog or news section you control",
      "Advanced enquiry forms and lead capture",
      "Full technical SEO setup and schema markup",
      "Google Business Profile optimisation",
      "Speed optimisation to 90+ PageSpeed",
      "Copywriting for every page",
      "Free domain and 12 months hosting",
      "90 days post-launch support",
    ],
    cta: { label: "Start a Business Site", href: "/quote?package=business" },
  },
  {
    id: "ecommerce",
    name: "E-commerce Store",
    tagline: "Sell online, properly, from day one.",
    price: 2745,
    period: "one-off",
    benchmark: "UK entry-level store builds: £2,500–£3,200",
    bestFor: "Retailers and product businesses ready to take orders online.",
    features: [
      "Unlimited products and categories",
      "Everything in Business, plus:",
      "Secure card payments (Stripe or PayPal)",
      "Stock control and order management",
      "Discount codes and gift vouchers",
      "Abandoned-basket recovery emails",
      "Shipping rules and courier integration",
      "Staff training session on managing orders",
      "Free domain and 12 months hosting",
      "6 months post-launch support",
    ],
    cta: { label: "Start an Online Store", href: "/quote?package=ecommerce" },
  },
  {
    id: "bespoke",
    name: "Bespoke Build",
    tagline: "Custom platforms, portals and web applications.",
    price: "From £5,495",
    period: "project",
    benchmark: "UK custom platform builds: £6,000–£15,000",
    bestFor: "Organisations with a workflow no off-the-shelf product handles.",
    features: [
      "Fully bespoke design and functionality",
      "Customer or member portals with logins",
      "Booking, quoting or CRM systems",
      "Third-party API and software integrations",
      "Multi-language and multi-region support",
      "Dedicated project manager",
      "Staged delivery with sprint demos",
      "12 months support and maintenance",
    ],
    cta: { label: "Discuss a Bespoke Build", href: "/quote?package=bespoke" },
  },
];

/* ---------- SOCIAL MEDIA PLANS (monthly) ---------- */

export const socialPlans: Plan[] = [
  {
    id: "social-spark",
    name: "Spark",
    tagline: "Consistent presence without the daily effort.",
    price: 265,
    period: "per month",
    setup: "£125 one-off onboarding",
    benchmark: "UK light-touch management: £250–£500/mo",
    bestFor: "Businesses that keep going quiet on social and want that fixed.",
    features: [
      "2 platforms of your choice",
      "12 designed posts per month",
      "Caption writing and hashtag research",
      "Content calendar approved by you monthly",
      "Scheduling and publishing handled",
      "Monthly performance report",
    ],
    excludes: ["Video production", "Paid ad management"],
    cta: { label: "Choose Spark", href: "/quote?package=social-spark" },
  },
  {
    id: "social-growth",
    name: "Growth",
    tagline: "Real momentum — content, video and engagement.",
    price: 595,
    period: "per month",
    setup: "£125 one-off onboarding",
    benchmark: "UK multi-platform management: £600–£1,200/mo",
    featured: true,
    bestFor: "Brands that want followers turning into actual enquiries.",
    features: [
      "3 platforms of your choice",
      "20 designed posts per month",
      "4 short-form videos or Reels per month",
      "Stories and community management",
      "We reply to comments and DMs",
      "Competitor and hashtag monitoring",
      "Monthly strategy call",
      "Detailed reporting with next-month actions",
    ],
    cta: { label: "Choose Growth", href: "/quote?package=social-growth" },
  },
  {
    id: "social-dominate",
    name: "Dominate",
    tagline: "Full-service social, including paid.",
    price: 1295,
    period: "per month",
    setup: "Onboarding included",
    benchmark: "UK full-service social: £1,500–£3,000/mo",
    bestFor: "Businesses treating social as a primary sales channel.",
    features: [
      "Up to 5 platforms",
      "30 designed posts per month",
      "10 short-form videos or Reels per month",
      "Paid ad campaign management included",
      "Ad spend managed up to £1,500/mo",
      "Influencer outreach and partnerships",
      "Monthly on-site or remote content shoot",
      "Fortnightly strategy calls",
      "Dedicated account manager",
    ],
    cta: { label: "Choose Dominate", href: "/quote?package=social-dominate" },
  },
];

/* ---------- HOSTING PLANS (monthly, billed annually) ---------- */

export const hostingPlans: Plan[] = [
  {
    id: "host-starter",
    name: "Essential",
    tagline: "Everything a brochure site needs.",
    price: 12,
    period: "per month",
    note: "Billed annually · £14/mo monthly",
    benchmark: "UK managed hosting entry: £13–£15/mo",
    bestFor: "Single small business websites.",
    features: [
      "1 website",
      "20GB NVMe SSD storage",
      "Unmetered bandwidth (fair use)",
      "Free SSL certificate",
      "Daily backups, 30-day retention",
      "Free migration from your current host",
      "99.9% uptime guarantee",
      "Email support, 1 working day",
    ],
    cta: { label: "Get Essential", href: "/quote?package=host-starter" },
  },
  {
    id: "host-business",
    name: "Business",
    tagline: "Faster servers, more headroom, priority help.",
    price: 26,
    period: "per month",
    note: "Billed annually · £31/mo monthly",
    benchmark: "UK managed WordPress / business hosting: £30–£40/mo",
    featured: true,
    bestFor: "Busy sites, online stores and multi-site owners.",
    features: [
      "Up to 5 websites",
      "80GB NVMe SSD storage",
      "Global CDN included",
      "Free SSL on every domain",
      "Twice-daily backups, 60-day retention",
      "Staging environment for safe testing",
      "Malware scanning and removal",
      "Monthly updates and security patching",
      "Priority support, 4-hour response",
    ],
    cta: { label: "Get Business", href: "/quote?package=host-business" },
  },
  {
    id: "host-enterprise",
    name: "Enterprise",
    tagline: "Dedicated resources and a direct line to us.",
    price: 69,
    period: "per month",
    note: "Billed annually · £79/mo monthly",
    benchmark: "UK managed VPS / dedicated: £80–£200/mo",
    bestFor: "High-traffic platforms where downtime costs real money.",
    features: [
      "Unlimited websites",
      "250GB NVMe SSD storage",
      "Dedicated CPU and RAM allocation",
      "Hourly backups, 90-day retention",
      "Load balancing and auto-scaling",
      "Advanced WAF and DDoS protection",
      "Quarterly performance audit",
      "24/7 emergency phone line",
      "Named account manager",
    ],
    cta: { label: "Get Enterprise", href: "/quote?package=host-enterprise" },
  },
];

/* ---------- WEBSITE CARE PLANS (add-on) ---------- */

export const carePlans: Plan[] = [
  {
    id: "care-basic",
    name: "Care Basic",
    tagline: "Keep it safe and up to date.",
    price: 39,
    period: "per month",
    benchmark: "UK entry care plans: £40–£90/mo",
    bestFor: "Sites that need looking after but change rarely.",
    features: [
      "Monthly software and plugin updates",
      "Security monitoring and patching",
      "Uptime monitoring every 60 seconds",
      "Monthly backup verification",
      "30 minutes of content edits per month",
      "Monthly health report",
    ],
    cta: { label: "Add Care Basic", href: "/quote?package=care-basic" },
  },
  {
    id: "care-plus",
    name: "Care Plus",
    tagline: "An ongoing pair of hands on your website.",
    price: 115,
    period: "per month",
    benchmark: "UK retainer-level care: £130–£200/mo",
    featured: true,
    bestFor: "Businesses that update their site regularly.",
    features: [
      "Everything in Care Basic",
      "Weekly updates and checks",
      "2 hours of content or design edits per month",
      "Monthly speed optimisation pass",
      "Broken link and form testing",
      "SEO health check each month",
      "Priority 4-hour response",
    ],
    cta: { label: "Add Care Plus", href: "/quote?package=care-plus" },
  },
];

/* ---------- DOMAIN PRICING ----------
   Benchmarked against .co.uk renewals at the major UK registrars
   (£12.99 GoDaddy / £14.39 123-Reg) and priced ~13% below.       */

export const domainPricing = [
  {
    tld: ".co.uk",
    register: "£8.49",
    renew: "£11.29",
    popular: true,
    note: "The default for UK businesses",
  },
  {
    tld: ".com",
    register: "£10.99",
    renew: "£14.49",
    popular: true,
    note: "Recognised worldwide",
  },
  {
    tld: ".uk",
    register: "£8.49",
    renew: "£11.29",
    popular: false,
    note: "Short and modern",
  },
  {
    tld: ".org.uk",
    register: "£8.49",
    renew: "£11.29",
    popular: false,
    note: "Charities and non-profits",
  },
  {
    tld: ".net",
    register: "£12.99",
    renew: "£16.49",
    popular: false,
    note: "Tech and infrastructure",
  },
  {
    tld: ".shop",
    register: "£3.99",
    renew: "£25.99",
    popular: false,
    note: "Retail and e-commerce",
  },
  {
    tld: ".io",
    register: "£34.99",
    renew: "£43.99",
    popular: false,
    note: "Startups and software",
  },
  {
    tld: ".agency",
    register: "£16.99",
    renew: "£21.99",
    popular: false,
    note: "Studios and consultancies",
  },
] as const;

export const domainIncludes = [
  "Free WHOIS privacy protection",
  "Full DNS management",
  "Registrar transfer lock",
  "Email forwarding included",
  "Auto-renewal reminders",
  "Free transfer in from any registrar",
] as const;

/* ---------- PRICING PAGE COMPARISON ---------- */

export const comparisonRows = [
  {
    feature: "Custom design (no templates)",
    starter: true,
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Pages included",
    starter: "5",
    business: "12",
    ecommerce: "Unlimited",
    bespoke: "Unlimited",
  },
  {
    feature: "Mobile responsive",
    starter: true,
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Copywriting included",
    starter: false,
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Blog / news section",
    starter: false,
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Online payments",
    starter: false,
    business: false,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Stock & order management",
    starter: false,
    business: false,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Customer logins / portal",
    starter: false,
    business: false,
    ecommerce: false,
    bespoke: true,
  },
  {
    feature: "Technical SEO & schema",
    starter: "Basic",
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Free domain (first year)",
    starter: true,
    business: true,
    ecommerce: true,
    bespoke: true,
  },
  {
    feature: "Hosting included",
    starter: "3 months",
    business: "12 months",
    ecommerce: "12 months",
    bespoke: "12 months",
  },
  {
    feature: "Post-launch support",
    starter: "30 days",
    business: "90 days",
    ecommerce: "6 months",
    bespoke: "12 months",
  },
  {
    feature: "Dedicated project manager",
    starter: false,
    business: false,
    ecommerce: true,
    bespoke: true,
  },
] as const;

/* ---------- UK MARKET COMPARISON ----------
   Shown on /websites. `market` is the typical UK price for the
   same scope; `ours` is what we charge. Keep `ours` in step with
   the plan prices above if you change them.                     */

export const marketComparison = [
  {
    item: "Five-page business website",
    market: 995,
    ours: 865,
    unit: "one-off",
  },
  {
    item: "Full 12-page business site",
    market: 1995,
    ours: 1725,
    unit: "one-off",
  },
  { item: "E-commerce store build", market: 3150, ours: 2745, unit: "one-off" },
  {
    item: "Social media management",
    market: 300,
    ours: 265,
    unit: "per month",
  },
  { item: "Managed hosting", market: 14, ours: 12, unit: "per month" },
  { item: "Website care plan", market: 45, ours: 39, unit: "per month" },
] as const;

export const averageSaving = Math.round(
  (marketComparison.reduce(
    (total, row) => total + (1 - row.ours / row.market),
    0,
  ) /
    marketComparison.length) *
    100,
);

/* ---------- HELPERS ---------- */

/** "£1,725" for numeric prices, or the string as written. */
export function displayPrice(price: number | string) {
  return typeof price === "number"
    ? `£${price.toLocaleString("en-GB")}`
    : price;
}
