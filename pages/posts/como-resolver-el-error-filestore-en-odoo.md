---
title: ▷ Como resolver el error filestore en Odoo
date: 2024/03/27
description: ▷ Como resolver el error filestore en Odoo
tag: odoo, erp, instalar
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Como resolver el error filestore en Odoo
## Que son los filestore en Odoo
Los filestore en Odoo son archivos que se almacenan en la base de datos de Odoo, estos archivos son los que se suben a la plataforma, como imagenes, pdf, etc.

```
src="/web/image/162-79c11de2/foto.jpg?access_token=ad017713-1760-4867-a4ba-5ac306cfe7bd"

el 162 es el id del registro de la tabla ir_attachment

el 79c11de2 son los 8 primeros caracteres del store_fname (excluidos los dos primeros que son la carpeta)

foto.jpg: se guarda en el campo name

 el ad017713-1760-4867-a4ba-5ac306cfe7bd es el contenido del campo access_token
```

Los problemas con los filestore en Odoo pueden ser varios, pero el más común es el error de permisos, cuando se suben archivos a Odoo y no se pueden visualizar, esto se debe a que el usuario que ejecuta Odoo no tiene permisos para leer los archivos que se han subido.

## Seguramente tienes problemas de permisos con el directorio filestore en Odoo
```
sudo chown -R odoo: /opt/odoo/.local/share/Odoo/filestore/base-datos-odoo/
```

## Tambien puedes vaciar la tabla parcial o totalmente
Parcial
```
sudo -u postgres psql -d base-datos-odoo
DELETE FROM ir_attachment WHERE create_date > '2024-03-25';
```
Total
```
sudo -u postgres psql -d base-datos-odoo
DELETE FROM ir_attachment;
```

