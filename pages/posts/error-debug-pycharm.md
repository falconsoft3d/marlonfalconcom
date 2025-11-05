---
title: ▷ Errors y Debug en PyCharm
date: 2025/11/05
description: ▷ Errors y Debug en PyCharm
tag: pycharm, debug, errors
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Errors y Debug en PyCharm
Si estas experimentando errores en PyCharm a la hora de depurar tu código, una posible solución es verificar la configuración del depurador. Ya sea los breackpoints no se están activando o el código no se está ejecutando como se espera.

Ve a configuración de PyCharm y asegúrate que la mascara para el tipo de fichero este correcta. Debe ser .py para archivos de Python.

<Image
  src="/images/posts/001.png"
  alt="odoo-erp"
  width={1041}
  height={771}
  priority
  className="next-image"
/>

Tambien que esta opción este desactivada. ( Gevent Compatible ), esto puede causar problemas con la depuración.
<Image
  src="/images/posts/002.png"
  alt="odoo-erp"
  width={995}
  height={742}
  priority
  className="next-image"
/>
