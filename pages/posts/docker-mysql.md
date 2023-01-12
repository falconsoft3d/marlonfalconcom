---
title: Ejecutar MySQL con Docker
date: 2023/01/12
description: Ejecutar MySQL con Docker
tag: mysql, docker
author: Marlon Falcon Hernandez
---

# Ejecutar MySQL con Docker
import Image from 'next/image'

En este tutorial vamos a ver como ejecutar **MySQL** con **Docker**. **MYSQL_ROOT_PASSWORD** es el parametro que define la contraseña del usuario root. Para lo cual ejecutaremos los siguientes comandos:

```bash
docker pull mysql:5.7
```

```bash
docker run -d -p 3306:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=x1234567890 mysql:5.7
```

```bash
docker pull phpmyadmin/phpmyadmin:latest
```

```bash
docker run --name my-own-phpmyadmin -d --link my-own-mysql:db -p 8081:80 phpmyadmin/phpmyadmin
```