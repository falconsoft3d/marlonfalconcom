---
title: ▷ Errores y depuración (debug) en PyCharm
date: 2025/11/05
description: ▷ Dos ajustes de PyCharm que conviene revisar cuando los breakpoints no se activan o el depurador no funciona como se espera.
tag: pycharm, debug, errors
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Errores y depuración (debug) en PyCharm

El depurador de PyCharm permite detener la ejecución en puntos de interrupción (*breakpoints*), inspeccionar variables y avanzar paso a paso por el código. Si estás experimentando errores en PyCharm a la hora de depurar tu código, por ejemplo, que los *breakpoints* no se activan o que el código no se ejecuta como se espera, una posible solución es revisar la configuración del IDE y del depurador.

## 1. Revisa la asociación de tipos de fichero

Ve a la configuración de PyCharm (*Settings* → *Editor* → *File Types*) y asegúrate de que el patrón del tipo de fichero Python sea correcto. Debe ser `*.py` para los archivos de Python. Si los ficheros `.py` están asociados por error a otro tipo (por ejemplo, texto plano), PyCharm no los reconocerá como código Python y los *breakpoints* no funcionarán.

<Image
  src="/images/posts/001.png"
  alt="odoo-erp"
  width={1041}
  height={771}
  priority
  className="next-image"
/>

## 2. Desactiva la opción Gevent compatible

Comprueba también que la opción **Gevent compatible** (en *Settings* → *Build, Execution, Deployment* → *Python Debugger*) esté desactivada, ya que puede causar problemas con la depuración. Actívala solo si tu aplicación utiliza gevent.

<Image
  src="/images/posts/002.png"
  alt="odoo-erp"
  width={995}
  height={742}
  priority
  className="next-image"
/>

Después de cambiar estos ajustes, detén la sesión de depuración y vuelve a lanzarla para que se apliquen.
