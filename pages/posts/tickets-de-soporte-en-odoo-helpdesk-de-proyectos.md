---
title: ▷ Tickets de soporte en Odoo - helpdesk para proyectos de implantación con análisis GAP
date: 2026/11/11
description: ▷ Helpdesk de tickets para Odoo 18, 19 y 20 - flujo de aprobación, horas y desarrollos, valoración del cliente, análisis GAP, checklist y avisos por Telegram.
tag: odoo, odoo-19, modulos-odoo, helpdesk, tickets-de-soporte, gestion-de-proyectos
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Tickets de soporte en Odoo: helpdesk para proyectos de implantación

Durante la implantación y el soporte de un proyecto Odoo, las peticiones del cliente llegan por correo, WhatsApp y llamadas. Nadie sabe qué está aprobado, cuántas horas lleva cada cambio ni cuánto se tarda en cerrar una incidencia. **Helpdesk & Project Support Tickets** (Ticket Pro) es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que ordena el **soporte y los desarrollos de un proyecto Odoo**: tickets con flujo de aprobación, horas y precio, **valoración del cliente**, un panel del proyecto, **análisis GAP** firmado y un **checklist de puesta en marcha**.

## ¿Para quién es este módulo de tickets en Odoo?

- **Partners e implantadores de Odoo** que gestionan el soporte y los cambios de varios clientes.
- **Departamentos de sistemas** que mantienen su propio Odoo y quieren un registro claro de incidencias y desarrollos.
- **Consultores funcionales y jefes de proyecto** que necesitan documentar el análisis GAP y controlar la puesta en producción.

Solo necesita Conversaciones (mail), incluido en Odoo Community.

## Funciones principales

### Panel del proyecto de soporte

El panel muestra los **tickets abiertos y cerrados este año, este mes y esta semana**, los de prioridad alta, el **tiempo medio de cierre** y gráficos de tickets creados por día, semana, mes o año. También reúne tareas, desarrollos, checklist, análisis GAP y el estado del servidor.

<Image
  src="/images/posts/modulos-odoo/ticket_pro_2/dashboard.png"
  alt="Panel de tickets de soporte en Odoo con tickets abiertos y cerrados por periodo y tiempo medio de cierre"
  width={1600}
  height={800}
  className="next-image"
/>

### Tickets con flujo de trabajo y aprobación

Cada ticket recorre **Borrador, Presupuestado, Aprobado, En curso, Por actualizar, Resuelto y Valorado**, con prioridad, entorno, categoría, sprint, horas y precio. El chatter guarda el historial completo de cada incidencia.

<Image
  src="/images/posts/modulos-odoo/ticket_pro_2/ticket.png"
  alt="Ticket de soporte en Odoo con su flujo de estados, prioridad, entorno y historial en el chatter"
  width={1600}
  height={760}
  className="next-image"
/>

### Usuarios y administradores con permisos separados

Los **usuarios crean, siguen y valoran** sus tickets; solo el grupo **Ticket Pro / Administrador** puede aprobarlos, iniciarlos, resolverlos o rechazarlos, y el servidor lo comprueba. El cliente no puede saltarse el flujo.

### Valoración del cliente en cada ticket

Antes de cerrarse, el cliente **valora cada ticket resuelto**. Sabes cómo fue cada intervención y detectas a tiempo los casos en los que el soporte no convenció.

### Desarrollos con horas y precio

Las **solicitudes de cambio** tienen sus líneas de horas, precio unitario y total, y se vinculan al ticket de soporte que las originó. Por ejemplo, 20 horas a 65,00 suman 1.300,00, sin cálculos aparte. Se organizan por proyectos, etapas y sprints.

<Image
  src="/images/posts/modulos-odoo/ticket_pro_2/development.png"
  alt="Desarrollo en Odoo con líneas de horas, precio unitario y total vinculado a un ticket de soporte"
  width={1600}
  height={900}
  className="next-image"
/>

### Análisis GAP firmado por el cliente

Registra las **brechas detectadas en los talleres de análisis**, cada una con su responsable y categoría, y déjalas listas para la **firma del cliente**. El alcance del proyecto queda documentado antes de desarrollar.

<Image
  src="/images/posts/modulos-odoo/ticket_pro_2/gap.png"
  alt="Análisis GAP en Odoo con las brechas de los talleres, responsable y categoría para la firma del cliente"
  width={1600}
  height={760}
  className="next-image"
/>

### Checklist de puesta en marcha de Odoo

Incluye **28 pasos ya preparados para poner en producción un proyecto Odoo**, desde la localización hasta la última copia de seguridad. Marca cada paso a medida que avanza la implantación.

### Notificaciones por correo y Telegram

La dirección de soporte de cada categoría recibe los **nuevos tickets por correo**, y un **grupo de Telegram** recibe un aviso de cada ticket nuevo. Ambas notificaciones se activan desde Ajustes.

### Plantillas, preguntas frecuentes y más

El módulo añade **plantillas de tickets**, tareas, preguntas frecuentes, vídeos, enlaces y el registro de **asistencia a reuniones**. Es multicompañía: cada empresa ve sus propios tickets y desarrollos.

## Beneficios para el equipo de soporte

- **Nada se trabaja sin aprobar**: el flujo y los permisos separan la petición de la ejecución.
- **Horas y costes claros**: cada desarrollo tiene sus líneas de horas y su total.
- **Calidad medible**: valoración del cliente y tiempo medio de cierre en el panel.
- **Implantaciones más ordenadas**: análisis GAP firmado y checklist de puesta en marcha.
- **Avisos inmediatos** por correo y Telegram en cuanto entra un ticket.

Para más contexto, aquí tienes el artículo anterior sobre [TicketPro para la gestión de proyectos en Odoo](/posts/modulo-ticketpro-gestion-proyecto-odoo).

## Cómo empezar en tres pasos

1. **Instala** Ticket Pro desde Aplicaciones.
2. **Configúralo**: asigna a tu equipo el grupo Ticket Pro / Usuario o Administrador, crea las categorías con su correo de soporte y rellena los datos del proyecto en Ajustes.
3. **Trabaja**: los usuarios abren tickets; los administradores los presupuestan, aprueban, trabajan y resuelven; el cliente los valora.

## Preguntas frecuentes

**¿Quién puede aprobar o resolver un ticket?**
Solo los usuarios del grupo Ticket Pro / Administrador, y el servidor lo comprueba. Los usuarios crean tickets, los siguen y los valoran.

**¿Se envían correos por defecto?**
No. Activa Notificaciones por Email en Ajustes > Ticket Pro; el correo de soporte de la categoría del ticket recibe los nuevos tickets.

**¿Cómo funcionan los avisos de Telegram?**
Crea un bot con BotFather, añádelo a tu grupo y escribe su token y el ID del chat en Ajustes > Ticket Pro. El botón Probar conexión envía un mensaje de prueba.

**¿Funciona con varias empresas?**
Sí, cada empresa ve sus propios tickets y desarrollos.

**¿Qué idiomas incluye?**
Inglés, con traducción completa al español.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, tanto Community como Enterprise.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Helpdesk & Project Support Tickets** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/ticket_pro_2). Si necesitas adaptarlo a tu forma de dar soporte o conectarlo con otras herramientas, [contáctame](/contacto) y lo vemos juntos.
