export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es';
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.toggleLang': 'Idioma',

    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Fullstack',
    'hero.tagline':
      'Construyo software que ya está en producción — no demos.',
    'hero.location': 'El Salvador · Remoto para EE. UU. (GMT-6)',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',

    'about.title': 'Sobre mí',
    'about.p1':
      'Soy Andrés Santos, Ingeniero en Sistemas Informáticos (UES, 2021) con más de 4 años en tecnología y más de 2 construyendo software a medida de punta a punta: SaaS, POS y e-commerce. Actualmente desarrollo para una empresa en Estados Unidos, donde diseñé y puse en producción un sistema POS e inventario que da servicio a 5 puntos de venta.',
    'about.p2':
      'Soy fundador de Jugasaro, una plataforma SaaS multi-tenant para barberías y proveedores de belleza. Me especializo en NestJS, React, TypeScript y PostgreSQL, y disfruto transformar procesos manuales en software automatizado y escalable.',
    'about.stack': 'Stack',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.tools': 'Herramientas',

    'projects.title': 'Proyectos seleccionados',
    'projects.subtitle': 'Productos completos y funcionando: e-commerce, reservas, firma de contratos y más.',
    'projects.viewCode': 'Código',
    'projects.viewDemo': 'Demo',
    'projects.viewMore': 'Ver más',
    'projects.backToProjects': 'Volver a proyectos',
    'projects.gallery': 'Galería',
    'projects.about': 'Acerca del proyecto',
    'projects.tech': 'Tecnologías',
    'projects.year': 'Año',

    'contact.title': 'Hablemos',
    'contact.subtitle':
      '¿Tienes un proceso manual que debería ser software? Hablemos — respondo rápido.',
    'contact.email': 'Enviar email',
    'contact.cta': 'Disponible para trabajar',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu email',
    'contact.form.message': 'Tu mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Enviando…',
    'contact.form.success': 'Se abrirá tu cliente de email con el mensaje listo para enviar.',
    'contact.form.error': 'Algo salió mal. Escríbeme directamente.',
    'contact.or': 'o',
    'hero.stat1.value': '5+',
    'hero.stat1.label': 'Años programando',
    'hero.stat2.value': '20+',
    'hero.stat2.label': 'Proyectos entregados',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Curiosidad',
    'hero.scroll': 'Desliza',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con Astro + Tailwind.',

    'experience.title': 'Trayectoria',
    'experience.subtitle': 'De automatizar hojas de cálculo a poner sistemas en producción.',
    'experience.section': 'Experiencia',
    'experience.work': 'Trabajo',
    'experience.education': 'Educación',

    'project.problem': 'Problema',
    'project.solution': 'Solución',
    'project.outcome': 'Resultado',
    'project.metrics': 'Métricas',
    'project.featured': 'Destacado',

    'hero.cta.cv': 'Descargar CV',
    'hero.cta.cvAria': 'Abrir CV en formato imprimible',

    'notfound.title': 'Página no encontrada',
    'notfound.subtitle': 'Esta ruta no existe — o todavía no la construyo.',
    'notfound.home': 'Volver al inicio',
    'notfound.code': '404',

    'cv.title': 'CV — Andrés Santos',
    'cv.print': 'Imprimir / Guardar como PDF',
    'cv.summary': 'Resumen',
    'cv.summaryText':
      'Desarrollador full-stack con más de 4 años en tecnología y más de 2 construyendo software a medida (SaaS, POS, e-commerce). Diseñé y puse en producción un sistema POS e inventario para 5 puntos de venta en EE. UU. Fundador de Jugasaro, plataforma SaaS multi-tenant. Especializado en NestJS, React, TypeScript y PostgreSQL.',
    'cv.contact': 'Contacto',
    'cv.back': 'Volver al sitio',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggleTheme': 'Toggle theme',
    'nav.toggleLang': 'Language',

    'hero.greeting': "Hi, I'm",
    'hero.role': 'Fullstack Developer',
    'hero.tagline':
      "I build software that's already in production — not demos.",
    'hero.location': 'El Salvador · Remote for the US (GMT-6)',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',

    'about.title': 'About me',
    'about.p1':
      "I'm Andrés Santos, a Systems Engineer (UES, 2021) with 4+ years in tech and 2+ years building end-to-end custom software: SaaS, POS and e-commerce. I currently develop for a US-based company, where I designed and shipped a POS and inventory system serving 5 points of sale.",
    'about.p2':
      "I'm the founder of Jugasaro, a multi-tenant SaaS platform for barbershops and beauty suppliers. I specialize in NestJS, React, TypeScript and PostgreSQL, and I love turning manual processes into automated, scalable software.",
    'about.stack': 'Stack',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.tools': 'Tools',

    'projects.title': 'Selected projects',
    'projects.subtitle': 'Complete, working products: e-commerce, bookings, contract signing and more.',
    'projects.viewCode': 'Code',
    'projects.viewDemo': 'Demo',
    'projects.viewMore': 'View more',
    'projects.backToProjects': 'Back to projects',
    'projects.gallery': 'Gallery',
    'projects.about': 'About this project',
    'projects.tech': 'Tech stack',
    'projects.year': 'Year',

    'contact.title': "Let's talk",
    'contact.subtitle':
      'Got a manual process that should be software? Let’s talk — I reply fast.',
    'contact.email': 'Send email',
    'contact.cta': 'Available for work',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Your email client will open with the message ready to send.',
    'contact.form.error': 'Something went wrong. Email me directly.',
    'contact.or': 'or',
    'hero.stat1.value': '5+',
    'hero.stat1.label': 'Years coding',
    'hero.stat2.value': '20+',
    'hero.stat2.label': 'Projects shipped',
    'hero.stat3.value': '∞',
    'hero.stat3.label': 'Curiosity',
    'hero.scroll': 'Scroll',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro + Tailwind.',

    'experience.title': 'Journey',
    'experience.subtitle': 'From automating spreadsheets to shipping systems to production.',
    'experience.section': 'Experience',
    'experience.work': 'Work',
    'experience.education': 'Education',

    'project.problem': 'Problem',
    'project.solution': 'Solution',
    'project.outcome': 'Outcome',
    'project.metrics': 'Metrics',
    'project.featured': 'Featured',

    'hero.cta.cv': 'Download CV',
    'hero.cta.cvAria': 'Open CV in printable format',

    'notfound.title': 'Page not found',
    'notfound.subtitle': "This route doesn't exist — or I haven't built it yet.",
    'notfound.home': 'Back to home',
    'notfound.code': '404',

    'cv.title': 'CV — Andrés Santos',
    'cv.print': 'Print / Save as PDF',
    'cv.summary': 'Summary',
    'cv.summaryText':
      'Full-stack developer with 4+ years in tech and 2+ years building end-to-end custom software (SaaS, POS, e-commerce). Designed and shipped a POS and inventory system serving 5 US points of sale. Founder of Jugasaro, a multi-tenant SaaS platform. Specialized in NestJS, React, TypeScript and PostgreSQL.',
    'cv.contact': 'Contact',
    'cv.back': 'Back to site',
  },
} as const;
