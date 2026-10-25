---
title: Odoo ERP cambio partner
date: 2022/12/23
description: Recomendaciones para cambiar de partner implementador de Odoo ERP de forma segura - respaldos, accesos, auditoría de código y pruebas.
tag: odoo, erp
author: Marlon Falcon Hernandez
image: 'https://marlonfalcon.com/images/posts/cambio-partner.png'
---
import Image from 'next/image'

# Odoo cambio partner

<Image
  src="/images/posts/cambio-partner.png"
  alt="odoo-migracione"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

Cuando hacemos un proyecto de implementación de Odoo ERP puede que quieras cambiar el partner implementador de Odoo ERP por múltiples razones. Para ello te dejo las siguientes recomendaciones:

# Recomendaciones
1. Asegúrate de que el nuevo partner tenga experiencia en Odoo ERP.
2. Comunica a Odoo que vas a cambiar de partner.
3. Crea un respaldo de toda la información: base de datos, archivos, etc.
4. Revoca o cambia los accesos del partner anterior.
5. Cambia las contraseñas de los usuarios.
6. Cambia las contraseñas de la base de datos, contraseña maestra, root y otros.
7. Haz una consultoría exprés para evaluar si es necesario reprogramar todo el código o solo migrarlo. En este punto te recomiendo, antes de iniciar, hacer una auditoría completa de todo el código para poder tomar la mejor decisión.
8. Solicita un documento donde se describan todos los procesos nuevos implementados por el nuevo partner.
9. Detén todos los cron jobs (acciones planificadas) del Odoo anterior.
10. Cambia los DNS del dominio.
11. Compra las licencias.
12. Antes de salir a producción trata de probar todos los procesos nuevos implementados por el nuevo partner.
13. Cierra los canales de comunicación con el partner anterior.

# Cambio de partner
Si necesitas cambiarte de partner no dudes en contactarme. [Contactar a Marlon](/contacto/).