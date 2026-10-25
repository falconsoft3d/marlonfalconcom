---
title: Python Api Rest
date: 2022/12/18
description: Ejemplo básico de cómo consumir una API REST desde Python usando la librería requests para enviar una petición POST.
tag: python
author: Marlon Falcon Hernandez
---

# Python API REST

Una API REST permite que dos aplicaciones se comuniquen a través de HTTP usando métodos como `GET`, `POST`, `PUT` o `DELETE`. En Python, la forma más sencilla de consumir este tipo de servicios es la librería **requests**.

## Instalación

Si no tienes la librería instalada, puedes añadirla con `pip install requests`.

## Ejemplo: enviar una petición POST

En este ejemplo se envía un mensaje a través de una API de WhatsApp. Se define la URL del servicio (que incluye la instancia y el token), los parámetros de la petición y, finalmente, se hace la llamada con `requests.post`.

api.py
```
import requests
url = 'https://eu102.chat-api.com/instance99645/sendMessage?token=iwu09tzu212lk'
params = {
    "phone": "79912422",
    "body": "WhatsApp API on chat-api.com works good"
}
response = requests.post(url, params=params)
response.json()
```

El método `response.json()` convierte la respuesta del servidor en un diccionario de Python, con lo que puedes comprobar fácilmente si la operación fue correcta.

## Conclusión

Con `requests` basta con unas pocas líneas para integrar cualquier API REST en tus scripts. Recuerda no publicar tus tokens reales y guardarlos, por ejemplo, en variables de entorno.
