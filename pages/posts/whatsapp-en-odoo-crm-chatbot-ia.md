---
title: ▷ WhatsApp en Odoo - Bandeja compartida, CRM y respuestas con IA
date: 2026/11/11
description: ▷ Integra WhatsApp en Odoo 19 con código QR o Cloud API de Meta - bandeja compartida, CRM, tareas, respuestas y traducción con IA, encuestas y envío de PDF.
tag: odoo, odoo-19, modulos-odoo, whatsapp, crm, inteligencia-artificial
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ WhatsApp en Odoo: bandeja compartida, CRM y respuestas con IA

Tus clientes escriben por **WhatsApp**, pero las conversaciones se quedan en el móvil de un comercial: nadie más las ve, no se vinculan al contacto ni a la oportunidad, y cuando esa persona está de vacaciones el cliente se queda sin respuesta. **WhatsApp Inbox, CRM & AI Chatbot** (Falcon WhatsApp) es un módulo para **Odoo 19 (Community y Enterprise)** que trae WhatsApp al ERP con una **bandeja de entrada compartida**, contactos y **CRM**, tareas, encuestas, envío de documentos en PDF y **respuestas y traducción con IA** gracias a Claude.

## ¿Para quién es este módulo de WhatsApp para Odoo?

- **Equipos comerciales y de atención al cliente** que atienden a varias personas desde un mismo número.
- **Empresas que venden por WhatsApp** y quieren cada conversación ligada a su contacto y su oportunidad en el CRM.
- **Negocios con clientes internacionales** que necesitan escribir y leer en otro idioma sin salir de Odoo.

Depende de Contactos, CRM y Proyecto; si tienes Ventas, Facturación o Inventario instalados, también los aprovecha.

## Funciones principales

### Dos conexiones - WhatsApp Web con QR o Cloud API oficial

Elige por cuenta cómo conectar. Con **WhatsApp Web** escaneas un **código QR** una sola vez y Odoo lee el historial, los grupos y las imágenes, y envía desde tu número de siempre. Con la **WhatsApp Business Cloud API de Meta** usas la API oficial: webhooks, marcas de entregado y leído y **plantillas aprobadas** para escribir pasadas 24 horas. Puedes tener varias cuentas.

<Image
  src="/images/posts/modulos-odoo/falcon_whatsapp/qr.png"
  alt="Conectar WhatsApp Web con Odoo escaneando un código QR"
  width={1600}
  height={950}
  className="next-image"
/>

### Bandeja de entrada compartida de WhatsApp

Conversaciones **abiertas, mías, sin asignar y cerradas**. Atiende, **asigna, transfiere y cierra** chats, añade **notas internas**, organiza con etiquetas y colores y controla los mensajes sin leer. La conversación abierta muestra la etapa de su oportunidad, fotos, documentos, reacciones y actividades pendientes. Los **chats de grupo** indican quién escribió cada mensaje.

<Image
  src="/images/posts/modulos-odoo/falcon_whatsapp/bandeja.png"
  alt="Bandeja de entrada compartida de WhatsApp en Odoo con etiquetas, oportunidad y respuestas propuestas por IA"
  width={1600}
  height={950}
  className="next-image"
/>

### Contactos, CRM y tareas desde un mensaje

Cada conversación se **vincula al contacto por su teléfono** o crea uno nuevo al momento. Desde el chat abres una **oportunidad con su etapa** en el CRM, asignas un proyecto y conviertes un mensaje en una **tarea o actividad pendiente**: la IA redacta el título, la descripción y la prioridad.

### Respuestas propuestas con IA

**Claude** propone respuestas que siguen el hilo de la conversación, las indicaciones que le das sobre esa persona y sus pedidos. Tú eliges, editas y envías.

### Traducción de WhatsApp en directo

El cliente escribe en su idioma y lee el tuyo; tú escribes en el tuyo. **La traducción de cada mensaje aparece debajo de él**, y las respuestas propuestas llegan en el idioma del cliente con su significado en el tuyo.

<Image
  src="/images/posts/modulos-odoo/falcon_whatsapp/traduccion.png"
  alt="Traducción en directo de una conversación de WhatsApp en Odoo del italiano al español"
  width={1600}
  height={950}
  className="next-image"
/>

### Enviar pedidos y facturas por WhatsApp

Todo documento con chatter recibe un **botón de WhatsApp**: pedidos, facturas, órdenes de entrega o cualquier otro registro se envían como **PDF** al contacto, con el teléfono y el mensaje ya rellenados. Desde la conversación también puedes enviar los pedidos y facturas del cliente.

<Image
  src="/images/posts/modulos-odoo/falcon_whatsapp/documento.png"
  alt="Enviar un pedido de venta en PDF por WhatsApp desde el chatter de Odoo"
  width={1600}
  height={950}
  className="next-image"
/>

### Encuestas por WhatsApp

Escribe una pregunta con **opciones numeradas** y el mensaje queda listo para enviar. Las respuestas (un número, el emoji o el texto) se cuentan como votos, y ves quién respondió qué y los votos de cada opción.

### Perfil de personalidad del cliente

Claude lee toda la conversación y sus estadísticas (cuándo escribe, lo rápido que responde, los emojis que usa, quién inicia el chat) y redacta un **perfil de personalidad**: su estilo, qué le convence y cómo hablarle.

### También en el móvil

La bandeja de entrada de WhatsApp funciona también desde el teléfono, y cada contacto muestra sus conversaciones.

## Beneficios para ventas y atención al cliente

- **Ningún cliente sin respuesta**: la bandeja compartida permite asignar y transferir conversaciones entre el equipo.
- **Todo en el CRM**: cada chat queda vinculado a su contacto, su oportunidad y sus tareas.
- **Respuestas más rápidas**: la IA propone respuestas, redacta tareas y traduce en directo.
- **Documentos sin salir de Odoo**: pedidos y facturas enviados en PDF por WhatsApp con un clic.

## Cómo empezar

1. **Instala** el módulo desde Aplicaciones.
2. **Conecta una cuenta**: pulsa Conectar y escanea el código QR con tu teléfono, o pega los datos de tu app de Meta para usar la Cloud API.
3. **Añade tu clave de Claude** en Ajustes si quieres respuestas propuestas, traducción, borradores de tareas y perfiles.

## Preguntas frecuentes

**¿WhatsApp Web o la Cloud API?**
WhatsApp Web usa tu número y tu aplicación actuales con un código QR. La Cloud API es la API oficial de Meta para WhatsApp Business, con un número registrado en Meta, webhooks y plantillas aprobadas. Eliges por cuenta.

**¿WhatsApp Web es oficial?**
No: funciona como cualquier otro dispositivo vinculado. Úsalo con moderación y sin mensajes masivos; para envíos masivos o mensajería crítica, usa la Cloud API.

**¿Qué necesita el servidor para WhatsApp Web?**
Google Chrome, Chromium o Microsoft Edge y el paquete de Python websocket-client. La sesión se guarda en el servidor, así que el QR se escanea una sola vez.

**¿La IA es obligatoria?**
No. Usa Claude, de Anthropic, con tu clave API en Ajustes o la ANTHROPIC_API_KEY del servidor. Sin ella todo funciona salvo las respuestas propuestas, la traducción, los borradores de tareas y el perfil.

**¿Quién ve las conversaciones?**
Hay dos grupos: Usuario (lee y responde) y Administrador (conecta las cuentas y cambia sus ajustes). Una cuenta se puede limitar a algunos usuarios y cada compañía tiene sus propias cuentas.

**¿Funciona en Odoo Community?**
Sí, en Odoo 19 Community y Enterprise. Está disponible en inglés y español.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **WhatsApp Inbox, CRM & AI Chatbot** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/falcon_whatsapp). Si necesitas ayuda para conectarlo con la Cloud API de Meta o adaptarlo a tu equipo comercial, [contáctame](/contacto) y lo vemos juntos.
