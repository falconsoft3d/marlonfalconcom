---
title: Web Scraping con Python y Pyppeteer
date: 2022/12/20
description: Web Scraping con Python y Pyppeteer
tag: python, webscraping
author: Marlon Falcon Hernandez
---

# Web Scraping con Python y Pyppeteer
El web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

## Instalación de Pyppeteer
```bash
pip install pyppeteer
```

## Ejemplo de Web Scraping
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