---
title: ApiRest con RestSharp y Newtonsoft en C#
date: 2022/12/18
description: ApiRest con RestSharp y Newtonsoft en C#
tag: csharp
author: Marlon Falcon Hernandez
---

# Actualizar Odoo desde la consola

Código para crear una api rest con RestSharp y Newtonsoft en C#.

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