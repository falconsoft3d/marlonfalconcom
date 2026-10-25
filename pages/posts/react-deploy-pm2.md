---
title: React, cómo desplegar con PM2
date: 2022/12/20
description: Pasos para desplegar una aplicación de React en un servidor Linux y mantenerla en ejecución con PM2.
tag: react
author: Marlon Falcon Hernandez
---

# React, cómo desplegar con PM2

El despliegue (deploy) es el proceso de publicar una aplicación en un servidor para que los usuarios puedan acceder a ella. PM2 es un gestor de procesos para Node.js que mantiene las aplicaciones en ejecución, las reinicia si fallan y facilita su administración. Con su comando `pm2 serve` podemos servir el build estático de una aplicación de React.

## Instalación y despliegue

Estos son los pasos en un servidor Ubuntu/Debian: instalar Node.js, crear (o clonar) la aplicación, generar el build y servirlo con PM2:

```bash
sudo apt-get update
sudo apt-get install nodejs
node -v or node –version
npm -v or npm –version
npm install -g create-react-app
npx create-react-app my-app
npm start
npm install -g serve
npm install -g pm2
npm run build
pm2 serve <path> <port> --spa
pm2 serve build 8082 --spa
pm2 list
```

El comando `pm2 serve build 8082 --spa` sirve la carpeta `build` en el puerto 8082. La opción `--spa` redirige todas las rutas a `index.html`, algo necesario si la aplicación usa React Router.

## Comandos útiles de PM2

```
pm2 status
pm2 restart my-app
pm2 stop my-app
pm2 start my-app
pm2 delete my-app
```

## Nota

Para que las aplicaciones se levanten automáticamente al reiniciar el servidor, puedes ejecutar `pm2 startup` y después `pm2 save`. En producción es habitual poner un proxy inverso como Nginx delante del puerto de la aplicación.
