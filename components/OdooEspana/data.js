// Contenido de /odoo-espana: la localización española de Odoo y la implantación con nosotros.
// Fechas y obligaciones revisadas en noviembre de 2026 (RD-ley 15/2025 para Verifactu, RD 238/2026 para la
// factura electrónica B2B y la documentación de Odoo 19 de la localización española). Revísalas al actualizar.

const wa = (texto) => `https://wa.me/34662470645?text=${encodeURIComponent(texto)}`

export const WHATSAPP = wa('Hola Marlon, quiero implantar Odoo en mi empresa en España. ¿Hablamos?')
export const EMAIL = `mailto:mfalconsoft@gmail.com?subject=${encodeURIComponent('Implantar Odoo en España')}`
export const CONTRATAR = '/posts/como-contratar-servicios-marlon'
export const REVISADO = 'noviembre de 2026'

export const indice = [
  { id: 'localizacion', texto: 'Qué es la localización' },
  { id: 'modulos', texto: 'Módulos' },
  { id: 'contabilidad', texto: 'Plan contable e impuestos' },
  { id: 'modelos', texto: 'Modelos AEAT' },
  { id: 'verifactu', texto: 'Verifactu' },
  { id: 'sii', texto: 'SII' },
  { id: 'ticketbai', texto: 'TicketBAI' },
  { id: 'factura-electronica', texto: 'Factura electrónica' },
  { id: 'bancos', texto: 'Bancos y SEPA' },
  { id: 'ediciones', texto: 'Community o Enterprise' },
  { id: 'implantacion', texto: 'Cómo lo implantamos' },
  { id: 'preguntas', texto: 'Preguntas' }
]

// Calendario de la tarjeta de la portada
export const calendario = [
  { fecha: '1 ene 2027', titulo: 'Verifactu', texto: 'Contribuyentes del Impuesto sobre Sociedades' },
  { fecha: '1 jul 2027', titulo: 'Verifactu', texto: 'Autónomos y resto de obligados' },
  { fecha: 'Oct 2027', titulo: 'Factura electrónica B2B', texto: 'Empresas de más de 8 M€ de facturación' },
  { fecha: 'Oct 2028', titulo: 'Factura electrónica B2B', texto: 'Resto de empresas y autónomos' }
]

export const modulos = [
  {
    nombre: 'Spain - Accounting (PGCE 2008)',
    tecnico: 'l10n_es',
    texto: 'Plan contable, impuestos, posiciones fiscales y la base del informe de impuestos.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - Accounting Reports',
    tecnico: 'l10n_es_reports (+ 2024 y 2025)',
    texto: 'Modelos 303, 390, 111, 115, 130, 347 y 349, libros de IVA, balance y pérdidas y ganancias.',
    edicion: 'Enterprise'
  },
  {
    nombre: 'Spain - Veri*Factu',
    tecnico: 'l10n_es_edi_verifactu',
    texto: 'Registros de facturación encadenados enviados a la AEAT y código QR en cada factura.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - Veri*Factu for Point of Sale',
    tecnico: 'l10n_es_edi_verifactu_pos',
    texto: 'Lo mismo para los tickets y facturas simplificadas del TPV.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - SII EDI Suministro de Libros',
    tecnico: 'l10n_es_edi_sii',
    texto: 'Envío de los libros registro de IVA a la sede electrónica de la AEAT.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - TicketBAI',
    tecnico: 'l10n_es_edi_tbai',
    texto: 'Facturas y facturas de proveedor a las Haciendas Forales de Álava, Bizkaia y Gipuzkoa.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - Point of Sale + TicketBAI',
    tecnico: 'l10n_es_pos_tbai',
    texto: 'TicketBAI en el TPV para comercios del País Vasco.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - Facturae EDI',
    tecnico: 'l10n_es_edi_facturae',
    texto: 'Facturas en formato Facturae firmadas para la Administración y el envío por FACe.',
    edicion: 'Community'
  },
  {
    nombre: 'Spain - Intrastat Declaration',
    tecnico: 'l10n_es_intrastat',
    texto: 'Declaración Intrastat de los movimientos de mercancías con la Unión Europea.',
    edicion: 'Enterprise'
  }
]

export const planes = [
  { titulo: 'PGC PYMES 2008', texto: 'El plan por defecto para la mayoría de pequeñas y medianas empresas.' },
  { titulo: 'PGC completo 2008', texto: 'Para sociedades que no pueden aplicar el plan de PYMES.' },
  { titulo: 'Entidades sin ánimo de lucro', texto: 'Asociaciones y fundaciones, con su propio cuadro de cuentas.' },
  { titulo: 'Cooperativas', texto: 'En sus versiones completa y PYMES.' }
]

export const impuestos = [
  { titulo: 'IVA 21 %, 10 %, 4 % y exento', texto: 'En ventas y compras, con bienes, servicios e inversiones en cuentas separadas.' },
  { titulo: 'Recargo de equivalencia', texto: 'Para vender a comercios minoristas acogidos a este régimen.' },
  { titulo: 'Retenciones de IRPF', texto: 'De profesionales y alquileres, que alimentan después los modelos 111 y 115.' },
  { titulo: 'Operaciones intracomunitarias', texto: 'Entregas y adquisiciones con NIF-IVA validado en VIES, que van al 349.' },
  { titulo: 'Inversión del sujeto pasivo', texto: 'Clave en construcción y en compras a proveedores extranjeros.' },
  { titulo: 'Exportación, Canarias, Ceuta y Melilla', texto: 'Posiciones fiscales que cambian el IVA según dónde esté el cliente.' }
]

export const modelos = [
  { codigo: '303', titulo: 'IVA', texto: 'Autoliquidación trimestral o mensual del IVA, con los campos de rectificación.' },
  { codigo: '390', titulo: 'Resumen anual de IVA', texto: 'El resumen del año, cuando estás obligado a presentarlo.' },
  { codigo: '111', titulo: 'Retenciones de IRPF', texto: 'Retenciones a trabajadores y profesionales.' },
  { codigo: '115', titulo: 'Alquileres', texto: 'Retenciones sobre los alquileres de locales y oficinas.' },
  { codigo: '130', titulo: 'Pago fraccionado', texto: 'IRPF de autónomos en estimación directa.' },
  { codigo: '347', titulo: 'Operaciones con terceros', texto: 'Clientes y proveedores con más de 3.005,06 € en el año.' },
  { codigo: '349', titulo: 'Operaciones intracomunitarias', texto: 'Ventas y compras con empresas de otros países de la UE.' }
]

export const verifactu = [
  'Cada factura genera un registro de facturación con su huella, encadenado con el anterior: no se puede borrar ni alterar sin que se note.',
  'Odoo envía el registro a la AEAT al confirmar la factura y guarda la respuesta en la pestaña Veri*Factu.',
  'El PDF de la factura lleva el código QR con el que tu cliente comprueba en la AEAT que se ha recibido.',
  'Funciona también en el TPV: cada pedido pagado genera su registro.',
  'Si la AEAT pide esperar, Odoo reintenta el envío con una acción programada, sin que nadie tenga que acordarse.',
  'Tiene modo de pruebas: lo dejamos probado contra el entorno de test de la AEAT antes de pasar a producción.'
]

export const sii = [
  'Empresas con un volumen de operaciones de más de 6.010.121,04 € al año.',
  'Inscritas en el REDEME (devolución mensual del IVA) y grupos de IVA.',
  'Quien se acoge de forma voluntaria.',
  'Plazo de 4 días hábiles para enviar cada factura emitida o recibida.'
]

export const ticketbai = [
  { titulo: 'Álava y Gipuzkoa', texto: 'TicketBAI con su firma, encadenamiento y código QR en cada factura.' },
  { titulo: 'Bizkaia', texto: 'TicketBAI dentro de Batuz, que además incluye el libro LROE.' },
  { titulo: 'TPV', texto: 'Tickets del punto de venta con TicketBAI para comercio y hostelería.' }
]

export const bancos = [
  { titulo: 'Remesas SEPA', texto: 'Pagos a proveedores por transferencia y cobros por adeudo directo con sus mandatos.' },
  { titulo: 'Conciliación bancaria', texto: 'Sincronización con el banco o importación de extractos, con reglas que concilian solas.' },
  { titulo: 'Norma 43', texto: 'Importación de los extractos de la banca española con los módulos de la OCA.' },
  { titulo: 'Vencimientos y tesorería', texto: 'Plazos de pago, previsión de tesorería y seguimiento de cobros pendientes.' }
]

export const ediciones = [
  {
    titulo: 'Odoo Community',
    etiqueta: 'Licencia gratuita',
    puntos: [
      'Plan contable, impuestos y posiciones fiscales de España.',
      'Verifactu, SII, TicketBAI y Facturae del propio Odoo.',
      'Modelos de la AEAT, Norma 43, SEPA y cuentas anuales con los módulos de la comunidad OCA (l10n-spain).',
      'Lo instalamos en tu servidor o en la nube y lo mantenemos.'
    ]
  },
  {
    titulo: 'Odoo Enterprise',
    etiqueta: 'Suscripción a Odoo S.A.',
    destacado: true,
    puntos: [
      'Todo lo de Community.',
      'Informe de impuestos con los modelos 303, 390, 111, 115, 130, 347 y 349.',
      'Sincronización bancaria, SEPA, Intrastat e informes contables de España.',
      'Odoo.sh u Odoo Online, con las actualizaciones de la localización incluidas.'
    ]
  }
]

export const pasos = [
  { titulo: 'Diagnóstico fiscal', texto: 'Vemos tu régimen de IVA, si vas por Verifactu, SII o TicketBAI, y qué modelos presentas.' },
  { titulo: 'Plan de implantación', texto: 'Documentamos cada proceso y te damos un presupuesto por horas antes de empezar.' },
  { titulo: 'Localización configurada', texto: 'Plan contable, impuestos, diarios, posiciones fiscales y certificado digital.' },
  { titulo: 'Migración de datos', texto: 'Clientes, proveedores, productos, saldos y facturas desde A3, Sage, ContaPlus, Holded o Excel.' },
  { titulo: 'Pruebas con la AEAT', texto: 'Enviamos facturas al entorno de pruebas y cuadramos los modelos con tu gestoría.' },
  { titulo: 'Formación', texto: 'A administración, ventas y almacén, con tus propios datos y no con ejemplos.' },
  { titulo: 'Puesta en marcha', texto: 'Arrancamos en producción y te acompañamos en el primer cierre de trimestre.' },
  { titulo: 'Soporte', texto: 'Planes mensuales y actualizaciones cuando cambia la normativa.' }
]

export const preguntas = [
  {
    p: '¿Odoo cumple con Verifactu?',
    r: 'Sí. Las versiones actuales de Odoo traen el módulo Veri*Factu, que genera los registros encadenados, los envía a la AEAT y pone el código QR en las facturas, también en el TPV. Lo que hay que hacer bien es la configuración y las pruebas antes de la fecha obligatoria: eso es lo que te dejamos resuelto.'
  },
  {
    p: '¿Tengo que usar Verifactu si ya estoy en el SII?',
    r: 'No. Quien lleva sus libros por el SII y quien factura con TicketBAI en el País Vasco quedan fuera de Verifactu. En el diagnóstico vemos cuál te corresponde para no configurar dos sistemas a la vez.'
  },
  {
    p: '¿Odoo presenta los modelos directamente en la AEAT?',
    r: 'Odoo calcula los modelos desde la contabilidad y genera el fichero para presentarlo en la sede electrónica. Tú o tu gestoría lo revisáis y lo presentáis con vuestro certificado. Así se acaba lo de pasar números a mano de un programa a otro.'
  },
  {
    p: '¿Puedo seguir con mi gestoría?',
    r: 'Claro. Lo habitual es que la empresa factura y concilia en Odoo y la gestoría entra con su propio usuario para revisar, cerrar y presentar. Les damos acceso y, si quieren, una sesión de formación.'
  },
  {
    p: '¿Y las nóminas?',
    r: 'En España las nóminas suelen seguir en el programa laboral de la gestoría. Llevamos a Odoo el asiento de nóminas y los pagos, y gestionamos en Odoo empleados, ausencias y el registro de jornada obligatorio con la app de Asistencias.'
  },
  {
    p: '¿Community o Enterprise?',
    r: 'Depende de lo que necesites y de cuánto quieras pagar en licencias. Community no tiene coste de licencia y con los módulos de la OCA cubre la fiscalidad española; Enterprise trae más informes y funciones listas. Te lo recomendamos según tu caso, sin compromiso.'
  },
  {
    p: '¿Cuánto cuesta implantar Odoo en España?',
    r: 'Trabajamos por horas, desde 50 €/hora + IVA según el volumen. Antes de empezar hacemos el levantamiento de requisitos y te damos la estimación de horas. Tienes el detalle en la página de cómo contratarnos.'
  },
  {
    p: '¿Migráis desde otro programa?',
    r: 'Sí: A3, Sage, ContaPlus, Holded, SAP, otro Odoo o simples hojas de cálculo. Traemos maestros, saldos iniciales y el histórico que haga falta para que el arranque no sea en blanco.'
  }
]
