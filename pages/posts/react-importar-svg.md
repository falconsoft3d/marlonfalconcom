---
title: React, cómo importar SVG
date: 2022/12/20
description: Cómo importar un archivo SVG como componente de React y darle estilos con styled-components.
tag: react
author: Marlon Falcon Hernandez
---

# React, cómo importar SVG

Un SVG es un archivo de imagen vectorial, es decir, que no se ve afectado por el tamaño de la pantalla, por lo que se puede ver en cualquier dispositivo sin perder calidad. En React podemos importar un SVG como si fuera un componente y aplicarle estilos con styled-components:

```js
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from "styled-components";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

<Svg />
```

## Cómo funciona

- `ReactComponent` es una exportación especial que ofrecen proyectos creados con Create React App (mediante SVGR): convierte el archivo SVG en un componente de React.
- Con `styled(SvgLogin)` envolvemos ese componente para darle ancho, alto máximo y margen.
- Finalmente, usamos `Svg` dentro del JSX como cualquier otro componente.

## Nota

Si solo necesitas mostrar el SVG como imagen, también puedes importarlo de forma normal (`import logo from './logo.svg'`) y usarlo en el atributo `src` de una etiqueta `img`. En otros entornos, como Vite o Next.js, la importación como componente requiere configurar un plugin de SVGR.
