---
title: Odoo widgets para la versión 16
date: 2022/12/18
description: Ejemplos de widgets útiles en las vistas de Odoo 16 - many2one_avatar_user, priority, monetary, boolean_toggle y badge.
tag: odoo
author: Marlon Falcon Hernandez
---
# Odoo widgets para la versión 16

import Image from 'next/image'

Los widgets permiten cambiar la forma en que un campo se muestra y se edita en las vistas de Odoo, sin modificar el modelo. Se indican con el atributo `widget` en la definición del campo dentro de la vista XML. Estos son algunos de los que más uso en la versión 16.

## many2one_avatar_user

Muestra un campo Many2one a usuarios junto con su avatar.
````
<field name="user_id" widget="many2one_avatar_user" options="{'clickable': '1'}"/>
````

<Image
  src="/images/widget/many2one_avatar_user.png"
  alt="many2one_avatar_user"
  width={240}
  height={143}
  priority
  className="next-image"
/>

## priority

Muestra el campo como estrellas para marcar la prioridad de un registro.
```
<field name="priority" optional="hide" widget="priority"/>
```

<Image
  src="/images/widget/priority.png"
  alt="priority"
  width={240}
  height={143}
  className="next-image"
/>

## monetary

Formatea un importe con el símbolo de la moneda indicada en `currency_field`.
```
<field name="amount_total" widget="monetary" options="{'currency_field': 'currency_id'}"/>
```
<Image
  src="/images/widget/monetary.png"
  alt="monetary"
  width={240}
  height={143}
  className="next-image"
/>

## boolean_toggle

Muestra un campo booleano como un interruptor que se puede activar o desactivar directamente.
```
<field name="active" widget="boolean_toggle"/>
```

<Image
  src="/images/widget/boolean_toggle.png"
  alt="boolean_toggle"
  width={240}
  height={143}
  className="next-image"
/>

## badge

Muestra el valor como una etiqueta de color. Con los atributos `decoration-*` se elige el color según una condición.
```
<field name="state" widget="badge" decoration-info="state == 'draft'" decoration-success="state == 'posted'"/>
```

<Image
  src="/images/widget/badge.png"
  alt="badge"
  width={240}
  height={143}
  className="next-image"
/>
