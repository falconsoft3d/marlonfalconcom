---
title: ▷ Instalación de Strapi con Docker en Linux
date: 2022/12/31
description: ▷ Cómo instalar Strapi con Docker Compose en Linux, junto a PostgreSQL y pgAdmin, y los comandos básicos para gestionarlo.
tag: docker, strapi, linux
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de Strapi con Docker en Linux
Strapi es un CMS *headless* de código abierto basado en Node.js que permite crear API REST y GraphQL. Desde su panel de administración puedes crear, administrar y publicar contenido (textos, imágenes, videos, etc.) de forma sencilla, rápida y escalable, y consumirlo después desde cualquier frontend o aplicación móvil.

En este post lo instalamos con Docker Compose en Linux, junto a una base de datos PostgreSQL y pgAdmin para administrarla.

<Image
  src="/images/posts/strapi.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

---

## Instalamos Docker en Linux
```bash
apt-get update && apt-get upgrade -y
apt install docker.io docker-compose -y
```

## Creamos el directorio de trabajo
```bash
mkdir strapi
```

## Creamos el archivo docker-compose.yml

Dentro del directorio `strapi` creamos el archivo:
```bash
nano docker-compose.yml
```

## Copiamos el siguiente contenido

El archivo define tres servicios: Strapi (puerto 1337), PostgreSQL como base de datos y pgAdmin (puerto 5050) para administrarla. Cambia las contraseñas de ejemplo por unas propias.
```bash
version: '3'
services:
  strapi:
    image: strapi/strapi
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_NAME: strapi
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
    volumes:
      - ./app:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - postgres

  postgres:
    image: postgres
    environment:
      POSTGRES_DB: strapi
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: strapi
    volumes:
      - ./data:/var/lib/postgresql/data

  pgadmin:
    container_name: pgadmin_container
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: 'mfalconsoft@gmail.com'
      PGADMIN_DEFAULT_PASSWORD: 'pass'

    ports:
      - '5050:80'
    depends_on:
      - postgres
```

## Iniciamos los contenedores
```bash
docker-compose up -d
```

## Accedemos a la aplicación

La primera vez que entres al panel te pedirá crear el usuario administrador:
```bash
http://localhost:1337/admin
```

## Vemos el log
```bash
docker-compose logs -f
```

## Detenemos los contenedores
```bash
docker-compose down
```

## Eliminamos los contenedores
```bash
docker-compose rm
```

## Eliminamos la imagen
```bash
docker rmi strapi/strapi
```

**Nota:** la imagen `strapi/strapi` corresponde a Strapi v3. Para las versiones actuales de Strapi, la documentación oficial recomienda crear el proyecto con `npx create-strapi-app` y construir tu propia imagen de Docker a partir de él.
