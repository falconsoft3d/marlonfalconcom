---
title: Ethereal email de prueba
date: 2022/12/18
description: Cómo usar Ethereal Email como servidor SMTP de prueba en Odoo para revisar los correos que envía el sistema sin que lleguen a destinatarios reales.
tag: email
author: Marlon Falcon Hernandez
---
# Ethereal email de prueba

import Image from 'next/image'

[Ethereal](https://ethereal.email) es un servicio SMTP falso, pensado para desarrollo y pruebas. Los correos que se envían a través de él nunca llegan a su destinatario: se quedan en un buzón web donde puedes ver el asunto, el cuerpo y los adjuntos. Es ideal para comprobar las plantillas de correo de Odoo (facturas, presupuestos, notificaciones) sin riesgo de enviar emails a clientes reales.

## 1. Crear una cuenta de prueba en Ethereal

Creamos una cuenta de prueba en Ethereal en el enlace https://ethereal.email/create. No hace falta registrarse: la página genera al momento un usuario y una contraseña, junto con los datos de conexión SMTP (servidor `smtp.ethereal.email`, puerto `587` y seguridad STARTTLS).

<Image
  src="/images/posts/email2.png"
  alt="ethereal-email-prueba 2"
  width={1256}
  height={654}
  priority
  className="next-image"
/>

## 2. Configurar el servidor de correo saliente en Odoo

En Odoo, con el modo desarrollador activado, vamos a Ajustes / Técnico / Servidores de correo saliente y creamos un servidor nuevo con los datos de Ethereal:

- **Servidor SMTP:** `smtp.ethereal.email`
- **Puerto SMTP:** `587`
- **Seguridad de la conexión:** TLS (STARTTLS)
- **Nombre de usuario y contraseña:** los generados por Ethereal

<Image
  src="/images/posts/email1.png"
  alt="ethereal-email-prueba 1"
  width={1256}
  height={654}
  priority
  className="next-image"
/>

Pulsamos **Probar conexión** para comprobar que todo es correcto.

## 3. Revisar los correos enviados

A partir de ahora, los emails que envíe Odoo aparecerán en la sección *Messages* de Ethereal, iniciando sesión con el usuario y la contraseña de la cuenta de prueba. Ten en cuenta que estas cuentas son temporales, así que no las uses para nada que debas conservar, y recuerda volver a configurar tu servidor de correo real antes de pasar a producción.
