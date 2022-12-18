---
title: Comandos Docker
date: 2022/12/18
description: Comandos Docker
tag: docker
author: Marlon Falcon Hernandez
---

# Comandos Docker

Instalar Docker en Ubuntu

```bash
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

Listar dockers

```bash
docker ps
```

Parar un docker
```bash
docker stop <id_docker>
```

Eliminar un docker
```bash
docker rm <id_docker>
```

Iniciar un docker
```bash
docker start <id_docker>
```

Abrir un docker
```bash
docker exec -it <id_docker> bash
```

Clonamos un docker y lo ejecutamos
```bash
git clone https://github.com/falconsoft3d/jamfnow-api
cd jamfnow-api
npm i
docker-compose build
docker-compose up -d
```

Ejecutar un docker
```bash
docker run -d -p 80:80 --name webserver nginx
```

Ejecutar un docker con volumen
```bash
docker run -d -p 80:80 --name webserver -v /var/www/html:/usr/share/nginx/html nginx
```

Ejecutar un docker con volumen y puerto
```bash
docker run -d -p 80:80 --name webserver -v /var/www/html:/usr/share/nginx/html nginx
```

Ejecutar un docker desdes una imagen en dockerhub
```bash
docker run -d -p 3014:3014 --restart=always  mfalconsoft/apialticephone
```

Otra forma
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

Subir un docker a dockerhub
```bash
docker login
docker tag mfalconsoft/odoo:10.0 mfalconsoft/odoo:10.0
docker push mfalconsoft/odoo:10.0
docker run -d  mfalconsoft/odoo:10.0
```

Crear un docker desde un Dockerfile
```bash
docker build -t mfalconsoft/odoo:10.0 .
```
