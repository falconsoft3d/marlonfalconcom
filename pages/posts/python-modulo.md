---
title: Python módulo
date: 2022/12/18
description: Cómo crear un módulo en Python con tus propias funciones e importarlo desde otro archivo.
tag: python
author: Marlon Falcon Hernandez
---

# Python módulo

En Python, un **módulo** es simplemente un archivo `.py` que contiene funciones, clases o variables. Separar el código en módulos permite reutilizarlo, mantener los archivos pequeños y organizar mejor un proyecto.

## 1. Crear el módulo

Creamos un archivo llamado `CursoModulo.py` con una función que suma dos números:

CursoModulo.py
```
def OperacionSuma(a,b):
    return a + b
```

## 2. Importar y usar el módulo

En otro archivo, ubicado en la misma carpeta, importamos el módulo por su nombre (sin la extensión `.py`) y llamamos a la función con la notación `modulo.funcion`:

main.py
```
import CursoModulo
print(CursoModulo.OperacionSuma(12,22))
```

Al ejecutar `python main.py` se mostrará `34` en la consola.

## Nota

También puedes importar solo lo que necesitas con `from CursoModulo import OperacionSuma` y llamar a la función directamente. Para que Python encuentre el módulo, este debe estar en la misma carpeta que el script o en una ruta incluida en `sys.path`.
