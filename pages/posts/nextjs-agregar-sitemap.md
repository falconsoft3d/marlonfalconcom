---
title: Agregar sitemap a Next.js
date: 2022/12/18
description: Cómo generar automáticamente el sitemap y el robots.txt de un sitio Next.js con la librería next-sitemap.
tag: nextjs
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Agregar sitemap a Next.js
Para buscadores como Google o Bing es muy importante que nuestra página web tenga un sitemap. Se trata de un archivo XML con la lista de URL del sitio que ayuda a los buscadores a encontrar, rastrear e indexar todas nuestras páginas.

## Instalación de la librería
```bash
npm i next-sitemap -D
```

## Crear el fichero next-sitemap.config.js
En la raíz del proyecto creamos el fichero next-sitemap.config.js con el siguiente código:
```js
/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tusitio.com',
    generateRobotsTxt: true, // (optional)
    // REST CODE READ DOCS  ...
    }
```

## Configurar el script postbuild
En el fichero package.json agregamos el script `postbuild`, que se ejecuta automáticamente después de `next build`:
```js
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
},
```

## Probar en local
Si lo quieres probar en local, puedes ejecutar el siguiente comando:
```bash
npm run build
```

Al terminar, encontrarás los archivos `sitemap.xml` y `robots.txt` en la carpeta `public`. Después solo queda enviar la URL del sitemap a Google Search Console.
