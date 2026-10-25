---
title: ▷ Configuración de correos de Gmail en Odoo 16
date: 2023/05/01
description: ▷ Cómo conectar una cuenta de Gmail a Odoo 16 usando verificación en dos pasos y contraseñas de aplicación para SMTP e IMAP.
tag: odoo, gmail, correo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Configuración de correos de Gmail en Odoo 16
La configuración de Gmail cambió cuando Google retiró el acceso de aplicaciones poco seguras el 30 de mayo de 2022. Ahora, para poder configurar el correo de Gmail en Odoo 16, debemos seguir los siguientes pasos:

1. Abre tu cuenta de Gmail y ve a la configuración de tu cuenta de Google.

<Image
  src="/images/posts/gmail1.png"
  alt="credito"
  width={1179}
  height={804}
  priority
  className="next-image"
/>

2. Ve a **Seguridad** y activa la verificación en dos pasos. También activa el Authenticator.

<Image
  src="/images/posts/gmail2.png"
  alt="credito"
  width={1561}
  height={862}
  priority
  className="next-image"
/>

3. En el buscador de la configuración busca la palabra "contraseñas"; te aparecerá la opción "Contraseñas de aplicaciones". Haz clic en ella.

<Image
  src="/images/posts/gmail3.png"
  alt="credito"
  width={1234}
  height={630}
  priority
  className="next-image"
/>

4. Crea una contraseña de aplicación, selecciona la opción "Otro (nombre personalizado)" y haz clic en generar. Te aparecerá una contraseña de 16 caracteres: cópiala y pégala en la configuración del correo de Odoo 16 (en lugar de la contraseña normal de tu cuenta).

<Image
  src="/images/posts/gmail4.png"
  alt="credito"
  width={926}
  height={710}
  priority
  className="next-image"
/>

5. Configuramos el servidor saliente en Odoo, activando antes el modo desarrollador. En la configuración de correo colocamos los siguientes datos y, una vez guardados los cambios, pulsamos en probar conexión. Debe aparecer un mensaje indicando que la conexión fue exitosa.

```
nombre: smtp.gmail.com
puerto: 25
```

Como usuario se indica la dirección completa de Gmail y como contraseña, la contraseña de aplicación. Si tu servidor bloquea el puerto 25 (algo habitual en muchos proveedores cloud), puedes usar el puerto 587 con cifrado TLS (STARTTLS) o el 465 con SSL/TLS.

<Image
  src="/images/posts/gmail6.png"
  alt="credito"
  width={1602}
  height={712}
  priority
  className="next-image"
/>

6. Configuramos el servidor entrante en Odoo, también con el modo desarrollador activado.

```
nombre: imap.gmail.com
puerto: 993
SSL/TLS: Si
```

<Image
  src="/images/posts/gmail7.png"
  alt="credito"
  width={1560}
  height={714}
  priority
  className="next-image"
/>

7. Para probar el envío, vamos a un contacto y le mandamos un mensaje. Si todo está bien, el mensaje debe llegar al correo de la persona.

<Image
  src="/images/posts/gmail8.png"
  alt="credito"
  width={1566}
  height={647}
  priority
  className="next-image"
/>

