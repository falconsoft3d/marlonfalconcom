---
title: Actualizar Odoo desde la consola
date: 2022/12/18
description: Cómo actualizar uno o todos los módulos de una base de datos de Odoo desde la línea de comandos.
tag: odoo
author: Marlon Falcon Hernandez
---

# Actualizar Odoo desde la consola

Cuando modificamos el código de un módulo (por ejemplo, después de un `git pull` o de cambiar vistas y modelos), Odoo necesita actualizar ese módulo en la base de datos para aplicar los cambios. Hacerlo desde la consola es más rápido que desde la interfaz y, además, nos permite ver en el log cualquier error que se produzca durante la actualización.

## Pasos

Para actualizar Odoo desde la consola, debemos ejecutar los siguientes comandos:

```
$ etc/init.d/odoo stop

$ su – odoo -s /bin/bash

$ odoo -d db14-spain -u sale_partner_vendor –stop-after-init –logfile=/dev/stdout

$ odoo -d db14-spain -u all –stop-after-init –logfile=/dev/stdout

$ /etc/init.d/odoo start
```

1. **Detenemos el servicio de Odoo** para que no haya otra instancia trabajando sobre la base de datos.
2. **Cambiamos al usuario `odoo`**, que es el propietario de la instalación.
3. **Actualizamos un módulo concreto** con `-u nombre_del_modulo` sobre la base de datos indicada con `-d`.
4. **O actualizamos todos los módulos** con `-u all`. Este proceso tarda bastante más, así que úsalo solo cuando sea necesario.
5. **Volvemos a arrancar el servicio** de Odoo.

## Notas

- La opción `--stop-after-init` hace que Odoo se cierre al terminar la actualización, en lugar de quedarse escuchando peticiones.
- Con `--logfile=/dev/stdout` vemos el log directamente en la terminal.
- Antes de actualizar en producción, haz siempre una copia de seguridad de la base de datos y del filestore.
