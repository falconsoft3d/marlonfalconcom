---
title: Odoo busqueda log
date: 2022/12/18
description: Odoo busqueda log
tag: odoo
author: Marlon Falcon Hernandez
---
# Odoo busqueda log

El comando grep es una herramienta muy útil para buscar información en archivos de texto. En este caso vamos a buscar información en el log de odoo.
````
grep "243028" /var/log/odoo/odoo-server.lo*
grep "Documento no enviado" /var/log/odoo/odoo-server.log
grep "'STATUS', u'0" /var/log/odoo/odoo-server.log
grep "242893" /var/log/odoo/odoo-server.log
````