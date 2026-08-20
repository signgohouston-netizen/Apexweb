/* ============================================================
   LEGAL PAGES
   ------------------------------------------------------------
   ⚠️  TEMPLATE TEXT — these are sensible starting points, not
   legal advice. Have them reviewed before you rely on them,
   and fill in the [SQUARE BRACKET] placeholders.
   ============================================================ */

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

import { site } from "@/content/site";

const company = site.legalName;

/** Renders the registration line, or an honest note while details are pending. */
const registrationLine = () => {
  const { registeredAddress, companyNumber, jurisdiction } = site.registration;
  if (!registeredAddress && !companyNumber) {
    return `${company} is registered in ${jurisdiction}. Our registered office address and company number are available on request while our records are being updated.`;
  }
  const parts = [
    registeredAddress && `Our registered office is ${registeredAddress}`,
    companyNumber && `our company number is ${companyNumber}`,
  ].filter(Boolean);
  return `${parts.join(" and ")}.`;
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "18 August 2026",
    intro: `This policy explains what personal information ${company} collects through this website, why we collect it, and what we do with it. We keep it deliberately short and readable.`,
    sections: [
      {
        heading: "Who we are",
        body: [
          `${company} is the data controller for information collected through this website. You can reach us at ${site.contact.email} or on ${site.contact.phone}.`,
          registrationLine(),
        ],
      },
      {
        heading: "What we collect",
        body: [
          "When you submit an enquiry or quote request, we collect the name, email address, phone number, business name and project details you choose to give us.",
          "We also collect basic technical information automatically — the pages you visit, your approximate location, your browser and device type — through website analytics.",
          "We do not collect payment card details through this website.",
        ],
      },
      {
        heading: "Why we use it",
        body: [
          "To reply to your enquiry and prepare a quote. This is our legitimate interest in responding to people who contact us.",
          "To deliver services you have engaged us for, and to administer the contract between us.",
          "To understand how the website is used so we can improve it. You can opt out of analytics cookies at any time.",
          "We do not sell your data, and we do not add you to marketing lists without your explicit consent.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We use third-party providers to run the website and our business — hosting, email delivery, analytics and, where relevant, domain registration. These providers process data on our instructions only.",
          "We will disclose information where we are legally required to do so.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Enquiries that do not become projects are deleted within 24 months.",
          "Records relating to clients are kept for seven years after the end of the engagement, to meet UK accounting and tax requirements.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under UK GDPR you can ask us for a copy of the personal data we hold about you, ask us to correct it, ask us to delete it, or object to how we use it.",
          `Email ${site.contact.email} and we will respond within one month.`,
          "If you are unhappy with how we have handled your data, you can complain to the Information Commissioner's Office at ico.org.uk.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If we change this policy we will update the date at the top of this page. Material changes will be highlighted on the website.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    updated: "18 August 2026",
    intro: `These terms cover the use of this website and the general basis on which ${company} provides services. Individual projects are governed by the written proposal and contract we agree with you.`,
    sections: [
      {
        heading: "Quotes and pricing",
        body: [
          "Prices shown on this website are indicative starting prices. Your quote is fixed once we have issued a written proposal and you have accepted it.",
          "A quote is valid for 30 days from the date of issue unless stated otherwise.",
          "Changes to the agreed scope after work has begun will be quoted separately and require your written approval before we proceed.",
        ],
      },
      {
        heading: "Payment",
        body: [
          "Website projects are typically invoiced 50% on acceptance and 50% on launch, unless a different schedule is agreed in writing.",
          "Recurring services — hosting, care plans and social media management — are invoiced in advance for the agreed billing period.",
          "Invoices are payable within 14 days. We reserve the right to charge statutory interest on overdue amounts under the Late Payment of Commercial Debts (Interest) Act 1998.",
        ],
      },
      {
        heading: "Your responsibilities",
        body: [
          "You are responsible for supplying content, images and approvals in a timely manner. Delays in providing these will move the project timeline accordingly.",
          "You confirm that any content you supply is yours to use, and does not infringe anyone else's rights.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "On full payment of all outstanding invoices, ownership of the final design, code and content produced specifically for you transfers to you.",
          "We retain ownership of any underlying tools, frameworks or components we reuse across clients, and grant you a perpetual licence to use them as part of your project.",
          "We reserve the right to display the finished work in our portfolio unless you ask us in writing not to.",
        ],
      },
      {
        heading: "Cancellation",
        body: [
          "Recurring services can be cancelled with 30 days' written notice, subject to any agreed minimum term.",
          "If a project is cancelled part way through, you are liable for the work completed to that point.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "We provide our services with reasonable care and skill. We are not liable for indirect or consequential losses, including lost profits or lost business.",
          "Our total liability in connection with any project is limited to the fees you have paid us for that project.",
          "Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    updated: "18 August 2026",
    intro:
      "Cookies are small files stored on your device. This page explains which ones this website uses and how you can control them.",
    sections: [
      {
        heading: "Essential cookies",
        body: [
          "These are needed for the website to work — remembering your cookie preferences and keeping form submissions secure. They cannot be switched off.",
        ],
      },
      {
        heading: "Analytics cookies",
        body: [
          "We use analytics to understand which pages people read and where they leave. This data is aggregated and does not identify you personally.",
          "You can decline analytics cookies without affecting how the website works.",
        ],
      },
      {
        heading: "Third-party cookies",
        body: [
          "Embedded content from social platforms may set its own cookies when you interact with it. These are controlled by those platforms, not by us.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "Every major browser lets you block or delete cookies through its settings. Blocking all cookies may affect how some websites function.",
          "For more detail on managing cookies, see aboutcookies.org.",
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) =>
  legalDocs.find((d) => d.slug === slug);
