---
title: ▷ Cómo resolver el error filestore en Odoo
date: 2024/03/27
description: ▷ Qué es el filestore de Odoo y cómo solucionar los errores más comunes - permisos del directorio y ficheros adjuntos que faltan.
tag: odoo, erp, instalar
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo resolver el error filestore en Odoo

## Qué es el filestore en Odoo

El filestore es el directorio donde Odoo guarda los archivos que se suben a la plataforma, como imágenes, PDF, etc. Los ficheros se almacenan en disco, mientras que en la base de datos, en la tabla `ir_attachment`, se guarda la información de cada adjunto (nombre, tipo, ruta dentro del filestore, etc.).

```
src="/web/image/162-79c11de2/foto.jpg?access_token=ad017713-1760-4867-a4ba-5ac306cfe7bd"

el 162 es el id del registro de la tabla ir_attachment

el 79c11de2 son los 8 primeros caracteres del store_fname (excluidos los dos primeros que son la carpeta)

foto.jpg: se guarda en el campo name

 el ad017713-1760-4867-a4ba-5ac306cfe7bd es el contenido del campo access_token
```

Este es un ejemplo del error que vemos en el log de Odoo.
```
/opt/odoo/.local/share/Odoo/filestore/db-odoo/90/901066e935e94309d81279258730bce58ca6c06e'
2024-03-27 07:35:20,734 11669 INFO db-odoo openerp.addons.base.ir.ir_attachment: _file_write writing /opt/odoo/.local/share/Odoo/filestore/db-odoo/9d/9ddacc575682dad5678af3377abe2c7f2d9d07e9
Traceback (most recent call last):
```

Los problemas con el filestore en Odoo pueden ser varios, pero el más común es el error de permisos: se suben archivos a Odoo y luego no se pueden visualizar porque el usuario que ejecuta Odoo no tiene permisos para leer o escribir en el directorio.

## Seguramente tienes problemas de permisos con el directorio filestore en Odoo

Asignamos el directorio al usuario que ejecuta Odoo:

```
sudo chown -R odoo: /opt/odoo/.local/share/Odoo/filestore/base-datos-odoo/
```

## Faltan ficheros en el filestore

Otro error común es que falten ficheros, por ejemplo, después de restaurar una base de datos sin su filestore o de copiar solo una parte. En ese caso, la tabla `ir_attachment` apunta a archivos que no existen en disco.

**Importante:** antes de borrar nada, haz una copia de seguridad de la base de datos. Los adjuntos eliminados no se pueden recuperar.

### Vaciar la tabla parcialmente

Si conocemos la fecha de los archivos:

```
sudo -u postgres psql -d base-datos-odoo
DELETE FROM ir_attachment WHERE create_date > '2024-03-25';
```

### Vaciar la tabla totalmente

Si no conocemos la fecha de los archivos:

```
sudo -u postgres psql -d base-datos-odoo
DELETE FROM ir_attachment;
```

Ten en cuenta que esta opción elimina todos los adjuntos de la base de datos (documentos, imágenes, etc.). Los ficheros de estilos y JavaScript (assets) Odoo los vuelve a generar automáticamente, pero los documentos subidos por los usuarios se pierden, así que úsala solo como último recurso.
