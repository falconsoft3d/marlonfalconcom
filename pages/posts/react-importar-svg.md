---
title: React como importar svg
date: 2022/12/18
description: React como importar svg
tag: react
author: Marlon Falcon Hernandez
---

# React como importar svg
Un svg es un archivo de imagen vectorial, es decir, que no se ve afectado por el tamaño de la pantalla, por lo que se puede ver en cualquier dispositivo sin perder calidad. Para importar un svg en react se debe usar la siguiente sintaxis:

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