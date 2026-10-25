---
title: API con Node.js
date: 2022/12/18
description: Ejemplo de API con Node.js y Express que usa Puppeteer para consultar una página web y devolver el resultado en formato JSON.
tag: nodejs, api
author: Marlon Falcon Hernandez
---

# API con Node.js

En este ejemplo creamos una pequeña API con Node.js y Express. Al recibir una petición, la API abre un navegador sin interfaz con Puppeteer, rellena un formulario en una página web con el parámetro recibido, extrae el resultado y lo devuelve en formato JSON. Es un patrón útil para automatizar consultas en webs que no ofrecen una API propia.

## Instalación

Instalamos las dependencias con `npm install express puppeteer random-useragent`.

## Código

src/index.js

```nodejs
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const fs = require('fs');

http://localhost:3014/apialtice/query/:userid
app.get('/apialtice/query/:userId', async (req, res)=>{
    try {
        phones = await queryAltice(req,res);
        res.status(200).json({
            phones
        });        
        } 
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'error', error
        });
    }
});



const queryAltice = async (req, res) => {
    const browser = await puppeteer.launch({headless: true, ignoreHTTPSErrors: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const header = randomUseragent.getRandom((ua) => {
        return ua.browserName === 'Firefox';
    });
    const page = await browser.newPage();
    // await page.setUserAgent(header)
    await page.viewport({width: 1920, height: 1080})
    await page.setRequestInterception(true);
    await page.on('request', (req) => {
    if(req.resourceType() === 'image'){
        req.abort();
    }
    else {
    req.continue();
    }
    });
    try{
        await page.goto('https://demo/marlon');
        const inputCustomerRFC = await page.waitForSelector('#exampleInputEmail1',{timeout: 100});
        await inputCustomerRFC.type(req.params.userId);
        // await page.waitForSelector('.card-body > .row > .col-xl-9 > div > .btn')
        await page.click('.card-body > .row > .col-xl-9 > div > .btn')


        const element = await page.waitForSelector('.card-body > .d-flex > .d-flex > ul',{timeout: 1000})
        const phones = await (await element.getProperty("innerText")).jsonValue();
        console.log(await phones);

        await browser.close();
        return phones;

    }catch (error) {
            await browser.close();
            // console.log(error);
            throw error;
    }
}


app.get('*', (req, res)=>{
    res.status(200).json({
        msg: "This Route is not Valid"
    });
});

app.listen(3014, ()=>{
    console.log('Server on port 3014')
})
```

## Cómo funciona

- La ruta `/apialtice/query/:userId` recibe el identificador a consultar y llama a la función `queryAltice`.
- `queryAltice` lanza Puppeteer en modo headless, bloquea la carga de imágenes para ir más rápido, escribe el identificador en el formulario, pulsa el botón y lee el texto del resultado.
- Si todo va bien, la API responde con código 200 y los datos; si ocurre un error, responde con código 400.
- Cualquier otra ruta devuelve un mensaje indicando que no es válida.

Arrancamos el servidor con `node src/index.js` y probamos la API desde el navegador o con `curl http://localhost:3014/apialtice/query/123`.

## Notas

- La URL y los selectores CSS son de ejemplo: hay que adaptarlos a la página que se quiera consultar.
- Los tiempos de espera de `waitForSelector` (100 y 1000 ms) son muy cortos; en páginas lentas conviene aumentarlos.
- Para definir el tamaño de la ventana, el método correcto es `page.setViewport()`; `page.viewport()` solo devuelve el tamaño actual.
