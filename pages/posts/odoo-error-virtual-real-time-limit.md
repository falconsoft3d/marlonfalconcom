---
title: Error virtual real time limit (178/120s) reached
date: 2022/12/28
description: Cómo solucionar en Odoo el error "virtual real time limit reached" aumentando el parámetro limit_time_real en el archivo de configuración.
tag: odoo, especialista, error, odoo-error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Error virtual real time limit (178/120s) reached

Cuando Odoo se ejecuta con workers (modo multiproceso), cada petición tiene un tiempo máximo de ejecución definido por el parámetro `limit_time_real` (por defecto, 120 segundos). Si una operación tarda más, como una importación grande, un informe pesado o un proceso masivo, Odoo la interrumpe y en el log aparece el error **virtual real time limit (178/120s) reached**.

## Solución

Si en algún momento te pasa este error, puedes probar lo siguiente. Abrimos el archivo de configuración:
```
nano /etc/odoo/odoo.conf
```
Y modificamos (o añadimos) la siguiente línea:
```
limit_time_real = 1000
```

Reiniciamos el servicio de Odoo y ya no debería aparecer el error.

**Nota:** aumentar el límite es una solución rápida, pero si una operación tarda tanto conviene revisar también si se puede optimizar o ejecutar como tarea programada.
