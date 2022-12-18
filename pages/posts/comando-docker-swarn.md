---
title: Comandos docker swarn
date: 2022/12/18
description: Comandos docker swarn
tag: docker,swarn
author: Marlon Falcon Hernandez
---

# CComandos docker swarn

Iniciamos el docker swarn

```bash
docker swarm init
```

Listamos los servicios
```bash
docker service ls
```

Ejecutamos un servicio desde una  imagen
```bash
docker service create --name apialticephone \
                        --replicas 1 \
                        --publish published=3014,target=3014 \
                        mfalconsoft/apialticephone
```

Ejecutamos un servicio desde un docker-compose
```bash
docker stack deploy nodeapp -c docker-compose.yml
```

Otros comandos
```bash
docker swarm init
docker-compose build
docker stack deploy nodeapp -c docker-compose.yml
docker stack ls
docker stack services nodeapp
docker stack ps nodeapp
docker service scale nodeapp_web=4
docker service ls
docker service ps nodeapp_web
docker stack rm nodeapp
docker swarm leave --force
```
