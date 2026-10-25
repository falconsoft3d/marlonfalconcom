---
title: Recursividad en Python
date: 2022/12/20
description: Qué es la recursividad en Python, con un ejemplo de función recursiva que calcula una sumatoria.
tag: python
author: Marlon Falcon Hernandez
---

# Recursividad en Python

La recursividad es una técnica en la que una función se llama a sí misma para resolver un problema dividiéndolo en casos más pequeños. En Python, una función recursiva se define como cualquier otra, con la palabra clave `def`. Es un concepto muy importante en programación y se usa a menudo para recorrer árboles y estructuras de datos similares.

Toda función recursiva necesita dos partes:

- **Caso base**: la condición en la que la función deja de llamarse a sí misma.
- **Caso recursivo**: la llamada a la propia función con un problema más pequeño.

## Ejemplo: sumatoria

```python
# -*- coding: utf-8 -*-
def sumatoria(num):
    if num==1:
        return 1
    else:
        return num + sumatoria(num-1)

num=int(input("Numero de Sumatoria: "))
print(sumatoria(num))
```

Si introducimos `4`, la función calcula `4 + 3 + 2 + 1` y devuelve `10`. El caso base es `num==1`; sin él, la función se llamaría indefinidamente.

## Nota

Python limita la profundidad de recursión (por defecto, unas 1000 llamadas). Para valores muy grandes, una solución iterativa con un bucle suele ser más adecuada.
