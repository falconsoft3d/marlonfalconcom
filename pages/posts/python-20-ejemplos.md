---
title: Python 20 Ejemplos
date: 2022/12/18
description: Python 20 Ejemplos
tag: python, 20pasos
author: Marlon Falcon Hernandez
---

# Python 20 Ejemplos

## 1. Numeros primos
````python
def es_primo(numero):
    if numero < 2:
        return False
    elif numero == 2:
        return True
    elif numero > 2 and numero % 2 == 0:
        return False
    else:
        for i in range(3, numero):
            if numero % i == 0:
                return False
        return True

def run():
    numero = int(input('Escribe un numero: '))
    if es_primo(numero):
        print('Es primo')
    else:
        print('No es primo')

if __name__ == '__main__':
    run()
````

## 2. Factorial
````python
def factorial(numero):
    if numero == 1:
        return 1
    else:
        return numero * factorial(numero - 1)

def run():
    numero = int(input('Escribe un numero: '))
    print(factorial(numero))
    
if __name__ == '__main__':
    run()
````

## 3. Fibonacci
````python
def fibonacci(numero):
    if numero == 0 or numero == 1:
        return numero
    else:
        return fibonacci(numero - 1) + fibonacci(numero - 2)

def run():
    numero = int(input('Escribe un numero: '))
    print(fibonacci(numero))

if __name__ == '__main__':
    run()
````

## 4. Palindromo
````python
def palindromo(palabra):
    palabra = palabra.replace(' ', '')
    palabra = palabra.lower()
    palabra_invertida = palabra[::-1]
    if palabra == palabra_invertida:
        return True
    else:
        return False

def run():
    palabra = input('Escribe una palabra: ')
    es_palindromo = palindromo(palabra)
    if es_palindromo == True:
        print('Es palindromo')
    else:
        print('No es palindromo')

if __name__ == '__main__':
    run()
````

## 5. Palabras mas largas
````python

def run():
    frase = input('Escribe una frase: ')
    palabras = frase.split(' ')
    palabra_larga = ''
    for palabra in palabras:
        if len(palabra) > len(palabra_larga):
            palabra_larga = palabra
    print(palabra_larga)

if __name__ == '__main__':
    run()
````

## 6. Palabras mas cortas
````python
def run():
    frase = input('Escribe una frase: ')
    palabras = frase.split(' ')
    palabra_corta = palabras[0]
    for palabra in palabras:
        if len(palabra) < len(palabra_corta):
            palabra_corta = palabra
    print(palabra_corta)
    
if __name__ == '__main__':
    run()
````

## 7. Ordenar Arreglo
````python
def run():
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numeros.sort(reverse=True)
    print(numeros)

if __name__ == '__main__':
    run()
````

## 8. Ordenar Arreglo de Objetos
````python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def __str__(self):
        return '{} de {} años'.format(self.nombre, self.edad)
        
def run():
    personas = [
        Persona('Marlon', 22),
        Persona('Juan', 20),
        Persona('Pedro', 30),
        Persona('Maria', 25)
    ]
    personas.sort(key=lambda persona: persona.edad)
    for persona in personas:
        print(persona)
        
if __name__ == '__main__':
    run()
````

## 9. Sumar lista
````python

def run():
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    suma = 0
    for numero in numeros:
        suma += numero
    print(suma)

if __name__ == '__main__':
    run()
````


## 10. De lista a diccionario
````python
def run():
    lista = [
        ['nombre', 'Marlon'],
        ['edad', 22],
        ['pais', 'Guatemala']
    ]
    diccionario = dict(lista)
    print(diccionario)

if __name__ == '__main__':
    run()
````

## 11. De diccionario a lista
````python
def run():
    diccionario = {
        'nombre': 'Marlon',
        'edad': 22,
        'pais': 'Guatemala'
    }
    lista = list(diccionario.items())
    print(lista)

if __name__ == '__main__':
    run()
````

## 12. Calculo de matriz
````python

def run():
    matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    matriz_transpuesta = []
    for i in range(len(matriz)):
        matriz_transpuesta.append([])
        for j in range(len(matriz)):
            matriz_transpuesta[i].append(matriz[j][i])
    print(matriz_transpuesta)


if __name__ == '__main__':

    run()
````


## 13. Calculo de derivada
````python

def run():
    funcion = lambda x: x**2
    derivada = lambda x: 2*x
    x = 3
    print(derivada(x))

if __name__ == '__main__':

    run()
````

## 14. Calculo de integral
````python
import math

def run():
    funcion = lambda x: x**2
    integral = lambda x: x**3/3
    a = 0
    b = 3
    print(integral(b) - integral(a))

if __name__ == '__main__':
    run()
````

## 15. Calculo de raiz cuadrada
````python
import math

def run():
    numero = 9
    raiz = math.sqrt(numero)
    print(raiz)

if __name__ == '__main__':
    run()
````

## 16. Calculo de raiz cuadrada con Newton
````python

def run():
    numero = 9
    tolerancia = 0.0001
    x = numero
    while True:
        raiz = 0.5 * (x + (numero / x))
        if abs(x - raiz) < tolerancia:
            break
        x = raiz
    print(raiz)


if __name__ == '__main__':
    run()
````

## 16. Calculo de le teoria de la relatividad
````python
import math

def run():
    c = 299792458
    m = 0.1
    e = m * (c**2)
    print(e)

if __name__ == '__main__':
    run()
````

## 17. Calculo de la constante de Planck
````python

def run():
    h = 6.62607004 * (10**-34)
    print(h)


if __name__ == '__main__':
    run()
````

## 18. Calculo de la constante de Avogadro
````python

def run():
    n = 6.02214076 * (10**23)
    print(n)


if __name__ == '__main__':
    run()
````

## 18. Codigo de barra ean13
````python
import random

def run():
    codigo = '5901234123457'
    codigo = list(codigo)
    codigo = list(map(int, codigo))
    codigo.pop()
    codigo.pop(0)
    suma = 0
    for i in range(len(codigo)):
        if i % 2 == 0:
            suma += codigo[i] * 3
        else:
            suma += codigo[i]
    digito = 10 - (suma % 10)
    if digito == 10:
        digito = 0
    print(digito)

if __name__ == '__main__':
    run()
````


## 19 Varias formas de random
````python
import random

def run():
    numero_aleatorio = random.randint(1, 100)
    print(numero_aleatorio)
    numero_aleatorio = random.random()
    print(numero_aleatorio)
    numero_aleatorio = random.randrange(1, 100)
    print(numero_aleatorio)
    numero_aleatorio = random.uniform(1, 100)
    print(numero_aleatorio)
    numero_aleatorio = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    print(numero_aleatorio)
    numero_aleatorio = random.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
    print(numero_aleatorio)
    numero_aleatorio = random.choices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k=3)
    print(numero_aleatorio)
    numero_aleatorio = random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    print(numero_aleatorio)

if __name__ == '__main__':
    run()
````

## 20. Calculo de pi
````python

def run():
    pi = 0
    n = 1000000
    for i in range(n):
        pi += (1 / n) * (4 / (1 + ((i / n) ** 2)))
    print(pi)



if __name__ == '__main__':
    run()
````































