---
title: Metodología de trabajo para nuevos desarrolladores Odoo
date: 2023/01/24
description: Metodología de trabajo para nuevos desarrolladores Odoo
tag: odoo
author: Marlon Falcon Hernandez
---

# Metodología de trabajo para nuevos desarrolladores Odoo

1. Se trabajara con Git y control de versiones. El programador utilizara su propia rama para realizar sus cambios.

Ejemplo:
- Si la rama es 16.0
- El programador creara una rama 16.MFH , donde MFH es las iniciales de su nombre.

Crear una rama:
````
git checkout -b branchname
````

Borrar una rama:
````
git checkout -d branchname
````

Cambiarnos de rama:
````
git checkout master
````

````
git checkout -b 16.MFH
git pull origin 16.MFH
git add .
git commit -m "Cambios en Rama"
git push origin 16.MFH
````

2. Control de trabajo
- Cuando inicia de presenta en su grupo y solicita las tareas si no tiene.
- Cada ves que termine una tarea pasa las capturas y actualiza su servidor de desarrollo pero con las ramas principales 14.0, 16.0.
- Antes de terminar pasa las capturas de como le fue.

3. No se sube nada a producción sin autorización del cliente y que sea probado por el consultor funcional.