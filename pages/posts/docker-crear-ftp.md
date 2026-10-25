---
title: Docker crear FTP
date: 2022/12/18
description: Cómo levantar un servidor FTP con Docker y Docker Compose usando la imagen pure-ftpd, y desplegarlo también con Docker Swarm.
tag: docker, swarn, ftp
author: Marlon Falcon Hernandez
---

# Docker crear FTP

FTP (*File Transfer Protocol*) es un protocolo que permite transferir archivos entre dos equipos conectados a una red, por ejemplo entre tu ordenador y un servidor. Aunque hoy existen alternativas más seguras como SFTP, FTP sigue siendo muy utilizado para intercambiar ficheros con clientes como FileZilla.

Con Docker podemos tener un servidor FTP funcionando en pocos minutos, sin instalar nada en el sistema anfitrión. En este ejemplo usamos la imagen `stilliard/pure-ftpd`, basada en el servidor Pure-FTPd.

## Creamos el fichero docker-compose.yml

```yml
version: '3'
services:
  ftpd_server:
    image: stilliard/pure-ftpd
    container_name: pure-ftpd
    ports:
      - "21:21"
      - "30000-30009:30000-30009"
    volumes:
      - "/folder_on_disk/data:/home/username/"
      - "/folder_on_disk/passwd:/etc/pure-ftpd/passwd"
    environment:
      PUBLICHOST: "localhost"
      FTP_USER_NAME: user
      FTP_USER_PASS: ftpasasa1221
      FTP_USER_HOME: /home/username
    restart: always
```

Puntos importantes de la configuración:

- El puerto `21` es el de control de FTP y el rango `30000-30009` se usa para las conexiones pasivas de datos.
- Los volúmenes guardan en disco los ficheros subidos y la base de datos de usuarios, para que no se pierdan al recrear el contenedor.
- `PUBLICHOST` debe ser la IP o el dominio público del servidor si vas a conectarte desde fuera de la máquina.
- `FTP_USER_NAME`, `FTP_USER_PASS` y `FTP_USER_HOME` definen el usuario inicial. Cambia la contraseña por una propia.

## Lo ejecutamos con Docker Compose

```bash
git clone https://github.com/docker-compose-marlon/docker-compose-ftp.git
cd docker-compose-ftp
docker-compose up -d
```

## Lo ejecutamos con Docker Swarm

```bash
docker swarm init
docker-compose build
docker stack deploy ftpapp -c docker-compose.yml
docker stack ls
```

Una vez en marcha, puedes conectarte con cualquier cliente FTP indicando el host, el puerto 21 y el usuario y la contraseña configurados.
