---
title: Ejecutar MySQL con Docker
date: 2023/01/12
description: Cómo ejecutar MySQL 5.7 en un contenedor Docker y administrarlo desde el navegador con phpMyAdmin.
tag: mysql, docker
author: Marlon Falcon Hernandez
---

# Ejecutar MySQL con Docker
import Image from 'next/image'

En este tutorial vamos a ver cómo ejecutar **MySQL** con **Docker** y cómo administrarlo con **phpMyAdmin**. Usar Docker evita instalar MySQL directamente en el sistema y permite tener varias versiones en paralelo, algo muy útil en entornos de desarrollo.

## 1. Descargar la imagen de MySQL

```bash
docker pull mysql:5.7
```

## 2. Ejecutar el contenedor de MySQL

```bash
docker run -d -p 3306:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=x1234567890 mysql:5.7
```

- `-d` ejecuta el contenedor en segundo plano.
- `-p 3306:3306` publica el puerto de MySQL en el equipo anfitrión.
- `--name mysql57` asigna un nombre al contenedor.
- **MYSQL_ROOT_PASSWORD** es la variable de entorno que define la contraseña del usuario root. Usa una contraseña propia.

## 3. Descargar phpMyAdmin

```bash
docker pull phpmyadmin/phpmyadmin:latest
```

## 4. Ejecutar phpMyAdmin

```bash
docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin
```

La opción `--link` conecta phpMyAdmin con el contenedor de MySQL usando el alias `db`. Sustituye `my-own-mysql` por el nombre que le diste a tu contenedor de MySQL (en este ejemplo, `mysql57`).

Después abre `http://localhost:8081` en el navegador e inicia sesión con el usuario `root` y la contraseña que definiste.

**Nota:** `--link` es una opción heredada en Docker. Para proyectos nuevos es preferible crear una red con `docker network create` o definir ambos servicios en un `docker-compose.yml`.
