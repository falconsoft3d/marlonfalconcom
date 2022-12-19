---
title: Odoo widgets para la versión 16
date: 2022/12/18
description: Odoo widgets para la versión 16
tag: odoo
author: Marlon Falcon Hernandez
---
# Odoo widgets para la versión 16

import Image from 'next/image'

many2one_avatar_user
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

priority
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

monetary
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




