---
title: ▷ Desinstalar un módulo de odoo con SQL
date: 2023/01/26
description: ▷ Desinstalar un módulo de odoo con SQL
tag: odoo, erp
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Desinstalar un módulo de odoo con SQL
Para desinstalar un módulo de odoo con SQL, debemos seguir los siguientes pasos:

1. Ingresar a la base de datos de odoo con el usuario postgres

2. Ejecutar el siguiente comando para saber el estado:
```sql
SELECT name,state FROM public.ir_module_module WHERE name='maintenance_pro'
```

3. Si el estado es "installed", ejecutar el siguiente comando para desinstalar el módulo:
```sql
UPDATE ir_module_module SET state = 'uninstalled' WHERE name='maintenance_pro'
```