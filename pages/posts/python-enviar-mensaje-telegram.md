---
title: ▷ Mandar un mensaje a Telegram con Python
date: 2022/12/18
description: ▷ Cómo crear un bot de Telegram y enviar mensajes a un grupo desde Python con la API de Telegram y la librería requests.
tag: python, telegram, api
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Mandar un mensaje a Telegram con Python
En este post vamos a ver cómo mandar un mensaje a Telegram con Python usando la API de bots de Telegram y la librería requests. Es una forma sencilla de recibir notificaciones automáticas, por ejemplo, cuando termina un proceso o falla una copia de seguridad.

<Image
  src="/images/posts/python-telegram.png"
  alt="odoo-migracione"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## 1. Configurar el bot de Telegram

```
Busca el contacto "BotFather"
Envia /newbot para crear un nuevo Telegram bot.
Te dara un token : DEMO:AAEIr7H7l_ukqgE2ktSrW5F2a2SdU2whxIs
Creas un grupo y agregas el bot
Añades tambien el bot <Telegram Bot Raw> para conocer el id del grupo
```

## 2. Enviar el mensaje

Con el token y el id del grupo podemos enviar un mensaje a Telegram llamando al método `sendMessage` de la API:
```
import requests
import json

url = "https://api.telegram.org/bot5778116097:AAEIr7H7lDEMOxIs/sendMessage"

payload = json.dumps({
  "text": "1",
  "chat_id": "-8611139222"
})
headers = {
  'Content-Type': 'application/json'
}
response = requests.request("GET", url, headers=headers, data=payload)
print(response.text)
```

En la URL, sustituye el texto que va después de `bot` por el token de tu bot, y en `chat_id` pon el id de tu grupo (los ids de grupo suelen ser números negativos). Si todo va bien, la respuesta contendrá `"ok":true`.

## Nota

El token da control total sobre el bot, así que no lo publiques ni lo subas a un repositorio. Guárdalo en una variable de entorno o en un archivo de configuración fuera del control de versiones.
