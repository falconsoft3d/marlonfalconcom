---
title: Docker crear ftp
date: 2022/12/18
description: Docker crear ftp
tag: docker, swarn, ftp
author: Marlon Falcon Hernandez
---

# Docker crear ftp
FTP es un protocolo de transferencia de archivos que permite la transferencia de archivos entre dos computadoras conectadas a una red. El protocolo FTP se utiliza para transferir archivos entre dos computadoras conectadas a Internet. El protocolo FTP se utiliza para transferir archivos entre dos computadoras conectadas a Internet. El protocolo FTP se utiliza para transferir archivos entre dos computadoras conectadas a Internet.

Creamos el fichero docker-compose.yml

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

Lo ejecutamos con Docker
```bash
git clone https://github.com/docker-compose-marlon/docker-compose-ftp.git
cd docker-compose-ftp
docker-compose up -d
```

Lo ejecutamos con Docker Swarm
```bash
docker swarm init
docker-compose build
docker stack deploy ftpapp -c docker-compose.yml
docker stack ls
```


