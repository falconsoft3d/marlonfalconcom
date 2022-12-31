---
title: ▷ Instalación de MongoDB en Docker
date: 2022/12/31
description: ▷ Instalación de MongoDB en Docker
tag: mongodb, docker, dockercompose
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de MongoDB en Docker
MongoDB es un sistema de base de datos de código abierto orientado a documentos y de uso general que admite las aplicaciones modernas de alta escala. MongoDB está escrito en C ++ y es multiplataforma. MongoDB es un sistema de base de datos de documentos NoSQL, lo que significa que no se basa en el modelo relacional de tablas y filas. En cambio, MongoDB almacena datos en documentos JSON con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.

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

Ejecutamos el comando
```bash
docker-compose up -d
```

Verificamos que el contenedor se haya creado
```bash
docker ps
```

Otra forma de crear el contenedor es con el siguiente comando
```bash
git clone https://github.com/docker-compose-marlon/docker-compose-mongodb
cd docker-compose-mongodb
docker-compose up -d
```