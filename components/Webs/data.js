// Comentarios de cada web (en español e inglés), redactados con IA a partir del contenido y la captura de cada sitio.
// La clave es el slug del dominio (ver slug.js); la captura está en /images/webs/<slug>.png.
// Si añades una web nueva a la tabla mis_webs, aparecerá sola en la página;
// para que tenga captura ejecuta `npm run webs:shots` y añade aquí su comentario.

export const webs = [
  {
    slug: 'bim20-com',
    web: 'www.bim20.com',
    nombre: 'BIM 2.0',
    categoria: { es: 'ERP · Construcción', en: 'ERP · Construction' },
    comentario: {
      es: 'La web comercial de la vertical de construcción para Odoo. Va directa al grano: formulario de contacto en la portada y acceso inmediato a la presentación y al vídeo de ventas. Explica bien el alcance: presupuestos de obra, certificaciones de avance, registro de costes, análisis coste/beneficio y método del valor ganado.',
      en: 'The sales website for the construction vertical for Odoo. It gets straight to the point: a contact form on the home page and instant access to the presentation and the sales video. It explains the scope well: construction budgets, progress certifications, cost tracking, cost/benefit analysis and the earned value method.'
    },
    destacados: {
      es: ['Formulario de contacto en portada', 'Documentación, demo y curso básico', '24 funciones estándar sobre Odoo 17'],
      en: ['Contact form on the home page', 'Documentation, demo and basic course', '24 standard features on Odoo 17']
    }
  },
  {
    slug: 'ticketproo-com',
    web: 'www.ticketproo.com',
    nombre: 'TicketProo',
    categoria: { es: 'SaaS · Tickets', en: 'SaaS · Tickets' },
    comentario: {
      es: 'Sistema de gestión de tickets con IA integrada para clasificar incidencias y sugerir respuestas. La portada, en tonos violeta, combina métricas, un buscador de catálogo y el blog, así que sirve tanto de producto como de escaparate. Es un proyecto de código abierto.',
      en: 'A ticket management system with built-in AI to classify incidents and suggest replies. The violet home page combines metrics, a catalog search and the blog, so it works both as a product and as a showcase. It is an open-source project.'
    },
    destacados: {
      es: ['Clasificación de tickets con IA', 'Catálogo de productos y servicios', 'Código abierto'],
      en: ['AI ticket classification', 'Product and service catalog', 'Open source']
    }
  },
  {
    slug: 'erp-sqlite-xyz',
    web: 'www.erp-sqlite.xyz',
    nombre: 'ERPSqlite',
    categoria: { es: 'ERP · Escritorio', en: 'ERP · Desktop' },
    comentario: {
      es: 'Un ERP de escritorio que funciona sin servidor: se descarga, se descomprime y guarda los datos en archivos SQLite, con una API compatible con Odoo. La captura del propio programa en la portada deja claro de un vistazo todo lo que incluye: ventas, tienda online, inventario, fabricación, RR. HH., presupuestos de obra con CAD y asistentes con IA.',
      en: 'A desktop ERP that runs without a server: you download it, unzip it and it stores data in SQLite files, with an Odoo-compatible API. The screenshot of the app on the home page shows at a glance everything it includes: sales, online store, inventory, manufacturing, HR, construction budgets with CAD and AI assistants.'
    },
    destacados: {
      es: ['Windows y macOS', 'Prueba gratuita de 90 días', 'API compatible con Odoo'],
      en: ['Windows and macOS', 'Free 90-day trial', 'Odoo-compatible API']
    }
  },
  {
    slug: 'desk20-com',
    web: 'www.desk20.com',
    nombre: 'Desk20',
    categoria: { es: 'SaaS · Soporte', en: 'SaaS · Support' },
    comentario: {
      es: 'Plataforma de helpdesk inspirada en Zendesk que reúne tickets, conversaciones y clientes en un solo sitio. La portada es limpia y con una propuesta muy clara, con llamadas a la acción para empezar gratis o ver el dashboard. También es de código abierto.',
      en: 'A helpdesk platform inspired by Zendesk that brings tickets, conversations and customers together in one place. The home page is clean with a very clear value proposition, and calls to action to start for free or view the dashboard. It is also open source.'
    },
    destacados: {
      es: ['Tickets con prioridades y agentes', 'Métricas en tiempo real', 'Código abierto'],
      en: ['Tickets with priorities and agents', 'Real-time metrics', 'Open source']
    }
  },
  {
    slug: 'openattendify-xyz',
    web: 'www.openattendify.xyz',
    nombre: 'OpenAttendify',
    categoria: { es: 'SaaS · RR. HH.', en: 'SaaS · HR' },
    comentario: {
      es: 'Control de asistencia de empleados: registro de entradas y salidas, ficha de empleados e informes, con soporte multiempresa. La portada explica qué hace en una frase y usa una foto de equipo que la hace cercana. Es de código abierto.',
      en: 'Employee attendance tracking: clock-in and clock-out records, employee profiles and reports, with multi-company support. The home page explains what it does in one sentence and uses a team photo that makes it feel approachable. It is open source.'
    },
    destacados: {
      es: ['Multiempresa', 'Informes de asistencia', 'Código abierto'],
      en: ['Multi-company', 'Attendance reports', 'Open source']
    }
  },
  {
    slug: 'nooxial-com',
    web: 'www.nooxial.com',
    nombre: 'Nooxial',
    categoria: { es: 'Formación · LMS', en: 'Training · LMS' },
    comentario: {
      es: 'Plataforma de cursos online con una portada llamativa en verde lima y un mensaje directo: aprende a tu ritmo y sin suscripciones. Ya ofrece cursos de Odoo 19 (contabilidad, inventario, compras y básico) con certificados que se pueden compartir en LinkedIn.',
      en: 'An online course platform with an eye-catching lime-green home page and a direct message: learn at your own pace, no subscriptions. It already offers Odoo 19 courses (accounting, inventory, purchasing and basics) with certificates you can share on LinkedIn.'
    },
    destacados: {
      es: ['Cursos de Odoo 19', 'Certificados para LinkedIn', 'Empieza gratis, sin tarjeta'],
      en: ['Odoo 19 courses', 'Certificates for LinkedIn', 'Start free, no card needed']
    }
  },
  {
    slug: 'loocalproject-com',
    web: 'www.loocalproject.com',
    nombre: 'LoocalProject',
    categoria: { es: 'App · Planificación', en: 'App · Planning' },
    comentario: {
      es: 'Cronogramas para proyectos pequeños, con tareas y recursos, que se guardan en el propio navegador: sin cuentas ni servidores. Una idea muy práctica para planificar una obra rápido. Está en español e inglés y permite importar proyectos desde una URL.',
      en: 'Schedules for small projects, with tasks and resources, saved in your own browser: no accounts and no servers. A very practical idea for planning a construction job quickly. It is available in Spanish and English and can import projects from a URL.'
    },
    destacados: {
      es: ['Datos solo en tu navegador', 'Español e inglés', 'Importar proyectos por URL'],
      en: ['Data stays in your browser', 'Spanish and English', 'Import projects from a URL']
    }
  },
  {
    slug: 'calculo-materiales-blue-vercel-app',
    web: 'calculo-materiales-blue.vercel.app',
    nombre: 'Cálculo de Materiales',
    categoria: { es: 'Utilidad · Construcción', en: 'Utility · Construction' },
    comentario: {
      es: 'Una calculadora sencilla para obra: eliges qué calcular (hormigón, bloque, ladrillo, pladur, repello o pintura) y te da los materiales necesarios. La interfaz es oscura y minimalista, con botones grandes, pensada para usarla en el móvil a pie de obra.',
      en: 'A simple calculator for the job site: you choose what to calculate (concrete, blocks, bricks, drywall, plaster or paint) and it gives you the materials you need. The interface is dark and minimal, with large buttons, designed to be used on a phone on site.'
    },
    destacados: {
      es: ['7 tipos de cálculo', 'Sin registro', 'Resumen de materiales'],
      en: ['7 types of calculation', 'No sign-up', 'Materials summary']
    }
  },
  {
    slug: 'erpmania-com',
    web: 'www.erpmania.com',
    nombre: 'ERPMania',
    categoria: { es: 'Blog · Odoo', en: 'Blog · Odoo' },
    comentario: {
      es: 'Colección de trucos para Odoo y otros ERP, filtrable por ERP y por versión, con el nivel de dificultad de cada truco. El formato de lista es muy rápido de consultar: funciona como una chuleta para desarrolladores y administradores.',
      en: 'A collection of tips for Odoo and other ERPs, filterable by ERP and version, with the difficulty level of each tip. The list format is very quick to browse: it works as a cheat sheet for developers and administrators.'
    },
    destacados: {
      es: ['Filtros por ERP y versión', 'Nivel de dificultad por truco', 'Hecho con Next.js'],
      en: ['Filters by ERP and version', 'Difficulty level per tip', 'Built with Next.js']
    }
  },
  {
    slug: 'falcondatabase-com',
    web: 'falcondatabase.com',
    nombre: 'falcondatabase',
    categoria: { es: 'SaaS · Backend', en: 'SaaS · Backend' },
    comentario: {
      es: 'Un backend listo para cualquier frontend, hecho con Django y PostgreSQL: creas proyectos aislados, defines tablas reales y añades login a tus apps en un clic. La portada enseña el SDK en JavaScript con un ejemplo de código, así que se entiende enseguida. Incluso se puede gestionar con un asistente de IA como Claude o Cursor.',
      en: 'A backend ready for any frontend, built with Django and PostgreSQL: you create isolated projects, define real tables and add login to your apps in one click. The home page shows the JavaScript SDK with a code sample, so it is easy to understand right away. It can even be managed with an AI assistant such as Claude or Cursor.'
    },
    destacados: {
      es: ['API REST y SDK en JavaScript', 'Login y reglas de acceso por tabla', 'Gestión con asistentes de IA'],
      en: ['REST API and JavaScript SDK', 'Login and per-table access rules', 'Managed with AI assistants']
    }
  },
  {
    slug: 'cursosdeguitarras-com',
    web: 'www.cursosdeguitarras.com',
    nombre: 'Cursos de Guitarras',
    categoria: { es: 'Formación · Música', en: 'Training · Music' },
    comentario: {
      es: 'Clases de guitarra cortas e interactivas con un enfoque de juego: ganas XP, subes de nivel y desbloqueas insignias. Usa audio real para escuchar cada cuerda y afinar con el micrófono. Tras el curso básico hay 20 talleres de música cubana y latinoamericana (trova, bolero, son…) con canciones de dominio público.',
      en: 'Short, interactive guitar lessons with a game approach: you earn XP, level up and unlock badges. It uses real audio to hear each string and tune with the microphone. After the basic course there are 20 workshops on Cuban and Latin American music (trova, bolero, son…) with public-domain songs.'
    },
    destacados: {
      es: ['3 clases gratis, 30 € al año', 'Afinador con micrófono', 'Gamificación con XP e insignias'],
      en: ['3 free lessons, €30 a year', 'Microphone tuner', 'Gamification with XP and badges']
    }
  },
  {
    slug: 'marlonpartners-com',
    web: 'www.marlonpartners.com',
    nombre: 'Marlon Partners',
    categoria: { es: 'Portal · Partners', en: 'Portal · Partners' },
    comentario: {
      es: 'La red de empresas aliadas con las que trabajo. Combina un directorio público de partners con un portal privado, por invitación, donde cada partner gestiona sus contactos, sus oportunidades en un CRM por etapas y su propia ficha de marca. El diseño es sobrio y tipográfico, en azul marino.',
      en: 'The network of partner companies I work with. It combines a public partner directory with a private, invitation-only portal where each partner manages their contacts, their opportunities in a stage-based CRM and their own brand profile. The design is sober and typographic, in navy blue.'
    },
    destacados: {
      es: ['Directorio público de partners', 'CRM de oportunidades por etapa', 'API de partners'],
      en: ['Public partner directory', 'Opportunity CRM by stage', 'Partner API']
    }
  },
  {
    slug: 'grabadordepantalla-online',
    web: 'www.grabadordepantalla.online',
    nombre: 'Grabador de Pantalla',
    categoria: { es: 'App · Vídeo', en: 'App · Video' },
    comentario: {
      es: 'Graba la pantalla desde el navegador en segundos, sin instalar nada, para tutoriales y presentaciones. La portada, en azul claro, tiene un mensaje muy directo y dos llamadas a la acción: empezar gratis o ver la demo. Los vídeos se guardan en el propio dispositivo, lo que refuerza la privacidad.',
      en: 'Record your screen from the browser in seconds, without installing anything, for tutorials and presentations. The light-blue home page has a very direct message and two calls to action: start for free or watch the demo. Videos are saved on your own device, which reinforces privacy.'
    },
    destacados: {
      es: ['Sin instalar software', 'Vídeos guardados en local', 'Empieza gratis'],
      en: ['No software to install', 'Videos saved locally', 'Start for free']
    }
  },
  {
    slug: 'marlonfalcon-com',
    web: 'www.marlonfalcon.com',
    nombre: 'MarlonFalcon.com',
    categoria: { es: 'Portfolio · Blog', en: 'Portfolio · Blog' },
    comentario: {
      es: 'Esta misma web: portfolio, servicios y un blog con 287 artículos sobre Odoo, ERP y programación. Tiene modo claro y oscuro, buscador de artículos por categorías y el CV descargable en PDF en español e inglés.',
      en: 'This very website: portfolio, services and a blog with 287 articles about Odoo, ERP and programming. It has light and dark mode, an article search by category and a downloadable PDF résumé in Spanish and English.'
    },
    destacados: {
      es: ['287 artículos técnicos', 'Buscador por categorías', 'CV en español e inglés'],
      en: ['287 technical articles', 'Search by category', 'Résumé in Spanish and English']
    }
  }
]
