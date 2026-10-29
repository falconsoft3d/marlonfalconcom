export const stats = [
  { numero: 200, sufijo: '+', label: { es: 'Proyectos', en: 'Projects' }, icono: 'folder', color: 'var(--p-blue)' },
  { numero: 3000, sufijo: '+', label: { es: 'Módulos Odoo', en: 'Odoo modules' }, icono: 'box', color: 'var(--p-lavender)' },
  { numero: 28, sufijo: 'k', label: { es: 'Seguidores YouTube', en: 'YouTube followers' }, icono: 'youtube', color: 'var(--p-pink)' },
  { numero: 9, sufijo: '', label: { es: 'Países', en: 'Countries' }, icono: 'globe', color: 'var(--p-green)' }
]

export const recorrido = [
  {
    anio: '1980',
    pais: 'Cuba',
    bandera: 'cu',
    titulo: { es: 'Nací en Cuba', en: 'Born in Cuba' },
    texto: {
      es: 'Allí crecí y estudié Ingeniería Civil y el Máster en Arquitectura.',
      en: 'I grew up there and studied Civil Engineering and a Master’s in Architecture.'
    }
  },
  {
    anio: '2012',
    pais: 'Chile',
    bandera: 'cl',
    titulo: { es: 'Me mudé a Chile', en: 'Moved to Chile' },
    texto: {
      es: 'En Santiago fundé Falcon Solutions y me certifiqué en SAP ERP.',
      en: 'In Santiago I founded Falcon Solutions and got certified in SAP ERP.'
    }
  },
  {
    anio: '2019',
    pais: 'España',
    bandera: 'es',
    titulo: { es: 'Llegué a España', en: 'Arrived in Spain' },
    texto: {
      es: 'Hoy vivo en Valencia y trabajo con clientes de Europa y Latinoamérica.',
      en: 'Today I live in Valencia and work with clients across Europe and Latin America.'
    },
    actual: true
  }
]

export const tecnologias = [
  {
    nombre: 'Odoo',
    href: '/tags/odoo',
    wordmark: true,
    explicacion: {
      es: 'Un ERP de código abierto: reúne ventas, compras, inventario, contabilidad y más en un solo sistema.',
      en: 'An open-source ERP: sales, purchasing, inventory, accounting and more in a single system.'
    }
  },
  {
    nombre: 'Python',
    logo: '/images/tech/python.svg',
    href: '/tags/python',
    explicacion: {
      es: 'Lenguaje de programación fácil de leer. Con él está hecho Odoo y muchas apps de datos e IA.',
      en: 'An easy-to-read programming language. Odoo and many data and AI apps are built with it.'
    }
  },
  {
    nombre: 'Django',
    logo: '/images/tech/django.svg',
    href: '/tags/django',
    explicacion: {
      es: 'Framework de Python para crear webs y APIs de forma rápida y segura.',
      en: 'A Python framework for building websites and APIs quickly and securely.'
    }
  },
  {
    nombre: 'Flutter',
    logo: '/images/tech/flutter.svg',
    href: '/tags/flutter',
    explicacion: {
      es: 'Herramienta de Google para crear apps de móvil (iOS y Android) con un único código.',
      en: 'Google’s toolkit for building mobile apps (iOS and Android) from a single codebase.'
    }
  },
  {
    nombre: 'React',
    logo: '/images/tech/react.svg',
    href: '/tags/react',
    explicacion: {
      es: 'Librería de JavaScript para construir pantallas web interactivas a base de piezas reutilizables.',
      en: 'A JavaScript library for building interactive web screens out of reusable pieces.'
    }
  },
  {
    nombre: 'Next.js',
    logo: '/images/tech/nextjs.svg',
    href: '/tags/nextjs',
    explicacion: {
      es: 'Framework sobre React para webs rápidas y bien posicionadas en Google. Esta web está hecha con él.',
      en: 'A React framework for fast websites that rank well on Google. This site is built with it.'
    }
  },
  {
    nombre: 'Node.js',
    logo: '/images/tech/nodejs.svg',
    href: '/tags/nodejs',
    explicacion: {
      es: 'Permite usar JavaScript en el servidor para crear APIs y servicios.',
      en: 'Runs JavaScript on the server to build APIs and services.'
    }
  },
  {
    nombre: 'Docker',
    logo: '/images/tech/docker.svg',
    href: '/tags/docker',
    explicacion: {
      es: 'Empaqueta una aplicación con todo lo que necesita para que funcione igual en cualquier servidor.',
      en: 'Packages an application with everything it needs so it runs the same on any server.'
    }
  }
]

export const verticales = [
  {
    nombre: 'Bim 2.0',
    descripcion: { es: 'Vertical de Construcción para Odoo ERP.', en: 'Construction vertical for Odoo ERP.' },
    web: 'https://bim20.com',
    icono: 'building'
  }
]

export const servicios = [
  {
    nombre: { es: 'Desarrollo de módulos', en: 'Module development' },
    descripcion: { es: 'Módulos de Odoo ERP y aplicaciones a medida.', en: 'Odoo ERP modules and custom applications.' },
    href: '/posts/servicios-desarrollo-modulos-odoo',
    icono: 'code'
  },
  {
    nombre: { es: 'Migraciones de Odoo', en: 'Odoo migrations' },
    descripcion: {
      es: 'Actualiza tu Odoo a la última versión sin perder datos.',
      en: 'Upgrade your Odoo to the latest version without losing data.'
    },
    href: '/posts/odoo-migraciones',
    icono: 'refresh'
  },
  {
    nombre: { es: 'Implementación', en: 'Implementation' },
    descripcion: { es: 'Puesta en marcha de Odoo ERP en tu empresa.', en: 'Rolling out Odoo ERP in your company.' },
    href: '/posts/odoo-como-implementar',
    icono: 'rocket'
  },
  {
    nombre: { es: 'Consultoría', en: 'Consulting' },
    descripcion: { es: 'Análisis funcional y técnico de tus procesos.', en: 'Functional and technical analysis of your processes.' },
    href: '/posts/consultor-odoo',
    icono: 'chat'
  },
  {
    nombre: { es: 'Capacitación', en: 'Training' },
    descripcion: { es: 'Formación de Odoo ERP para usuarios y desarrolladores.', en: 'Odoo ERP training for users and developers.' },
    href: '/cursos',
    icono: 'cap'
  }
]

export const proyectos = [
  {
    nombre: 'ExJson',
    descripcion: { es: 'Formato de intercambio B2B para construcción.', en: 'B2B exchange format for construction.' },
    web: 'https://exjson.vercel.app/'
  },
  {
    nombre: 'SGAPro',
    descripcion: { es: 'Sistema de gestión de almacenes.', en: 'Warehouse management system.' }
  },
  {
    nombre: 'TicketProo',
    descripcion: { es: 'Gestión de tickets y proyectos.', en: 'Ticket and project management.' },
    web: 'https://ticketproo.com'
  },
  {
    nombre: 'FalconERP',
    descripcion: { es: 'ERP en desarrollo.', en: 'ERP in development.' },
    web: 'https://falcon.xyz'
  },
  {
    nombre: 'OpenAttendify',
    descripcion: { es: 'Gestión de asistencias de empleados.', en: 'Employee attendance management.' },
    web: 'https://openattendify.xyz'
  },
  {
    nombre: 'Desk20',
    descripcion: { es: 'Soporte técnico simplificado.', en: 'Simplified technical support.' },
    web: 'https://desk20.com'
  },
  {
    nombre: 'ERPManía',
    descripcion: { es: 'Trucos y herramientas de Odoo ERP.', en: 'Odoo ERP tips and tools.' },
    web: 'https://erpmania.com'
  }
]

export const certificaciones = [
  {
    nombre: 'SAP ERP 6.0 EHP6 MM',
    descripcion: {
      es: 'Certificación oficial de SAP en Gestión de Materiales.',
      en: 'Official SAP certification in Materials Management.'
    },
    anio: '2016',
    imagen: '/images/certificaciones/sap_mm_2016.jpeg'
  }
]

// Los artículos solo están en español: sus títulos no se traducen
export const articulos = [
  { titulo: 'Cómo contratar servicios de Marlon Falcón Hernández', href: '/posts/como-contratar-servicios-marlon' },
  { titulo: 'Programación en 20 pasos', href: '/tags/20pasos' },
  {
    titulo: 'Metodología para la implementación de Odoo para un proyecto exitoso',
    href: '/posts/metodologia-implementacion-de-odoo-para-un-proyecto-exitoso'
  },
  { titulo: 'ERP - Sistema de gestión empresarial', href: '/posts/erp' },
  { titulo: 'Odoo ERP', href: '/posts/odoo-erp' },
  { titulo: 'Comandos ssh en Linux', href: '/posts/linux-ssh' },
  { titulo: 'Instalar Odoo ERP 16 en Ubuntu 20.04', href: '/posts/instalar-odoo-16' },
  { titulo: 'Comandos Linux', href: '/posts/linux-comandos' },
  { titulo: 'Cambio de partner', href: '/posts/odoo-cambio-partner' },
  { titulo: 'Odoo Construcción', href: '/tags/odoo-construccion' }
]

export const contactos = [
  { nombre: 'WhatsApp', valor: '+34 662 47 0645', href: 'https://wa.me/34662470645', icono: 'whatsapp' },
  { nombre: 'Email', valor: 'mfalconsoft@gmail.com', href: 'mailto:mfalconsoft@gmail.com', icono: 'mail' },
  { nombre: 'GitHub', valor: '@falconsoft3d', href: 'https://github.com/falconsoft3d', icono: 'github' },
  { nombre: 'YouTube', valor: '@marlonfalconhdez', href: 'https://www.youtube.com/@marlonfalconhdez', icono: 'youtube' },
  { nombre: 'Telegram', valor: '@falconsoft', href: 'https://t.me/falconsoft', icono: 'telegram' },
  {
    nombre: 'LinkedIn',
    valor: 'marlon-falcon-hernandez',
    href: 'https://www.linkedin.com/in/marlon-falc%C3%B3n-3a2aa9a4/',
    icono: 'linkedin'
  }
]
