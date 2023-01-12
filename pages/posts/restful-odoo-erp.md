---
title: ▷ Restful odoo erp
date: 2023/01/12
description: ▷ Restful odoo erp
tag: odoo, desarrolloodoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Restful odoo erp
1. Instalar el modulo restful. github: https://github.com/falconsoft3d/restful_restapi

2. Obtener el token de acceso
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

3. Obtener las ordedes de venta
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

3. POST product.template
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

4. Borrar product.template
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

