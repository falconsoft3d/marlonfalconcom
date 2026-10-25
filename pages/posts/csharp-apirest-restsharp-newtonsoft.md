---
title: API REST con RestSharp y Newtonsoft en C#
date: 2022/12/18
description: Cómo consumir una API REST desde C# enviando una petición POST con cabeceras y cuerpo JSON usando la librería RestSharp.
tag: csharp
author: Marlon Falcon Hernandez
---

# API REST con RestSharp y Newtonsoft en C#

[RestSharp](https://restsharp.dev/) es una librería muy popular para hacer peticiones HTTP desde .NET de forma sencilla, y [Newtonsoft.Json](https://www.newtonsoft.com/json) (Json.NET) es la librería más utilizada para serializar y deserializar JSON. Juntas permiten consumir cualquier API REST desde una aplicación C# con muy poco código.

## Instalar los paquetes

Puedes añadir ambos paquetes desde NuGet, por ejemplo con la CLI de .NET:

```bash
dotnet add package RestSharp
dotnet add package Newtonsoft.Json
```

## Ejemplo: petición POST a una API

En este ejemplo se envía una petición `POST` a un endpoint de Odoo, con una cabecera `Content-Type`, una cookie de sesión y un cuerpo JSON, y se muestra la respuesta por consola:

```csharp
var client = new RestClient("http://master.odooerp.online/api/create_fingerprint/00102815511/3/x1234567890");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "text/plain");
request.AddHeader("Cookie", "session_id=b5f563a723257c2ce7a75762c30367a38c82174e");
var body = @"{" + "\n" +
@"    ""fingerprint"" : ""hasasnasaslkasasmasasasll""" + "\n" +
@"}";
request.AddParameter("text/plain", body,  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

Pasos principales:

1. Se crea un `RestClient` con la URL del endpoint.
2. Se crea un `RestRequest` indicando el método HTTP (`POST`).
3. Se añaden las cabeceras necesarias con `AddHeader`.
4. Se adjunta el cuerpo de la petición con `AddParameter` como `RequestBody`.
5. Se ejecuta la petición con `client.Execute` y se lee `response.Content`.

## Nota

Este código usa la API de RestSharp anterior a la versión 107 (`IRestResponse`, `client.Timeout`, `Method.POST`). En versiones recientes la sintaxis cambia ligeramente (por ejemplo, `RestResponse` y `Method.Post`), así que conviene revisar la versión del paquete que tengas instalada. Para deserializar la respuesta puedes usar `JsonConvert.DeserializeObject` de Newtonsoft sobre `response.Content`.
