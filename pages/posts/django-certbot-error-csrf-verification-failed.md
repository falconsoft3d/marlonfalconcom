---
title: ▷ Como corregir el error CSRF verification failed en Django y Certbot.
date: 2023/09/17
description: ▷ Como crear un APU.
tag: django, certbot, csrf, error
author: Marlon Falcon Hernandez
---

# ▷ Como corregir el error CSRF verification failed en Django y Certbot.
Cuando tengas problemas con el error **CSRF verification failed** en **Django** y **Certbot** puedes corregirlo de la siguiente manera.

1. Busca el fichero settings.py en tu proyecto **Django**.
2. Agrega la siguiente linea de codigo en el fichero **settings.py**.

```python
CSRF_TRUSTED_ORIGINS = [
    'https://marlonfalcon.com',
    'https://*.marlonfalcon.com',
    'https://*.127.0.0.1',
    'https://*.95.217.15.100',
    'https://95.217.15.100',
]
```

3. Reinicia el servidor **Django**.