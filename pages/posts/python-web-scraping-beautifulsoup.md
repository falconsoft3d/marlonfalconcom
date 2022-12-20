---
title: Web Scraping con Python y BeautifulSoup
date: 2022/12/20
description: Web Scraping con Python y BeautifulSoup
tag: python, webscraping
author: Marlon Falcon Hernandez
---

# Web Scraping con Python y BeautifulSoup
El web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

## Instalación de BeautifulSoup
```bash
pip install beautifulsoup4
```

## Ejemplo de Web Scraping
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



