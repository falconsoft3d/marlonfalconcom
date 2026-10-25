---
title: Odoo Error could not execute command lessc
date: 2022/12/18
description: Cómo resolver en Odoo el error "could not execute command lessc" instalando el compilador de LESS en el servidor.
tag: odoo, odoo-error
author: Marlon Falcon Hernandez
---
# Odoo Error could not execute command lessc

Las versiones antiguas de Odoo (por ejemplo, la 9 o la 10) usan hojas de estilo escritas en LESS, que el servidor compila a CSS mediante el comando `lessc`. Si ese compilador no está instalado en el sistema, al cargar la interfaz web aparece el error **could not execute command lessc** y la página se muestra sin estilos.

## Solución

En mi caso resolví el error instalando el paquete `node-less`, que incluye el comando `lessc`:

````
apt-get install node-less
````

Después de instalarlo, reinicia el servicio de Odoo y recarga el navegador (idealmente vaciando la caché) para que los estilos se vuelvan a generar.

**Nota:** en las versiones más recientes de Odoo los estilos se escriben en SCSS y el error equivalente suele estar relacionado con `sassc`, no con `lessc`.
