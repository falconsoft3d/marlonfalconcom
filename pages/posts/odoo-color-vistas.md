---
title: ▷ Odoo colocar colores en vistas tree
date: 2022/12/18
description: ▷ Odoo colocar colores en vistas tree
tag: odoo, xml
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Odoo colocar colores en vistas tree

Se utiliza el atributo **decoration** para colocar colores en las vistas *Tree* o Listas en *Odoo*, este atributo se coloca en el tag **tree** de la vista. A continuación se muestra una imagen y un ejemplo:

<Image
  src="/images/posts/odoo-colores.png"
  alt="odoo-erp"
  width={1366}
  height={359}
  priority
  className="next-image"
/>

Colores:
1. decoration-muted = color gris
2. decoration-warning = color amarillo
3. decoration-danger = color rojo
4. decoration-primary = color azul
5. decoration-success = color verde



Ejemplo:
```xml
<tree js_class="ticket_list_dashboard"
                  decoration-muted="state == 'resuelto'"
                  decoration-warning="state == 'stop'"
                  decoration-danger="state == 'borrador'"
                  decoration-primary="state=='aprobado'"
                  decoration-success="state=='trabajando'">
```

Y todo el código de la vista tree quedaria asi:

```xml
<record id="view_tree_ticket_pro" model="ir.ui.view">
        <field name="name">view.tree.ticket.pro</field>
        <field name="model">ticket.pro</field>
        <field name="arch" type="xml">
            <tree js_class="ticket_list_dashboard"
                  decoration-muted="state == 'resuelto'"
                  decoration-warning="state == 'stop'"
                  decoration-danger="state == 'borrador'"
                  decoration-primary="state=='aprobado'"
                  decoration-success="state=='trabajando'">
                <field name="name"/>
                <field name="title"/>
                <field name="prioridad" optional="show"/>
                <field name="environment" optional="show"/>
                <field name="numerical_priority" optional="show" string="P" sum="sum"/>
                <field name="user_id" widget="many2one_avatar_user" optional="hide"/>
                <field name="user_error_id" widget="many2one_avatar_user" optional="show"/>
                <field name="user_work_id" optional="hidden" widget="many2one_avatar_user"/>
                <field name="entry_date" optional="show"/>
                <field name="end_will_end" optional="hide"/>
                <field name="hours" sum="Total" optional="hidden"/>
                <field name="price" sum="Total" optional="hidden"/>
                <field name="end_date" optional="hidden"/>
                <field name="char_note" optional="hidden"/>
                <field name="advance" optional="show"/>
                <field name="category_id" optional="show"/>
                <field name="project_id" optional="hidden"/>
                <field name="tproject_state_id" optional="hidden"/>
                <field name="sprint_id" optional="show"/>
                <field name="numero_veces" sum="Total" optional="show"/>
                <field name="frequent_question_id" optional="hidden"/>
                <field name="ticket_id" optional="hide"/>
                <field name="calificacion" widget="priority" optional="hide"/>
                <field name="clasificacion" optional="show"/>
                <field name="type" optional="hidden"/>
                <field name="note_id" optional="hidden"/>
                <field name="module_odoo" optional="hidden"/>
                <field name="user_task_id" optional="show"/>
                <field name="contract_type" optional="hide"/>
                <field name="state"
                       decoration-danger="state == 'borrador'"
                       decoration-warning="state == 'aprobado'"
                       decoration-success="state == 'resuelto' or state == 'calificado'" widget="badge"/>
            </tree>
        </field>
    </record>
```