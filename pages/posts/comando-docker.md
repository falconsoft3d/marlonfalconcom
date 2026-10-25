---
title: Comandos Docker
date: 2022/12/18
description: Chuleta con los comandos Docker más usados para instalar, ejecutar, gestionar y publicar contenedores e imágenes.
tag: docker
author: Marlon Falcon Hernandez
---

# Comandos Docker

Docker permite empaquetar una aplicación con todas sus dependencias en una imagen y ejecutarla en contenedores aislados, de forma idéntica en cualquier servidor. Esta es mi chuleta con los comandos que más utilizo.

## Instalar Docker en Ubuntu

```bash
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

## Listar contenedores

```bash
docker ps
```

Para ver también los contenedores detenidos, usa `docker ps -a`.

## Parar un contenedor
```bash
docker stop <id_docker>
```

## Eliminar un contenedor
```bash
docker rm <id_docker>
```

## Iniciar un contenedor
```bash
docker start <id_docker>
```

## Abrir una terminal dentro de un contenedor
```bash
docker exec -it <id_docker> bash
```

## Clonar un proyecto con docker-compose y ejecutarlo
```bash
git clone https://github.com/falconsoft3d/jamfnow-api
cd jamfnow-api
npm i
docker-compose build
docker-compose up -d
```

## Ejecutar un contenedor
```bash
docker run -d -p 80:80 --name webserver nginx
```

## Ejecutar un contenedor con volumen
```bash
docker run -d -p 80:80 --name webserver -v /var/www/html:/usr/share/nginx/html nginx
```

## Ejecutar un contenedor con volumen y puerto
```bash
docker run -d -p 80:80 --name webserver -v /var/www/html:/usr/share/nginx/html nginx
```

## Ejecutar un contenedor desde una imagen de Docker Hub
```bash
docker run -d -p 3014:3014 --restart=always  mfalconsoft/apialticephone
```

## Otro ejemplo con varios volúmenes
```bash
docker run -d --name=netdata \
  -p 19999:19999 \
  -v /etc/passwd:/host/etc/passwd:ro \
  -v /etc/group:/host/etc/group:ro \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  --cap-add SYS_PTRACE \
  --security-opt apparmor=unconfined \
  netdata/netdata
```

## Subir una imagen a Docker Hub
```bash
docker login
docker tag mfalconsoft/odoo:10.0 mfalconsoft/odoo:10.0
docker push mfalconsoft/odoo:10.0
docker run -d  mfalconsoft/odoo:10.0
```

## Crear una imagen desde un Dockerfile
```bash
docker build -t mfalconsoft/odoo:10.0 .
```

## Nota

En los comandos, `id_docker` se refiere al ID o al nombre del contenedor, que puedes obtener con `docker ps`. La opción `-d` ejecuta el contenedor en segundo plano, `-p` mapea un puerto del host al contenedor y `-v` monta un volumen.
