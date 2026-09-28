/** @type {import("../../types").TranslationSet} */
export const en = {
  home: {
    contentHeader: "Software Engineer",
    contentHeaderTechStack:
      "< AI-Directed Engineering | Next.js • React • TypeScript • Production SaaS />",
    welcomeLabel: "WELCOME TO MY PORTFOLIO",
    headerParagraph: `
Hi, I'm Dariusz Podczasik.
A Software Engineer focused on building modern web applications and AI-powered SaaS products.`,
    viewMyWork: "View My Work",
    viewCV: "View CV",
    cvUrl: `${import.meta.env.BASE_URL}cv.html`,
    portraitAlt: "Portrait of Dariusz Podczasik",
    hearMeLabel: "Hear me — play a short video greeting",
    skillsetHeader: "My Technology Stack",
    learnNextHeader: "Currently Exploring",
    toolsShowcase: {
      titlePlain: "Built with the",
      titleAccent: "Best Tools",
      description:
        "I craft fast, scalable, and modern web applications using a powerful ecosystem of cutting-edge technologies.",
      features: [
        { title: "Performance Optimized", subtitle: "Fast loads" },
        { title: "Scalable Architecture", subtitle: "Grows cleanly" },
        { title: "Developer Experience", subtitle: "Clean APIs" },
        { title: "Modern UI/UX", subtitle: "Polished interfaces" },
      ],
      exploreParagraph:
        "Leveling up my skills and building the future, one line at a time.",
      exploreAriaLabel: "Technologies I'm currently exploring",
      exploreItems: [
        {
          name: "Artificial Intelligence",
          description: "Building AI-powered features",
        },
        { name: "Stripe", description: "Payment infrastructure" },
        {
          name: "AI-Directed Engineering",
          description: "AI-assisted development",
        },
        {
          name: "Framer Motion",
          description: "Production-ready animations",
        },
        { name: "SaaS Architecture", description: "Scalable SaaS patterns" },
      ],
      moreTitle: "And More",
      moreSubtitle: "Always learning.",
    },
  },
  about: {
    journeyLabel: "MY JOURNEY",
    journeyHeader: "From Embedded to Full-Stack",
    journeyParagraph: `
<p>My journey began with electronics, embedded systems, C++, and OpenGL before evolving into modern web development. Today I build production-ready applications using React, Next.js, TypeScript, and Supabase. I combine solid software engineering principles with AI-assisted workflows to create scalable, impactful solutions.</p>
      `,
    journeyFeatures: [
      {
        title: "Full-Stack Systems",
        description:
          "I design complete software systems—from authentication and databases to APIs, deployment, and security. Understanding how every part works together is essential.",
      },
      {
        title: "AI-Assisted Engineering",
        description:
          "I use AI as an engineering partner to accelerate implementation while maintaining code quality, scalability, and long-term maintainability.",
      },
      {
        title: "Problem Solving",
        description:
          "I'm passionate about building software that solves real problems and delivers outstanding user experiences.",
      },
      {
        title: "Continuous Learning",
        description:
          "I stay current with software architecture, system design, AI, and cloud technologies—essential to my growth as an engineer.",
      },
    ],
  },
  contact: {
    headerPlain: "Let's",
    headerAccent: "Connect",
    contactParagraph: "Let's build something great together.",
  },
  footer: {
    tagline: "Engineering excellence through code and design.",
    rightsReserved: "All rights reserved.",
  },
  nav: {
    mainAriaLabel: "Main navigation",
    menuToggleLabel: "Toggle navigation menu",
    themeToggleLabel: "Toggle dark mode",
    languageGroupLabel: "Language selector",
    languageSelectLabel: "Select language",
    shareLabel: "Share this portfolio",
    shareTitle: "Dariusz Podczasik — Software Engineer",
    shareText:
      "Check out Dariusz's portfolio — AI-directed engineering and modern web applications.",
    shareCopied: "Link copied",
    shareError: "Couldn't copy link",
  },
  projects: {
    header: "Proȷects",
    regionLabel: "Projects carousel",
    previousLabel: "Previous project",
    nextLabel: "Next project",
    goToLabel: "Go to project",
    githubProfileLabel: "Visit my GitHub profile",
    closeLabel: "Close",
    comingSoonLabel: "Coming soon",
    expandLabel: "Expand {title}",
    liveDemoLabel: "Live Demo",
    repoLabel: "GitHub",
    screenshotAlt: "{title} — project screenshot",
  },
};
