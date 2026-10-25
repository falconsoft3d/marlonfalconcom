---
title: ▷ Crear un enlace web para enviar un email desde la web
date: 2023/1/4
description: ▷ Cómo usar mailto en una etiqueta a de HTML para abrir el correo con destinatario, asunto y cuerpo ya rellenos.
tag: mail, link, html
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Crear un enlace web para enviar un email desde la web

La etiqueta `a` de HTML permite crear enlaces que, al hacer clic, abren el cliente de correo del usuario con un nuevo mensaje. Para ello se utiliza el atributo `href` con el esquema `mailto:`, y dentro de él se puede especificar el email del destinatario, el asunto y el cuerpo del mensaje.

## Sintaxis

```html
<a href="mailto:demo@example.com?subject=Asunto del correo!&body=Hola Marlon!">demo@example.com</a>
```

1. **mailto**: especifica el email del destinatario.
2. **subject**: especifica el asunto del email.
3. **body**: especifica el cuerpo del email.

## Consejos

- El primer parámetro va después de `?` y los siguientes se separan con `&`.
- También puedes añadir destinatarios en copia con `cc` y en copia oculta con `bcc`.
- Para mayor compatibilidad, codifica los espacios y caracteres especiales (por ejemplo, el espacio como `%20`).
- Ten en cuenta que el enlace solo funciona si el usuario tiene configurado un cliente de correo en su dispositivo.
