---
title: Comandos para trabajar con Odoo Sh
date: 2022/12/18
description: Comandos básicos para trabajar desde la terminal de Odoo.sh, reiniciar el servicio, consultar el log y localizar tus addons.
tag: odoo, odoosh
author: Marlon Falcon Hernandez
---
# Comandos para trabajar con Odoo Sh

import Image from 'next/image'

Odoo.sh es la plataforma en la nube de Odoo para alojar y desplegar proyectos con módulos personalizados. Cada rama dispone de una terminal web (shell) desde la que se pueden ejecutar comandos útiles para el día a día. Estos son los que más utilizo.

## Reiniciar Odoo Sh
````
odoosh-restart
````

## Actualizar un módulo en Odoo Sh
````
odoosh-restart
````

## Mostrar el log de Odoo Sh

Muy útil para ver en tiempo real los errores y las peticiones que recibe el servidor:
````
tail -f logs/odoo.log
````

## Carpeta que guarda los addons

Tus módulos personalizados (el contenido de tu repositorio) se encuentran en:
````
/src/user
````
