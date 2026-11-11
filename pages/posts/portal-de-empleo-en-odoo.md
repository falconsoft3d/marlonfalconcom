---
title: ▷ Portal de empleo en Odoo - Web de ofertas de trabajo conectada a Reclutamiento
date: 2026/11/11
description: ▷ Crea un portal de empleo en Odoo 19 - buscador de ofertas, filtros por ciudad y modalidad, rangos salariales y solicitudes directas a Reclutamiento.
tag: odoo, odoo-19, modulos-odoo, tema-web, portal-de-empleo, reclutamiento
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Portal de empleo en Odoo: una web de ofertas de trabajo conectada a Reclutamiento

La página **/jobs** que trae Odoo cumple, pero se queda corta cuando quieres atraer candidatos de verdad: no hay categorías, no se ve el salario, no se puede filtrar por teletrabajo y la portada de la web no habla de empleo. Muchas empresas acaban pagando un portal externo y copiando a mano las ofertas y los currículos. **Job Web1** es un **tema de portal de empleo para Odoo 19 (Community y Enterprise)** construido sobre **Reclutamiento y Empleos en línea**: publicas un puesto de trabajo en Odoo y aparece en el portal; el candidato se inscribe y llega a Reclutamiento con el currículum adjunto.

## ¿Para quién es este portal de empleo en Odoo?

- **Empresas que contratan con frecuencia** y quieren una **página de empleo profesional** dentro de su propia web.
- **Agencias de selección y empresas de trabajo temporal** que publican muchas ofertas de distintas categorías.
- **Departamentos de RRHH** que ya usan Reclutamiento de Odoo y no quieren duplicar datos en otra plataforma.

Es un solo módulo: depende de **Empleos en línea** (website_hr_recruitment) y del **Blog** de Odoo, ambos incluidos en Community.

## Funciones principales

### Página de inicio de empleo con buscador

La portada se convierte en una **bolsa de trabajo**: cabecera con un **buscador de empleo por palabra clave y ubicación** (las oficinas de tus ofertas), categorías populares y el número de vacantes. El título, el texto y la foto se cambian desde un menú de Odoo. Debajo aparecen mosaicos de categorías con foto, icono y número de ofertas, un bloque «Por qué trabajar con nosotros» y **contadores** de puestos vacantes, equipos que contratan, solicitudes recibidas y categorías, calculados desde Reclutamiento.

<Image
  src="/images/posts/modulos-odoo/job_web1/hero.jpg"
  alt="Página de inicio del portal de empleo en Odoo con buscador de ofertas por palabra clave y ubicación"
  width={1280}
  height={800}
  className="next-image"
/>

### Ofertas destacadas con salario y modalidad de trabajo

Marca un puesto como **«Destacada»** y se muestra en la página de inicio con una estrella; la lista se completa con las últimas ofertas. Cada tarjeta enseña el **rango salarial** (desde / hasta, moneda y periodo por hora, mes o año), el tipo de contrato, la **modalidad presencial, híbrida o en remoto**, las **etiquetas de habilidades** y la fecha en palabras, como «Publicada hace 2 días», en el idioma del visitante. Si prefieres no mostrar sueldos, los ocultas todos con un solo ajuste.

### Listado de ofertas de trabajo con filtros combinables

La página **/jobs** de Odoo se rediseña con una barra de búsqueda por **título del puesto o palabra clave, ubicación, categoría y tipo de contrato**, más filtros rápidos por **presencial, híbrido o remoto, nivel de experiencia y ofertas destacadas**, con el número de resultados. Cada fila muestra icono de categoría, departamento, contrato, modalidad, fecha, ciudad y salario, con una cinta para las destacadas y el botón «Inscribirme».

<Image
  src="/images/posts/modulos-odoo/job_web1/ofertas.jpg"
  alt="Listado de ofertas de trabajo en Odoo con filtros por ubicación, categoría, contrato y modalidad"
  width={1280}
  height={800}
  className="next-image"
/>

### SEO para ofertas de empleo

Se mantienen las URL, la paginación y el **mapa del sitio de Odoo**, y las ofertas no publicadas solo las ven los reclutadores. Cada página de oferta incluye el marcado **schema.org JobPosting con el salario** para Google.

### Página de oferta y formulario de solicitud rediseñado

Cada oferta muestra la descripción que escribes en Odoo (editable con el constructor de sitios web) junto a una **tarjeta de información**: tipo de empleo, ubicación, modalidad, departamento, categoría, experiencia, salario, puestos vacantes y fecha de publicación. Debajo aparecen **vacantes relacionadas** de la misma categoría y el **formulario de solicitud de Odoo con un nuevo diseño**: nombre, correo, teléfono, LinkedIn, currículum y presentación.

<Image
  src="/images/posts/modulos-odoo/job_web1/oferta.jpg"
  alt="Página de una oferta de empleo en Odoo con tarjeta de información, salario y botón de inscripción"
  width={1280}
  height={800}
  className="next-image"
/>

### Equipos, testimonios, blog y alertas de empleo

Secciones que generan confianza en el candidato: **equipos que contratan** (departamentos con ofertas abiertas, ciudades y puestos), **testimonios de empleados** con foto, cargo y estrellas, las tres últimas entradas del **blog** y un formulario de **alertas de empleo**: cada suscriptor se guarda como contacto con la etiqueta «Alertas de empleo». Completan la portada un bloque «Cómo funciona» con los cuatro pasos de tu proceso de selección y un pie de página oscuro con logotipo, contacto, enlaces y redes sociales.

### Nuevos campos en los puestos de trabajo de Reclutamiento

El formulario del puesto de trabajo gana una pestaña **«Portal de empleo»** con **categoría de empleo** (nombre, icono, foto y descripción), modalidad de trabajo, **nivel de experiencia** (sin experiencia, junior, nivel medio, senior o responsable), salario validado (sin valores negativos y con el mínimo por debajo del máximo), marca de destacada y etiquetas de habilidades.

<Image
  src="/images/posts/modulos-odoo/job_web1/puesto.jpg"
  alt="Pestaña Portal de empleo en el puesto de trabajo de Reclutamiento de Odoo con categoría, salario y modalidad"
  width={1280}
  height={800}
  className="next-image"
/>

### Diseño desde un menú de Odoo

En **Sitio web › Configuración › Diseño del portal de empleo** eliges el color principal (que también pasa a la paleta del constructor de sitios web) y el color oscuro, el título, el texto y la foto de la cabecera, si se muestran los salarios y cuántas ofertas destacadas aparecen en la portada.

### Solicitudes directas a Reclutamiento

Cada candidatura de la web se crea como **candidato de la oferta en Reclutamiento**, con sus etapas, entrevistas, actividades y correos. Tras enviar, el candidato ve la página de agradecimiento de Odoo con el contacto del reclutador.

### Multilingüe, móvil y RGPD

Se instala en **inglés, español y catalán**, con selector de idioma en la cabecera. Cada bloque funciona desde 320 px: buscador apilado, botones a todo el ancho y filas de ofertas que se convierten en tarjetas. Imágenes diferidas, un JavaScript ligero y la fuente Plus Jakarta Sans servida por el propio módulo, con la **barra de cookies de Odoo** activada.

## Beneficios para tu proceso de selección

- **Sin datos duplicados**: ofertas, departamentos, oficinas, contratos y candidatos son los de Odoo.
- **Candidatos mejor orientados**: búsqueda y filtros por ciudad, categoría, contrato, modalidad y experiencia, con el salario a la vista.
- **Más y mejores solicitudes**: páginas de oferta claras, un formulario corto y alertas de empleo que convierten visitas en contactos.
- **Tu marca empleadora**: colores, logotipo, textos y fotos propios con el constructor de sitios web.
- **Hecho al estilo Odoo**: rutas, formulario, búsqueda, mapa del sitio y traducciones estándar, en Community y Enterprise.

## Cómo empezar

1. **Instala** Job Web1 desde Aplicaciones. Al instalarlo, /job-board pasa a ser la página de inicio de los sitios web que no tienen una personalizada.
2. **Configura el diseño** en Sitio web › Configuración › Diseño del portal de empleo: colores, cabecera y salarios.
3. **Publica una oferta**: en Reclutamiento abre el puesto de trabajo, rellena la pestaña «Portal de empleo» y pulsa «Ir al sitio web» › Publicar.

## Preguntas frecuentes

**¿Necesito otro módulo?**
No. Depende de Empleos en línea (website_hr_recruitment) y del blog de Odoo, ambos en Community.

**¿Adónde van las solicitudes de los candidatos?**
A Reclutamiento › Solicitudes, como candidatos de la oferta con el currículum adjunto, igual que con el formulario estándar de Odoo.

**¿Puedo ocultar los salarios?**
Sí, desmarcando «Mostrar salarios» en Diseño del portal de empleo o en los ajustes del Sitio web.

**¿Sustituye mi página de inicio?**
Solo en los sitios web sin página de inicio personalizada, y puedes cambiar la URL de la portada en Diseño del portal de empleo.

**¿Incluye datos de demostración?**
Sí: quince ofertas en seis categorías y departamentos, cuatro oficinas, candidatos, testimonios y tres entradas de blog. En una base sin datos de demostración, el botón «Cargar datos de ejemplo» los carga con un clic, sin cambiar tu logotipo.

**¿Qué versión de Odoo necesito?**
Odoo 19, Community o Enterprise.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Job Web1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/job_web1). Si quieres adaptar el portal de empleo a tu marca o a tu proceso de selección, [contáctame](/contacto) y lo vemos juntos.
