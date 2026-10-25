---
title: Ejemplo de contador con Owl
date: 2022/12/21
description: Ejemplo de un contador con Owl, el framework de Odoo, usando componentes, useState y props para manejar el estado.
tag: owl
author: Marlon Falcon Hernandez
---
#  Ejemplo de contador con Owl

Este es un ejemplo de un contador con Owl de Odoo. Es un buen punto de partida para entender tres conceptos básicos del framework: los componentes, el estado reactivo con `useState` y el paso de propiedades (props) de un componente padre a uno hijo.

Puedes ver el ejemplo funcionando aquí:

[02-counter](/owl-samples/02-counter/index.html)

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello Owl</title>
    <script src="https://marlonfalcon.com/lib/owl.js"></script>
  </head>
  <body>
    <h1>Owl</h1>
    <script>
        const { Component, xml, useState, mount } = owl;

        class Counter extends Component {
            static template = xml`
              <button t-on-click="() => state.value = state.value + props.increment">
                Click Me! [<t t-esc="state.value"/>]
              </button>`;
          
            state = useState({ value: 0 });
          }
          
          class Root extends Component {
            static template = xml`
              <span>Contador </span>
              <Counter increment="2"/>`;
          
            static components = { Counter };
          }
          
          mount(Root, document.body);
    </script>
  </body>
</html>
```

## Cómo funciona

- **Counter** es un componente con un estado reactivo creado con `useState`. Cada vez que se hace clic en el botón, se suma al valor el incremento recibido por props, y Owl vuelve a renderizar el componente automáticamente.
- **Root** es el componente principal: muestra el texto "Contador" e incluye el componente `Counter` pasándole `increment="2"`, por lo que el contador avanza de dos en dos.
- Por último, `mount` monta el componente `Root` en el `body` de la página.
