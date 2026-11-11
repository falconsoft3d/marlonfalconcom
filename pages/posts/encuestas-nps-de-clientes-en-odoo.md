---
title: ▷ Encuestas NPS de clientes en Odoo - Mide la satisfacción con Net Promoter Score
date: 2026/11/11
description: ▷ Encuestas NPS y de satisfacción de clientes en Odoo 18, 19 y 20 - pregunta 0-10, seguimiento por puntuación, enlace personal por correo y panel NPS.
tag: odoo, odoo-19, modulos-odoo, nps, satisfaccion-del-cliente, encuestas
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Encuestas NPS de clientes en Odoo: mide la satisfacción con Net Promoter Score

Saber si tus clientes están contentos no debería depender de una herramienta externa, de exportar contactos a otra plataforma y de cruzar resultados a mano con el CRM. **Customer NPS & Satisfaction Survey** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que lanza **encuestas NPS (Net Promoter Score)** desde el propio Odoo: una pregunta del 0 al 10, preguntas de seguimiento según la puntuación, un **enlace personal por contacto** enviado por correo y un **panel NPS** con promotores, pasivos, detractores y comentarios.

## ¿Para quién es este módulo de encuestas NPS en Odoo?

- **Equipos comerciales y de atención al cliente** que quieren medir la **satisfacción del cliente** cada trimestre o semestre.
- **Empresas B2B** que necesitan encuestar a una empresa y a cada una de sus personas de contacto.
- **Dirección**, que quiere un indicador claro para comprobar si los clientes están más contentos que el periodo anterior.
- **Grupos multiempresa** que gestionan varias carteras de clientes en la misma base de datos.

Solo necesita **Conversaciones (mail)**, incluido en Odoo Community.

## ¿Cómo se calcula el NPS?

Tus clientes responden una pregunta del 0 al 10 y su puntuación los sitúa en uno de tres grupos:

- **Promotores (9-10)**: clientes fieles que te recomendarán. El módulo les pregunta qué valoran más.
- **Pasivos (7-8)**: satisfechos, pero no entusiasmados. Se les pregunta qué haría falta para darte un 10.
- **Detractores (0-6)**: clientes descontentos que pueden irse. Se les pregunta qué mejorar y sus comentarios destacan en el panel.

El **NPS** es el porcentaje de promotores menos el de detractores, un número de -100 a +100. Por ejemplo, 13 promotores, 5 pasivos y 7 detractores de 25 respuestas dan 52 % - 28 % = **NPS +24**. El módulo lo calcula para cada encuesta y para todas juntas.

## Funciones principales

### Panel NPS con los KPI de satisfacción

El panel muestra tu **NPS, la puntuación media, la tasa de respuesta, quién no ha respondido aún** y cuántos comentarios has recibido. Debajo, el reparto entre promotores, pasivos y detractores, la distribución de puntuaciones, el NPS de cada encuesta y las últimas respuestas. Se puede filtrar por encuesta o por contacto.

<Image
  src="/images/posts/modulos-odoo/res_partner_eval/dashboard.png"
  alt="Panel NPS de clientes en Odoo con promotores, pasivos, detractores y tasa de respuesta"
  width={1600}
  height={900}
  className="next-image"
/>

### La pregunta NPS con tu propia redacción

«¿Qué probabilidad hay de que nos recomiendes a un amigo o colega?» del 0 al 10, con el texto y las **etiquetas del 0 y del 10** que tú elijas. Se escribe una vez en la plantilla y cada encuesta generada a partir de ella la copia.

### Preguntas de seguimiento según la puntuación

Cada **pregunta de seguimiento** tiene un rango de puntuación: a los detractores se les pregunta qué mejorar y a los promotores qué valoran más. El cliente solo ve la pregunta que le corresponde a la nota que ha elegido.

### Un enlace personal y seguro por contacto

Cada destinatario recibe **por correo su propio enlace**. Responde sin iniciar sesión ni tener cuenta de Odoo, y cada enlace acepta una única respuesta. Si hace falta, puedes restablecer una respuesta o generar un enlace nuevo desde la invitación.

### Invitaciones a empresas y a sus contactos

Eliges los contactos a encuestar como etiquetas y decides quién recibe el enlace: **el contacto, sus contactos hijos o ambos**. Envías todas las invitaciones con un clic y sigues cada una: pendiente, enviada o respondida, con su puntuación y categoría.

<Image
  src="/images/posts/modulos-odoo/res_partner_eval/survey.png"
  alt="Encuesta de satisfacción de clientes en Odoo con sus invitaciones, puntuación y categoría NPS"
  width={1600}
  height={900}
  className="next-image"
/>

### Responde desde cualquier dispositivo

El correo de invitación abre una **página pública limpia con el logotipo de tu empresa**, que funciona en móviles, tabletas y ordenadores. Tras enviar, el cliente ve una página de agradecimiento. El enlace deja de funcionar cuando la encuesta se cierra o pasa su fecha límite.

<Image
  src="/images/posts/modulos-odoo/res_partner_eval/public.png"
  alt="Página pública de la encuesta NPS en Odoo con la pregunta de seguimiento para una puntuación de 6"
  width={840}
  height={720}
  className="next-image"
/>

### NPS por encuesta para comparar periodos

Una línea por encuesta con sus fechas, invitaciones, respuestas, tasa de respuesta, NPS y estado. Haz **una encuesta cada trimestre o semestre** y comprueba si tus clientes están más contentos que la vez anterior.

### Comentarios agrupados por pregunta

Las respuestas abiertas se agrupan por pregunta de seguimiento: **qué quieren los detractores que mejores** y qué convertiría a un pasivo en promotor. Todas las respuestas se pueden agrupar por encuesta, empresa o categoría, o analizar en tabla dinámica y gráfico.

<Image
  src="/images/posts/modulos-odoo/res_partner_eval/comments.png"
  alt="Comentarios de clientes en la encuesta NPS de Odoo agrupados por pregunta de seguimiento"
  width={1600}
  height={740}
  className="next-image"
/>

### Historial en la ficha del contacto

En la ficha del cliente, el botón **Evaluaciones** muestra todas sus respuestas y su última puntuación.

### Privado por diseño

Solo el grupo **Administrador de Encuesta de Clientes** ve las encuestas y las respuestas. El módulo está preparado para **multiempresa**.

## Beneficios para tu empresa

- **Todo dentro de Odoo**: sin exportar contactos a herramientas externas de encuestas.
- **Más respuestas**: enlace personal por correo, sin cuenta y desde el móvil.
- **Feedback accionable**: cada grupo recibe la pregunta adecuada y los detractores destacan en el panel.
- **Evolución medible**: el NPS de cada encuesta permite comparar trimestres.
- **Historial por cliente**: la última puntuación siempre a mano en la ficha del contacto.

## Cómo empezar en tres pasos

1. **Instala** el módulo desde Aplicaciones. Solo necesita Conversaciones (mail), incluido en Odoo Community.
2. **Prepara** la encuesta: da a tu equipo el grupo Administrador de Encuesta de Clientes y crea una plantilla con tu pregunta, las preguntas de seguimiento y los contactos a encuestar.
3. **Envía y haz seguimiento**: genera una encuesta, ábrela y envía las invitaciones. El NPS y los comentarios aparecen en el panel a medida que llegan.

## Preguntas frecuentes

**¿Mis clientes necesitan una cuenta de Odoo?**
No. Cada contacto recibe por correo un enlace personal y responde en una página pública. El enlace solo sirve para ese contacto y esa encuesta.

**¿Puede un cliente responder dos veces?**
No. Cada enlace acepta una respuesta. Si lo necesitas, puedes restablecerla o generar un enlace nuevo desde la invitación.

**¿Qué pasa cuando se cierra la encuesta?**
Las encuestas cerradas y las que han pasado su fecha límite dejan de aceptar respuestas, y no se envían nuevas invitaciones para ellas.

**¿Puedo enviarla a las personas de una empresa?**
Sí. Elige «Solo sus contactos hijos» o «El contacto y sus contactos hijos» y cada persona recibe su propio enlace; cada respuesta cuenta por separado.

**¿Puedo cambiar las preguntas?**
Sí. La pregunta principal, las etiquetas y las preguntas de seguimiento son tuyas. Una pregunta eliminada conserva sus respuestas anteriores.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise. Incluye inglés y una traducción completa al español.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Customer NPS & Satisfaction Survey** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/res_partner_eval). Si quieres conectar las encuestas con tu CRM o tu servicio de atención al cliente, [contáctame](/contacto) y lo vemos juntos.
