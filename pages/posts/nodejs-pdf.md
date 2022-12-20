---
title: Crear un pdf con nodejs
date: 2022/12/18
description: Crear un pdf con nodejs
tag: nodejs, pdf
author: Marlon Falcon Hernandez
---

# Crear un pdf con nodejs

pdf.js

```js
var pdf = require('html-pdf');
var codigo = `<h1>Probando html-pdf</h1>
<p>Creamos nuestro PDF a partir de código HTML</p>`;

pdf.create(codigo).toFile('./salida.pdf', function(err, res) {
  if (err){
      console.log(err);
  } else {
  console.log(res);
  }
});
```