---
title: Hola mundo con Owl
date: 2022/12/21
description: Ejemplo mínimo de "Hola mundo" con Owl, el framework de componentes de Odoo, cargando la librería en una página HTML.
tag: owl
author: Marlon Falcon Hernandez
---
#  Hola mundo con Owl

Owl (Odoo Web Library) es el framework de componentes de interfaz desarrollado por Odoo. Aunque se usa dentro de Odoo, también puede utilizarse de forma independiente en cualquier página web. Este es un ejemplo de un hola mundo con Owl: cargamos la librería y mostramos su versión en la página.

Puedes ver el ejemplo funcionando aquí:

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

Al cargar el script, Owl queda disponible en el objeto global `owl`, y `owl.__info__.version` nos devuelve la versión de la librería. Es la forma más sencilla de comprobar que todo está bien configurado antes de crear nuestros primeros componentes.
