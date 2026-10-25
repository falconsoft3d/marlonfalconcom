---
title: React, cómo importar CSS
date: 2022/12/20
description: Cómo importar un archivo CSS en un componente de React y aplicar sus clases con className.
tag: react
author: Marlon Falcon Hernandez
---

# React, cómo importar CSS

CSS es un lenguaje de hojas de estilo que nos permite darles estilo a nuestros elementos HTML. En React, la forma más sencilla de aplicar estilos a un componente es importar un archivo `.css` directamente desde el archivo del componente:

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

## Puntos a tener en cuenta

- La ruta del `import` es relativa al archivo del componente; en el ejemplo, `Spinner.css` está en la misma carpeta que `Spinner.js`.
- En JSX se usa `className` en lugar de `class` para asignar las clases definidas en el CSS.
- Los estilos importados así son **globales**: una clase definida en `Spinner.css` afecta a cualquier elemento de la aplicación que use ese mismo nombre. Si necesitas estilos aislados por componente, puedes usar CSS Modules (`Spinner.module.css`) o librerías como styled-components.
