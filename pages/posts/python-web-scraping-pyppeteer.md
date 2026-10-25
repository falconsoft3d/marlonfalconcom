---
title: "Web Scraping con Python y Pyppeteer"
date: 2022/12/21
description: "Cómo hacer web scraping con Python y Pyppeteer controlando un navegador Chromium - capturas de pantalla y envío de formularios."
tag: python, webscraping
author: Marlon Falcon Hernandez
---

# Web Scraping con Python y Pyppeteer
El web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web, ya sea utilizando el protocolo HTTP manualmente o incrustando un navegador en una aplicación.

Pyppeteer es un port para Python de Puppeteer, la librería de Node.js para controlar Chromium. Al usar un navegador real, permite trabajar con páginas que cargan su contenido con JavaScript, rellenar formularios, hacer clic en botones o tomar capturas de pantalla, cosas que no se pueden hacer solo con `requests` y BeautifulSoup.

## Instalación de Pyppeteer
```bash
pip install pyppeteer
```

La primera vez que se ejecuta, Pyppeteer descarga automáticamente una versión de Chromium.

## Ejemplo de Web Scraping
Este primer ejemplo abre la web de Python en un navegador sin interfaz gráfica y guarda una captura de pantalla:
```python
import asyncio
from pyppeteer import launch

async def main():
    # launch chromium browser in the background
    browser = await launch()
    # open a new tab in the browser
    page = await browser.newPage()
    # add URL to a new page and then open it
    await page.goto("https://www.python.org/")
    # create a screenshot of the page and save it
    await page.screenshot({"path": "python.png"})
    # close the browser
    await browser.close()

print("Starting...")
asyncio.get_event_loop().run_until_complete(main())
print("Screenshot has been taken")
```


## Ejemplo con formulario
Código completo para consultar los teléfonos asociados a una cédula. Para cada cédula de la lista, abre la página, escribe el número en el campo del formulario, pulsa el botón de consulta y espera a que aparezca la lista de resultados:
```python
import asyncio
from pyppeteer import launch

async def main():
    cedulas = ["40221818848","00221818848","40221818699"]
    cont = 0
    for cedula in cedulas:
        cont = cont + 1
        print(cont)
        print("Cedula: " + cedula)
        url = "https://demophone.com/consulta-lineas";
        browser = await launch()
        page = await browser.newPage()
        print("Opening URL: " + url)
        await page.goto(url)
        inputCustomerRFC = await page.querySelector("#exampleInputEmail1")
        await inputCustomerRFC.type(cedula)
        await page.click(".card-body > .row > .col-xl-9 > div > .btn")
        try:
            element = await page.waitForSelector('.card-body > .d-flex > .d-flex > ul', timeout=1000)
            phones = await element.getProperty('innerText')
            phonejson = await phones.jsonValue()
            print(phonejson)
        except:
            print("No se encontraron telefonos")
        await browser.close()

print("Starting...")
asyncio.get_event_loop().run_until_complete(main())
print("Screenshot has been taken")
```

Los selectores CSS (`#exampleInputEmail1`, `.card-body ...`) dependen de la estructura de la página que consultes, así que tendrás que adaptarlos a tu caso. Si el elemento no aparece en el tiempo indicado en `timeout`, se captura la excepción y se muestra un mensaje.
