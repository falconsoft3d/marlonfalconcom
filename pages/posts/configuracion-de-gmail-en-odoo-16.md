---
title: ▷ Configuración de correos de Gmail en Odoo 16
date: 2023/05/01
description: ▷ Configuración de correos de Gmail en Odoo 16
tag: odoo, gmail, correo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Configuración de correos de Gmail en Odoo 16
Las configuración de Gmail ha cambiado desde que quitaron el acceso de aplicaciones no segura desde el 30 de Mayo del 2022, ahora para poder configurar el correo de Gmail en Odoo 16 debemos de seguir los siguientes pasos:

1- Abre tu cuenta de Gmail y debes de ir a la configuración de tu cuenta.

<Image
  src="/images/posts/gmail1.png"
  alt="credito"
  width={1179}
  height={804}
  priority
  className="next-image"
/>

2- Tienes que ir a seguridad y activar la verificación de dos pasos. Tambien activa el Authenticator.

<Image
  src="/images/posts/gmail2.png"
  alt="credito"
  width={1561}
  height={862}
  priority
  className="next-image"
/>

3- En el buscador de configuración de Gmail busca la palabra "contraseñas" y te aparecerá la opción de "Contraseñas de aplicaciones" y le das click.

<Image
  src="/images/posts/gmail3.png"
  alt="credito"
  width={1234}
  height={630}
  priority
  className="next-image"
/>

4- Crea una contraseña de aplicación y selecciona la opción de "Otro (nombre personalizado)" y le das click en generar. Te aparecerá una contraseña de 16 dígitos, esa contraseña la copias y la pegas en la configuración de tu correo de Odoo 16.

<Image
  src="/images/posts/gmail4.png"
  alt="credito"
  width={926}
  height={710}
  priority
  className="next-image"
/>

4- Configuramos el servidor saliente en odoo activando antes el modo desarrollador y en la configuración de correo colocamos lo siguientes datos, una vez que guardes los cambios, selecciona probar conexión y te debe de salir un mensaje de que la conexión fue exitosa.

```
nombre: smtp.gmail.com
puerto: 25
```

<Image
  src="/images/posts/gmail6.png"
  alt="credito"
  width={1602}
  height={712}
  priority
  className="next-image"
/>

5- Configuramos el servidor entrante en odoo activando antes el modo desarrollador.

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

6- Para probar el envio vamos un contacto y le mandamos un mensaje. Si todo esta bien, el mensaje debe de llegar al correo de la persona.
<Image
  src="/images/posts/gmail8.png"
  alt="credito"
  width={1566}
  height={647}
  priority
  className="next-image"
/>

