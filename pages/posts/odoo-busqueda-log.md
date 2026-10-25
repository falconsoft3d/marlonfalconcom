---
title: Odoo búsqueda en el log
date: 2022/12/18
description: Cómo usar el comando grep para buscar errores, identificadores o mensajes concretos dentro del log de Odoo.
tag: odoo
author: Marlon Falcon Hernandez
---
# Odoo: búsqueda en el log

El log de Odoo registra todo lo que ocurre en el servidor: peticiones, avisos, errores y trazas. Cuando el archivo crece mucho, revisarlo a mano es impracticable, y ahí es donde el comando `grep` resulta muy útil: permite filtrar solo las líneas que contienen un texto concreto.

## Ejemplos

Podemos buscar por un identificador de registro, por un mensaje de error o por cualquier cadena que aparezca en el log de Odoo:

````
grep "243028" /var/log/odoo/odoo-server.lo*
grep "Documento no enviado" /var/log/odoo/odoo-server.log
grep "'STATUS', u'0" /var/log/odoo/odoo-server.log
grep "242893" /var/log/odoo/odoo-server.log
````

En el primer ejemplo se usa el comodín `odoo-server.lo*` para buscar también en los archivos de log rotados.

## Consejos

- Añade la opción `-i` para que la búsqueda no distinga entre mayúsculas y minúsculas.
- Con `-n` se muestra el número de línea de cada coincidencia.
- Con `-C 5` verás 5 líneas de contexto antes y después de cada coincidencia, ideal para leer trazas de error completas.
