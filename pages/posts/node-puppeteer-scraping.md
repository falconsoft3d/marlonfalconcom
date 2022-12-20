---
title: Scraping con puppeteer y nodejs
date: 2022/12/18
description: Scraping con puppeteer y nodejs
tag: nodejs, webscraping
author: Marlon Falcon Hernandez
---

# Scraping con puppeteer y nodejs

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
