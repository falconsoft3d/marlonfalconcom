---
title: ▷ Tema web de logística en Odoo - Estimador de precios de envío al instante desde tu tabla de tarifas
date: 2026/11/11
description: ▷ Web de logística para Odoo 19 con estimador de precios de envío al instante desde tu tabla de tarifas, reserva online, seguimiento, oficinas y flota.
tag: odoo, odoo-19, modulos-odoo, tema-web, logistica, calculadora-de-tarifas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Tema web de logística en Odoo: estimador de precios de envío al instante desde tu tabla de tarifas

Lo primero que quiere saber quien entra en la web de un **operador logístico o transitario** es **cuánto le va a costar el envío**. Si la respuesta es «rellena el formulario y te llamamos», muchos se van a la competencia. **Web Trucking G2** es un **tema web de logística y transporte** para **Odoo 19, Community y Enterprise**, con un **estimador de precios al instante** que calcula el precio y los días de tránsito a partir de **tu propia tabla de tarifas**, y un botón para **reservar ese presupuesto online** que lo convierte en un registro del back office.

Incluye la web y una aplicación **Logística** con presupuestos, envíos, tarifas, zonas, servicios, oficinas y flota. Solo depende de **Sitio web, Blog y Mail**, todos en Odoo Community.

## ¿Para quién es esta web de logística en Odoo?

- **Transitarios y operadores logísticos** que trabajan por carretera, marítimo, aéreo o ferrocarril y quieren mostrar precios orientativos.
- **Empresas de transporte con tarifas por zonas**, que pueden expresar su precio como base + kilos + metros cúbicos.
- **Empresas con varias oficinas o delegaciones** que necesitan publicar dirección, horario y contacto de cada una.
- **Negocios con flota propia** que quieren enseñar sus vehículos, su capacidad y sus unidades.

## Funciones principales

### Estimador de precios de transporte al instante

Es el corazón del tema. El visitante elige el **modo de transporte**, la **zona de origen y de destino**, escribe el **peso y el volumen** y ve el **precio estimado y los días de tránsito** al momento, sin recargar la página (y también funciona sin JavaScript). La fórmula es clara: **precio base + peso (kg) × precio por kg + volumen (m³) × precio por m³**, redondeado a tu moneda.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g2/estimador.jpg"
  alt="Estimador de precios de envío al instante en la web de logística de Odoo con modo, zonas, peso y volumen"
  width={1280}
  height={563}
  className="next-image"
/>

### Tabla de tarifas por modo, ruta y zonas

Los precios salen de una **tabla de tarifas editable** en el back office, por modo de transporte y ruta, y de **zonas con sus países**. Una tarifa puede aplicarse también al **trayecto de vuelta**, así la tabla sigue siendo corta. Si no hay tarifa para una ruta, el visitante puede enviar igualmente la solicitud y tú le pones precio a mano. ¿Prefieres no mostrar precios? Desmarca **«Mostrar precios al instante»** y el estimador solo enseña los días de tránsito y recoge solicitudes.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g2/tarifas.jpg"
  alt="Tabla de tarifas de transporte en Odoo por modo y ruta con precio base, precio por kg y por metro cúbico"
  width={1280}
  height={800}
  className="next-image"
/>

### Reserva del presupuesto online

El botón **«Reservar este presupuesto»** abre un formulario que crea el presupuesto en el back office con los lugares de recogida y entrega, bultos, mercancía, fecha de recogida y mensaje. El **precio siempre se recalcula en el servidor**, así que un visitante no puede manipularlo. El formulario está protegido con **token CSRF**, un campo oculto contra robots y validación de cada valor; el contacto se busca por e-mail o se crea.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g2/reserva.jpg"
  alt="Formulario para reservar online el presupuesto de transporte estimado en la web de logística de Odoo"
  width={1280}
  height={805}
  className="next-image"
/>

### Pipeline de presupuestos logísticos con plantillas de e-mail

Los presupuestos avanzan en un **kanban** por **nuevo, enviado, aceptado y rechazado**, con lista, formulario, **tabla dinámica y gráfico**, chatter y actividades. Incluye **dos plantillas de e-mail** listas para enviar: una con el precio y otra con la referencia de seguimiento.

### Seguimiento de envíos con referencia privada

Cuando se acepta un presupuesto, el envío recibe una **referencia aleatoria privada de diez caracteres**. El cliente la escribe en la página de **Seguimiento** y ve las etapas: **reservado, recogido, en tránsito, despacho de aduanas, en reparto y entregado**. Solo funciona la referencia exacta, solo en presupuestos aceptados, y la página **no muestra nombres, e-mails ni precios**. En el back office, los envíos avanzan etapa a etapa con un botón.

<Image
  src="/images/posts/modulos-odoo/web_trucking_g2/seguimiento.jpg"
  alt="Página de seguimiento de envíos logísticos en Odoo con etapas reservado, en tránsito, aduanas y entregado"
  width={1280}
  height={800}
  className="next-image"
/>

### Servicios logísticos, flota y oficinas publicados desde Odoo

Cada **servicio** (carretera, marítimo, aéreo, ferrocarril, almacenaje, aduanas o los tuyos) tiene su tarjeta y su página con imagen, puntos destacados, icono, **campos SEO** y una llamada al estimador. La **flota** registra tipos de vehículo con carga útil, volumen y unidades, que alimentan los contadores de la página de inicio. Las **oficinas** muestran dirección, teléfono, e-mail, horario, foto y un enlace al mapa que solo se abre al hacer clic.

### Página de inicio que vende transporte

Hero a todo el ancho con antetítulo, título, palabra destacada y texto editables y traducibles, y tres cajas superpuestas: precios claros, **estimación al instante** y teléfono 24/7. Después, sobre nosotros con insignia de años, servicios, contadores, cómo funciona, seguimiento, flota, por qué elegirnos, testimonios, oficinas y blog.

### Tu marca en tres idiomas, mobile-first y RGPD

Colores, teléfono, horario, años de experiencia y textos del hero se cambian desde **Logística › Configuración › Diseño**; los colores también actualizan la paleta de Odoo del sitio web. Se instalan **inglés, español y catalán** con selector de idioma. En el móvil, el estimador aparece justo después del hero y las etapas del seguimiento se convierten en una lista vertical. Consentimiento de cookies UE y fuentes **Dosis y Nunito Sans servidas por el módulo**.

## Beneficios para tu empresa de logística

- **Responde a la primera pregunta**: el visitante obtiene un precio en segundos, calculado con tus propias tarifas.
- **Convierte visitas en presupuestos**: cada reserva llega a Odoo con la ruta, la carga y la estimación.
- **Control del precio**: el cálculo se repite en el servidor y el precio final lo confirmas tú en el presupuesto.
- **Menos llamadas de «¿dónde está mi envío?»** gracias a una página de seguimiento segura.
- **Un solo módulo**: web y back office juntos, sin otras dependencias de pago.

## Cómo empezar

1. **Instala** Web Trucking G2: `/logistics` pasa a ser la página de inicio de los sitios web que no tienen una personalizada.
2. **Carga los datos de ejemplo** desde Logística › Configuración › Diseño si tu base de datos no tiene demo: zonas, tarifas, servicios, oficinas, flota, presupuestos y entradas.
3. **Define tus zonas y tarifas** por modo y ruta.
4. **Personaliza** colores, teléfono, horario y textos del hero.

## Preguntas frecuentes

**¿Cómo calcula el precio el estimador de la web de logística?**
Precio base + peso × precio por kg + volumen × precio por m³, a partir de la tarifa del modo y la ruta. Es una estimación: el precio final lo confirmas en el presupuesto.

**¿Y si no hay tarifa para una ruta?**
El estimador lo indica y el visitante puede enviar igualmente la solicitud, que llega sin estimación.

**¿Puede un cliente ver el envío de otro cliente?**
Solo con su referencia privada exacta, un código aleatorio de diez caracteres. No hay lista ni búsqueda, y la página no muestra datos personales ni precios.

**¿Necesito otro módulo?**
No. Solo depende del sitio web, el blog y el mail de Odoo, todos en Community.

**¿Qué diferencia hay con Web Trucking G1?**
G2 está pensado para logística multimodal con **precio al instante desde tu tabla de tarifas**. Si prefieres que el cliente pida un presupuesto de carga con palés y mercancías ADR y responderlo tú, con seguimiento por línea de tiempo, mira el [tema web para empresa de transporte de camiones](/posts/tema-web-empresa-de-transporte-de-camiones-odoo).

**¿Cumple con el RGPD?**
La barra de cookies de Odoo está activada, las fuentes las sirve el módulo y los enlaces al mapa solo se abren al hacer clic. Los datos de los formularios se guardan en tu propio Odoo.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Web Trucking G2** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/web_trucking_g2). Si también necesitas planificar viajes, conductores y flota dentro del ERP, lee el artículo sobre el [TMS en Odoo para gestión de transporte y flota](/posts/tms-en-odoo-gestion-de-transporte-y-flota). ¿Necesitas adaptar las tarifas o integrarlo con tu facturación? [Contáctame](/contacto) y lo vemos juntos.
