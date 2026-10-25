---
title: Python herencia múltiple
date: 2022/12/18
description: Qué es la herencia múltiple en Python y cómo una clase puede heredar métodos de dos o más clases.
tag: python
author: Marlon Falcon Hernandez
---

# Python herencia múltiple

La herencia es uno de los pilares de la programación orientada a objetos: permite que una clase reutilice los atributos y métodos de otra. Python admite además la **herencia múltiple**, es decir, una clase puede heredar de dos o más clases a la vez.

## Ejemplo de herencia múltiple

La clase `C` hereda de `A` y de `B`, por lo que un objeto de tipo `C` puede usar los métodos de las tres clases:

```
class A:
   def print_a(self):
       print('a')
class B:
   def print_b(self):
       print('b')
class C(A, B):
   def print_c(self):
       print('c')
 
c = C()
c.print_a()
c.print_b()
c.print_c()
```

La salida será `a`, `b` y `c`, cada una en una línea.

## Clase sin herencia

Como comparación, esta es una clase simple que no hereda de ninguna otra. Definimos atributos de clase y accedemos a ellos desde una instancia:

```
class Auto:
    marca = "Audi"
    modelo = "A4"
    plata = "121212"

taxi = Auto()
print(taxi.marca)
```

## Nota

Si dos clases padre definen un método con el mismo nombre, Python usa el orden de resolución de métodos (MRO): busca primero en la clase hija y después en las clases padre en el orden en que aparecen en la definición (`A` antes que `B` en el ejemplo). Puedes consultar ese orden con `C.__mro__`.
