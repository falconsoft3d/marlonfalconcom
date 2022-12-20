---
title: React como importar css
date: 2022/12/20
description: React como importar css
tag: react
author: Marlon Falcon Hernandez
---

# React como importar css
CSS es un lenguaje de hojas de estilo que nos permite darle estilo a nuestros elementos HTML. Para importar un css en react se debe usar la siguiente sintaxis:

```js
import React from 'react';
import './Spinner.css';

export default function Spinner() {
    return (
        <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
        </div>
    )
}
```