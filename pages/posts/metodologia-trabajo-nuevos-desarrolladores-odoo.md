---
title: Metodología de trabajo para nuevos desarrolladores Odoo
date: 2023/01/24
description: Normas básicas de trabajo para desarrolladores Odoo que se incorporan al equipo, con uso de ramas en Git, control de tareas y paso a producción.
tag: odoo
author: Marlon Falcon Hernandez
---

# Metodología de trabajo para nuevos desarrolladores Odoo

Estas son las normas básicas que deben seguir los desarrolladores que se incorporan a un proyecto de Odoo, para mantener el código ordenado y evitar sorpresas en producción.

## 1. Git y control de versiones

Se trabajará con Git y control de versiones. Cada programador utilizará su propia rama para realizar sus cambios.

Ejemplo:
- Si la rama es 16.0,
- el programador creará una rama 16.MFH, donde MFH son las iniciales de su nombre.

Crear una rama:
````
git checkout -b branchname
````

Borrar una rama:
````
git checkout -d branchname
````

Nota: para borrar una rama local, el comando correcto es `git branch -d branchname`.

Cambiarnos de rama:
````
git checkout master
````

Flujo habitual de trabajo en la rama personal:
````
git checkout -b 16.MFH
git pull origin 16.MFH
git add .
git commit -m "Cambios en Rama"
git push origin 16.MFH
````

## 2. Control de trabajo
- Al iniciar la jornada, se presenta en su grupo y solicita tareas si no las tiene.
- Cada vez que termina una tarea, comparte las capturas y actualiza su servidor de desarrollo con las ramas principales (14.0, 16.0).
- Antes de terminar la jornada, comparte las capturas con el avance del día.

## 3. Paso a producción

No se sube nada a producción sin la autorización del cliente y sin que lo haya probado el consultor funcional.
