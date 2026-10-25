---
title: Plantilla básica de Python
date: 2022/12/18
description: Plantilla básica para scripts de Python con una función main que organiza los pasos de un proceso.
tag: python
author: Marlon Falcon Hernandez
---

# Plantilla básica de Python

Cuando escribo scripts de Python para tareas puntuales (por ejemplo, migraciones de datos), conviene partir de una estructura sencilla: una función por cada paso del proceso y una función `main()` que los ejecuta en orden e informa del inicio y del final.

## Plantilla

```
# -- coding: utf-8 --
import csv

def _migrate_partners():
    print("1")

def main():
    print('Ha comenzado el proceso modelos')
    _migrate_partners()
    print('Ha finalizado el proceso')

main()
```

## Cómo usarla

- La primera línea indica la codificación del archivo (útil en Python 2; en Python 3 UTF-8 es la codificación por defecto).
- `import csv` queda preparado por si el proceso lee o escribe archivos CSV.
- Cada paso del proceso va en su propia función, como `_migrate_partners()`. El guion bajo inicial es una convención para indicar que es una función de uso interno.
- `main()` orquesta los pasos y muestra mensajes de inicio y fin.

## Nota

Una práctica habitual es llamar a `main()` dentro de `if __name__ == "__main__":`. Así el script se ejecuta al lanzarlo directamente, pero no si se importa como módulo desde otro archivo.
