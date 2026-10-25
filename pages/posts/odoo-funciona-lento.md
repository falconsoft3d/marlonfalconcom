---
title: Causas por las que Odoo funciona lento
date: 2022/12/28
description: Las causas más habituales por las que Odoo funciona lento (RAM, disco, red, PostgreSQL, procesos pesados, módulos) y cómo revisarlas.
tag: odoo, lento, odoo-error
author: Marlon Falcon Hernandez
---
# Causas por las que Odoo funciona lento

Si de repente Odoo funciona lento, puede deberse a alguna de las siguientes causas:

1. El servidor no tiene suficiente memoria RAM o espacio en disco. Utiliza el comando `htop` o `top` para ver el uso de la memoria RAM y la CPU, y `df -h` para ver el espacio libre en disco.

2. El servidor no tiene suficiente ancho de banda. En ese caso debes revisar el ancho de banda de la red. Utiliza el comando `iftop` para ver el ancho de banda de la red.

3. Tienes una caída puntual en los servicios del servidor. Lo normal, según lo que veo, es que al menos una vez al año el servidor se caiga. Revisa el log del servidor para ver qué pasó.

4. Tu proyecto creció y PostgreSQL no soporta las conexiones entrantes. Revisa el archivo de configuración `postgresql.conf` y aumenta el número máximo de conexiones (`max_connections`).

5. Hay un compañero de trabajo ejecutando un proceso muy pesado que está consumiendo toda la memoria RAM y el disco. Te recomiendo que le pidas que haga ese proceso en otro horario en el que el servidor no esté tan ocupado. Por ejemplo, los ajustes de inventario.

6. Instalaste una aplicación que está afectando al servidor. Revisa el log del servidor para identificar el problema y resolverlo.

7. Tienes muchos usuarios. En ese caso te recomiendo rediseñar la arquitectura de tu servidor, por ejemplo, utilizando un servidor de aplicaciones y otro de base de datos, y ajustando el número de workers de Odoo.

8. Faltan librerías que son dependencias de las aplicaciones que instalaste.

# Contactar un consultor de Odoo ERP
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- YouTube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com
