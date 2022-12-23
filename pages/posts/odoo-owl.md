---
title: Odoo OWL
date: 2022/12/23
description: Odoo OWL
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

OWL es un framework de JavaScript de Odoo ERP que es usado para configurar componentes de Odoo. Esta inspirado en React y Vue. Los componentes estan definidos usando Plantillas Qweb. Esta es la documentación oficial de OWL: https://github.com/odoo/owl/tree/master/doc

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

Este ejemplo muestra un componente que incrementa un valor en 1 cada vez que se hace click en el componente. Tambien puedes ver no se usa la palabra static.

Si quieres ver más ejemplos de OWL puedes ver la documentación oficial de OWL o revisa esta categoria en mi blog: [Odoo OWL](/tags/owl)

