---
title: Scraping con Puppeteer y Node.js
date: 2022/12/18
description: Ejemplo de web scraping con Puppeteer y jsdom en Node.js para extraer los títulos de una página de resultados.
tag: nodejs, webscraping
author: Marlon Falcon Hernandez
---

# Scraping con Puppeteer y Node.js

El web scraping consiste en extraer información de páginas web de forma automática. Puppeteer es una librería de Node.js que controla una instancia de Chrome o Chromium sin interfaz gráfica (headless), por lo que puede cargar páginas igual que lo haría un navegador real. En este ejemplo lo combinamos con jsdom para analizar el HTML obtenido y extraer los títulos de los resultados de una búsqueda.

## Instalación

Instalamos las dependencias con `npm install puppeteer jsdom`. Puppeteer descarga automáticamente una versión de Chromium compatible.

## Código

index.js

```js
const puppeteer = require('puppeteer');
const jsdom = require('jsdom');

(async () => {
  try {
    // Abrimos una instancia del puppeteer y accedemos a la url de google
    const browser = await puppeteer.launch() ;
    const page = await browser.newPage();
    const response = await page.goto('https://www.google.com/search?q=web+cursos+odoo');
    const body = await response.text();

    // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
    const { window: { document } } = new jsdom.JSDOM(body);

    // Seleccionamos los titulos y lo mostramos en consola
    document.querySelectorAll('.g h3')
      .forEach(element => console.log(element.textContent));

    // Cerramos el puppeteer
    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();

```

Lo ejecutamos con `node index.js` y veremos en la consola los títulos encontrados.

## Notas

- Los selectores CSS (como `.g h3`) dependen de la estructura de la página y pueden cambiar en cualquier momento, así que habrá que revisarlos si el script deja de devolver resultados.
- Antes de hacer scraping de un sitio, revisa sus condiciones de uso y su archivo robots.txt, y evita hacer un número excesivo de peticiones.
