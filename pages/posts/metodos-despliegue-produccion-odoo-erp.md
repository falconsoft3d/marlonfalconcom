---
title: ▷ Métodos de despliegue en producción de Odoo ERP
date: 2023/01/14
description: ▷ Métodos de despliegue en producción de Odoo ERP
tag: odoo, erp, metodologia
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Métodos de despliegue en producción de Odoo ERP
Hay muchos métodos de despliegue en producción de Odoo ERP, pero en este post vamos a ver los más comunes y los que más se utilizan.

**Vamos a dar por hecho que**:
- Git para el control de versiones.
- Docker, Nightly, K8s, Docker Swarn, etc. para el despliegue de Odoo ERP.
- Separación de repositorios para los especialidades o módulos.
- Que tendremos un responsable de despliegue de los servidores.
- Que las ramas de producción estan protegidas y no se pueden hacer cambios directamente.
- Los ticket siempre se guardan en el servidor de producción.

# ▷ Método FALCON-I

<Image
  src="/images/posts/ci-odoo-1.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

1. Se instalarán tres servidores:
    1. Servidor de desarrollo. Se utiliza para desarrollar y probar los módulos.
    2. Servidor de Producción. Se sube los cambios a producción respaldando la base de datos.
    3. Servidor de QA o Calidad. Se saca un copia de la base de datos de producción y se hace pruebas de calidad con esa BD en el servidor QA. Por lo que en demo (QA) siempre perderemos los datos.

El objetivo de este método es que siempre nos vamos asegurar que cuando hacemos las pruebas con el cliente este va a ver exactamente lo que esta en producción. Además, nos aseguramos que la base de datos de producción siempre va a estar en un estado estable.

Ventaja es muy rápido y sencillo de implementar. Pero la desventaja es que no se puede hacer pruebas de calidad en demo (QA) ya que siempre se perderán los datos.

# ▷ Método HDZ-II
<Image
  src="/images/posts/ci-odoo-2.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

1. Se instalarán tres servidores:
    1. Servidor de desarrollo. Se utiliza para desarrollar y probar los módulos.
    2. Servidor de QA o Calidad. Una ves que se termina de desarrollar un módulo se sube a este servidor para hacer pruebas de calidad. Y el cliente valida para subir a producción.
    3. Servidor de Producción. Se sube los cambios a producción respaldando la base de datos.

Este método es más usado en proyectos en producción, ya que el cliente no quiere ver los cambios hasta que no estén listos. Y nos aseguramos que el cliente valide junto al equipo de desarrollo cada cambio.

