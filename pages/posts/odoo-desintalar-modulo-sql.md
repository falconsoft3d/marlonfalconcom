---
title: ▷ Desinstalar un módulo de Odoo con SQL
date: 2023/01/26
description: ▷ Cómo marcar un módulo de Odoo como desinstalado directamente en PostgreSQL cuando no es posible hacerlo desde la interfaz.
tag: odoo, erp
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Desinstalar un módulo de Odoo con SQL
A veces un módulo defectuoso impide que Odoo arranque o que podamos entrar a la interfaz para desinstalarlo de la forma habitual. En esos casos se puede cambiar su estado directamente en la base de datos, en la tabla `ir_module_module`, donde Odoo guarda la información de cada módulo.

**Importante:** haz una copia de seguridad de la base de datos antes de modificarla a mano.

Para desinstalar un módulo de Odoo con SQL, debemos seguir los siguientes pasos:

1. Ingresar a la base de datos de Odoo con el usuario postgres:
```sql
sudo -u postgres psql -d credit
```

2. Ejecutar el siguiente comando para saber el estado:
```sql
SELECT name,state FROM public.ir_module_module WHERE name='maintenance_pro'
```

3. Si el estado es "installed", ejecutar el siguiente comando para marcar el módulo como desinstalado:
```sql
UPDATE ir_module_module SET state = 'uninstalled' WHERE name='maintenance_pro'
```

4. Reiniciar el servicio de Odoo.

Ten en cuenta que este método solo cambia el estado del módulo: no elimina sus tablas, campos, vistas ni datos, como sí hace la desinstalación normal desde Odoo. Úsalo como recurso de emergencia y, si es posible, desinstala después el módulo correctamente desde la interfaz.
