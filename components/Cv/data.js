// Contenido del CV en español e inglés.
// Tras editarlo, regenera los PDF con `npm run cv:pdf` (con `npm run dev` arrancado).

const comun = {
  nombre: 'Marlon Falcón Hernández',
  foto: '/images/marlon_yellow.png',
  contacto: [
    { icono: 'phone', texto: '+34 662 47 06 45', href: 'tel:+34662470645' },
    { icono: 'mail', texto: 'mfalconsoft@gmail.com', href: 'mailto:mfalconsoft@gmail.com' },
    { icono: 'external', texto: 'marlonfalcon.com', href: 'https://marlonfalcon.com' },
    { icono: 'github', texto: 'github.com/falconsoft3d', href: 'https://github.com/falconsoft3d' },
    {
      icono: 'linkedin',
      texto: 'linkedin.com/in/marlon-falcón',
      href: 'https://www.linkedin.com/in/marlon-falc%C3%B3n-3a2aa9a4/'
    },
    { icono: 'youtube', texto: 'youtube.com/@marlonfalconhdez', href: 'https://www.youtube.com/@marlonfalconhdez' },
    { icono: 'telegram', texto: 't.me/falconsoft', href: 'https://t.me/falconsoft' }
  ]
}

export const cv = {
  es: {
    ...comun,
    pdf: '/marlon-falcon-hernandez-cv.pdf',
    ruta: '/cv',
    version: 'Octubre 2026',
    etiquetas: {
      descargar: 'Descargar PDF',
      perfil: 'Perfil',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos destacados',
      cifras: 'En cifras',
      habilidades: 'Habilidades',
      formacion: 'Formación',
      idiomas: 'Idiomas',
      otros: 'Otros',
      actualizado: 'Actualizado'
    },
    cargo: 'Desarrollador Full Stack · Consultor Odoo ERP · IA',
    titulos: 'MSc. Arquitectura · Ingeniero Civil',
    ubicacion: 'Valencia, España',
    nacionalidad: 'Nacionalidad española y cubana',
    resumen: [
      'Desarrollador full stack y consultor de Odoo ERP con más de 3000 módulos desarrollados y más de 250 proyectos en Chile, México, Panamá, Argentina, España, Paraguay, República Dominicana, Puerto Rico y USA.',
      'Experiencia en dirección de proyectos, desarrollo y consultoría funcional, y en el diseño de verticales de software para construcción, salud, transporte, restaurantes e inmobiliarias. Desarrollo de localizaciones de Odoo para Argentina, Panamá, Paraguay y Chile.',
      'Programo a diario con IA: uso agentes y asistentes de código para desarrollar, revisar y documentar, lo que me permite entregar más rápido y con mejor calidad. Construyo productos SaaS propios con Django, Next.js y TypeScript, apps móviles con Flutter y soluciones con modelos de IA locales. Divulgador con más de 28 mil seguidores en YouTube y 287 artículos técnicos publicados.'
    ],
    cifras: [
      { valor: '3000+', etiqueta: 'módulos Odoo' },
      { valor: '250+', etiqueta: 'proyectos' },
      { valor: '429', etiqueta: 'repos públicos' },
      { valor: '28k', etiqueta: 'seguidores YouTube' }
    ],
    experiencia: [
      {
        empresa: 'MarlonFalcon.com',
        lugar: 'Valencia, España',
        cargo: 'Desarrollador y consultor independiente',
        periodo: 'Feb 2021 — Actualidad',
        puntos: [
          'Desarrollo de módulos y verticales para Odoo ERP (v10 a v19): construcción (Bim 2.0), salud (SIS 20), créditos y nómina.',
          'Desarrollo asistido por IA: agentes y asistentes de código integrados en mi flujo diario para programar, refactorizar, escribir pruebas y documentar.',
          'Productos SaaS propios con Django y con Next.js/TypeScript: TicketProo, Nooxial (LMS), Desk20, OpenAttendify, FalconERP y LoocalProject.',
          'Apps móviles en Flutter conectadas a Odoo y a mis plataformas (fichaje, tickets, monitorización de servidores).',
          'Integración de IA en producto: interfaces para modelos locales con Ollama, gestor de modelos ShirkaAI y planificación de obra con IA.',
          'Despliegue y operación de servidores con Docker, Nginx, AWS y DigitalOcean; orquestador de hosting Odoo (Community SH).',
          'Formación funcional y técnica a clientes, soporte y servicios web.'
        ]
      },
      {
        empresa: 'Grant Thornton',
        lugar: 'Madrid, España',
        cargo: 'Desarrollador Odoo',
        periodo: 'Feb 2020 — Feb 2021',
        puntos: ['Desarrollo de aplicaciones para Odoo ERP.', 'Formación funcional a clientes.']
      },
      {
        empresa: 'Falcon Solutions',
        lugar: 'Santiago de Chile, Chile',
        cargo: 'CEO y Desarrollador',
        periodo: 'Feb 2016 — Dic 2020',
        puntos: [
          'Dirección de la empresa y de proyectos de implantación de Odoo ERP en Latinoamérica.',
          'Desarrollo de aplicaciones en Odoo y PHP, y localizaciones para Chile, Argentina, Panamá y Paraguay.',
          'Formación funcional, soporte a clientes y despliegue de servidores en DigitalOcean y AWS.'
        ]
      }
    ],
    proyectos: [
      { nombre: 'Odoo Bim 2.0', web: 'bim20.com', texto: 'Vertical de construcción para Odoo ERP.', stack: 'Odoo · Python · OWL · QWeb' },
      {
        nombre: 'PyERP',
        web: 'github.com/falconsoft3d/pyerp',
        texto: 'ERP open source en Django. 133 ★ y 76 forks en GitHub.',
        stack: 'Django · Python · JavaScript'
      },
      {
        nombre: 'TicketProo',
        web: 'ticketproo.com',
        texto: 'SaaS open source de gestión de tickets y proyectos, con app iOS.',
        stack: 'Django · Flutter'
      },
      {
        nombre: 'Community SH',
        web: 'github.com/falconsoft3d/community-sh',
        texto: 'Orquestador de hosting para instancias de Odoo.',
        stack: 'Django · Docker · Odoo'
      },
      { nombre: 'FalconERP', web: 'falconerp.xyz', texto: 'ERP ligero para pequeñas empresas.', stack: 'Next.js · TypeScript' },
      {
        nombre: 'OpenAttendify',
        web: 'openattendify.xyz',
        texto: 'Control de asistencia y fichaje de empleados.',
        stack: 'Next.js · TypeScript'
      },
      { nombre: 'Desk20', web: 'desk20.com', texto: 'Plataforma de soporte técnico simplificado.', stack: 'Next.js · TypeScript' },
      { nombre: 'Nooxial', web: 'nooxial.com', texto: 'Sistema de gestión del aprendizaje (LMS).', stack: 'Django · Tailwind' }
    ],
    habilidades: [
      { grupo: 'ERP', items: ['Odoo (v10–v19)', 'OWL', 'QWeb', 'SAP MM'] },
      { grupo: 'Backend', items: ['Python', 'Django', 'Flask', 'Node.js', 'PHP', 'REST / JSON-RPC'] },
      { grupo: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap'] },
      { grupo: 'Móvil', items: ['Flutter', 'Dart', 'React Native'] },
      { grupo: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Prisma'] },
      { grupo: 'DevOps', items: ['Docker', 'Nginx', 'Linux', 'AWS', 'DigitalOcean', 'CI/CD', 'Git'] },
      {
        grupo: 'IA',
        items: ['Programación asistida por IA', 'Agentes de código', 'Ollama', 'LLMs locales', 'Modelos predictivos']
      },
      { grupo: 'Gestión', items: ['SCRUM', 'Dirección de proyectos', 'Formación'] }
    ],
    formacion: [
      { titulo: 'Máster en Arquitectura', centro: 'La Habana, Cuba', periodo: '' },
      { titulo: 'Ingeniería Civil', centro: 'Universidad de Camagüey, Cuba', periodo: '1999 — 2004' },
      { titulo: 'Certificación SAP ERP 6.0 EHP6 MM', centro: 'SAP · Santiago de Chile', periodo: '2016' }
    ],
    idiomas: [
      { idioma: 'Español', nivel: 'Nativo' },
      { idioma: 'Inglés', nivel: 'Intermedio' }
    ],
    otros: ['Prefiero el trabajo remoto', 'Me gusta enseñar y compartir código', 'Trabajo en equipo', 'IA y blockchain']
  },

  en: {
    ...comun,
    pdf: '/marlon-falcon-hernandez-cv-en.pdf',
    ruta: '/cv/en',
    version: 'October 2026',
    etiquetas: {
      descargar: 'Download PDF',
      perfil: 'Profile',
      experiencia: 'Experience',
      proyectos: 'Selected projects',
      cifras: 'In numbers',
      habilidades: 'Skills',
      formacion: 'Education',
      idiomas: 'Languages',
      otros: 'Other',
      actualizado: 'Updated'
    },
    cargo: 'Full Stack Developer · Odoo ERP Consultant · AI',
    titulos: 'MSc. Architecture · Civil Engineer',
    ubicacion: 'Valencia, Spain',
    nacionalidad: 'Spanish and Cuban citizenship',
    resumen: [
      'Full stack developer and Odoo ERP consultant with more than 3,000 modules built and over 250 projects delivered in Chile, Mexico, Panama, Argentina, Spain, Paraguay, the Dominican Republic, Puerto Rico and the USA.',
      'Experienced in project management, development and functional consulting, and in designing vertical software for construction, healthcare, transport, restaurants and real estate. Built Odoo localizations for Argentina, Panama, Paraguay and Chile.',
      'I code with AI every day: I use coding agents and assistants to build, review and document software, which lets me ship faster and with higher quality. I build my own SaaS products with Django, Next.js and TypeScript, mobile apps with Flutter and solutions based on local AI models. Content creator with 28k+ YouTube followers and 287 technical articles published.'
    ],
    cifras: [
      { valor: '3000+', etiqueta: 'Odoo modules' },
      { valor: '250+', etiqueta: 'projects' },
      { valor: '429', etiqueta: 'public repos' },
      { valor: '28k', etiqueta: 'YouTube followers' }
    ],
    experiencia: [
      {
        empresa: 'MarlonFalcon.com',
        lugar: 'Valencia, Spain',
        cargo: 'Freelance Developer and Consultant',
        periodo: 'Feb 2021 — Present',
        puntos: [
          'Development of Odoo ERP modules and verticals (v10 to v19): construction (Bim 2.0), healthcare (SIS 20), lending and payroll.',
          'AI-assisted development: coding agents and assistants built into my daily workflow to write, refactor, test and document code.',
          'Own SaaS products built with Django and with Next.js/TypeScript: TicketProo, Nooxial (LMS), Desk20, OpenAttendify, FalconERP and LoocalProject.',
          'Flutter mobile apps connected to Odoo and to my platforms (time tracking, tickets, server monitoring).',
          'AI in products: interfaces for local models with Ollama, the ShirkaAI model manager and AI-driven construction scheduling.',
          'Server deployment and operations with Docker, Nginx, AWS and DigitalOcean; Odoo hosting orchestrator (Community SH).',
          'Functional and technical training for clients, support and web services.'
        ]
      },
      {
        empresa: 'Grant Thornton',
        lugar: 'Madrid, Spain',
        cargo: 'Odoo Developer',
        periodo: 'Feb 2020 — Feb 2021',
        puntos: ['Development of Odoo ERP applications.', 'Functional training for clients.']
      },
      {
        empresa: 'Falcon Solutions',
        lugar: 'Santiago, Chile',
        cargo: 'CEO and Developer',
        periodo: 'Feb 2016 — Dec 2020',
        puntos: [
          'Led the company and Odoo ERP implementation projects across Latin America.',
          'Developed Odoo and PHP applications, plus localizations for Chile, Argentina, Panama and Paraguay.',
          'Functional training, customer support and server deployment on DigitalOcean and AWS.'
        ]
      }
    ],
    proyectos: [
      { nombre: 'Odoo Bim 2.0', web: 'bim20.com', texto: 'Construction vertical for Odoo ERP.', stack: 'Odoo · Python · OWL · QWeb' },
      {
        nombre: 'PyERP',
        web: 'github.com/falconsoft3d/pyerp',
        texto: 'Open source ERP built with Django. 133 ★ and 76 forks on GitHub.',
        stack: 'Django · Python · JavaScript'
      },
      {
        nombre: 'TicketProo',
        web: 'ticketproo.com',
        texto: 'Open source SaaS for ticket and project management, with an iOS app.',
        stack: 'Django · Flutter'
      },
      {
        nombre: 'Community SH',
        web: 'github.com/falconsoft3d/community-sh',
        texto: 'Hosting orchestrator for Odoo instances.',
        stack: 'Django · Docker · Odoo'
      },
      { nombre: 'FalconERP', web: 'falconerp.xyz', texto: 'Lightweight ERP for small businesses.', stack: 'Next.js · TypeScript' },
      {
        nombre: 'OpenAttendify',
        web: 'openattendify.xyz',
        texto: 'Employee attendance and time tracking.',
        stack: 'Next.js · TypeScript'
      },
      { nombre: 'Desk20', web: 'desk20.com', texto: 'Simple technical support platform.', stack: 'Next.js · TypeScript' },
      { nombre: 'Nooxial', web: 'nooxial.com', texto: 'Learning management system (LMS).', stack: 'Django · Tailwind' }
    ],
    habilidades: [
      { grupo: 'ERP', items: ['Odoo (v10–v19)', 'OWL', 'QWeb', 'SAP MM'] },
      { grupo: 'Backend', items: ['Python', 'Django', 'Flask', 'Node.js', 'PHP', 'REST / JSON-RPC'] },
      { grupo: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap'] },
      { grupo: 'Mobile', items: ['Flutter', 'Dart', 'React Native'] },
      { grupo: 'Data', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Prisma'] },
      { grupo: 'DevOps', items: ['Docker', 'Nginx', 'Linux', 'AWS', 'DigitalOcean', 'CI/CD', 'Git'] },
      { grupo: 'AI', items: ['AI-assisted coding', 'Coding agents', 'Ollama', 'Local LLMs', 'Predictive models'] },
      { grupo: 'Management', items: ['SCRUM', 'Project management', 'Training'] }
    ],
    formacion: [
      { titulo: "Master's in Architecture", centro: 'Havana, Cuba', periodo: '' },
      { titulo: 'Civil Engineering', centro: 'University of Camagüey, Cuba', periodo: '1999 — 2004' },
      { titulo: 'SAP ERP 6.0 EHP6 MM Certification', centro: 'SAP · Santiago, Chile', periodo: '2016' }
    ],
    idiomas: [
      { idioma: 'Spanish', nivel: 'Native' },
      { idioma: 'English', nivel: 'Intermediate' }
    ],
    otros: ['Remote work preferred', 'Enjoy teaching and sharing code', 'Team player', 'AI and blockchain']
  }
}
