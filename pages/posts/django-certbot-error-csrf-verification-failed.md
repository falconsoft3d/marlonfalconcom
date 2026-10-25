---
title: ▷ Cómo corregir el error CSRF verification failed en Django y Certbot.
date: 2023/09/17
description: ▷ Solución al error "CSRF verification failed" al servir Django por HTTPS con Certbot, añadiendo tu dominio a CSRF_TRUSTED_ORIGINS.
tag: django, certbot, csrf, error
author: Marlon Falcon Hernandez
---

# ▷ Cómo corregir el error CSRF verification failed en Django y Certbot.

Django incluye una protección contra ataques CSRF (*Cross-Site Request Forgery*) que, entre otras comprobaciones, verifica que las peticiones `POST` provengan de un origen de confianza. Cuando instalas un certificado SSL con **Certbot** y empiezas a servir tu sitio por **HTTPS** (normalmente detrás de Nginx o Apache), es habitual que al enviar un formulario o iniciar sesión en el administrador aparezca el error **CSRF verification failed. Request aborted.**

Esto ocurre porque el origen de la petición (`https://tudominio.com`) no está en la lista de orígenes de confianza de Django. Desde Django 4.0, además, cada origen debe incluir el esquema (`https://`).

## Solución

1. Busca el fichero **settings.py** en tu proyecto **Django**.
2. Agrega la siguiente configuración en el fichero **settings.py**. En este caso agregamos el dominio de mi sitio web **marlonfalcon.com**.

```python
CSRF_TRUSTED_ORIGINS = [
    'https://marlonfalcon.com',
    'https://*.marlonfalcon.com',
    'https://*.127.0.0.1',
    'https://*.95.217.15.100',
    'https://95.217.15.100',
]
```

3. Reinicia el servidor **Django** (por ejemplo, Gunicorn o el servicio que uses) para que se apliquen los cambios.

## Nota

Sustituye los dominios e IP del ejemplo por los de tu propio servidor. El comodín `*` permite incluir todos los subdominios de un dominio, como `www.marlonfalcon.com`. Si usas un proxy inverso, asegúrate también de que tu dominio esté incluido en `ALLOWED_HOSTS`.
