---
title: ▷ Demo 01 - Desarrollo Hola Mundo Odoo
date: 2023/01/12
description: ▷ Demo 01 - Desarrollo Hola Mundo Odoo
tag: odoo, desarrolloodoo, python
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Demo 01 - Desarrollo Hola Mundo Odoo
En este post haremos un hola mundo en Odoo, para ello vamos a crear un modulo llamado 01_hello_world.

1. Creamos el modulo 01_hello_world
```
mkdir 01_hello_world
```

2. Creamos el archivo __manifest__.py
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

3. Creamos el archivo views.xml
views/ej_pet_views.xml
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

4. Creamos el archivo ej_pet.py
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

Te dejo el repositorio de github con el codigo completo: https://github.com/Odoo-10-test/trucos_odoo/tree/master/ejemplo_modulos/01_hello_world