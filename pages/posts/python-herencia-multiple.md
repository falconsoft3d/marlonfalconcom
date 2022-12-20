---
title: Python herencia múltiple
date: 2022/12/18
description: Python herencia múltiple
tag: python
author: Marlon Falcon Hernandez
---

# Python herencia múltiple

Herencia múltiple podemos heredar de dos clases.
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

Sin herencias múltiples
```
class Auto:
    marca = "Audi"
    modelo = "A4"
    plata = "121212"

taxi = Auto()
print(taxi.marca)
```