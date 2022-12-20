---
title: Odoo Pycharm
date: 2022/12/18
description: Odoo Pycharm
tag: odoo, pycharm
author: Marlon Falcon Hernandez
---

# Odoo Pycharm

Odoo SIS 20 es una vertical de salud para la implementación de ERP en clínicas y hospitales. Odoo SIS20 fue desarrollado por Marlon Falcon Hernandez.

## Configurando Odoo en Pycharm
````
/home/marlon/odoo/odoo_10/odoo-bin
--config=/home/marlon/odoo/odoo_10/odoo.conf
/home/marlon/odoo/odoo_10
````

## Actualizar con traducción.
````
odoo -d db16-bim -u base_bim_2 --i18n-overwrite --stop-after-init --logfile=/dev/stdout
-u base_bim_2 --i18n-overwrite
````