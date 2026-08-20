/* ============================================================
   PORTFOLIO / CASE STUDIES
   ------------------------------------------------------------
   ⚠️  PLACEHOLDER CONTENT — replace with your real client work.

   Each project shows the screenshot at its `image` path. The six
   images in /public/work/ are sample site designs, not delivered
   client work — swap in real screenshots of your own projects
   before publishing. Drop a file in /public/work/ and point
   `image` at it. Remove `image` entirely and the card falls back
   to a generated abstract mockup.
   ============================================================ */

export type Project = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  services: string[];
  year: string;
  results: { metric: string; label: string }[];
  palette: [string, string];
  image?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "northgate-joinery",
    client: "Northgate Joinery",
    sector: "Trades & Construction",
    title: "A trade website that books its own jobs",
    summary:
      "A bespoke joinery firm relying entirely on word of mouth. We built a portfolio-led site with instant quote requests and local SEO across three counties.",
    services: ["Custom Web Design", "Local SEO", "Hosting"],
    year: "2025",
    results: [
      { metric: "+184%", label: "Enquiries in 6 months" },
      { metric: "#1", label: "Local search position" },
      { metric: "1.1s", label: "Load time" },
    ],
    palette: ["#0B3B2D", "#B08540"],
    image: "/work/northgate-joinery.jpg",
    featured: true,
  },
  {
    slug: "saffron-lane",
    client: "Saffron Lane",
    sector: "Hospitality",
    title: "Restaurant bookings, without the commission",
    summary:
      "An independent restaurant losing 12% of every cover to a booking platform. We built direct reservations into their own site and ran the social alongside it.",
    services: ["E-commerce Build", "Social Media", "Photography Direction"],
    year: "2025",
    results: [
      { metric: "£2.4k", label: "Monthly fees saved" },
      { metric: "+61%", label: "Direct bookings" },
      { metric: "9.2k", label: "New followers" },
    ],
    palette: ["#10513D", "#C9A24D"],
    image: "/work/saffron-lane.jpg",
    featured: true,
  },
  {
    slug: "meridian-legal",
    client: "Meridian Legal",
    sector: "Professional Services",
    title: "Rebuilding trust for a modern law firm",
    summary:
      "A twelve-partner practice with a website from 2013. A full rebrand and rebuild positioned them for higher-value commercial instructions.",
    services: ["Brand Identity", "Custom Web Design", "Copywriting"],
    year: "2024",
    results: [
      { metric: "+240%", label: "Time on page" },
      { metric: "3×", label: "Consultation requests" },
      { metric: "AA", label: "Accessibility rating" },
    ],
    palette: ["#06251C", "#DDBE79"],
    image: "/work/meridian-legal.jpg",
    featured: true,
  },
  {
    slug: "vellum-supply",
    client: "Vellum Supply Co.",
    sector: "E-commerce & Retail",
    title: "From market stall to national shipping",
    summary:
      "A stationery brand outgrowing Instagram DMs for orders. A full store build with stock control, subscriptions and abandoned-basket recovery.",
    services: ["E-commerce Store", "Social Media", "Email Marketing"],
    year: "2025",
    results: [
      { metric: "£128k", label: "First-year online revenue" },
      { metric: "+38%", label: "Average order value" },
      { metric: "22%", label: "Baskets recovered" },
    ],
    palette: ["#17694F", "#EBD6A6"],
    image: "/work/vellum-supply.jpg",
  },
  {
    slug: "halcyon-fitness",
    client: "Halcyon Fitness",
    sector: "Health & Fitness",
    title: "A members' app and a social engine to fill it",
    summary:
      "Two gyms, one membership app, and a content operation that turned members into the marketing. Class booking, streaks and referrals built in.",
    services: ["App Development", "UI/UX Design", "Social Media"],
    year: "2024",
    results: [
      { metric: "4.8★", label: "App Store rating" },
      { metric: "+52%", label: "Class attendance" },
      { metric: "-31%", label: "Member churn" },
    ],
    palette: ["#228766", "#B08540"],
    image: "/work/halcyon-fitness.jpg",
  },
  {
    slug: "brookfield-care",
    client: "Brookfield Care Group",
    sector: "Healthcare",
    title: "Clear information for families under pressure",
    summary:
      "Six care homes, one confusing website. We rebuilt around the questions families actually ask, with accessibility treated as a requirement, not an extra.",
    services: ["UI/UX Design", "Custom Web Design", "Managed Hosting"],
    year: "2024",
    results: [
      { metric: "WCAG AA", label: "Fully compliant" },
      { metric: "+95%", label: "Enquiry completion" },
      { metric: "99.99%", label: "Uptime since launch" },
    ],
    palette: ["#0B3B2D", "#A7DFCE"],
    image: "/work/brookfield-care.jpg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/* ============================================================
   TESTIMONIALS — ⚠️ PLACEHOLDER, replace with real quotes
   ============================================================ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We'd been quoted twice as much by two other agencies for half of what Apex delivered. The site paid for itself inside four months.",
    name: "David Hartley",
    role: "Managing Director",
    company: "Northgate Joinery",
    rating: 5,
  },
  {
    quote:
      "They took the social media entirely off my hands. I approve the calendar once a month and that's genuinely it — and it's working.",
    name: "Priya Raman",
    role: "Owner",
    company: "Saffron Lane",
    rating: 5,
  },
  {
    quote:
      "What stood out was the honesty. They talked us out of two features we didn't need and the project came in under budget because of it.",
    name: "Eleanor Whitfield",
    role: "Senior Partner",
    company: "Meridian Legal",
    rating: 5,
  },
  {
    quote:
      "The hosting alone is worth it. Something broke on a Sunday night, they'd already fixed it before I noticed on Monday morning.",
    name: "Tom Beckett",
    role: "Founder",
    company: "Vellum Supply Co.",
    rating: 5,
  },
  {
    quote:
      "Our members love the app. Bookings are up, cancellations are down, and the support since launch has been faultless.",
    name: "Marcus Ade",
    role: "Operations Director",
    company: "Halcyon Fitness",
    rating: 5,
  },
];

/** The quote from a given project's client, if we have one on file. */
export const getTestimonialForClient = (client: string) =>
  testimonials.find((t) => t.company === client);

/* ============================================================
   HOW WE WORK
   ============================================================ */

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    detail:
      "A proper conversation about your business, your customers and what success actually looks like in numbers. You leave with a fixed scope and a fixed price — no surprises later.",
  },
  {
    number: "02",
    title: "Design",
    duration: "Weeks 1–2",
    detail:
      "Real designs of your real pages, with your content in them. You react, we refine, and nothing gets built until you're happy with how it looks.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 2–4",
    detail:
      "Hand-built for speed, accessibility and search. You get a private preview link from day one, so you watch it come together rather than waiting in the dark.",
  },
  {
    number: "04",
    title: "Launch",
    duration: "Week 4",
    detail:
      "We handle domains, SSL, redirects, analytics and indexing. Your site goes live with zero downtime and we're watching it closely for the first 48 hours.",
  },
  {
    number: "05",
    title: "Grow",
    duration: "Ongoing",
    detail:
      "Hosting, care plans, SEO and social media keep it fast, safe and visible. One team, one invoice, one number to ring when you need something.",
  },
] as const;

/* ============================================================
   FAQS
   ============================================================ */

export const generalFaqs = [
  {
    q: "How much does a website actually cost?",
    a: "Our packages start at £865 for a five-page Starter Site and £1,725 for a full Business Site. E-commerce starts at £2,745. Those figures sit roughly 12–13% below the going UK rate for the same scope, and every price is fixed and agreed in writing before we begin — if the scope doesn't change, the price doesn't either.",
  },
  {
    q: "How long does a website take to build?",
    a: "Two to three weeks for a Starter Site, three to five for a Business Site, and five to eight for e-commerce. The single biggest factor is how quickly you get us your content, so we give you a simple checklist on day one.",
  },
  {
    q: "Do I own my website and domain?",
    a: "Yes, completely. The domain is registered in your name, and once the final invoice is settled the design, code and content are yours outright. There is no lock-in — if you ever want to move host, we'll help you do it.",
  },
  {
    q: "What's included in the hosting?",
    a: "SSL, daily backups, malware scanning, uptime monitoring, security patching and free migration from your current host. Plans start at £12/month billed annually, and support comes from the people who built your site.",
  },
  {
    q: "Can you take over a website someone else built?",
    a: "Usually, yes. We'll audit what you've got and tell you honestly whether it's worth maintaining or whether rebuilding will cost you less in the long run.",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "We do. We're UK-based and most of our clients are here, but we work with businesses across Europe and North America over video call and email.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every package includes a post-launch support window. After that, a Care Plan from £39/month covers ongoing edits and maintenance, or we can quote ad-hoc work at an hourly rate.",
  },
  {
    q: "Why are you cheaper than other UK agencies?",
    a: "Because we're a lean team without a London office to pay for, and we host what we build — so the ongoing hosting and care work makes the up-front build worth doing at a keener price. We benchmark every package against the going UK rate and deliberately sit 12–13% under it. What we don't do is cut the scope: the design is still custom, the build is still hand-written, and the support is still a person who answers.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Website builds are typically 50% to start and 50% on launch, and we can split larger projects across monthly instalments. Just ask when you request your quote.",
  },
] as const;
