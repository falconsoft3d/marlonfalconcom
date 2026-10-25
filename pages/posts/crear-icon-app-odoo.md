---
title: ▷ Cómo crear un icono para tu app de Odoo
date: 2023/01/12
description: ▷ Crea el icono de tu módulo de Odoo con una herramienta web basada en Font Awesome, eligiendo icono y colores.
tag: odoo, icon, app, design
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Cómo crear un icono para tu app de Odoo

Cada módulo de Odoo que aparece como aplicación en el menú principal necesita un icono. Si necesitas crear uno para tu app, puedes usar la siguiente web, que te permite generarlo de forma rápida. Esta aplicación utiliza los iconos de la librería Font Awesome, por lo que puedes usar cualquiera de sus iconos y, además, cambiar el color del icono y del fondo.

Enlace: https://spilymp.github.io/ibo/

<Image
  src="/images/posts/odoo-icon.png"
  alt="odoo-migracione"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## ¿Dónde se coloca el icono?

Una vez descargado, guarda la imagen como `icon.png` dentro de la carpeta `static/description/` de tu módulo. Odoo la mostrará automáticamente en el listado de aplicaciones y en el menú principal cuando instales o actualices el módulo.
