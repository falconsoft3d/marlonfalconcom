---
title: Comandos de Docker Swarm
date: 2022/12/18
description: Chuleta con los comandos básicos de Docker Swarm para iniciar un clúster, desplegar servicios y stacks, escalarlos y eliminarlos.
tag: docker,swarn
author: Marlon Falcon Hernandez
---

# Comandos de Docker Swarm

Docker Swarm es el modo de orquestación integrado en Docker. Permite agrupar uno o varios servidores en un clúster y desplegar servicios con réplicas, balanceo de carga y actualizaciones sin necesidad de herramientas externas. Estos son los comandos que más uso en el día a día.

## Iniciar Docker Swarm

```bash
docker swarm init
```

## Listar los servicios

```bash
docker service ls
```

## Ejecutar un servicio desde una imagen

```bash
docker service create --name apialticephone \
                        --replicas 1 \
                        --publish published=3014,target=3014 \
                        mfalconsoft/apialticephone
```

## Ejecutar un servicio desde un docker-compose

```bash
docker stack deploy nodeapp -c docker-compose.yml
```

## Otros comandos

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

- `docker stack ls`, `docker stack services` y `docker stack ps`: listan los stacks, sus servicios y sus tareas (contenedores).
- `docker service scale`: cambia el número de réplicas de un servicio.
- `docker stack rm`: elimina un stack completo.
- `docker swarm leave --force`: saca el nodo del clúster (en un nodo manager hace falta `--force`).

## Nota

`docker stack deploy` no construye imágenes: por eso primero se ejecuta `docker-compose build` y después se despliega el stack.
