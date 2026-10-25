---
title: ▷ Crear API con PostgREST
date: 2023/10/03
description: ▷ Cómo generar automáticamente una API REST a partir de una base de datos PostgreSQL con PostgREST en Ubuntu 20.04.
tag: postgresql, api
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Crear API con PostgREST

PostgREST es una herramienta que nos permite crear una API REST de forma automática a partir de una base de datos PostgreSQL. Cada tabla o vista del esquema expuesto se convierte en un endpoint, y los filtros, la paginación y el orden se indican directamente en la URL, sin escribir código de backend. En este artículo veremos paso a paso cómo configurarlo en Ubuntu 20.04.

1. Instalamos PostgREST

```bash
sudo apt install postgrest
```

2. Creamos el fichero de configuración
```bash
nano /opt/postgrest.conf
```

3. Agregamos el siguiente contenido
```bash
db-uri = "postgres://postgres:yourpassword@localhost/materials"
db-schema = "public"
db-anon-role = "postgres"
```

4. Lo probamos
```bash
postgrest /opt/postgrest.conf
```

5. Lo revisamos desde el navegador
```bash
http://127.0.0.1:3000
http://127.0.0.1:3000/dimensiones_tuberia?limit=10
http://127.0.0.1:3000/materiales_tuberia?material=eq.s
http://127.0.0.1:3000/materiales_tuberia?material_id=eq.1392
```

6. Lo agregamos como servicio
```bash
sudo nano /etc/systemd/system/postgrest.service
```

7. Agregamos el siguiente contenido
```bash
[Unit]
Description=PostgREST
After=network.target

[Service]
ExecStart=/usr/local/bin/postgrest /opt/postgrest.conf
Restart=always
User=postgres
Group=postgres

[Install]
WantedBy=multi-user.target
```

8. Lo iniciamos
```bash
sudo systemctl start postgrest
sudo systemctl enable postgrest
```


9. Ejemplo de uso
```json
[
    {
    "dim_id": 1,
    "code_dim": "AC2.D76.3.S-1.5_2_48.3",
    "code_mc": "AC2.D76.3.S",
    "descripcion": "Abrazadera Clamp 2 brazos DIN 32676 B S DN40 Espesor 2mm OD1 48.3mm",
    "dn1": "DN40",
    "dn2": null,
    "sch": null,
    "espesor": "2mm",
    "rating": null,
    "od1": "48.3mm",
    "od2": null,
    "number_bolts": null,
    "bolt_size": null,
    "longitud_esparrago": null,
    "dn1_pulgadas": 1.5,
    "dn2_pulgadas": null,
    "k": null
    }
]
```

## Notas

- En la URL, `?limit=10` limita el número de resultados y `columna=eq.valor` filtra por igualdad. PostgREST admite otros operadores como `gt`, `lt`, `like` o `in`.
- Por seguridad, en producción no conviene usar el usuario `postgres` como rol anónimo (`db-anon-role`), ya que expondría toda la base de datos con permisos de superusuario. Lo recomendable es crear un rol específico con permisos solo de lectura sobre las tablas que quieras publicar.
- Comprueba con `which postgrest` la ruta real del binario y ajusta la línea `ExecStart` del servicio si es necesario.
