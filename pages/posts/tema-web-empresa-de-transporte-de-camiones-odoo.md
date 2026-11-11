---
title: ▷ Tema web para empresa de transporte de camiones en Odoo - Presupuestos de carga online y seguimiento
date: 2026/11/11
description: ▷ Tema web para empresas de transporte de camiones en Odoo 19 - solicitud de presupuesto de carga online, seguimiento de envíos con línea de tiempo y blog.
tag: odoo, odoo-19, modulos-odoo, tema-web, transporte-de-mercancias, camiones
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Tema web para empresa de transporte de camiones en Odoo: presupuestos de carga online y seguimiento de envíos

Una **empresa de transporte por carretera** recibe cada día llamadas con la misma pregunta: «¿cuánto me cuesta mover esta carga?» y, una vez contratado el viaje, «¿dónde está mi envío?». Si la web es solo un folleto, todo eso acaba en el teléfono del jefe de tráfico, en correos sueltos y en hojas de cálculo. **Web Trucking G1** es un **tema web para empresas de camiones, transporte de mercancías y logística** en **Odoo 19, Community y Enterprise**, que incluye la página web y un pequeño back office: los clientes **solicitan presupuesto de carga online**, tú lo respondes desde un kanban y cada envío tiene una **página pública de seguimiento** con la línea de tiempo del estado.

Un solo módulo, nada más que comprar: solo necesita **Sitio web, Blog y Mail**, todos incluidos en Odoo Community, y añade una aplicación **Transporte** con Presupuestos, Envíos, Servicios y Configuración.

## ¿Para quién es este tema web de transporte en Odoo?

- **Empresas de camiones y transportistas** que quieren captar cargas desde su web y dejar de atender presupuestos por teléfono.
- **Agencias de transporte de mercancías** con servicios de carga completa, grupaje, frigorífico, transporte especial o exprés.
- **Operadores con almacenaje** que necesitan una página por servicio y un formulario que recoja peso, volumen, palés y mercancías peligrosas.
- **Empresas que ya usan Odoo** y quieren que cada solicitud llegue como un registro con su cliente, responsable y chatter.

## Funciones principales

### Landing page para empresas de transporte, lista para editar

Al instalarlo, la landing page se convierte en tu **página de inicio**. Trae todas las secciones que necesita una web de transporte: barra superior con horario, e-mail, enlace de seguimiento e idiomas; cabecera con el **teléfono de tráfico** y un botón «Pide presupuesto»; un hero con foto y una **caja de seguimiento** en la esquina; sobre nosotros con **contadores animados** (años, flota, entregas y puntualidad); por qué elegirnos, el proceso en cuatro pasos, banda de presupuesto rápido, equipo, testimonios, blog y pie de página.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g1/hero.jpg"
  alt="Página de inicio del tema web para empresa de transporte de camiones en Odoo con hero y caja de seguimiento"
  width={1280}
  height={800}
  className="next-image"
/>

### Páginas de servicios de transporte con SEO

Incluye **seis servicios de transporte** (carga completa, grupaje, frigorífico, transporte especial, exprés y almacenaje) con foto, icono, descripción corta y larga y lista de lo que incluye, traducidos a tres idiomas. En `/services` aparece la cuadrícula y cada servicio tiene su propia página con menú lateral, tarjeta de contacto y un botón que abre el formulario de presupuesto con ese servicio ya elegido. Desde **Transporte › Servicios** los ordenas, publicas, traduces y optimizas el **SEO** de cada uno.

### Solicitud de presupuesto de transporte online

El formulario de `/quote` guía al cliente en **tres pasos**: sus datos, la **ruta y la fecha de recogida**, y la **carga** (tipo, peso y unidad, volumen, palés y **mercancías peligrosas ADR**). Está protegido con **CSRF y un campo trampa para robots**, valida el e-mail, no admite fechas de recogida pasadas y muestra mensajes claros junto a cada campo. El contacto se busca por e-mail o **se crea automáticamente** dentro de su empresa.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g1/presupuesto.jpg"
  alt="Formulario de solicitud de presupuesto de transporte de carga online en Odoo con ruta, peso y palés"
  width={1280}
  height={800}
  className="next-image"
/>

### Pipeline de presupuestos de carga en un kanban

Cada solicitud llega al back office y avanza por **nuevo, presupuestado, ganado y perdido**, con totales, filtros por servicio, cliente o responsable y vistas de **tabla dinámica y gráfico**. El planificador escribe el **importe presupuestado** en la moneda de la empresa, asigna responsable, programa actividades y responde desde el chatter. Cuando el trabajo se gana, **un botón crea el envío** con la ruta, la carga y su número de seguimiento.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g1/kanban-presupuestos.jpg"
  alt="Kanban de presupuestos de transporte en Odoo con estados nuevo, presupuestado, ganado y perdido"
  width={1280}
  height={800}
  className="next-image"
/>

### Seguimiento público de envíos con línea de tiempo

La página **«Sigue tu envío»** muestra la **línea de tiempo del estado** (recogido, en tránsito, en plataforma, en reparto y entregado), la ruta, la entrega estimada y la ubicación actual, además del historial de eventos con fecha, ubicación, estado y nota. Si hay una **incidencia**, se muestra un aviso claro. Es **privado por diseño**: solo un número de seguimiento exacto muestra un envío, no se lista nada, nunca aparece el nombre del cliente y las búsquedas están limitadas por visitante.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g1/seguimiento.jpg"
  alt="Página pública de seguimiento de envíos en Odoo con la línea de tiempo del estado de la carga"
  width={1280}
  height={800}
  className="next-image"
/>

### Gestión de envíos y números de seguimiento en Odoo

Cada envío recibe un **número de seguimiento automático**: una secuencia más un sufijo aleatorio, como `TG26-00042-K7QX`, para que no se pueda adivinar. Los **botones de estado** añaden un evento de seguimiento y el estado siempre sigue al último evento. Tienes vistas de lista, kanban por estado, calendario y búsqueda, con **vehículo, conductor, palés y peso**.

### Sobre nosotros, contacto y blog con el mismo diseño

La página `/about` reúne la empresa, los contadores, el equipo y los testimonios. El formulario de **contacto** de Odoo adopta el estilo del tema con tu teléfono, e-mail, dirección y horario, y las **tres últimas entradas del blog** aparecen en la página de inicio.

### Personalización de marca desde Odoo

Desde **Sitio web › Configuración › Diseño de transporte** cambias el **color primario** (que también se aplica a la paleta del editor web) y el color oscuro secundario, el teléfono de tráfico, el horario, el texto de la barra superior, los textos del hero y los cuatro contadores. Un botón **«Cargar datos de ejemplo»** deja el sitio como la demo sin tocar tu logo, nombre ni dirección reales.

### Web en inglés, español y catalán, mobile-first y RGPD

Los tres idiomas se instalan con el módulo y todo está traducido: páginas, servicios, formularios, mensajes, back office y datos de ejemplo. Cada sección funciona desde **320 px** en móviles y tablets, con imágenes de carga diferida, JavaScript ligero y las fuentes **Space Grotesk e Inter servidas por el propio módulo**, sin terceros antes del **consentimiento de cookies UE**.

### Seguridad y multiempresa

Grupos **Usuario y Administrador** y reglas multiempresa. Los visitantes y los usuarios del portal **no pueden leer presupuestos ni envíos**.

## Beneficios para tu empresa de transporte

- **Más cargas desde la web**: el botón «Pide presupuesto» y la banda de presupuesto rápido llevan al cliente a un formulario completo en cualquier página.
- **Menos llamadas**: los clientes piden presupuestos y **siguen sus envíos** por sí mismos.
- **Presupuestos con toda la información**: ruta, fecha, peso, volumen, palés y ADR llegan juntos al planificador.
- **Tus datos en tu Odoo**: cada solicitud es un registro con cliente, responsable, actividades y chatter.
- **Hecho para el transporte**: no es un tema genérico; presupuestos, envíos, seguimiento y campos de carga vienen incluidos.

## Cómo empezar

1. **Instala** Web Trucking G1: `/trucking` pasa a ser la página de inicio de los sitios web que no tienen una personalizada.
2. **Carga los datos de ejemplo** si tu base de datos se creó sin demo, desde Sitio web › Configuración › Diseño de transporte.
3. **Ajusta tu marca**: colores, teléfono, horario, textos del hero y contadores.
4. **Revisa tus servicios** en Transporte › Servicios y publica los que ofreces.

## Preguntas frecuentes

**¿Necesito otro módulo para usar este tema web de transporte?**
No. Depende de website, website_blog y mail, todos en Odoo Community.

**¿Envía los presupuestos de transporte automáticamente?**
No. Los planificadores escriben el importe y responden desde el chatter del presupuesto, con tus propias plantillas de e-mail si quieres. Si buscas un **precio estimado al instante** calculado desde tu tabla de tarifas, mira el tema hermano [Web Trucking G2, web de logística con estimador de precios](/posts/tema-web-logistica-con-estimador-de-precios-odoo).

**¿Puede un visitante ver los envíos de otros clientes?**
No. No hay lista ni búsqueda parcial: solo el número exacto muestra un envío, sin el nombre del cliente, y las búsquedas están limitadas por visitante.

**¿Cómo se crea el número de seguimiento?**
Automáticamente: una secuencia que puedes cambiar en Odoo más cuatro caracteres aleatorios para que no se pueda adivinar.

**¿Incluye datos de demostración?**
Sí: diez presupuestos, seis envíos con eventos y tres entradas de blog. Los seis servicios se instalan siempre.

**¿Cumple con el RGPD?**
La barra de cookies de Odoo está activada, las fuentes las sirve el módulo y el formulario de presupuesto pide la aceptación de la política de privacidad.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Web Trucking G1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/web_trucking_g1). Si además necesitas gestionar flota, conductores y rutas dentro del ERP, echa un vistazo al [TMS en Odoo para gestión de transporte y flota](/posts/tms-en-odoo-gestion-de-transporte-y-flota). ¿Quieres adaptar el tema a tu empresa? [Contáctame](/contacto) y lo vemos juntos.
