---
title: PostgreSQL remoto desde local con pgAdmin
date: 2023/01/13
description: Cómo configurar un servidor PostgreSQL para aceptar conexiones remotas y conectarte a él desde tu equipo local con pgAdmin.
tag: postgresql, pgadmin
author: Marlon Falcon Hernandez
---

# PostgreSQL remoto desde local con pgAdmin

Por defecto, PostgreSQL solo acepta conexiones desde el propio servidor. Si queremos administrar la base de datos desde nuestro equipo con pgAdmin, hay que indicarle que escuche en otras interfaces de red y autorizar las IP desde las que nos vamos a conectar.

En este ejemplo se usa PostgreSQL 10; si tienes otra versión, cambia el número en las rutas.

1. Accedemos al archivo de configuración y modificamos la línea `listen_addresses` para que PostgreSQL escuche en todas las interfaces:

```bash
nano /etc/postgresql/10/main/postgresql.conf
listen_addresses = '*'
```

2. Modificamos el fichero pg_hba.conf, que controla qué equipos y usuarios pueden conectarse:
```bash
nano /etc/postgresql/10/main/pg_hba.conf 
local all all peer
```

Añadimos una línea `host` por cada IP desde la que nos queremos conectar, con el método de autenticación `md5` (usuario y contraseña):

```bash
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             213.94.10.53/32         md5
host    all             all             137.184.129.0/32        md5
host    all             all             83.59.221.55/32         md5
host    all             all             172.17.0.3/32           md5
```

3. Si no tienes la contraseña del usuario postgres, la puedes establecer de la siguiente forma:
```bash
sudo -u postgres psql
\password postgres
\q
```

4. Reiniciamos PostgreSQL para aplicar los cambios (por ejemplo, con `sudo systemctl restart postgresql`) y comprobamos que el puerto 5432 esté abierto en el firewall del servidor.

5. Por último, en pgAdmin creamos un nuevo servidor indicando la IP del servidor, el puerto 5432, el usuario y la contraseña.

**Consejo de seguridad:** autoriza solo las IP que realmente necesites y evita abrir el acceso a cualquier dirección (`0.0.0.0/0`).
