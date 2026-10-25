---
title: ▷ Instalación de MongoDB en Docker
date: 2022/12/31
description: ▷ Cómo levantar MongoDB en un contenedor de Docker con docker-compose, con usuario root y volumen persistente.
tag: mongodb, docker, dockercompose
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de MongoDB en Docker
MongoDB es un sistema de base de datos de código abierto orientado a documentos y de uso general, pensado para aplicaciones modernas de alta escala. Está escrito en C++ y es multiplataforma. MongoDB es una base de datos NoSQL, lo que significa que no se basa en el modelo relacional de tablas y filas. En su lugar, almacena los datos en documentos similares a JSON (BSON) con un esquema dinámico, lo que hace que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.

Usar Docker es la forma más rápida de tener MongoDB funcionando en local o en un servidor sin instalarlo directamente en el sistema.

Creamos el fichero docker-compose.yml
```yaml
version: '3.7'
services:
  mongodb_container:
    image: mongo:latest
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: rootpassword2021
    ports:
      - 27017:27017
    volumes:
      - mongodb_data_container:/data/db

volumes:
  mongodb_data_container:
```

Ejecutamos el comando:
```bash
docker-compose up -d
```

Verificamos que el contenedor se haya creado:
```bash
docker ps
```

Otra forma de crear el contenedor es clonar un repositorio con el docker-compose ya preparado:
```bash
git clone https://github.com/docker-compose-marlon/docker-compose-mongodb
cd docker-compose-mongodb
docker-compose up -d
```

Con el contenedor en marcha, podemos conectarnos con la cadena `mongodb://root:rootpassword2021@localhost:27017/`. Recuerda cambiar la contraseña de ejemplo antes de usarlo en un servidor accesible desde Internet.
