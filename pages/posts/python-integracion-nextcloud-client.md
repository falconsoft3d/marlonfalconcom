---
title: Python integración Nextcloud client
date: 2022/12/18
description: Cómo subir un archivo a Nextcloud y generar un enlace para compartirlo desde Python con la librería pyncclient.
tag: python, integraciones, nextcloud
author: Marlon Falcon Hernandez
---

# Python integración Nextcloud client

Nextcloud es una plataforma de código abierto para almacenar y compartir archivos en tu propio servidor. Con la librería `pyncclient` podemos automatizar desde Python tareas como subir archivos o generar enlaces para compartirlos, algo útil, por ejemplo, para enviar copias de seguridad a Nextcloud.

## Instalación

Requiere Python 2.7 o superior, o Python 3.5 o superior.
```
pip install pyncclient
```

## Script Python

El siguiente script se conecta al servidor, inicia sesión, sube el archivo local `bd.zip` a la carpeta `Demo` y crea un enlace público para compartirlo:
```
import nextcloud_client
nc = nextcloud_client.Client('https://nextcloud.love.com')
nc.login('admin', 'yourpassword')
nc.put_file('Demo/bd.zip', 'bd.zip')
link_info = nc.share_file_with_link('Demo/bd.zip')
print("Here is your link: " + link_info.get_link())
```

Sustituye la URL del servidor, el usuario y la contraseña por los tuyos. Es recomendable no dejar la contraseña escrita en el código: puedes leerla de una variable de entorno o usar una contraseña de aplicación generada en Nextcloud.

Ver más en [https://github.com/pragmaticindustries/pyncclient](https://github.com/pragmaticindustries/pyncclient)
