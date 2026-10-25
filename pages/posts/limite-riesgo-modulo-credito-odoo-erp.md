---
title: ▷ Límite de crédito con el módulo de préstamos de Odoo ERP CreditPro
date: 2023/01/18
description: ▷ Cómo funciona el límite de riesgo de crédito por cliente en CreditPro, el módulo de préstamos para Odoo ERP.
tag: odoo, erp, credito, credipro
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Límite de crédito con el módulo de préstamos de Odoo ERP CreditPro

En el módulo de préstamos **CreditPro**, el límite de riesgo en crédito se refiere a la cantidad máxima de dinero que una institución financiera está dispuesta a prestar a un individuo o empresa. Esto se basa en una evaluación del riesgo crediticio del prestatario, que puede incluir factores como su historial crediticio, ingresos y activos. El objetivo de establecer límites de riesgo es minimizar el riesgo de impagos y pérdidas financieras para la institución financiera.

Por este motivo, dentro de **CreditPro**, hemos establecido un parámetro que nos permitirá limitar la aprobación de créditos a clientes que estén marcados con ciertos límites.

<Image
  src="/images/posts/limite-credito.png"
  alt="credito"
  width={1540}
  height={594}
  priority
  className="next-image"
/>

Podremos definir el valor límite permitido para ese cliente e informarnos de los consumos que tiene.

Estos parámetros en el módulo **CreditPro** solo serán editables por usuarios con permiso de administración de créditos. Estos usuarios, desmarcando la casilla de ignorar el límite, podrán aprobar el crédito siempre que así lo deseen.
