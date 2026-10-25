---
title: Ejecutar un cron en Node.js
date: 2022/12/21
description: Cómo programar tareas periódicas en Node.js con la librería node-cron y la sintaxis de sus expresiones.
tag: nodejs, cron
author: Ejecutar un cron en nodejs
---

# Ejecutar un cron en Node.js

En muchas aplicaciones necesitamos ejecutar tareas de forma periódica: limpiar datos, enviar correos, sincronizar información, etc. En Node.js podemos hacerlo de forma sencilla con la librería `node-cron`, que usa la misma sintaxis que el cron de Linux, con un campo opcional adicional para los segundos.

## Instalación

Para este ejemplo instalamos las dependencias con `npm install node-cron dateformat colors`.

## Código

cron.js

```js
var dateFormat = require('dateformat');
const cron = require("node-cron");
const colors = require("colors");

cron.schedule('* * * * * *', () => {
    var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    console.log('1- running a task every second: ', day.green);
});

/*
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
*/
```

Al ejecutarlo con `node cron.js`, se mostrará en la consola la fecha y la hora cada segundo. Para otras frecuencias basta con cambiar la expresión; por ejemplo, `*/5 * * * *` ejecuta la tarea cada cinco minutos.

## Nota

Las versiones recientes de `dateformat` solo se distribuyen como módulo ES; si `require` da error, instala una versión anterior (la 4.x) o usa `import`.
