---
title: ▷ Instalación de PocketBase
date: 2022/12/31
description: ▷ Instalación de PocketBase
tag: pocketbase, docker, dockercompose
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de PocketBase
PocketBase es una aplicación de código abierto para la gestión de bases de datos. Es una aplicación web que se ejecuta en el navegador y se puede usar en cualquier dispositivo con acceso a Internet. PocketBase es una aplicación de código abierto para la gestión de bases de datos. Es una aplicación web que se ejecuta en el navegador y se puede usar en cualquier dispositivo con acceso a Internet.

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

Ejecutamos el comando
```bash
docker-compose up -d
```

Verificamos que el contenedor se haya creado
```bash
docker ps
```