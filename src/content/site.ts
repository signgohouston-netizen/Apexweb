/* ============================================================
   SITE-WIDE SETTINGS
   Edit company details, contact info and navigation here.
   ============================================================ */

export const site = {
  name: "Apex Web Solutions UK",
  legalName: "Apex Web Solutions UK Ltd",
  short: "Apex",
  tagline: "Design. Innovate. Dominate.",
  description:
    "We build, host and grow websites for UK businesses — custom web design, ready-made website packages, managed hosting and social media management, all under one roof.",
  url: "https://apexwebsolutionsuk.com",
  locale: "en_GB",

  /* ----------------------------------------------------------
     COMPANY REGISTRATION — fill these in when you have them.
     Leave a value as an empty string and the site quietly omits
     it; nothing breaks and no placeholder is shown to visitors.
     Used by the footer and the privacy / terms pages.
     ---------------------------------------------------------- */
  registration: {
    registeredAddress: "", // e.g. "12 High Street, Manchester, M1 2AB"
    companyNumber: "", // e.g. "12345678"
    vatNumber: "", // leave empty if not VAT registered
    jurisdiction: "England & Wales",
  },

  contact: {
    phone: "+44 7377 349883",
    phoneHref: "tel:+447377349883",
    whatsappHref: "https://wa.me/447377349883",
    email: "apexwebsolutionsuk@gmail.com",
    emailHref: "mailto:apexwebsolutionsuk@gmail.com",
    hours: "Mon–Fri, 9am – 6pm GMT",
    location: "United Kingdom",
    responseTime: "We reply to every enquiry within one working day.",
  },

  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/apex.web99/",
      handle: "@apex.web99",
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/",
      handle: "Apex Web Solutions UK",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@apexwebsolutionsukltd",
      handle: "@apexwebsolutionsukltd",
    },
  ],

  /* Reseller storefront links (GoDaddy / Secureserver — plid 595502) */
  reseller: {
    domains:
      "https://www.secureserver.net/products/domain-registration?plid=595502",
    security:
      "https://www.secureserver.net/products/website-security?plid=595502",
  },
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Hosting", href: "/hosting" },
  { label: "Domains", href: "/domains" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Custom Web Design", href: "/services/web-design" },
      { label: "Social Media Management", href: "/social-media" },
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Graphic Design & Print", href: "/services/graphic-design" },
      { label: "App Development", href: "/services/app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
    ],
  },
  {
    title: "Buy Online",
    links: [
      { label: "Website Packages", href: "/websites" },
      { label: "Social Media Plans", href: "/social-media#plans" },
      { label: "Hosting Plans", href: "/hosting" },
      { label: "Domain Names", href: "/domains" },
      { label: "Care Plans", href: "/hosting#care" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Process", href: "/about#process" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Free Quote", href: "/quote" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
] as const;

export const trustStats = [
  { value: "150+", label: "Projects delivered" },
  { value: "99.9%", label: "Hosting uptime" },
  { value: "24/7", label: "Monitoring & support" },
  { value: "14 days", label: "Average build time" },
] as const;
