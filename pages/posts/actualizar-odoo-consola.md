---
title: Actualizar Odoo desde la consola
date: 2022/12/18
description: Actualizar Odoo desde la consola.
tag: odoo
author: Marlon Falcon Hernandez
---

# Actualizar Odoo desde la consola

Para actualizar odoo desde la consola, debemos ejecutar el siguiente comando:

```
$ etc/init.d/odoo stop

$ su – odoo -s /bin/bash

$ odoo -d db14-spain -u sale_partner_vendor –stop-after-init –logfile=/dev/stdout

$ odoo -d db14-spain -u all –stop-after-init –logfile=/dev/stdout

$ /etc/init.d/odoo start
```
