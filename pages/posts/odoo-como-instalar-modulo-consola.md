---
title: ▷ Cómo instalar un módulo de Odoo desde la consola
date: 2023/01/12
description: ▷ Cómo instalar un módulo de Odoo desde la línea de comandos usando el parámetro -i y la opción --stop-after-init.
tag: odoo, desarrolloodoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo instalar un módulo de Odoo desde la consola

Normalmente los módulos de Odoo se instalan desde el menú Aplicaciones, pero en ocasiones es más práctico hacerlo desde la consola: por ejemplo, en un servidor sin acceso a la interfaz, en scripts de despliegue o cuando la instalación falla desde el navegador y queremos ver el log completo.

## Pasos

Primero accedemos con el usuario del sistema que ejecuta Odoo (normalmente `odoo`) y después lanzamos el comando de instalación:

```
$ su - odoo -s /bin/bash
$ odoo -d credit -i credit_integration --stop-after-init --logfile=/dev/stdoutsu - odoo -s /bin/bash
```

Explicación de los parámetros:

- `-d credit`: nombre de la base de datos donde se instalará el módulo.
- `-i credit_integration`: nombre técnico del módulo que queremos instalar. Se pueden indicar varios separados por comas.
- `--stop-after-init`: detiene Odoo cuando termina la instalación, en lugar de dejar el servidor en marcha.
- `--logfile=/dev/stdout`: muestra el log directamente en la consola para poder ver posibles errores.

Si en lugar de instalar quieres actualizar un módulo ya instalado, utiliza `-u` en vez de `-i`.
