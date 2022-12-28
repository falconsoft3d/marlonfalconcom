---
title: Error virtual real time limit (178/120s) reached
date: 2022/12/28
description: Error virtual real time limit (178/120s) reached
tag: odoo, especialista, error, odoo-error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Error virtual real time limit (178/120s) reached

Si en algún momento te pasa este error : virtual real time limit (178/120s) reached, puedes probar haciendo lo siguiente, vamos al conf: 
```
nano /etc/odoo/odoo.conf
```
Y modificamos la siguiente línea: 
```
limit_time_real = 1000
```

Reiniciamos el servicio de odoo y ya no debería aparecer el error.