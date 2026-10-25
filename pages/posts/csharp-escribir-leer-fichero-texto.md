---
title: Escribir y leer en un fichero de texto con C#
date: 2022/12/18
description: Ejemplo sencillo en C# para guardar datos en un fichero de texto y volver a leerlos usando la clase File de System.IO.
tag: csharp
author: Marlon Falcon Hernandez
---

# Escribir y leer en un fichero de texto con C#

Guardar pequeños datos de configuración (por ejemplo, una URL y un token) en un fichero de texto es una forma rápida de persistir información entre ejecuciones de un programa. En .NET, la clase `File` del espacio de nombres `System.IO` ofrece métodos muy sencillos para ello, como `File.WriteAllTextAsync` y `File.ReadAllText`.

## Ejemplo

El siguiente programa de consola escribe una URL y un token separados por coma en el fichero `WriteText.txt`, o bien los lee y los muestra por pantalla, según el valor de la variable `_path`:

```csharp
using static System.Net.Mime.MediaTypeNames;

Console.WriteLine("Hello, World!");


var _path = "read";

if (_path == "read")
{
    Console.WriteLine("Read");
    var myLine = System.IO.File.ReadAllText("WriteText.txt");
    var TagIds = myLine.Split(',').ToList();
    string url = TagIds[0];
    string token = TagIds[1];


    Console.WriteLine(url);
    Console.WriteLine(token);

} else
{
    Console.WriteLine("Write");
    // Var
    string url = "http://master.odooerp.online";
    string token = "1234";

    // Write in file
    string text = url + "," + token;
    await File.WriteAllTextAsync("WriteText.txt", text);

}

Console.ReadLine();
```

## Cómo funciona

- **Escritura:** se concatenan la URL y el token con una coma y se guardan en el fichero con `File.WriteAllTextAsync`, que crea el fichero si no existe o lo sobrescribe si ya existe.
- **Lectura:** `File.ReadAllText` devuelve todo el contenido del fichero como una cadena, que luego se divide con `Split(',')` para obtener cada valor.

Para probarlo, ejecuta primero el programa con `_path` distinto de `"read"` para crear el fichero y después con `"read"` para leerlo. Si intentas leer un fichero que no existe se lanzará una `FileNotFoundException`, por lo que en un programa real conviene comprobarlo antes con `File.Exists`.
