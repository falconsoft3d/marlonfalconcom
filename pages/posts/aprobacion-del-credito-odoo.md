---
title: ▷ Aprobación del crédito en Odoo ERP, módulo CreditPro.
date: 2023/01/30
description: ▷ Aprobación del crédito en Odoo ERP, módulo CreditPro.
tag: odoo, erp, credito
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Aprobación del crédito en Odoo ERP, módulo CreditPro.
La aprobación de un crédito se refiere al proceso mediante el cual una entidad financiera o institución crediticia decide si otorga o no un préstamo a un solicitante. Este proceso implica la evaluación de diversos factores, como la información proporcionada en la solicitud, el historial crediticio del solicitante, y la capacidad del solicitante para reembolsar el préstamo.
La entidad financiera o institución crediticia utilizará esta información para determinar el riesgo asociado con la solicitud de crédito y tomar una decisión sobre si otorgar el préstamo o no.

En general, se espera que los solicitantes de crédito cumplan con ciertos requisitos, como tener ingresos estables, un buen historial crediticio y una capacidad adecuada para reembolsar el préstamo. Si se cumple con estos requisitos, es más probable que la solicitud sea aprobada. Si un solicitante no cumple con estos requisitos, es menos probable que la solicitud sea aprobada.

Dentro de **CreditPro**, nuestro módulo de gestión de créditos en **Odoo** 16,  la responsabilidad de la aprobación del crédito recae en los usuarios con permiso de aprobación de créditos.

<Image
  src="/images/posts/aprobacion-credito.png"
  alt="solicitud-credito"
  width={773}
  height={381}
  priority
  className="next-image"
/>

Basados en los parámetros establecidos en la solicitud toman la decisión de aprobar o rechazar el crédito, en cualquiera de las dos acciones se notifica tanto al vendedor como al cliente por via email.
