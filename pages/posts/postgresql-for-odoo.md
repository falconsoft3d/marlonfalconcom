---
title: ▷ PostgreSQL para desarrolladores de Odoo ERP.
date: 2023/02/26
description: ▷ PostgreSQL para desarrolladores de Odoo ERP.
tag: odoo, postgresql
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ PostgreSQL para desarrolladores de Odoo ERP.

En este post veremos los comando más utilizados por desarrolladores de Odoo que utilizan PostgreSQL.

Si queremos incrementar las conexiones a la base de datos de PostgreSQL, debemos modificar el archivo de configuración de PostgreSQL.
```bash
su postgres
psql
SELECT count(*) FROM pg_stat_activity;
SELECT * FROM pg_stat_activity;
nano /etc/postgresql/14/main/postgresql.conf
nano /etc/odoo/odoo.conf
```

Listar las bases de datos
```bash
su postgres
psql
\l
```

Listar las tablas de una base de datos
```bash
su postgres
psql
\c odoo
\dt
```

Listar las columnas de una tabla
```bash
su postgres
psql
\c odoo
\d res_users
```

Listar las columnas de una tabla con sus tipos de datos
```bash
su postgres
psql
\c odoo
\d+ res_users
```

Listar los usuarios
```bash
su postgres
psql
SELECT * FROM res_users;
\dt
```

Cambiar la contraseña de un usuario Odoo 14 o superior
```bash
sudo -u postgres psql -d db10-chile-sii
update res_users set password='123' where login='admin';
```

Cambiar la contraseña de un usuario Odoo 13
```bash
sudo -u postgres psql -d db10-chile-sii
UPDATE res_users SET password='123', password_crypt='HASH' WHERE login='admin';
```

Instalar PostgreSQL
```bash
apt-get update && apt-get upgrade -y
apt-get install postgresql postgresql-contrib -y
```

Instalar PostgreSQL con Docker
```bash
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
docker pull postgres
docker run --name db -e POSTGRES_PASSWORD=secret -d postgres
```

Instalar pgAdmin4
```bash
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
docker pull dpage/pgadmin4
docker run -p 5050:80 --link db:db --name pgadmin4dev -e "PGADMIN_DEFAULT_EMAIL=mfalcon@ynext.cl"   -e "PGADMIN_DEFAULT_PASSWORD=secret" -d dpage/pgadmin4
```

Instalar PostgreSQL y pgAdmin4 con Docker
```bash
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
docker pull postgres
docker pull dpage/pgadmin4
docker run --name db -e POSTGRES_PASSWORD=secret -d postgres
```

## PostgreSQL Remoto desde local con PgAdmin
```bash
1- Accedemos a la siguiente ruta:
nano /etc/postgresql/10/main/postgresql.conf
listen_addresses = '*'

2- Modificamos el fichero g_hba.conf
nano /etc/postgresql/10/main/pg_hba.conf
local all all peer

# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
host    all             all             213.94.10.53/32         md5
host    all             all             137.184.129.0/32        md5
host    all             all             83.59.221.55/32         md5
host    all             all             172.17.0.3/32           md5

3- Si no tienes el password de postgresql lo puedes establecer de la siguiente forma
sudo -u postgres psql
\password postgres
\q
```

# Reiniciar PostgreSQL
```bash
/etc/init.d/postgresql restart
```