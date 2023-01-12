---
title: ▷ Envío de email con Odoo
date: 2023/01/12
description: ▷ Envío de email con Odoo
tag: odoo, desarrolloodoo, python, email
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Envío de email con Odoo
En este post vamos a ver como enviar un email con Odoo usando la libreria de python email.

1. Creamos la plantilla data/template_response.xml
```xml
<odoo>
    <data noupdate="0">
       
 <record id="email_template_response_supplier" model="mail.template">
            <field name="name">Respuesta Automatica de Recepción de XML</field>
            <field name="model_id" ref="account.model_account_invoice"/>
            <field name="email_from">${(object.company_id.email_intercambio)}</field>
            <field name="email_to">${(object.partner_id.dte_email)}</field>
            <field name="auto_delete" eval="True"/>
            <field name="lang">${object.lang}</field>
            <field name="subject">Notificación de Recepción de XML.</field>
            <field name="body_html"><![CDATA[
                <div style="font-family: 'Lucica Grande', Ubuntu, Arial, Verdana, sans-serif; font-size: 12px; color: rgb(34, 34, 34); background-color: #FFF; ">
                <p>Estimado ${object.partner_id.name},</p>
                <p>
                    La empresa  ${object.company_id.name}, recibió sastifactoriamente su email y esta siendo verificado.
                    Se le enviará una respuesta de aprobación o rechazo una vez terminado el proceso de validación.
                </p>
                <p>
                    Nota: Este mensaje se generó automáticamente, por favor no responda.
                </p>
                <p>
                    Saludos Coordiales,
                </p>
                <p>
                    ${object.company_id.name}
                </p>
            </div>]]>
            </field>
        </record>
  </data>
</odoo>
```

2. Creamos el modelo y mandamos el email.
```py
template = self.env.ref('l10n_cl_facturae_sii.email_template_response_customer',False)

mail = template.send_mail(self.id, force_send=True) #envia mail
            if mail:
                self.message_post(body=_("Enviado email al Cliente: %s"%self.partner_id.name))
                self.state_dte_partner = 'sent'
        return res
```