---
title: "▷ RESTful Odoo ERP"
date: 2023/01/12
description: "▷ Cómo consumir Odoo ERP mediante una API REST con el módulo restful_restapi - obtener un token, leer, crear y borrar registros desde Python."
tag: odoo, desarrolloodoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ RESTful Odoo ERP

Odoo ofrece de forma nativa APIs XML-RPC y JSON-RPC, pero muchas aplicaciones externas esperan una API REST, con rutas por modelo y métodos HTTP como GET, POST o DELETE. Con un módulo REST instalado en Odoo podemos trabajar así. En este post vemos los pasos básicos con ejemplos en Python usando la librería `requests`.

1. Instalar el módulo restful. GitHub: https://github.com/falconsoft3d/restful_restapi

2. Obtener el token de acceso con el usuario, la contraseña y la base de datos:
```py
# -*- coding: utf-8 -*-

import requests, json

headers = {
    'charset':'utf-8',
    'content-type': 'application/x-www-form-urlencoded',
}
data = {
    'login': 'admin',
    'password': 'x1234567890',
    'db': 'db12-spain',
}
base_url = 'http://127.0.0.1'

req = requests.get('{}/api/auth/token'.format(base_url),
  data=data, headers=headers)

print(req)

content = json.loads(req.content.decode('utf-8'))

# or add the access token to the headers
headers['access-token'] = content.get('access_token')
print(headers)
```

3. Obtener las órdenes de venta. El token se envía en la cabecera `access-token` y, en el cuerpo, se pueden indicar opciones como el límite de registros, los campos, el dominio o el desplazamiento (ver el comentario del ejemplo):
```py
import requests

url = "http://localhost:80/api/sale.order"


# "{"limit": 20, "fields": "['id', 'partner_id', 'name']", "domain":"[('id', '>', '10')]", "offset":3}"
payload = '{"limit": 20}'

headers = {
'access-token': "access_token_7a43b56a63fd9130e680011b974d69cc8c9e0d6c",
'content-type': "application/json"
}

response = requests.request("GET", url, data=payload, headers=headers)

print(response.text)
```

4. Crear un registro de product.template con POST:
```py
# -*- coding: utf-8 -*-

import requests

url = "http://localhost:80/api/product.template"

headers = {
'access-token': "access_token_7a43b56a63fd9130e680011b974d69cc8c9e0d6c",
'content-type': "application/json"
}

payload = '{"name": "Demmo REST API", "price_unit":4000}'

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

5. Borrar un registro de product.template indicando su id en la URL:
```py
# -*- coding: utf-8 -*-

import requests

url = "http://localhost:80/api/product.template/2"

headers = {
'access-token': "access_token_7a43b56a63fd9130e680011b974d69cc8c9e0d6c",
'content-type': "application/json"
}

response = requests.delete(url, headers=headers)

print(response.text)
```

**Nota:** sustituye la URL, las credenciales y el token por los de tu instalación. En producción, usa siempre HTTPS para que el usuario, la contraseña y el token viajen cifrados.
