---
title: Mandar un mensaje a Telegram con Python
date: 2022/12/18
description: Mandar un mensaje a Telegram con Python
tag: python, telegram, api
author: Marlon Falcon Hernandez
---

# Mandar un mensaje a Telegram con Python

Configuramos el bot de telegram.
```
Busca el contacto "BotFather"
Envia /newbot para crear un nuevo Telegram bot.
Te dara un token : DEMO:AAEIr7H7l_ukqgE2ktSrW5F2a2SdU2whxIs
Creas un grupo y agregas el bot
Añades tambien el bot <Telegram Bot Raw> para conocer el id del grupo
```

Con el token y el id del grupo podemos enviar un mensaje a telegram.
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