---
title: Web Scraping con Python y BeautifulSoup
date: 2022/12/20
description: Introducción al web scraping con Python, requests y BeautifulSoup, con un ejemplo que extrae los nombres de equipos de una web.
tag: python, webscraping
author: Marlon Falcon Hernandez
---

# Web Scraping con Python y BeautifulSoup
El web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web, ya sea utilizando el protocolo HTTP manualmente o incrustando un navegador en una aplicación.

En Python, una combinación muy habitual es `requests`, para descargar el HTML de la página, y `BeautifulSoup`, para analizarlo y buscar los elementos que nos interesan.

## Instalación de BeautifulSoup
```bash
pip install beautifulsoup4
```

El ejemplo también usa `requests` y `pandas`; si no los tienes, instálalos con `pip install requests pandas`.

## Ejemplo de Web Scraping

El siguiente script descarga una página de resultados de fútbol y obtiene los nombres de los equipos, que en el HTML están dentro de etiquetas `span` con la clase `nombre-equipo`:

```python
from bs4 import BeautifulSoup
import requests
import pandas as pd

url = 'https://resultados.as.com/resultados/futbol/amistosos_clubes/2022/jornada/amistosos_clubes_a_49/'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Get the table
table = soup.find_all('span', attrs={'class': 'nombre-equipo'})
equipos = list()

for i in table:
    equipos.append(i.text)

print(equipos)
```

## Cómo funciona

1. `requests.get(url)` descarga el contenido de la página.
2. `BeautifulSoup(page.content, 'html.parser')` convierte el HTML en un objeto que podemos recorrer.
3. `find_all` devuelve todos los elementos que coinciden con la etiqueta y la clase indicadas.
4. Recorremos los resultados y guardamos el texto de cada uno en la lista `equipos`.

## Nota

La estructura HTML de los sitios cambia con el tiempo, así que es posible que tengas que ajustar la etiqueta o la clase. Revisa siempre los términos de uso del sitio y su archivo `robots.txt` antes de hacer scraping.
