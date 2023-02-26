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


