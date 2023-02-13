---
title: ▷ Respaldo de Odoo por consola
date: 2023/02/12
description: ▷ Respaldo de Odoo por consola
tag: odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Respaldo de Odoo por consola
Cuando tengamos el archivo .dump de la base de datos, podemos restaurarla en cualquier servidor de Odoo. Para ello, debemos seguir los siguientes pasos:

1. Crear una base de datos en el servidor de Odoo donde vamos a restaurar la base de datos.
´´´
psql postgres
CREATE DATABASE "db14credit-demo";
´´´

2. Restaurar la base de datos.
´´´
pg_restore -d db14credit-demo credit_2023-02-12_19-28-06.dump
´´´

3. Copiarse el archivo de respaldo de la carpeta filestore.
´´´
scp -r root@143.120.152.112:/var/lib/odoo/.local/share/Odoo/filestore/db14-credit-ven/* .
dump
/var/lib/odoo/.local/share/Odoo/filestore/db14-credit-ven/
´´´