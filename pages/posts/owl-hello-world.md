---
title: Hola mundo con Owl
date: 2022/12/21
description: Hola mundo con Owl
tag: owl
author: Marlon Falcon Hernandez
---
#  Hola mundo con Owl

Este es un ejemplo de un hola mundo con Owl.

[owl-hello-world](/owl-samples/01-hello-world/index.html)

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello Owl</title>
    <script src="https://marlonfalcon.com/lib/owl.js"></script>
  </head>
  <body>
    <h1>Owl</h1>
    <p id="version"></p>
    <script>
       console.log("hello owl", owl.__info__.version);
       document.getElementById("version").textContent += owl.__info__.version;
    </script>
  </body>
</html>
```
