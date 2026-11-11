---
title: ▷ Historial de accesos en Odoo - Login fallidos, alertas de fuerza bruta y registro de seguridad
date: 2026/11/11
description: ▷ Audita la seguridad de Odoo 18, 19 y 20 - historial de accesos con IP, logins fallidos, alertas de fuerza bruta por correo y contraseñas seguras en lote.
tag: odoo, odoo-19, modulos-odoo, seguridad, auditoria, login
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Historial de accesos en Odoo: logins fallidos, alertas de fuerza bruta y registro de seguridad

¿Quién entró ayer en tu Odoo y desde qué dirección IP? ¿Alguien está probando contraseñas contra tu usuario administrador? ¿Quién cambió los datos de la empresa o un parámetro del sistema? Sin un **registro de auditoría**, Odoo no responde a ninguna de estas preguntas. **Advanced Security & Login History** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que guarda el **historial de accesos**, los **intentos de login fallidos**, envía **alertas de fuerza bruta por correo** y registra los **cambios sensibles** de tu base de datos.

## ¿Para quién es este módulo de seguridad para Odoo?

- **Administradores de sistemas** que publican Odoo en Internet y necesitan saber quién accede y desde dónde.
- **Empresas que pasan auditorías** (ISO 27001, protección de datos, controles internos) y deben demostrar la trazabilidad de los accesos.
- **Partners e integradores** que gestionan varias instancias y quieren enterarse de un ataque antes que el cliente.

Solo necesita el módulo **Conversaciones (mail)**, incluido en Odoo Community.

## Funciones principales

### Historial de accesos con usuario, fecha, IP y navegador

Cada inicio de sesión queda registrado con **el usuario, la fecha, la dirección IP y el navegador**. Los accesos realizados por **API (XML-RPC o JSON-RPC)** también aparecen y se marcan como tales, así distingues a una persona de una integración.

<Image
  src="/images/posts/modulos-odoo/secure_login/logins.png"
  alt="Historial de accesos en Odoo con usuario, fecha, dirección IP y navegador de cada login"
  width={1600}
  height={600}
  className="next-image"
/>

### Registro de intentos de login fallidos

Cada **acceso fallido** guarda el usuario que se probó, la dirección IP y el navegador o la herramienta utilizada. Es la forma más rápida de ver si un bot está atacando tu formulario de acceso.

<Image
  src="/images/posts/modulos-odoo/secure_login/failed.png"
  alt="Accesos fallidos en Odoo durante un ataque de fuerza bruta con el intento que disparó la alerta en rojo"
  width={1600}
  height={640}
  className="next-image"
/>

### Alertas de fuerza bruta por correo

Cuando una misma dirección IP falla **10 veces en un minuto**, el módulo envía **un correo por ataque** a tus responsables de seguridad, con el usuario probado, la IP y el número de intentos. Un aviso por ataque, no cientos de correos.

<Image
  src="/images/posts/modulos-odoo/secure_login/alert.png"
  alt="Correo de alerta de ataque de fuerza bruta en Odoo enviado a los responsables de seguridad"
  width={900}
  height={400}
  className="next-image"
/>

### Responsables de seguridad configurables

En **Ajustes > Control de acceso > Responsables de seguridad** eliges qué contactos reciben las alertas.

### La IP real detrás de un proxy

Si tu Odoo está detrás de **Nginx o un balanceador de carga** y arrancas con `proxy_mode`, se registra la dirección IP del visitante y no la del proxy.

### Registro de seguridad de cambios sensibles

**Usuarios creados, contraseñas restablecidas, datos de la empresa y parámetros del sistema** modificados: cada cambio queda registrado con quién lo hizo y el valor **antes y después**, campo por campo.

<Image
  src="/images/posts/modulos-odoo/secure_login/log.png"
  alt="Registro de seguridad en Odoo con usuarios creados y parámetros del sistema modificados"
  width={1600}
  height={800}
  className="next-image"
/>

### Los secretos se ocultan en el registro

Los parámetros que guardan **tokens, claves API o contraseñas** aparecen enmascarados. Auditas el cambio sin exponer el secreto, por ejemplo la clave de una pasarela de pago.

### Contraseñas seguras en lote

Genera **contraseñas aleatorias de 12 caracteres para muchos usuarios a la vez**. Se descargan en un archivo **Excel** con nombres, usuarios y nuevas contraseñas y, si quieres, se envían por correo a cada usuario. El archivo no se guarda como adjunto en Odoo.

### Registros a prueba de manipulaciones

Los registros son de **solo lectura para todos, administradores incluidos**: nadie puede editarlos ni eliminarlos desde Odoo.

## Beneficios para la seguridad de tu Odoo

- **Trazabilidad completa**: sabes quién entró, cuándo, desde dónde y qué cambió.
- **Reacción rápida ante ataques**: el correo de alerta llega en cuanto empieza la fuerza bruta.
- **Auditorías sin sorpresas**: un registro inalterable de accesos y cambios críticos.
- **Renovación de contraseñas en minutos**: tras una fuga o una baja, cambias las claves de todo un equipo de una vez.

Si además quieres que el formulario público deje de dar acceso, combínalo con el [login oculto con URL secreta para Odoo](/posts/ocultar-login-odoo-url-secreta).

## Cómo empezar en tres pasos

1. **Instala** Secure Login desde Aplicaciones (solo depende de Conversaciones, incluido en Community).
2. **Añade responsables** en Ajustes > Control de acceso > Responsables de seguridad.
3. **Vigila**: desde ese momento se registran los accesos, los intentos fallidos y los cambios sensibles.

## Preguntas frecuentes

**¿Bloquea a los atacantes?**
Odoo ya frena los fallos repetidos desde una misma dirección IP. Secure Login registra cada intento y avisa a tus responsables de seguridad una vez por ataque.

**¿Por qué un acceso no tiene dirección IP?**
Los accesos por XML-RPC o JSON-RPC se ejecutan sin una petición web, así que muestran «API o servidor» en su lugar.

**¿Se guardan las contraseñas generadas?**
Solo su hash, como cualquier contraseña de Odoo. El archivo Excel vive en el asistente y se elimina con él.

**¿Quién puede ver los registros?**
Solo los administradores con acceso a Ajustes, y nadie puede editarlos ni eliminarlos.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Advanced Security & Login History** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/secure_login). Si necesitas una auditoría de seguridad de tu instancia o adaptar el módulo, [contáctame](/contacto).
