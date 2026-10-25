---
title: Ngrok, crear un túnel
date: 2022/12/18
description: Cómo usar ngrok para exponer en Internet un servicio local, por ejemplo una instancia de Odoo, mediante un túnel seguro.
tag: tools
author: Marlon Falcon Hernandez
---

# Ngrok, crear un túnel

Ngrok es una herramienta que crea un túnel seguro desde Internet hasta un puerto de tu máquina local. Es muy útil para enseñar a un cliente un desarrollo que todavía está en tu equipo, probar webhooks o acceder a un servicio local desde otro dispositivo sin tener que configurar el router ni desplegar en un servidor.

## 1. Registro y configuración

Primero nos registramos en ngrok y seguimos los pasos de instalación y configuración del token de autenticación que aparecen en el panel:
```
https://dashboard.ngrok.com/get-started/setup
```

## 2. Compartir Odoo local en línea

Con ngrok instalado, basta con indicar el protocolo y el puerto del servicio local. Por ejemplo, para compartir un Odoo que se ejecuta en el puerto 8069:
```
ngrok http 8069
```

Ngrok mostrará en la terminal una URL pública (del tipo `https://xxxx.ngrok-free.app`) que redirige todo el tráfico a tu Odoo local mientras el comando siga en ejecución.

## Nota final

Recuerda que cualquiera que tenga la URL podrá acceder al servicio, así que úsalo solo para pruebas o demostraciones y cierra el túnel (Ctrl + C) cuando termines.
