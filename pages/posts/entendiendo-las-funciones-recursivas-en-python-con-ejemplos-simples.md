---
title: ▷ Entendiendo las funciones recursivas en Python con ejemplos simples
date: 2023/10/16
description: ▷ Qué es una función recursiva en Python explicado con tres ejemplos sencillos, el factorial, la serie de Fibonacci y una cuenta regresiva.
tag: python, programacion, recursividad
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Entendiendo las funciones recursivas en Python con ejemplos simples

Las funciones recursivas son un concepto importante en la programación y se utilizan ampliamente en Python y otros lenguajes. Una función recursiva es aquella que se llama a sí misma para resolver un problema de manera recursiva, dividiéndolo en subproblemas más pequeños. En este artículo, exploraremos qué son las funciones recursivas en Python mediante tres ejemplos simples.

## Ejemplo 1: cálculo del factorial

El cálculo del factorial de un número es un problema clásico para comprender la recursión. El factorial de un número entero `n` se define como el producto de todos los enteros positivos desde 1 hasta `n`. Así se vería una función recursiva para calcular el factorial:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

En este ejemplo, la función factorial se llama a sí misma con un valor reducido de `n` en cada llamada hasta que `n` llega a 0. En ese momento devuelve 1, lo que marca el caso base de la recursión. La función se llama repetidamente y multiplica `n` por el resultado de la llamada recursiva hasta llegar al resultado final.

```python
print(factorial(5))  # Resultado: 120
```


## Ejemplo 2: serie de Fibonacci
La serie de Fibonacci es otra aplicación común de las funciones recursivas. En esta serie, cada número es la suma de los dos números anteriores. Aquí hay una función recursiva para calcular el término `n` de la serie de Fibonacci:

```python
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
```

En este ejemplo, la función `fibonacci` se llama a sí misma con `n - 1` y `n - 2` en cada llamada hasta que llega a los casos base 0 y 1. Luego devuelve la suma de los dos resultados recursivos. Esta versión es muy didáctica, pero poco eficiente para valores grandes de `n`, porque repite muchos cálculos; en la práctica se suele optimizar con memoización (por ejemplo, con `functools.lru_cache`) o con una versión iterativa.

```python
print(fibonacci(7))  # Resultado: 13 (0, 1, 1, 2, 3, 5, 8, 13)
```


## Ejemplo 3: contador regresivo
Un ejemplo más simple de función recursiva es un contador regresivo. Puedes crear una función que imprima los números desde `n` hasta 1 en orden descendente.

```python
def countdown(n):
    if n <= 0:
        return
    else:
        print(n)
        countdown(n - 1)
```

En este ejemplo, la función `countdown` se llama a sí misma con `n - 1` en cada llamada hasta que llega a 0, momento en el que la recursión se detiene.

```python
countdown(5)
# Resultado:
# 5
# 4
# 3
# 2
# 1
```

## Conclusión
Las funciones recursivas en Python son una forma poderosa de abordar problemas que se pueden dividir en subproblemas más pequeños. Sin embargo, es importante tener en cuenta que las funciones recursivas deben tener un caso base claro para evitar que la recursión se vuelva infinita. Además, Python limita la profundidad de recursión (por defecto, unas 1.000 llamadas), por lo que para problemas muy profundos suele ser preferible una solución iterativa. Los ejemplos anteriores ilustran cómo se pueden usar las funciones recursivas de manera efectiva para resolver problemas comunes de programación. A medida que te familiarices con este concepto, podrás aplicarlo a problemas más complejos en tu desarrollo de software.