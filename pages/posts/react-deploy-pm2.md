---
title: React como deployar con pm2
date: 2022/12/20
description: React como deployar con pm2
tag: react
author: Marlon Falcon Hernandez
---

# React como deployar con pm2
El deploy es el proceso de desplegar una aplicación en un servidor. Para deployar una aplicación en react se debe usar la siguiente sintaxis:

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

```
pm2 status
pm2 restart my-app
pm2 stop my-app
pm2 start my-app
pm2 delete my-app
```