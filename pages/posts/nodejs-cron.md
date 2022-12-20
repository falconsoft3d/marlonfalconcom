---
title: Ejecutar un cron en nodejs
date: 2022/12/21
description: Ejecutar un cron en nodejs
tag: nodejs, cron
author: Ejecutar un cron en nodejs
---

# Ejecutar un cron en nodejs

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