---
title: Odoo PyCharm
date: 2022/12/18
description: Cómo configurar PyCharm para ejecutar y depurar Odoo, y cómo actualizar un módulo sobrescribiendo sus traducciones.
tag: odoo, pycharm
author: Marlon Falcon Hernandez
---

# Odoo PyCharm

PyCharm es uno de los IDE más utilizados para desarrollar en Python y resulta muy cómodo para trabajar con Odoo: permite lanzar el servidor, poner puntos de interrupción y depurar el código de nuestros módulos paso a paso.

## Configurando Odoo en PyCharm

Para ejecutar Odoo desde PyCharm hay que crear una configuración de ejecución de tipo Python (Run, Edit Configurations). Los valores principales son: el script `odoo-bin`, el parámetro con el archivo de configuración y el directorio de trabajo:
````
/home/marlon/odoo/odoo_10/odoo-bin
--config=/home/marlon/odoo/odoo_10/odoo.conf
/home/marlon/odoo/odoo_10
````

Con esto ya podrás iniciar Odoo con el botón Run o en modo Debug.

## Actualizar con traducción

Cuando modificamos los archivos de traducción de un módulo, Odoo no sobrescribe por defecto los términos ya cargados. Para forzarlo se usa la opción `--i18n-overwrite`, ya sea desde la consola o añadiéndola a los parámetros de la configuración de PyCharm:
````
odoo -d db16-bim -u base_bim_2 --i18n-overwrite --stop-after-init --logfile=/dev/stdout
-u base_bim_2 --i18n-overwrite
````
