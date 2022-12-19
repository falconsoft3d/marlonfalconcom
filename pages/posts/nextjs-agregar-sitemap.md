---
title: Agregar sitemap a NextJS
date: 2022/12/18
description: Agregar sitemap a NextJS
tag: nextjs
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Agregar sitemap a NextJS
Es muy importante para los buscadores como Google, Bing, etc. tener un sitemap de nuestra página web, es muy útil para que los buscadores puedan indexar nuestra página web, es muy útil para que los buscadores puedan encontrar nuestra página web, es muy útil para que los buscadores puedan rastrear nuestra página web, etc.

Instalación de la librería
```bash
npm i next-sitemap -D
```

Creamos el fichero next-sitemap.config.js
En el fichero next-sitemap.config.js agregamos el siguiente código:
```js
/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tusitio.com',
    generateRobotsTxt: true, // (optional)
    // REST CODE READ DOCS  ...
    }
```

Configuramos el fichero next.config.js
En el fichero next.config.js agregamos el siguiente código:
```js
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
},
```

Si lo quieres probar local puedes ejecutar el siguiente comando:
```bash
npm run build
```