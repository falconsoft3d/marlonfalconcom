---
title: ▷ Envío de email con Odoo
date: 2023/01/12
description: ▷ Cómo enviar un email desde un módulo de Odoo usando una plantilla de correo (mail.template) y el método send_mail.
tag: odoo, desarrolloodoo, python, email
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Envío de email con Odoo
En este post vamos a ver cómo enviar un email desde un módulo de Odoo usando las plantillas de correo (`mail.template`). Odoo incluye su propio sistema de envío de correo, por lo que no es necesario usar directamente librerías de Python: basta con definir una plantilla y llamar a su método `send_mail`. Para que los correos salgan, el servidor de correo saliente (SMTP) debe estar configurado en Ajustes.

1. Creamos la plantilla `data/template_response.xml` y la añadimos a la clave `data` del `__manifest__.py`. En ella definimos el modelo al que se asocia, el remitente, el destinatario, el asunto y el cuerpo en HTML. Las expresiones del tipo `${object.campo}` se sustituyen por los valores del registro al enviar el correo:
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

2. Desde el método del modelo obtenemos la plantilla con `self.env.ref` (usando su identificador externo, `modulo.id_de_la_plantilla`) y enviamos el email con `send_mail`. El parámetro `force_send=True` envía el correo inmediatamente en lugar de dejarlo en la cola:
```py
template = self.env.ref('l10n_cl_facturae_sii.email_template_response_customer',False)

mail = template.send_mail(self.id, force_send=True) #envia mail
            if mail:
                self.message_post(body=_("Enviado email al Cliente: %s"%self.partner_id.name))
                self.state_dte_partner = 'sent'
        return res
```

Además de enviar el correo, el ejemplo registra un mensaje en el chatter del documento con `message_post` y actualiza su estado.

**Nota:** la sintaxis `${...}` en las plantillas corresponde a versiones antiguas de Odoo. A partir de Odoo 15, los campos como `email_from` o `subject` usan la sintaxis `{{ object.campo }}` y el cuerpo HTML se escribe con QWeb (`t-out`).
