export const profile = {
  fullName: 'Andrés Santos',
  brand: 'Joansaro',
  email: 'andres@joansaro.com',
  phone: '+503 7494 4007',
  website: 'https://joansaro.com',
  location: {
    es: 'El Salvador · Remoto — GMT-6 (US Central)',
    en: 'El Salvador · Remote — GMT-6 (US Central)',
  },
  education: {
    es: 'Ingeniero en Sistemas Informáticos — Universidad de El Salvador (UES) · 2021',
    en: 'Systems Engineer — Universidad de El Salvador (UES) · 2021',
  },
  cv: '/cv',
  cvPdf: {
    es: '/docs/CV_Andres_Santos_ES.pdf',
    en: '/docs/CV_Andres_Santos_EN.pdf',
  },
  social: {
    github: 'https://github.com/joansaro',
    linkedin: 'https://linkedin.com/in/andr%C3%A9s-santos-b9092b182',
  },
  languages: {
    es: [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'Intermedio (B1) — en mejora continua' }],
    en: [{ name: 'Spanish', level: 'Native' }, { name: 'English', level: 'Intermediate (B1) — actively improving' }],
  },
  stack: {
    frontend: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind CSS'],
    backend: ['NestJS', 'Node.js', 'PostgreSQL', 'REST APIs'],
    tools: ['WordPress · WooCommerce', 'Square (pagos)', 'Git · GitHub', 'Desarrollo asistido por IA'],
  },
};

export type TimelineEntry = {
  period: string;
  role: { es: string; en: string };
  org: string;
  description: { es: string; en: string };
  tech?: string[];
  type: 'work' | 'education';
};

export const timeline: TimelineEntry[] = [
  {
    period: 'Jul 2024 — presente',
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    org: 'JC Barber & Beauty Supply — EE. UU.',
    description: {
      es: 'Diseñé y construí desde cero un sistema POS e inventario a medida que centraliza las operaciones de 5 puntos de venta (~15 usuarios activos): más de 5,000 SKUs, 100+ clientes, conteo automatizado de inventario y trazabilidad. También desarrollé y lancé la tienda en línea de la empresa con pagos vía Square.',
      en: 'Designed and built a custom POS and inventory system from scratch, centralizing operations for 5 points of sale (~15 active users): 5,000+ SKUs, 100+ clients, automated inventory counts and full traceability. Also built and launched the company’s online store with Square payments.',
    },
    tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'WooCommerce', 'Square'],
    type: 'work',
  },
  {
    period: 'Jul 2022 — Jul 2024',
    role: { es: 'Soporte Técnico', en: 'Technical Support' },
    org: 'JC Barber & Beauty Supply — EE. UU.',
    description: {
      es: 'Referente técnico del equipo: automaticé hojas de cálculo para reducir trabajo manual, gestioné facturación y depuración de datos, y capacité usuarios en Excel y sistemas internos — el primer paso hacia el software a medida.',
      en: 'The team’s technical go-to: automated spreadsheets to cut manual work, managed invoicing and data cleanup, and trained users on Excel and internal systems — the first step toward custom software.',
    },
    tech: ['Excel', 'SalePro', 'Automatización'],
    type: 'work',
  },
  {
    period: 'Ago 2019 — Jun 2020',
    role: { es: 'Practicante de Soporte Técnico', en: 'Technical Support Intern' },
    org: 'Instituto Nacional Ernesto Flores — El Salvador',
    description: {
      es: 'Servicio social universitario: mantenimiento y reparación de hardware, instalación y configuración de software, gestión de redes e inventarios, y capacitación a docentes y estudiantes.',
      en: 'University social service: hardware maintenance and repair, software installation and setup, network and inventory management, and training for teachers and students.',
    },
    type: 'work',
  },
  {
    period: '— 2021',
    role: { es: 'Ingeniería en Sistemas Informáticos', en: 'Systems Engineering' },
    org: 'Universidad de El Salvador (UES)',
    description: {
      es: 'Carrera completa con graduación en 2021 mediante curso de especialización en Redes. Base sólida en diseño de software, bases de datos y arquitectura de sistemas.',
      en: 'Full degree, graduated in 2021 via a specialization course in Networking. Solid foundation in software design, databases and systems architecture.',
    },
    type: 'education',
  },
];
export type Project = {
  slug: string;
  title: string;
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  tags: string[];
  cover: string;
  gallery: string[];
  demo?: string;
  code?: string;
  year: number;
  featured?: boolean;
  status?: 'live' | 'coming-soon';
  caseStudy?: {
    problem: { es: string; en: string };
    solution: { es: string; en: string };
    outcome: { es: string; en: string };
    metrics: { value: string; label: { es: string; en: string } }[];
  };
};

export const projects: Project[] = [
  {
    slug: 'jugasaro-store',
    title: 'Jugasaro Store',
    description: {
      es: 'E-commerce full-stack con panel admin: catálogo, carrito, pedidos y gestión completa.',
      en: 'Full-stack e-commerce with admin panel: catalog, cart, orders and full management.',
    },
    longDescription: {
      es: 'Monorepo de e-commerce construido con NestJS, Next.js 15 y Prisma sobre PostgreSQL. Incluye autenticación JWT con cookies httpOnly, carrito y wishlist persistentes, checkout simulado, y un panel de administración completo: CRUD de productos con variantes e imágenes, marcas, categorías, pedidos con cambio de estado, dashboard con KPIs, gestión de roles y un hero-carrusel de la portada 100% editable desde el panel.',
      en: 'E-commerce monorepo built with NestJS, Next.js 15 and Prisma on PostgreSQL. Features JWT auth with httpOnly cookies, persistent cart and wishlist, simulated checkout, and a complete admin panel: product CRUD with variants and images, brands, categories, orders with status flow, a KPI dashboard, role management and a home hero carousel fully editable from the panel.',
    },
    tags: ['NestJS', 'Next.js 15', 'Prisma', 'PostgreSQL', 'Turborepo'],
    cover: '/shots/jugasaro-store-home.png',
    gallery: ['/shots/jugasaro-store-home.png', '/shots/jugasaro-store-inner.png', '/shots/jugasaro-store-mobile.png'],
    year: 2026,
    featured: true,
    caseStudy: {
      problem: {
        es: 'Demostrar dominio de una arquitectura e-commerce real: catálogo con variantes, estado de pedido, roles, y un admin usable — no solo una vitrina estática.',
        en: 'Prove command of a real e-commerce architecture: catalog with variants, order state, roles, and a usable admin — not just a static storefront.',
      },
      solution: {
        es: 'Monorepo con pnpm + Turborepo: API NestJS con Prisma y validación por DTOs, web Next.js App Router con Server Components y Server Actions, tipos compartidos en un paquete común, y seed reproducible con 40 productos e imágenes.',
        en: 'pnpm + Turborepo monorepo: NestJS API with Prisma and DTO validation, Next.js App Router web with Server Components and Server Actions, shared types in a common package, and a reproducible seed with 40 products and images.',
      },
      outcome: {
        es: 'Tienda navegable de punta a punta: registro, compra, wishlist, y un panel admin donde se gestiona todo el catálogo y los pedidos con datos reales en PostgreSQL.',
        en: 'End-to-end shoppable store: sign-up, purchase, wishlist, and an admin panel managing the full catalog and orders against real PostgreSQL data.',
      },
      metrics: [
        { value: '2 apps', label: { es: 'API + Web en monorepo', en: 'API + Web in a monorepo' } },
        { value: '40+', label: { es: 'Productos con variantes', en: 'Products with variants' } },
        { value: '100%', label: { es: 'Tipado extremo a extremo', en: 'End-to-end type safety' } },
      ],
    },
  },
  {
    slug: 'joansaro-contratos',
    title: 'Joansaro Contratos',
    description: {
      es: 'Sistema de firma electrónica de contratos: editor de campos, firma digital y PDF con certificado.',
      en: 'Contract e-signature system: field editor, digital signing and certified PDF output.',
    },
    longDescription: {
      es: 'Plataforma completa de firma de contratos construida con Next.js 15 y Prisma sobre SQLite, a partir de un design system propio. El dueño crea documentos (desde cero, plantilla o PDF subido), coloca campos de firma/fecha/texto arrastrando y redimensionando sobre el documento, y envía un enlace único al firmante. El cliente firma dibujando en canvas o tipeando con fuentes caligráficas reales, y ambos descargan un PDF generado en el servidor con página de Certificate of Completion: timestamps, IP, dispositivo, hash SHA-256 y audit trail completo.',
      en: 'Complete contract-signing platform built with Next.js 15 and Prisma on SQLite, from a custom design system. The owner creates documents (blank, template or uploaded PDF), places signature/date/text fields by dragging and resizing over the document, and sends a unique link to the signer. The client signs by drawing on canvas or typing with real calligraphic fonts, and both parties download a server-generated PDF with a Certificate of Completion page: timestamps, IP, device, SHA-256 hash and the full audit trail.',
    },
    tags: ['Next.js 15', 'Prisma', 'SQLite', 'pdf-lib', 'Server Actions'],
    cover: '/shots/joansaro-contratos-home.png',
    gallery: ['/shots/joansaro-contratos-home.png', '/shots/joansaro-contratos-inner.png', '/shots/joansaro-contratos-mobile.png'],
    year: 2026,
    featured: true,
    caseStudy: {
      problem: {
        es: 'Un flujo de firma tiene muchas partes móviles: estados del documento, un editor visual de campos, un flujo público para el firmante y evidencia verificable de qué se firmó, cuándo y por quién.',
        en: 'A signing flow has many moving parts: document states, a visual field editor, a public signer flow, and verifiable evidence of what was signed, when and by whom.',
      },
      solution: {
        es: 'Server Actions de Next.js como única capa de API, máquina de estados Draft→Sent→Viewed→Signed/Declined con timeline de eventos, editor drag-and-drop con coordenadas porcentuales, enlaces tokenizados para el firmante y generación de PDF con pdf-lib embebiendo las fuentes de firma reales.',
        en: 'Next.js Server Actions as the single API layer, a Draft→Sent→Viewed→Signed/Declined state machine with an event timeline, a drag-and-drop editor with percentage coordinates, tokenized signer links, and pdf-lib PDF generation embedding the real signature fonts.',
      },
      outcome: {
        es: 'Ciclo completo verificado con una suite E2E de Playwright (17/17): crear, preparar, enviar, firmar en otra sesión y descargar el PDF certificado con hash e IP.',
        en: 'Full cycle verified with a Playwright E2E suite (17/17): create, prepare, send, sign in another session and download the certified PDF with hash and IP.',
      },
      metrics: [
        { value: '17/17', label: { es: 'Tests E2E en verde', en: 'E2E tests passing' } },
        { value: 'SHA-256', label: { es: 'Evidencia anti-manipulación', en: 'Tamper evidence' } },
        { value: '3', label: { es: 'Fuentes de firma embebidas', en: 'Embedded signature fonts' } },
      ],
    },
  },
  {
    slug: 'ironhaus',
    title: 'IRONHAUS Gym',
    description: {
      es: 'Reserva de clases de gimnasio con backend real: cupos en vivo y regla de capacidad.',
      en: 'Gym class booking with a real backend: live availability and capacity rule.',
    },
    longDescription: {
      es: 'Demo full-stack para un gimnasio premium: API NestJS con TypeORM y PostgreSQL, frontend React + Vite con TanStack Query. La funcionalidad estrella es la reserva de clases: el horario semanal muestra cupos en vivo y el backend rechaza con 409 Conflict cuando una clase está llena. Incluye vista de detalle por clase, "mis reservas" con cancelación, y seed automático que deja el horario poblado.',
      en: 'Full-stack demo for a premium gym: NestJS API with TypeORM and PostgreSQL, React + Vite frontend with TanStack Query. The flagship feature is class booking: the weekly schedule shows live availability and the backend rejects with 409 Conflict when a class is full. Includes per-class detail view, "my bookings" with cancellation, and an automatic seed that ships a populated schedule.',
    },
    tags: ['NestJS', 'React', 'TypeORM', 'PostgreSQL', 'TanStack Query'],
    cover: '/shots/ironhaus-home.png',
    gallery: ['/shots/ironhaus-home.png', '/shots/ironhaus-inner.png', '/shots/ironhaus-mobile.png'],
    year: 2026,
    featured: true,
    caseStudy: {
      problem: {
        es: 'Las reservas con sobrecupo son el bug clásico de los sistemas de agenda: dos usuarios toman el último lugar al mismo tiempo y la clase queda sobrevendida.',
        en: 'Overbooking is the classic scheduling bug: two users grab the last spot at the same time and the class ends up oversold.',
      },
      solution: {
        es: 'La regla vive en el backend: al reservar se cuentan las reservas activas y se rechaza con 409 si activas ≥ capacidad, con bloqueo de duplicados por miembro. El frontend refleja cupos en vivo e invalida caché con TanStack Query tras cada mutación.',
        en: 'The rule lives in the backend: on booking, active reservations are counted and rejected with 409 when active ≥ capacity, plus per-member duplicate blocking. The frontend mirrors live spots and invalidates cache with TanStack Query after each mutation.',
      },
      outcome: {
        es: 'Suite de integración 11/11 en verde cubriendo el flujo completo: reservar, llenar clase, 409, duplicados, cancelar y validaciones.',
        en: 'Integration suite 11/11 green covering the whole flow: book, fill a class, 409, duplicates, cancel and validations.',
      },
      metrics: [
        { value: '11/11', label: { es: 'Tests de integración', en: 'Integration tests' } },
        { value: '409', label: { es: 'Regla de capacidad', en: 'Capacity rule' } },
        { value: '12', label: { es: 'Clases seed semanales', en: 'Seeded weekly classes' } },
      ],
    },
  },
  {
    slug: 'saro-inmobiliaria',
    title: 'SARO Inmobiliaria',
    description: {
      es: 'Portal inmobiliario con buscador y filtros en vivo, fichas por propiedad y diseño corporativo.',
      en: 'Real-estate portal with live search and filters, per-property pages and a corporate look.',
    },
    longDescription: {
      es: 'Sitio inmobiliario bilingüe construido con Astro y Tailwind. El buscador del hero (operación, tipo, zona) alimenta el listado vía query string, donde los filtros se aplican en vivo con JavaScript. Cada propiedad tiene su página generada estáticamente con galería, características, tabla de detalles, mapa y formulario de contacto con asesor. Las tarjetas del listado son horizontales tipo portal, con chips de datos (m², habitaciones, año).',
      en: 'Bilingual real-estate site built with Astro and Tailwind. The hero search (operation, type, area) feeds the listing via query string, where filters apply live with JavaScript. Every property gets a statically generated page with gallery, features, spec table, map and an agent contact form. Listing cards are wide portal-style rows with data chips (m², bedrooms, year).',
    },
    tags: ['Astro', 'Tailwind', 'TypeScript', 'i18n'],
    cover: '/shots/saro-inmobiliaria-home.png',
    gallery: ['/shots/saro-inmobiliaria-home.png', '/shots/saro-inmobiliaria-inner.png', '/shots/saro-inmobiliaria-mobile.png'],
    year: 2026,
    caseStudy: {
      problem: {
        es: 'Un portal inmobiliario vive de que encontrar sea fácil: sin backend, había que resolver búsqueda, filtros y páginas por propiedad solo con generación estática.',
        en: 'A property portal lives on findability: with no backend, search, filters and per-property pages had to work with static generation alone.',
      },
      solution: {
        es: 'Rutas dinámicas de Astro (getStaticPaths) para las fichas, filtros client-side sobre data-attributes con contador de resultados, y el buscador del hero pre-rellena los filtros vía query string.',
        en: 'Astro dynamic routes (getStaticPaths) for the listings, client-side filters over data-attributes with a result counter, and the hero search pre-fills filters via query string.',
      },
      outcome: {
        es: 'Búsqueda con sensación de app en un sitio 100% estático: filtrado instantáneo, 8 fichas completas en dos idiomas y carga inmediata.',
        en: 'App-like search on a 100% static site: instant filtering, 8 full listings in two languages and immediate loads.',
      },
      metrics: [
        { value: '8', label: { es: 'Fichas de propiedad', en: 'Property pages' } },
        { value: '×2', label: { es: 'Idiomas (ES/EN)', en: 'Languages (ES/EN)' } },
        { value: '0 ms', label: { es: 'Backend requerido', en: 'Backend required' } },
      ],
    },
  },
  {
    slug: 'crestline-fire',
    title: 'Crestline Fire & Rescue',
    description: {
      es: 'Sitio institucional de bomberos con dashboard de llamadas y estética cívica condensada.',
      en: 'Civic fire-department site with a call-statistics dashboard and condensed institutional look.',
    },
    longDescription: {
      es: 'Sitio bilingüe para un departamento de bomberos ficticio, inspirado en sitios reales de departamentos de EE. UU. Incluye dashboard de estadísticas de llamadas con gráficos SVG (dona por tipo y barras mensuales), fichas de estaciones y vehículos, reclutamiento con formulario, y una identidad visual institucional: tipografía condensada, cortes diagonales, bloques con barra lateral y cero animaciones decorativas.',
      en: 'Bilingual site for a fictional fire department, inspired by real US department sites. Features a call-statistics dashboard with SVG charts (donut by type, monthly bars), station and apparatus cards, recruitment with a form, and a civic visual identity: condensed type, diagonal cuts, side-bar blocks and zero decorative animation.',
    },
    tags: ['Astro', 'Tailwind', 'SVG charts', 'i18n'],
    cover: '/shots/crestline-fire-home.png',
    gallery: ['/shots/crestline-fire-home.png', '/shots/crestline-fire-inner.png', '/shots/crestline-fire-mobile.png'],
    year: 2026,
    caseStudy: {
      problem: {
        es: 'Los sitios institucionales suelen verse genéricos. El reto: transmitir autoridad cívica (señalética, datos, jerarquía clara) sin parecer una plantilla.',
        en: 'Institutional sites tend to look generic. The challenge: convey civic authority (signage, data, clear hierarchy) without feeling like a template.',
      },
      solution: {
        es: 'Sistema visual propio: Barlow Condensed en mayúsculas, esquinas rectas vía tokens de Tailwind, cortes diagonales con clip-path, y datos reales al frente con un dashboard SVG hecho a mano.',
        en: 'A dedicated visual system: uppercase Barlow Condensed, hard corners via Tailwind tokens, clip-path diagonal cuts, and data up front with a hand-built SVG dashboard.',
      },
      outcome: {
        es: 'Un sitio que se lee como comunicación pública real: información de emergencia siempre visible y datos del cuerpo en una visualización clara.',
        en: 'A site that reads like real public communication: emergency info always visible and department data in a clear visualization.',
      },
      metrics: [
        { value: '9', label: { es: 'Secciones/páginas', en: 'Sections/pages' } },
        { value: '2', label: { es: 'Gráficos SVG propios', en: 'Hand-built SVG charts' } },
        { value: '24/7', label: { es: 'Barra de emergencia fija', en: 'Persistent emergency bar' } },
      ],
    },
  },
  {
    slug: 'navaja-barber',
    title: 'The Navaja Barber',
    description: {
      es: 'Barbería de lujo: split-screen, tipografía serif, numerales romanos y reserva de citas.',
      en: 'Luxury barbershop: split-screen, serif type, roman numerals and appointment booking.',
    },
    longDescription: {
      es: 'Sitio bilingüe para una barbería premium con dirección de arte oscura y dorada: hero dividido en dos paneles con marco ornamental, etiquetas verticales, marquee lento, lista de servicios estilo sastre con números romanos, equipo con fotos en blanco y negro que revelan color al hover, y flujo de reserva con selección de servicio, barbero y hora.',
      en: 'Bilingual site for a premium barbershop with a dark-and-gold art direction: split-panel hero with an ornamental frame, vertical labels, slow marquee, tailor-style service list with roman numerals, a team section with B&W photos revealing color on hover, and a booking flow with service, barber and time selection.',
    },
    tags: ['Astro', 'Tailwind', 'Art direction', 'i18n'],
    cover: '/shots/navaja-barber-home.png',
    gallery: ['/shots/navaja-barber-home.png', '/shots/navaja-barber-inner.png', '/shots/navaja-barber-mobile.png'],
    year: 2026,
    caseStudy: {
      problem: {
        es: 'El nicho de barberías está saturado de la misma plantilla oscura. Había que lograr sensación de marca de lujo con detalles tipográficos, no con más efectos.',
        en: 'The barbershop niche is saturated with the same dark template. The goal was luxury-brand feel through typographic detail, not more effects.',
      },
      solution: {
        es: 'Composición asimétrica (split-screen), Marcellus + Jost, numerales romanos, reglas doradas con degradado y microinteracciones sobrias (letter-spacing al hover en botones).',
        en: 'Asymmetric composition (split-screen), Marcellus + Jost, roman numerals, gradient gold rules and restrained microinteractions (letter-spacing on button hover).',
      },
      outcome: {
        es: 'Una identidad reconocible a primer scroll: el sitio no comparte layout con ningún otro proyecto del portafolio.',
        en: 'An identity you recognize on first scroll: the site shares layout with no other project in this portfolio.',
      },
      metrics: [
        { value: '6', label: { es: 'Páginas bilingües', en: 'Bilingual pages' } },
        { value: '4', label: { es: 'Barberos con perfil', en: 'Barbers with profiles' } },
        { value: 'I–VI', label: { es: 'Servicios numerados', en: 'Numbered services' } },
      ],
    },
  },
  {
    slug: 'la-cafeteria',
    title: 'La Cafetería — Cafe & Bistro',
    description: {
      es: 'Cafetería editorial: nav centrado, fotos en arco, carta impresa y galería horizontal.',
      en: 'Editorial café site: centered nav, arched photos, printed-carte menu and horizontal gallery.',
    },
    longDescription: {
      es: 'Sitio bilingüe para una cafetería de especialidad con estética editorial cálida: navegación con logo centrado y links partidos, trío de fotos con arco como firma visual, menú maquetado como carta física en una columna con líneas punteadas, galería tipo tira de película con scroll horizontal, y reserva de mesa. Cormorant Garamond + Karla sobre paleta crema/café/terracota.',
      en: 'Bilingual site for a specialty café with a warm editorial aesthetic: centered-logo navigation with split links, an arched photo trio as the visual signature, a menu laid out like a physical one-column carte with dotted leaders, a film-strip horizontal gallery, and table booking. Cormorant Garamond + Karla over a cream/coffee/terracotta palette.',
    },
    tags: ['Astro', 'Tailwind', 'Editorial design', 'i18n'],
    cover: '/shots/la-cafeteria-home.png',
    gallery: ['/shots/la-cafeteria-home.png', '/shots/la-cafeteria-inner.png', '/shots/la-cafeteria-mobile.png'],
    year: 2026,
    caseStudy: {
      problem: {
        es: 'Transmitir calidez artesanal — lo contrario del look corporativo — manteniendo el sitio rápido, accesible y fácil de mantener.',
        en: 'Convey handmade warmth — the opposite of the corporate look — while keeping the site fast, accessible and easy to maintain.',
      },
      solution: {
        es: 'Dirección de arte basada en formas: arcos como firma, ornamentos ✦, itálicas serif para los subtítulos y un carril con scroll-snap para la galería. Todo estático, sin librerías de UI.',
        en: 'Shape-driven art direction: arches as the signature, ✦ ornaments, serif italics for subtitles and a scroll-snap rail for the gallery. Fully static, no UI libraries.',
      },
      outcome: {
        es: 'Un sitio que se siente de boutique y carga como texto plano; la carta funciona igual de bien en móvil que impresa.',
        en: 'A site that feels boutique and loads like plain text; the menu works as well on mobile as it would printed.',
      },
      metrics: [
        { value: '18', label: { es: 'Platos en la carta', en: 'Menu items' } },
        { value: '5', label: { es: 'Páginas bilingües', en: 'Bilingual pages' } },
        { value: '100', label: { es: 'Lighthouse (perf.)', en: 'Lighthouse (perf.)' } },
      ],
    },
  },
  {
    slug: 'jc-barber-system',
    title: 'JC Barber System',
    description: {
      es: 'POS e inventario en producción real (EE. UU.): 5 puntos de venta, 5,000+ SKUs, ~15 usuarios.',
      en: 'POS and inventory in real production (USA): 5 points of sale, 5,000+ SKUs, ~15 users.',
    },
    longDescription: {
      es: 'Sistema en producción que construí desde cero para JC Barber & Beauty Supply (EE. UU.): punto de venta e inventario a medida que centraliza bodega, 2 tiendas y 3 unidades móviles (~15 usuarios activos), con más de 5,000 SKUs, 100+ clientes, conteo automatizado de inventario y trazabilidad completa. Cliente React + TypeScript con Radix UI y backend NestJS + TypeORM sobre PostgreSQL.',
      en: 'Production system I built from scratch for JC Barber & Beauty Supply (USA): a custom POS and inventory platform centralizing a warehouse, 2 stores and 3 mobile units (~15 active users), with 5,000+ SKUs, 100+ registered clients, automated inventory counts and full traceability. React + TypeScript client with Radix UI and a NestJS + TypeORM backend on PostgreSQL.',
    },
    tags: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'Radix UI'],
    cover: '',
    gallery: [],
    year: 2025,
    status: 'coming-soon',
    caseStudy: {
      problem: {
        es: 'JC Barber & Beauty Supply opera una bodega, 2 tiendas y 3 unidades móviles. Toda la operación — inventario, ventas, clientes — se llevaba con hojas de cálculo y procesos manuales: sin trazabilidad, con horas de trabajo duplicado y errores de conteo.',
        en: 'JC Barber & Beauty Supply runs a warehouse, 2 stores and 3 mobile units. The entire operation — inventory, sales, customers — lived in spreadsheets and manual processes: no traceability, duplicated work hours and counting errors.',
      },
      solution: {
        es: 'Diseñé y construí desde cero un POS e inventario a medida: cliente React + TypeScript con Radix UI y backend NestJS + TypeORM sobre PostgreSQL. Centraliza los 5 puntos de venta con ventas por código de barras, conteo automatizado de inventario, gestión de clientes y trazabilidad completa de cada movimiento.',
        en: 'I designed and built a custom POS and inventory platform from scratch: a React + TypeScript client with Radix UI and a NestJS + TypeORM backend on PostgreSQL. It centralizes all 5 points of sale with barcode-driven sales, automated inventory counts, customer management and full traceability of every movement.',
      },
      outcome: {
        es: 'El sistema corre la operación diaria completa de la empresa: 5 puntos de venta, ~15 usuarios activos, más de 5,000 SKUs y 100+ clientes registrados. El código es privado, pero el sistema está en producción real desde 2025.',
        en: 'The system runs the company’s entire daily operation: 5 points of sale, ~15 active users, 5,000+ SKUs and 100+ registered customers. The code is private, but the system has been in real production since 2025.',
      },
      metrics: [
        { value: '5', label: { es: 'Puntos de venta', en: 'Points of sale' } },
        { value: '5,000+', label: { es: 'SKUs en inventario', en: 'SKUs in inventory' } },
        { value: '~15', label: { es: 'Usuarios activos', en: 'Active users' } },
      ],
    },
  },
  {
    slug: 'jcbarberstore',
    title: 'jcbarberstore.com',
    description: {
      es: 'E-commerce en producción para JC Barber & Beauty Supply (EE. UU.): tienda WooCommerce con pagos vía Square y ventas activas.',
      en: 'E-commerce in production for JC Barber & Beauty Supply (USA): WooCommerce store with Square payments and active sales.',
    },
    longDescription: {
      es: 'Tienda en línea en producción para JC Barber & Beauty Supply (EE. UU.), construida sobre WooCommerce con pagos integrados vía Square. Catálogo sincronizado con el inventario físico de las tiendas y ventas activas de clientes reales.',
      en: 'Live online store for JC Barber & Beauty Supply (USA), built on WooCommerce with integrated Square payments. Catalog synced with the stores’ physical inventory and active sales from real customers.',
    },
    tags: ['WooCommerce', 'WordPress', 'Square', 'PHP'],
    demo: 'https://jcbarberstore.com',
    cover: '/shots/jcbarberstore-home.png',
    gallery: ['/shots/jcbarberstore-home.png', '/shots/jcbarberstore-mobile.png'],
    year: 2025,
    status: 'coming-soon',
    caseStudy: {
      problem: {
        es: 'La empresa vendía únicamente en persona: un catálogo de miles de productos sin canal en línea, limitado al horario y la ubicación de las tiendas físicas.',
        en: 'The company sold in person only: a catalog of thousands of products with no online channel, limited to the physical stores’ hours and locations.',
      },
      solution: {
        es: 'Diseñé, construí y puse en producción la tienda en línea sobre WooCommerce, con pagos integrados vía Square y el catálogo alineado con el inventario físico de las tiendas.',
        en: 'I designed, built and shipped the online store on WooCommerce, with integrated Square payments and a catalog aligned with the stores’ physical inventory.',
      },
      outcome: {
        es: 'Un canal de venta abierto 24/7 con ventas activas de clientes reales, complementando las 5 ubicaciones físicas. Es público: puedes visitarlo ahora mismo.',
        en: 'A sales channel open 24/7 with active sales from real customers, complementing the 5 physical locations. It’s public: you can visit it right now.',
      },
      metrics: [
        { value: '24/7', label: { es: 'Canal de venta abierto', en: 'Sales channel open' } },
        { value: 'Square', label: { es: 'Pagos integrados', en: 'Integrated payments' } },
        { value: '2025', label: { es: 'En producción desde', en: 'In production since' } },
      ],
    },
  },
];
