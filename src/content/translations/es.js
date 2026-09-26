/** @type {import("../../types").TranslationSet} */
export const es = {
  home: {
    contentHeader: "Ingeniero de Software",
    contentHeaderTechStack:
      "< AI-Directed Engineering | Next.js • React • TypeScript • SaaS de producción />",
    welcomeLabel: "BIENVENIDO A MI PORTAFOLIO",
    headerParagraph:
      "Hola, soy Dariusz Podczasik. Ingeniero de software especializado en aplicaciones web modernas y productos SaaS impulsados por IA.",
    viewMyWork: "Ver proyectos",
    viewCV: "Ver CV",
    cvUrl: `${process.env.PUBLIC_URL}/cv.html`,
    portraitAlt: "Retrato de Dariusz Podczasik",
    hearMeLabel: "Escúchame — reproducir un breve saludo en video",
    skillsetHeader: "Mi stack tecnológico",
    learnNextHeader: "Actualmente aprendiendo",
    toolsShowcase: {
      titlePlain: "Construyo con",
      titleAccent: "las mejores herramientas",
      description:
        "Creo aplicaciones web rápidas, escalables y modernas usando un potente ecosistema de tecnologías de vanguardia.",
      features: [
        { title: "Rendimiento optimizado", subtitle: "Cargas rápidas" },
        { title: "Arquitectura escalable", subtitle: "Crece sin problemas" },
        { title: "Experiencia de desarrollador", subtitle: "APIs limpias" },
        { title: "UI/UX moderno", subtitle: "Interfaces pulidas" },
      ],
      exploreParagraph:
        "Subiendo de nivel y construyendo el futuro, una línea a la vez.",
      exploreAriaLabel: "Tecnologías que estoy explorando",
      exploreItems: [
        {
          name: "Inteligencia artificial",
          description: "Funciones impulsadas por IA",
        },
        { name: "Stripe", description: "Infraestructura de pagos" },
        {
          name: "AI-Directed Engineering",
          description: "Desarrollo asistido por IA",
        },
        {
          name: "Framer Motion",
          description: "Animaciones listas para producción",
        },
        {
          name: "Arquitectura SaaS",
          description: "Patrones SaaS escalables",
        },
      ],
      moreTitle: "Y más",
      moreSubtitle: "Siempre aprendiendo.",
    },
  },
  about: {
    journeyLabel: "MI VIAJE",
    journeyHeader: "De embedded a full-stack",
    journeyParagraph: `
<p>Mi viaje comenzó con electrónica, sistemas embebidos, C++ y OpenGL, antes de evolucionar hacia el desarrollo web moderno. Hoy construyo aplicaciones listas para producción con React, Next.js, TypeScript y Supabase. Combino principios sólidos de ingeniería de software con flujos asistidos por IA para crear soluciones escalables e impactantes.</p>
      `,
    journeyFeatures: [
      {
        title: "Sistemas full-stack",
        description:
          "Diseño sistemas completos: desde autenticación y bases de datos hasta APIs, despliegue y seguridad. Entender cómo encaja cada parte es esencial.",
      },
      {
        title: "Ingeniería asistida por IA",
        description:
          "Uso la IA como aliada de ingeniería para acelerar la implementación manteniendo calidad de código, escalabilidad y mantenibilidad a largo plazo.",
      },
      {
        title: "Resolución de problemas",
        description:
          "Me apasiona crear software que resuelva problemas reales y ofrezca experiencias de usuario sobresalientes.",
      },
      {
        title: "Aprendizaje continuo",
        description:
          "Me mantengo al día en arquitectura de software, diseño de sistemas, IA y tecnologías en la nube — esencial para mi crecimiento como ingeniero.",
      },
    ],
  },
  contact: {
    headerPlain: "Ponte en",
    headerAccent: "contacto",
    contactParagraph: "Construyamos algo increíble juntos.",
  },
  footer: {
    tagline: "Excelencia en ingeniería a través del código y el diseño.",
    rightsReserved: "Todos los derechos reservados.",
  },
  nav: {
    mainAriaLabel: "Navegación principal",
    menuToggleLabel: "Alternar menú de navegación",
    themeToggleLabel: "Cambiar modo oscuro",
    languageGroupLabel: "Selector de idioma",
    languageSelectLabel: "Seleccionar idioma",
    shareLabel: "Compartir este portafolio",
    shareTitle: "Dariusz Podczasik — Software Engineer",
    shareText:
      "Mira el portafolio de Dariusz — ingeniería dirigida por IA y aplicaciones web modernas.",
    shareCopied: "Enlace copiado",
    shareError: "No se pudo copiar el enlace",
  },
  projects: {
    header: "Proyectos",
    regionLabel: "Carrusel de proyectos",
    previousLabel: "Proyecto anterior",
    nextLabel: "Proyecto siguiente",
    goToLabel: "Ir al proyecto",
    githubProfileLabel: "Visita mi perfil de GitHub",
    closeLabel: "Cerrar",
    comingSoonLabel: "Próximamente",
    expandLabel: "Expandir {title}",
    liveDemoLabel: "Demo en vivo",
    repoLabel: "GitHub",
    screenshotAlt: "{title} — captura de pantalla del proyecto",
  },
};
