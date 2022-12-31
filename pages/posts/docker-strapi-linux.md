---
title: ▷ Instalación de Strapi con Docker en Linux
date: 2022/12/31
description: ▷ Instalación de Strapi con Docker en Linux
tag: docker, strapi, linux
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de Strapi con Docker en Linux
Strapi es un framework de código abierto para crear API REST y GraphQL. Es una plataforma de código abierto que permite crear, administrar y publicar contenido (textos, imágenes, videos, etc.) de forma sencilla, rápida y escalable. Strapi es una plataforma de código abierto que permite crear, administrar y publicar contenido (textos, imágenes, videos, etc.) de forma sencilla, rápida y escalable.

<Image
  src="/images/posts/strapi.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

---

# Instalamos Docker en Linux
```bash
apt-get update && apt-get upgrade -y
apt install docker.io docker-compose -y
```

# Creamos el directorio de trabajo
```bash
mkdir strapi
```

# Creamos el archivo docker-compose.yml
```bash
nano docker-compose.yml
```

# Copiamos el siguiente contenido
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

# Iniciamos el contenedor
```bash
docker-compose up -d
```

# Accedemos a la aplicación
```bash
http://localhost:1337/admin
```

# vemos el log
```bash
docker-compose logs -f
```

# Detenemos el contenedor
```bash
docker-compose down
```

# Eliminamos el contenedor
```bash
docker-compose rm
```

# Eliminamos la imagen
```bash
docker rmi strapi/strapi
```
