---
title: ▷ LocalStorage con JavaScript
date: 2023/2/20
description: ▷ LocalStorage con JavaScript
tag: javascript, localstorage
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ LocalStorage con JavaScript
LocalStorage es un espacio de almacenamiento que nos permite almacenar datos en el navegador del usuario, de forma que estos datos persistan incluso si el usuario cierra el navegador y lo vuelva a abrir.

## Salvar datos en LocalStorage
Para salvar datos en LocalStorage podemos utilizar el siguiente código:

```js
localStorage.portal_login = 'marlon';
```

```js
localStorage.setItem('nombre', 'Marlon');
```

## Obtener datos de LocalStorage
Para obtener datos de LocalStorage podemos utilizar el siguiente código:

```js
localStorage.portal_login;
```

```js
localStorage.getItem('nombre');
```

## Eliminar datos de LocalStorage
Para eliminar datos de LocalStorage podemos utilizar el siguiente código:

```js
localStorage.removeItem('nombre');
```




