---
title: ▷ Instalación de PocketBase
date: 2022/12/31
description: ▷ Qué es PocketBase y cómo instalarlo con Docker Compose en pocos pasos.
tag: pocketbase, docker, dockercompose
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de PocketBase
PocketBase es un backend de código abierto escrito en Go que se distribuye como un único ejecutable. Incluye una base de datos SQLite embebida, una API REST, autenticación de usuarios, almacenamiento de archivos, suscripciones en tiempo real y un panel de administración web al que se accede desde el navegador. Es una opción muy práctica para prototipos y aplicaciones pequeñas o medianas.

En este artículo lo instalamos con Docker Compose.

# Creamos el fichero docker-compose.yml
```yaml
version: "3.7"
services:
  pocketbase:
    image: ghcr.io/muchobien/pocketbase:latest
    container_name: pocketbase
    restart: unless-stopped
    command:
      - --encryptionEnv #optional
      - ENCRYPTION #optional
    environment:
      ENCRYPTION: example #optional
    ports:
      - "8090:8090"
    volumes:
      - /path/to/data:/pb_data
      - /path/to/public:/pb_public #optional
    healthcheck: #optional (recommended) since v0.10.0
      test: wget --no-verbose --tries=1 --spider http://localhost:8090/api/health || exit 1
      interval: 5s
      timeout: 5s
      retries: 5
```

Cambia `/path/to/data` (y opcionalmente `/path/to/public`) por las carpetas de tu servidor donde se guardarán los datos.

Ejecutamos el comando:
```bash
docker-compose up -d
```

Verificamos que el contenedor se haya creado:
```bash
docker ps
```

Una vez en marcha, el panel de administración está disponible en `http://localhost:8090/_/`, donde podrás crear la cuenta de administrador y empezar a definir tus colecciones.
