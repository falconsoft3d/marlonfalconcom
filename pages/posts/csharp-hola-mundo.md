---
title: Hola mundo C#
date: 2022/12/18
description: Primer programa en C#, un "Hola mundo" de consola que además muestra cómo declarar una variable entera y concatenarla en un texto.
tag: csharp
author: Marlon Falcon Hernandez
---

# Hola mundo en C#

C# es un lenguaje de programación orientado a objetos desarrollado por Microsoft que se ejecuta sobre la plataforma .NET. El clásico "Hola mundo" es la mejor forma de comprobar que tu entorno de desarrollo funciona y de conocer la estructura básica de un programa.

## El código

```csharp
using System;
namespace demo01integer
{
    class Program
    {
        static void Main(string[] args)
        {
            // Numeros enteros
            int num1 = 13;
            Console.WriteLine("Hola Mundo "+ num1);
            Console.Read();
        }
    }
}
```

## Explicación

- `using System;` importa el espacio de nombres que contiene la clase `Console`.
- `namespace` agrupa las clases del proyecto.
- `Main` es el punto de entrada del programa: es lo primero que se ejecuta.
- `int num1 = 13;` declara una variable de tipo entero.
- `Console.WriteLine` imprime el texto en la consola, concatenando el número con el operador `+`.
- `Console.Read()` espera a que se pulse una tecla para que la ventana no se cierre inmediatamente.

## Ejecutarlo

Con el SDK de .NET instalado, puedes crear un proyecto de consola con `dotnet new console`, sustituir el contenido de `Program.cs` por este código y ejecutarlo con `dotnet run`.
