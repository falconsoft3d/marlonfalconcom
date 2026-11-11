---
title: ▷ Conectar Claude, ChatGPT y otras IA con Odoo - Servidor MCP seguro dentro de Odoo
date: 2026/11/11
description: ▷ Servidor MCP para Odoo 19 - conecta Claude, ChatGPT o Mistral a tus datos en solo lectura, con claves API, OAuth 2.1, auditoría y aprobación humana.
tag: odoo, odoo-19, modulos-odoo, inteligencia-artificial, mcp, claude
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Conectar Claude, ChatGPT y otras IA con Odoo mediante un servidor MCP seguro

Cada vez más empresas quieren **preguntarle a una IA por los datos de su ERP** igual que se lo preguntarían a un compañero: «¿Qué clientes han comprado menos este trimestre?», «¿Cuántos pedidos abiertos tenemos por comercial?». El problema es que abrir Odoo a un asistente de IA sin control es arriesgado: la IA puede ser engañada por el texto que lee y acabar tocando lo que no debe. **Falcon MCP Connector** es un módulo para **Odoo 19 (Community y Enterprise)** que convierte tu Odoo en un **servidor MCP (Model Context Protocol)** sin procesos externos, para conectar **Claude, ChatGPT, Gemini, Mistral, Cursor** y otras IA a tus datos en **solo lectura por defecto**, con claves API, **OAuth 2.1**, registro de auditoría y aprobación humana.

## ¿Para quién es este conector MCP para Odoo?

- **Empresas que quieren consultar su Odoo desde Claude o ChatGPT** sin exportar datos a hojas de cálculo.
- **Responsables de sistemas y seguridad** que necesitan limitar qué modelos, qué campos y qué operaciones puede usar una IA.
- **Desarrolladores** que trabajan con Claude Code, Cursor, VS Code o Windsurf y quieren consultar datos reales de Odoo desde su editor.
- **Integradores** que construyen agentes con la API de Claude, la Responses API de OpenAI o function calling con DeepSeek y Qwen.

Es un módulo normal de Odoo: **no necesitas Node, Docker ni ningún servidor adicional**. Solo depende de los módulos web estándar.

## Funciones principales

### Servidor MCP dentro de Odoo con herramientas fijas

La IA no ejecuta lo que quiere: usa un **conjunto pequeño y cerrado de herramientas**. `list_models` y `describe_model` muestran lo que la conexión puede ver; `search_read` y `count` buscan y leen registros con filtros validados; `read_group` y `get_report_summary` devuelven totales y agrupaciones, incluso por mes; y `update_record` y `create_record` solo existen en las conexiones donde tú lo permites. **No hay llamadas a métodos genéricos, ni eval, ni SQL directo, ni borrado.**

### Tres modos de acceso y solo lectura real en la base de datos

Cada conexión trabaja en **Solo lectura** (por defecto), **Lectura + Edición** o **Lectura + Edición + Creación**. El borrado no se ofrece en ningún modo. En solo lectura, las herramientas se ejecutan en una **transacción de solo lectura de PostgreSQL**: si algo intentara escribir, lo rechaza la propia base de datos y todo se revierte.

<Image
  src="/images/posts/modulos-odoo/falcon_mcp_connector/conexion.jpg"
  alt="Formulario de una conexión MCP en Odoo con el modo de acceso, el usuario y los modelos permitidos para la IA"
  width={1280}
  height={800}
  className="next-image"
/>

### Un usuario de Odoo, nunca superusuario

Cada conexión se ejecuta **como el usuario de Odoo que elijas**, así que siempre se aplican sus permisos de acceso y sus reglas de registro. El superusuario y los usuarios del portal se rechazan, y si eliges un administrador el módulo te avisa.

### Listas de modelos permitidos y campos denegados

La **lista de modelos permitidos** está vacía por defecto: la IA solo llega a lo que tú autorizas. Además, una lista de denegación imposible de eliminar protege los ajustes del sistema, usuarios, grupos, claves, adjuntos, servidores de correo, datos de pago y el propio módulo. Las **contraseñas, tokens, secretos, claves API, firmas e IBAN** nunca se leen, escriben, buscan, ordenan ni agrupan, como tampoco los campos binarios o restringidos a administradores.

### Filtros y escrituras validados con límites

Cada operador, ruta de campo y valor de un filtro se comprueba uno a uno, y **un filtro no puede saltar por una relación hacia un modelo denegado**. En las escrituras solo se aceptan campos seguros y con el tipo correcto; los campos `active`, `state`, compañía y contabilidad se rechazan, igual que cualquier comando que elimine datos. También hay **máximo de registros, tamaño máximo de resultado, límite de peticiones por conexión** y tamaño de petición. El contexto y el modo nunca vienen del cliente.

### Asistente de conexión en dos minutos

Eliges el usuario, el modo y los modelos, generas una clave y seleccionas tu IA. El asistente muestra los pasos y una **configuración lista para pegar** en Claude, ChatGPT, Gemini, Copilot Studio, Cursor, VS Code, Mistral Le Chat, Perplexity y más. La clave se muestra una sola vez y **Odoo solo guarda su hash**, con caducidad, revocación, último uso y lista opcional de IP permitidas.

<Image
  src="/images/posts/modulos-odoo/falcon_mcp_connector/asistente.jpg"
  alt="Asistente de Odoo para conectar Claude, ChatGPT u otra IA por MCP con la configuración lista para pegar"
  width={1280}
  height={800}
  className="next-image"
/>

### Registro de auditoría de cada llamada de la IA

Queda registrado **quién, qué conexión, qué clave o aplicación, qué herramienta, modelo y registros**, los argumentos con los secretos enmascarados, el tamaño del resultado, la duración y cualquier error. También las llamadas rechazadas y los inicios de sesión fallidos. Tú decides cuánto tiempo se conservan.

<Image
  src="/images/posts/modulos-odoo/falcon_mcp_connector/auditoria.jpg"
  alt="Registro de auditoría de las llamadas MCP de la IA a Odoo con herramienta, modelo, duración y errores"
  width={1280}
  height={800}
  className="next-image"
/>

### Aprobación humana antes de cada escritura

Activa **Requerir confirmación** y cada cambio que proponga la IA espera en **Aprobaciones pendientes** con una vista previa. Nada cambia hasta que un Responsable de MCP lo aprueba. Entonces se ejecuta como el usuario de la conexión, nunca como el revisor, y todas las comprobaciones se repiten.

<Image
  src="/images/posts/modulos-odoo/falcon_mcp_connector/aprobaciones.jpg"
  alt="Aprobaciones pendientes en Odoo para revisar los cambios que propone la IA antes de aplicarlos"
  width={1280}
  height={800}
  className="next-image"
/>

### OAuth 2.1 para ChatGPT, Gemini y Microsoft 365 Copilot

Algunas IA no pueden enviar una clave fija, así que el módulo incluye **su propio servidor de autorización OAuth 2.1**: código de autorización con PKCE obligatorio, registro dinámico de clientes, Client ID Metadata Documents, metadatos del recurso protegido y rotación de tokens de actualización con detección de reutilización. El usuario inicia sesión en Odoo, ve quién pide el acceso y adónde irán las respuestas, y **sin su aprobación no se emite nada**. Un token nunca supera el modo de su conexión y solo es válido para la URL de tu servidor.

### Compatible con Claude, ChatGPT, Gemini, Copilot, Mistral y herramientas de desarrollo

El módulo incluye una **tabla de compatibilidad** revisada con la documentación de cada proveedor: Claude (web, escritorio, móvil, Claude Code y API), ChatGPT y GPT personalizados, app de Gemini y Gemini Enterprise, Microsoft 365 Copilot y Copilot Studio, Grok, Perplexity, Mistral Le Chat, Cursor, VS Code con GitHub Copilot, Windsurf y Gemini CLI. Para las API que no hablan MCP, como **DeepSeek o Qwen**, ofrece definiciones de funciones en formato OpenAI, Anthropic o Gemini y un endpoint REST para ejecutar cada herramienta. Soporta **MCP 2026-07-28** y las versiones anteriores del protocolo en la misma URL.

### Transporte seguro y protección frente a la inyección de prompts

El HTTP sin cifrar se rechaza en direcciones públicas y se comprueba la cabecera Origin, tal como exige la especificación MCP. Los resultados se etiquetan como **datos no fiables**, el servidor le indica a la IA que no los obedezca y las herramientas nunca pueden hacer más de lo que permite la conexión.

## Beneficios de conectar tu IA a Odoo con Falcon MCP Connector

- **Respuestas con datos reales**: la IA consulta tu Odoo en directo, con totales y agrupaciones.
- **Riesgo acotado**: denegación por defecto, solo lectura a nivel de base de datos y sin borrado.
- **Trazabilidad completa**: cada llamada, aceptada o rechazada, queda en el registro de auditoría.
- **Control humano**: las escrituras pueden esperar la aprobación de un responsable.
- **Sin infraestructura extra**: nada que instalar ni parchear fuera de Odoo.
- **Probado**: 181 pruebas automáticas y ejecuciones reales con los SDK oficiales de MCP y Claude Code.

## Cómo empezar

1. **Instala** Falcon MCP Connector desde Aplicaciones.
2. **Crea una conexión** con el asistente: elige el usuario, el modo y los modelos permitidos.
3. **Genera la clave** y copia la configuración para tu IA, o usa OAuth si tu IA lo requiere.
4. **Pregunta** a Claude, ChatGPT o tu IA favorita por tus datos y revisa el registro de auditoría.

Para un uso seguro, la recomendación es trabajar con **claves de solo lectura**, un usuario dedicado con pocos permisos, una lista corta de modelos y **Requerir confirmación** en las escrituras.

## Preguntas frecuentes

**¿Necesito un servidor externo?**
No. Es un módulo normal de Odoo: MCP, REST y OAuth se ejecutan dentro de Odoo.

**¿Funciona en Community o Enterprise?**
En ambas. Solo depende de los módulos web estándar de Odoo.

**¿Mi Odoo tiene que ser público?**
Para las IA en la nube como Claude.ai, ChatGPT o Gemini, sí, con https, porque se conectan desde sus servidores. Las herramientas de tu ordenador, como Claude Code, pueden usar una dirección privada.

**¿Puede la IA borrar datos?**
No. No existe herramienta de borrado y los comandos que eliminan líneas se rechazan. Archivar también se rechaza.

**¿Puede la IA leer contraseñas o claves API?**
No. Esos modelos y campos están denegados por una lista que no se puede eliminar, y la IA solo accede a los modelos que tú has permitido.

**¿Sirve si tengo varias bases de datos en un servidor?**
Sí. Usa dbfilter para que cada host sirva una base de datos o envía la cabecera X-Odoo-Database. OAuth necesita dbfilter.

## Descarga el módulo

Puedes ver la ficha completa, las capturas y el precio de **Falcon MCP Connector** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/falcon_mcp_connector). Si quieres ayuda para conectar tu IA a Odoo de forma segura o definir qué datos debe ver, [contáctame](/contacto) y lo vemos juntos.
