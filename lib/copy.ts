export const copy = {
  common: {
    startRequest: "Start a request",
    bookCall: "Book a call",
    viewAll: "View all",
    readCaseStudy: "Read Case Study",
    featuredCase: "FEATURED CASE",
    impact: "Impact",
    clientPreview: "[Client Project Preview]",
    loadingCases: "Case studies loading...",
  },
  nav: {
    startRequestBtn: "Start Request",
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    security: "Security & NDA",
    rights: "All rights reserved.",
  },
  home: {
    hero: {
      badge: "Accepting new projects for Feb 2026",
      titleStart: "Anything digital—",
      titleEnd: "handled.",
      sub: "We scope fast, execute clean, and deliver with accountability—so you can move forward without friction.",
      trust: ["Response within 24h", "Clear scope & timeline", "NDA available", "Senior-led delivery"],
    },
    servicesTitle: "Our Services",
    howTitle: "How we operate",
    proofTitle: "Recent Proof",
    team: {
      title: "The Gold Team",
      sub: "Meet the senior specialists who lead every delivery. No juniors, no outsourcing.",
      btn: "View Full Roster",
    },
    faqTitle: "Common Questions",
    finalCtaTitle: "Ready to move?",
  },
  contact: {
    title: "Start a request",
    sub: "Tell us what you need. We'll handle the rest.",
    loadingFallback: "Loading form...",
    success: {
      title: "Request Received",
      sub: "We've got your brief. Expect a response from our lead producer within 24 hours.",
      btn: "Send another",
    },
    form: {
      category: "Category",
      goal: "Primary Goal",
      timeline: "Timeline",
      budget: "Budget Range",
      details: "Project Details",
      contact: "Your Contact (Email/Telegram)",
      specialist: "Preferred Specialist (Optional)",
      submitBtn: "Submit Request",
      sendingBtn: "Sending...",
      ndaPrefix: "NDA available upon request.",
      confidential: "100% Confidential.",
      options: {
        category: [
          { value: "Web", label: "Web Dev" },
          { value: "Design", label: "Design" },
          { value: "Copy", label: "Copy & Content" },
          { value: "Mixed", label: "Mixed / Ops" },
        ],
        timeline: [
          { value: "ASAP", label: "ASAP (Rush)" },
          { value: "1-2 weeks", label: "1-2 Weeks" },
          { value: "1 month", label: "1 Month" },
          { value: "Flexible", label: "Flexible" },
        ],
        budget: [
          { value: "<2k", label: "Under $2k" },
          { value: "2k-5k", label: "$2k - $5k" },
          { value: "5k-10k", label: "$5k - $10k" },
          { value: "10k+", label: "$10k+" },
        ],
      },
      validation: {
        category: "Please select a category",
        goal: "Please define a goal",
        timeline: "Timeline is required",
        budget: "Budget is required",
        emailInvalid: "Invalid email address",
        contactRequired: "Contact method required (min 2 chars)",
        detailsMin: "Please provide more details (at least 10 chars)",
      },
      errors: {
        generic: "Failed to send request. Please try again later.",
        network: "Network error. Please check your connection."
      }
    },
    book: {
      title: "Rather talk?",
      sub: "Book a 15-min discovery call.",
      btnLoading: "Booking Calendar Loading...",
    }
  },
  servicesPage: {
    title: "Our Services",
    sub: "Modular digital services. We act as your specialized department for web, design, and content.",
    youGet: "YOU GET:",
    ctaDisclaimer: "Deliverables & pricing scoped after brief.",
    ctaBtn: "Request This",
  },
  proofPage: {
    title: "Proof of Work",
    sub: "Results speak. Here are selected anonymized case studies.",
    labels: {
      client: "CLIENT",
      challenge: "The Challenge",
      approach: "Our Approach",
      delivery: "Delivery",
    }
  },
  teamPage: {
    title: "Gold Team",
    sub: "Senior talent only. We deploy small, high-impact squads to solve your digital problems.",
    requestBtnPrefix: "Request",
  },
  insightsPage: {
    title: "Insights",
    sub: "Notes on strategy, design, and operations from the field.",
    backLink: "Back to Insights",
    readTimeLabel: "5 min read",
    ctaTitle: "Ready to implement this?",
    ctaBtn: "Talk to our strategists",
  },
   howPage: {
    title: "How it works",
    sub: "Transparent, asynchronous, and designed for speed. No retainer traps.",
    pricingTitle: "Pricing Models",
    pricing: {
       fixed: { title: "Fixed Project", desc: "Clear scope, clear price. 50% upfront. Best for landing pages and decks." },
       sprint: { title: "Sprint Week", desc: "Dedicate a senior team for 5 days. Flat rate. Best for MVP builds." },
       retainer: { title: "Retainer", desc: "Reserve 20-80 hours/month. Priority queue. Best for ongoing ops." },
    },
    ctaBtn: "Start a project"
  },
  policies: {
    termsTitle: "Terms of Service",
    privacyTitle: "Privacy Policy",
    securityTitle: "Security & NDA",
    securityCta: {
      title: "Need an NDA signed first?",
      sub: "Send us your document or request ours. We typically turn these around in 2 hours.",
      btn: "Request NDA via Contact"
    }
  }
} as const;
