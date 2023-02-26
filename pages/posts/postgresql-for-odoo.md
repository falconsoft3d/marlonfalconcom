---
title: ▷ PostgreSQL para desarrolladores de Odoo ERP.
date: 2023/02/26
description: ▷ PostgreSQL para desarrolladores de Odoo ERP.
tag: odoo, cursos
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