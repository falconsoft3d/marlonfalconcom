---
title: MailDev, enviar emails de prueba con Node.js
date: 2023/01/13
description: Cómo instalar MailDev para capturar y revisar los correos de prueba de tus aplicaciones sin enviarlos a destinatarios reales.
tag: email, nodejs
author: Marlon Falcon Hernandez
---

# MailDev, enviar emails de prueba con Node.js

MailDev es un servidor SMTP de pruebas escrito en Node.js que captura todos los correos que envía tu aplicación y los muestra en una interfaz web. Es ideal para desarrollar y probar el envío de emails (por ejemplo desde Odoo o desde una aplicación Node.js) sin riesgo de que lleguen a clientes reales.

## Instalación y arranque

Instalamos npm, MailDev de forma global y lo arrancamos escuchando solo en local:

```
sudo apt install -y npm
sudo npm install -g maildev
maildev --ip=127.0.0.1
```

Por defecto, MailDev escucha SMTP en el puerto 1025 y la interfaz web en el puerto 1080. Basta con configurar tu aplicación para que use `127.0.0.1:1025` como servidor de correo saliente y abrir `http://127.0.0.1:1080` en el navegador para ver los mensajes.

## Reenviar correos a un servidor SMTP real

Si en algún momento necesitas que los correos capturados también puedan reenviarse a un servidor real, por ejemplo Gmail, puedes indicar un servidor de salida:

```
maildev --outgoing-host smtp.gmail.com \
          --outgoing-secure \
          --outgoing-user you@gmail.com \
          --outgoing-pass x1234567890  --ip=127.0.0.1
```

## Nota final

Sustituye el usuario y la contraseña del ejemplo por los tuyos (en Gmail se usa una contraseña de aplicación) y evita dejar credenciales reales en scripts compartidos.
