---
title: Ejemplo de contador con Owl
date: 2022/12/21
description: Ejemplo de contador con Owl
tag: owl
author: Marlon Falcon Hernandez
---
#  Ejemplo de contador con Owl

Este es un ejemplo de un contador con Owl de Odoo.

[owl-hello-world](/owl-samples/02-counter/index.html)

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