---
title: ▷ Respaldo de Odoo por consola
date: 2023/02/12
description: ▷ Cómo respaldar y restaurar una base de datos de Odoo y su carpeta filestore desde la consola con pg_dump, pg_restore y scp.
tag: odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Respaldo de Odoo por consola

Un respaldo completo de Odoo tiene dos partes: la **base de datos** de PostgreSQL, donde están todos los registros, y la carpeta **filestore**, donde Odoo guarda los archivos adjuntos y las imágenes. Si falta alguna de las dos, la restauración quedará incompleta.

## Crear el respaldo

1. Creamos el archivo de respaldo de la base de datos.
```
pg_dump -U odoo -h localhost -p 5432 credit > credit.dump
```

2. Copiamos la carpeta filestore de la base de datos.
```
scp -r
/var/lib/odoo/.local/share/Odoo/filestore/db14-credit-ven/
```

## Restaurar el respaldo

Cuando tengamos el archivo .dump de la base de datos, podemos restaurarla en cualquier servidor de Odoo. Para ello, debemos seguir los siguientes pasos:

1. Crear una base de datos en el servidor de Odoo donde vamos a restaurar el respaldo.
```
psql postgres
CREATE DATABASE "db14credit-demo";
```

2. Restaurar la base de datos.
```
pg_restore -d db14credit-demo credit_2023-02-12_19-28-06.dump
```

3. Copiar la carpeta filestore al servidor de destino.
```
scp -r root@143.120.152.112:/var/lib/odoo/.local/share/Odoo/filestore/db14-credit-ven/* .
dump
/var/lib/odoo/.local/share/Odoo/filestore/db14-credit-ven/
```

## Nota

La carpeta filestore debe quedar dentro del directorio filestore de Odoo con el **mismo nombre que la nueva base de datos**, y el usuario del sistema que ejecuta Odoo debe ser su propietario. Ten en cuenta también que `pg_restore` trabaja con volcados en formato personalizado (`pg_dump -Fc`); si el volcado está en texto plano, se restaura con `psql`.
