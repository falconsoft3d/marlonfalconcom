---
title: ▷ Métodos de despliegue en producción de Odoo ERP
date: 2023/01/14
description: ▷ Dos métodos de despliegue en producción para Odoo ERP con servidores de desarrollo, QA y producción, con sus ventajas e inconvenientes.
tag: odoo, erp, metodologia
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Métodos de despliegue en producción de Odoo ERP
Hay muchos métodos de despliegue en producción de Odoo ERP, pero en este post vamos a ver los más comunes y los que más se utilizan.

**Vamos a dar por hecho que usamos**:
- Git para el control de versiones.
- Docker, Nightly, K8s, Docker Swarm, etc. para el despliegue de Odoo ERP.
- Repositorios separados para las especialidades o módulos.
- Un responsable del despliegue de los servidores.
- Ramas de producción protegidas, en las que no se pueden hacer cambios directamente.
- Tickets que siempre se guardan en el servidor de producción.

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
    2. Servidor de producción. Se suben los cambios a producción tras respaldar la base de datos.
    3. Servidor de QA o calidad. Se saca una copia de la base de datos de producción y se hacen las pruebas de calidad con esa BD en el servidor de QA. Por eso, en demo (QA) siempre perderemos los datos.

El objetivo de este método es asegurarnos de que, cuando hacemos las pruebas con el cliente, este vea exactamente lo que está en producción. Además, nos aseguramos que la base de datos de producción siempre va a estar en un estado estable.

La ventaja es que es muy rápido y sencillo de implementar. La desventaja es que no se pueden mantener datos de pruebas en demo (QA), ya que se pierden cada vez que se vuelve a copiar producción.

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
    2. Servidor de QA o calidad. Una vez que se termina de desarrollar un módulo, se sube a este servidor para hacer pruebas de calidad, y el cliente lo valida antes de subirlo a producción.
    3. Servidor de producción. Se suben los cambios a producción tras respaldar la base de datos.

Este método es más usado en proyectos que ya están en producción, ya que el cliente no quiere ver los cambios hasta que estén listos. Además, nos aseguramos de que el cliente valide cada cambio junto al equipo de desarrollo.

