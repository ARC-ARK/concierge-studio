export const siteConfig = {
  name: "Concierge Studio",
  shortName: "小記萬事屋",
  description: "Your on-demand digital operations team.",
  email: "hello@concierge.studio",
};

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Proof", href: "/proof" },
  { name: "Gold Team", href: "/gold-team" },
  { name: "Insights", href: "/insights" },
];

export const services = [
  {
    title: "Web Build",
    desc: "High-performance websites built on modern stacks.",
    deliverables: "Figma, Frontend Code, Deployment",
    category: "Web"
  },
  {
    title: "Brand & Design",
    desc: "Visual identity that cuts through the noise.",
    deliverables: "Brand System, UI Kits, Social Assets",
    category: "Design"
  },
  {
    title: "Copy & Content",
    desc: "Words that sell, convince, and convert.",
    deliverables: "Web Copy, Pitch Decks, Strategy",
    category: "Content"
  },
  {
    title: "Growth Assets",
    desc: "Tools to scale your business operations.",
    deliverables: "Campaign Pages, SEO Setup, Email Templates",
    category: "Growth"
  },
  {
    title: "Operations",
    desc: "Connecting the dots behind the scenes.",
    deliverables: "Scoping, PM, Vendor Management",
    category: "Ops"
  },
  {
    title: "Custom Request",
    desc: "Unique challenges require unique solutions.",
    deliverables: "You brief it. We build it.",
    category: "Mixed"
  }
];

export const steps = [
  {
    num: "01",
    title: "Brief in 10 mins",
    desc: "No lengthy meetings. Fill out our structured intake form or send a voice memo."
  },
  {
    num: "02",
    title: "Scope & Quote",
    desc: "We analyze the request and return a fixed price and timeline within 24 hours."
  },
  {
    num: "03",
    title: "Deliver & Iterate",
    desc: "We build, you review. Fast feedback loops until the asset is ready to launch."
  }
];

export const cases = [
  {
    id: 1,
    client: "FinTech Scale-up",
    challenge: "Needed a marketing site overhaul in 2 weeks for a Series B announcement.",
    approach: "Next.js static generation + Headless CMS for speed.",
    delivery: "Full site launch + SEO optimization.",
    impact: "Launch executed on time. +45% increase in lead capture."
  },
  {
    id: 2,
    client: "Luxury E-commerce",
    challenge: "Brand identity was inconsistent across social and web.",
    approach: "Unified design system creation.",
    delivery: "Figma Design System + Shopify Theme customization.",
    impact: "Conversion rate increased by 28% post-redesign."
  },
  {
    id: 3,
    client: "SaaS Startup",
    challenge: "Complex product explained poorly to investors.",
    approach: "Strategic narrative overhaul.",
    delivery: "Pitch Deck (15 slides) + Landing Page Copy.",
    impact: "Secured $2M seed funding round."
  }
];

export const team = [
  {
    name: "Alex C.",
    role: "Project Lead",
    tags: ["Strategy", "Scoping", "Crisis Mgmt"],
    style: "Calm under pressure. Detail-obsessed.",
    specs: "EN/CN · GMT+8"
  },
  {
    name: "Sarah L.",
    role: "Lead Designer",
    tags: ["UI/UX", "Brand", "Motion"],
    style: "Minimalist. Future-focused aesthetics.",
    specs: "EN · GMT-5"
  },
  {
    name: "David K.",
    role: "Senior Engineer",
    tags: ["React", "Node", "Architecture"],
    style: "Writes code that explains itself.",
    specs: "EN/DE · GMT+1"
  },
  {
    name: "Elena R.",
    role: "Copy Strategist",
    tags: ["Conversion", "B2B", "Scripts"],
    style: "Punchy, human, and persuasive.",
    specs: "EN/ES · GMT-4"
  },
  {
    name: "Marcus T.",
    role: "Growth Ops",
    tags: ["Automation", "Analytics", "CRM"],
    style: "Data-driven efficiency.",
    specs: "EN · GMT+0"
  },
  {
    name: "Yuki S.",
    role: "QA & Delivery",
    tags: ["Testing", "Accessibility", "Polish"],
    style: "Nothing gets past her.",
    specs: "EN/JP · GMT+9"
  }
];

export const faqs = [
  { q: "What types of work do you take on?", a: "Anything digital. Web, design, copy, automation, or data. If we can't do it, we know who can." },
  { q: "How fast do you respond with a quote?", a: "Usually within 24 hours. Urgent requests can be expedited." },
  { q: "What does pricing depend on?", a: "Complexity, timeline, and value. We offer fixed-project pricing or monthly retainers." },
  { q: "How many revision rounds?", a: "Typically two rounds are included in fixed projects. Retainers have ongoing iteration." },
  { q: "Payment terms?", a: "50% upfront to start, 50% upon delivery for new clients. Net-15 for retainer partners." },
  { q: "Can you sign an NDA?", a: "Yes. We treat all client data with strict confidentiality. NDA available upon request." },
  { q: "How do you run projects?", a: "Async-first. Linear/Trello for tasks, Telegram/Slack for quick comms. No useless meetings." },
  { q: "Do you handle urgent requests?", a: "Yes, subject to a rush fee." }
];

export const insights = [
  {
    slug: "async-workflow",
    title: "Why Async Work Wins",
    date: "Oct 12, 2025",
    summary: "Deep work requires silence. Here is how we structure projects without meetings.",
    tags: ["Strategy", "Operations"]
  },
  {
    slug: "design-systems-2026",
    title: "Design Systems in 2026",
    date: "Nov 01, 2025",
    summary: "The shift from rigid atomic design to fluid, token-based systems.",
    tags: ["Design", "Tech"]
  },
  {
    slug: "copy-that-converts",
    title: "Stop Writing Boring Copy",
    date: "Dec 15, 2025",
    summary: "Three rules to make your B2B landing page sound like a human wrote it.",
    tags: ["Copy", "Growth"]
  },
  {
    slug: "nextjs-optimization",
    title: "Next.js 14 Performance",
    date: "Jan 05, 2026",
    summary: "Practical tips for reducing TBT and LCP on heavy marketing sites.",
    tags: ["Tech", "Execution"]
  },
  {
    slug: "remote-culture",
    title: "Building Gold Teams",
    date: "Jan 20, 2026",
    summary: "How to recruit senior talent who don't need management.",
    tags: ["Strategy", "Team"]
  },
  {
    slug: "automation-basics",
    title: "Automation for Agencies",
    date: "Feb 02, 2026",
    summary: "Using Zapier and Webhooks to eliminate manual admin work.",
    tags: ["Operations", "Tech"]
  }
];
