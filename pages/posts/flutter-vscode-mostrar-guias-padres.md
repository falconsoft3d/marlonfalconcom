---
title: ▷ Mostrar guías padres en VS Code para Flutter
date: 2022/12/29
description: ▷ Cómo activar en Visual Studio Code las guías que conectan los widgets padres e hijos en el código de Flutter.
tag: flutter, vscode
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Mostrar guías padres en VS Code para Flutter

En Flutter, la interfaz se construye anidando widgets dentro de otros, y en pantallas complejas es fácil perderse entre tantos niveles de paréntesis. La extensión de Dart para Visual Studio Code puede dibujar unas líneas guía que conectan cada widget padre con sus hijos, lo que hace mucho más fácil leer el árbol de widgets.

En este post te voy a mostrar cómo activar estas guías en VS Code para Flutter:

1. Vamos al menú de Configuración (*Settings*).
2. Buscamos `Flutter UI`.
3. Marcamos la opción que muestra las guías (*Flutter UI Guides*).
4. Reiniciamos VS Code.

<Image
  src="/images/posts/vscode-flutter.png"
  alt="odoo-migracione"
  width={1680}
  height={887}
  priority
  className="next-image"
/>

También puedes activarlas directamente en el fichero `settings.json` de VS Code con la opción `"dart.previewFlutterUiGuides": true`. Necesitas tener instaladas las extensiones de Dart y Flutter.
