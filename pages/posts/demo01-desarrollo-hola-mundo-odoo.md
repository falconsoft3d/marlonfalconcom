---
title: ▷ Demo 01 - Desarrollo Hola Mundo Odoo
date: 2023/01/12
description: ▷ Primer módulo de Odoo paso a paso, con manifiesto, modelo, vistas, menús y permisos de acceso para un "hola mundo" funcional.
tag: odoo, desarrolloodoo, python
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Demo 01 - Desarrollo Hola Mundo Odoo
En este post haremos un "hola mundo" en Odoo. Para ello vamos a crear un módulo llamado `01_hello_world` con un modelo sencillo de mascotas (`ej.pet`), sus vistas de lista y formulario, y un menú para acceder a ellas.

La estructura final del módulo será la siguiente:

```
01_hello_world/
├── __init__.py
├── __manifest__.py
├── models/
│   ├── __init__.py
│   └── ej_pet.py
├── security/
│   └── ir.model.access.csv
└── views/
    └── views.xml
```

1. Creamos la carpeta del módulo `01_hello_world` dentro de una ruta incluida en el `addons_path` de Odoo.
```
mkdir 01_hello_world
```

2. Creamos el archivo `__manifest__.py`, que describe el módulo: nombre, versión, autor, dependencias y archivos de datos que debe cargar.
```python
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    This module copyright (C) 2018 Marlon Falcon Hernandez
#    (<http://www.marlonfalcon.com>).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

{
    'name': '01 Hello World MFH',
    'version': '16.0.1.0.0',
    'author': 'Marlon Falcon Hernandez',
    'maintainer': 'Marlon Falcon Hernandez',
    'website': 'http://www.marlonfalcon.com',
    'license': 'AGPL-3',
    'category': 'Extra Tools',
    'summary': 'Hello World.',
    'depends': ['base'],
    'data': [
              'views/views.xml',
              'security/ir.model.access.csv'
            ],
    'images': ['static/description/banner.jpg'],
}
```

3. Creamos el archivo de vistas `views/views.xml` (el nombre debe coincidir con el declarado en la clave `data` del manifiesto). En él definimos la vista de formulario, la vista de lista, la acción de ventana y los menús.
```xml
<?xml version="1.0" encoding="UTF-8"?> 
<odoo> 
<!-- Comentario en la Views --> 
     <record id="view_ej_pet_form" model="ir.ui.view">
        <field name="name">ej.pet.form</field>
        <field name="model">ej.pet</field>
        <field name="arch" type="xml"> 
            <form string="Pets List">
                <group>
                    <group>
                        <field name="name"/>
                        <field name="age"/>
                    </group>
                     <group>
                        <field name="color"/>
                        <field name="type"/>
                    </group>
                </group>
            </form> 
        </field> 
    </record> 
     <record id="view_tree_ej_pet" model="ir.ui.view">
        <field name="name">ej.pet.tree</field>
        <field name="model">ej.pet</field>
        <field name="arch" type="xml"> 
           <tree> 
                    <field name="name" optional="show"/>
                    <field name="age"/>
                    <field name="color"/>
                    <field name="type"/>
           </tree> 
        </field> 
    </record> 
    <record model="ir.actions.act_window" id="act_ej_pet">
        <field name="name">pet</field>
        <field name="res_model">ej.pet</field>
        <field name="view_mode">tree,form</field> 
        <field name="view_id"  ref="view_tree_ej_pet" />
    </record> 
<!--  Declaramos los menu --> 
<menuitem id="ej_pets_menu" name="Pets" web_icon="stock,static/description/icon.png" sequence="10"/> 
<menuitem id="submenu_ej_pets_menu" name="Pets" sequence="10" parent="ej_pets_menu"/> 
<menuitem id="submenu_ej_pets_action" name="Pets" sequence="10" parent="submenu_ej_pets_menu" action="act_ej_pet"/>
</odoo>
```

4. Creamos el modelo en `models/ej_pet.py`. Aquí se definen los campos que tendrá cada mascota.
```python
# -*- coding: utf-8 -*-
from odoo import api, fields, models

class EjPet(models.Model):
    _name = 'ej.pet'
    name = fields.Char(string='name', required=True)
    age = fields.Integer(string='age')
    color = fields.Char(string='color')
    type = fields.Selection([('small', 'Small'),
                             ('medium', 'Medium'),
                             ('big', 'Big')], string='type', default="small", required=True)

```

5. Creamos los archivos `__init__.py` para que Python cargue el modelo. En la raíz del módulo:
```python
from . import models
```

Y en `models/__init__.py`:
```python
from . import ej_pet
```

6. Creamos el archivo `security/ir.model.access.csv` con los permisos de acceso al modelo. Sin él, Odoo mostrará un aviso y los usuarios no podrán ver los registros:
```
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_ej_pet_user,ej.pet.user,model_ej_pet,base.group_user,1,1,1,1
```

7. Reiniciamos Odoo, activamos el modo desarrollador, actualizamos la lista de aplicaciones e instalamos el módulo. Aparecerá un nuevo menú **Pets** desde el que podremos crear nuestras primeras mascotas.

**Nota:** el manifiesto también referencia una imagen en `static/description/banner.jpg`. Es opcional, pero si la declaras conviene que exista para que el módulo se muestre correctamente en la lista de aplicaciones.

Te dejo el repositorio de GitHub con el código completo: https://github.com/Odoo-10-test/trucos_odoo/tree/master/ejemplo_modulos/01_hello_world