---
title: ▷ Automatización de flujos en Odoo estilo n8n con inteligencia artificial
date: 2026/11/11
description: ▷ Automatiza Odoo 19 como en n8n - editor visual, 5 disparadores, 14 pasos, ramas y bucles, datos entre pasos y Claude que diseña el flujo desde una frase.
tag: odoo, odoo-19, modulos-odoo, automatizacion, inteligencia-artificial, n8n
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Automatización de flujos en Odoo estilo n8n con inteligencia artificial

Enviar un correo de bienvenida a cada cliente nuevo, avisar por Telegram cuando se paga una factura o preparar un resumen diario: son tareas repetitivas que muchas empresas resuelven con herramientas externas como n8n o Zapier, conectadas a Odoo con integraciones que hay que mantener. **AI Workflow Automation (Flujo Pro)** es un módulo para **Odoo 19** que lleva esa **automatización de flujos estilo n8n dentro del propio Odoo**: un editor visual con disparadores, pasos, ramas y bucles, y **Claude** para diseñar el flujo completo a partir de una frase. Solo necesita el módulo Conversaciones (mail), incluido en Odoo Community.

## ¿Para quién es este módulo de automatización en Odoo?

- **Empresas que usan n8n, Zapier o scripts** para automatizar procesos de Odoo y quieren tenerlo todo en un único sistema.
- **Equipos comerciales y de administración** que necesitan avisos automáticos de facturas pagadas, pedidos confirmados o clientes VIP.
- **Responsables de operaciones** que quieren automatizar tareas sin programar, describiendo lo que necesitan en lenguaje natural.
- **Consultores e integradores de Odoo** que conectan Odoo con APIs y páginas web externas.

## Funciones principales

### Editor visual de flujos como en n8n

Cada flujo tiene **un disparador y los pasos que le siguen**, con **ramas sí / no** y **bucles para cada elemento**, igual que en n8n. Después de una ejecución, cada paso muestra en el editor si fue bien o si falló.

<Image
  src="/images/posts/modulos-odoo/flujo_pro/editor.png"
  alt="Editor visual de flujos de automatización en Odoo estilo n8n con disparador, pasos y ramas sí no"
  width={1600}
  height={900}
  className="next-image"
/>

### Claude diseña la automatización desde una frase

Describe con tus palabras lo que debe hacer el flujo y **Claude construye el flujo completo**: el disparador, la condición, el correo redactado con IA y el aviso, listo para revisar. También puede **configurar un paso concreto** o **explicar qué hace un paso**, qué datos usa y qué se podría ajustar.

<Image
  src="/images/posts/modulos-odoo/flujo_pro/claude.png"
  alt="Flujo de automatización de Odoo diseñado por Claude con inteligencia artificial a partir de una frase"
  width={1600}
  height={900}
  className="next-image"
/>

### Cinco disparadores para iniciar los flujos

Un flujo puede arrancar de forma **manual**, **programada**, al **recibir un correo**, al crearse un **nuevo registro de cualquier modelo** o con un **cambio de estado de cualquier modelo**. Para los cambios de estado eliges el modelo, su campo de estado y los valores: una factura pagada, un pedido confirmado, una tarea que se mueve de etapa…

<Image
  src="/images/posts/modulos-odoo/flujo_pro/disparador.png"
  alt="Disparador por cambio de estado de cualquier modelo de Odoo en un flujo de automatización"
  width={1600}
  height={900}
  className="next-image"
/>

### Catorce pasos de acciones, IA y lógica

Los flujos combinan **enviar correo, mensaje de Telegram, publicar en Conversaciones, crear factura, generar el PDF de un documento, crear oportunidad o tarea**, crear, actualizar y buscar registros de cualquier modelo, **petición HTTP**, leer una página web, **generar texto con IA**, asignar valores y los pasos de lógica **si** y **para cada**.

### Datos entre pasos con referencias

Cada paso deja sus datos para los siguientes, que los usan con referencias como `{{trigger.email}}`, `{{data.rows}}` o `{{ai.text}}`. En el panel de configuración, los datos de los pasos anteriores se insertan con un clic.

### Acciones planificadas de Odoo para los flujos programados

Cada flujo programado tiene **su propia acción planificada (cron) de Odoo**, con su intervalo, su próxima ejecución y su usuario. Puedes verla y pausarla en Ajustes > Técnico > Acciones planificadas. Los flujos que inicia un correo, un nuevo registro o un cambio de estado los revisa una acción planificada cada minuto.

### Historial de todas las ejecuciones

Se guardan **los datos del disparador y el resultado de cada paso**. Si un paso falla, la ejecución se detiene ahí, guarda el motivo y el editor marca el paso en rojo, mientras los pasos anteriores conservan su resultado.

<Image
  src="/images/posts/modulos-odoo/flujo_pro/ejecucion.png"
  alt="Ejecución de un flujo de automatización en Odoo con el resultado y los datos de cada paso"
  width={1600}
  height={900}
  className="next-image"
/>

### Diez flujos de ejemplo listos para usar

El módulo incluye **diez flujos de ejemplo**: correos de bienvenida, resúmenes diarios, llamadas a APIs, correos a clientes VIP, facturas pagadas y más, para empezar sin partir de cero.

## Beneficios de automatizar Odoo con Flujo Pro

- **Todo dentro de Odoo**: sin herramientas externas de automatización que conectar y mantener.
- **Sin programar**: el editor visual y Claude permiten crear flujos describiendo lo que necesitas.
- **Control de permisos**: las ejecuciones automáticas actúan con los permisos del usuario del flujo y las manuales con los tuyos; solo el grupo Usuario de Flujo Pro ve la aplicación.
- **Trazabilidad**: cada ejecución queda guardada con el resultado de cada paso, lo que facilita detectar y corregir errores.

## Cómo empezar

1. **Instala** AI Workflow Automation desde Aplicaciones.
2. **Configura la IA**: añade tu clave de API de Claude en Flujo Pro > Ajustes (o la variable ANTHROPIC_API_KEY en el servidor) e instala el paquete de Python anthropic con `pip install anthropic`.
3. **Parte de un ejemplo** o pide a Claude un flujo nuevo describiéndolo en una frase.
4. **Ejecútalo** y revisa el resultado de cada paso.

## Preguntas frecuentes

**¿Cómo se ejecutan los flujos programados?**
Cada flujo programado automático tiene su propia acción planificada de Odoo, con su intervalo, su próxima ejecución y su usuario, que puedes ver y pausar en Ajustes > Técnico > Acciones planificadas.

**¿Y los flujos que inicia un correo, un nuevo registro o un cambio de estado?**
Una acción planificada los revisa cada minuto. Lo que ocurrió antes de que el flujo pasara a automático no lo inicia.

**¿Qué necesita la inteligencia artificial?**
Una clave de API de Claude y el paquete de Python anthropic en el servidor. Sin ella funcionan todos los pasos salvo los de IA.

**¿Con qué permisos actúan los flujos?**
Las ejecuciones automáticas actúan con los permisos de acceso del usuario del flujo; las manuales, con los tuyos.

**¿Qué pasa si un paso falla?**
La ejecución se detiene en ese paso y guarda el motivo. Los pasos anteriores conservan su resultado y el editor marca el paso en rojo.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **AI Workflow Automation (Flujo Pro)** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/flujo_pro). Si quieres que te ayude a diseñar las automatizaciones de tu empresa en Odoo, [contáctame](/contacto) y lo vemos juntos.
