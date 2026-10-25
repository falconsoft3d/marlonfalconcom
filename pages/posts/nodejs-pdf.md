---
title: Crear un PDF con Node.js
date: 2022/12/18
description: Cómo generar un archivo PDF a partir de código HTML en Node.js usando la librería html-pdf.
tag: nodejs, pdf
author: Marlon Falcon Hernandez
---

# Crear un PDF con Node.js

Generar documentos PDF desde una aplicación Node.js es una necesidad habitual: facturas, informes, certificados, etc. Una forma sencilla de hacerlo es escribir el contenido en HTML y convertirlo a PDF con la librería `html-pdf`.

## Instalación

Instalamos la dependencia en nuestro proyecto con `npm install html-pdf`.

## Código

Creamos el archivo pdf.js:

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

Lo ejecutamos con `node pdf.js` y obtendremos el archivo `salida.pdf` en la misma carpeta.

## Nota

`html-pdf` se basa en PhantomJS, un proyecto que ya no se mantiene. Para proyectos nuevos conviene valorar alternativas como Puppeteer (que genera el PDF con Chrome) o librerías como PDFKit.
