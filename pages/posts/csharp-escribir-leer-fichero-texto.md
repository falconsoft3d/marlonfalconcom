---
title: Escribir y leer en un fichero de texto con C#
date: 2022/12/18
description: Escribir y leer en un fichero de texto con C#
tag: csharp
author: Marlon Falcon Hernandez
---

# Actualizar Odoo desde la consola

Código para escribir y leer en un fichero de texto con C#

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