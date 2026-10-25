---
title: ▷ LocalStorage con JavaScript
date: 2023/2/20
description: ▷ Cómo guardar, leer y eliminar datos en el navegador con LocalStorage en JavaScript.
tag: javascript, localstorage
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ LocalStorage con JavaScript
LocalStorage es un espacio de almacenamiento que nos permite guardar datos en el navegador del usuario, de forma que estos datos persistan incluso si el usuario cierra el navegador y lo vuelve a abrir. Los datos se guardan como pares clave-valor de tipo texto y están asociados al dominio de la página.

## Guardar datos en LocalStorage
Para guardar datos en LocalStorage podemos utilizar el siguiente código:

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

## Notas

- LocalStorage solo almacena cadenas de texto. Para guardar objetos, conviértelos con `JSON.stringify()` y recupéralos con `JSON.parse()`.
- Para borrar todos los datos del dominio se usa `localStorage.clear()`.
- No guardes en LocalStorage información sensible como contraseñas o tokens, ya que cualquier script de la página puede leerla.
