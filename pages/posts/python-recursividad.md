---
title: Recursividad en Python
date: 2022/12/20
description: Recursividad en Python
tag: python
author: Marlon Falcon Hernandez
---

# Recursividad en Python

La recursividad es un proceso en el que una función se llama a sí misma. En Python, esta función se define con la palabra clave `def`. La recursividad es un concepto muy importante en la programación y se usa a menudo en árboles y estructuras de datos similares.

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