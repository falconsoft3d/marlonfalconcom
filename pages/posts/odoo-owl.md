---
title: Odoo OWL
date: 2022/12/23
description: Introducción a OWL, el framework de JavaScript de Odoo inspirado en React y Vue, con un ejemplo de componente con estado.
tag: odoo, pycharm
author: Marlon Falcon Hernandez
---

# Odoo OWL
import Image from 'next/image'

<Image
  src="/images/posts/odoo-owl.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

OWL es el framework de JavaScript de Odoo ERP que se usa para construir los componentes de la interfaz de Odoo. Está inspirado en React y Vue. Los componentes se definen usando plantillas QWeb. Esta es la documentación oficial de OWL: https://github.com/odoo/owl/tree/master/doc

# Usando OWL en Odoo
```js
const { useState } = owl.hooks;
const { xml } = owl.tags;

class MyComponent extends Component {
    setup() {
        this.state = useState({ value: 1 });
    }

    increment() {
        this.state.value++;
    }
}
MyComponent.template = xml
    `<div t-on-click="increment">
        <t t-esc="state.value">
    </div>`;
```

Este ejemplo muestra un componente que incrementa un valor en 1 cada vez que se hace clic en él. También puedes ver que no se usa la palabra `static`: la plantilla se asigna después de definir la clase.

Si quieres ver más ejemplos de OWL puedes ver la documentación oficial de OWL o revisar esta categoría en mi blog: [Odoo OWL](/tags/owl)

