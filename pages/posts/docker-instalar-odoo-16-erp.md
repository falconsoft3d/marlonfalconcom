---
title: Instalar Odoo 16 ERP con Docker
date: 2022/12/18
description: Cómo instalar Odoo 16 ERP con Docker y Docker Compose en un servidor Linux en pocos comandos.
tag: docker, odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Instalar Odoo 16 ERP con Docker

Odoo es un software ERP de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral: ventas, compras, inventario, contabilidad, CRM y mucho más.

Usar **Docker** para instalarlo tiene varias ventajas: no necesitas instalar a mano Python, PostgreSQL ni las dependencias de Odoo, el entorno es reproducible y puedes levantar o eliminar una instancia en segundos. Con **Docker Compose** definimos en un solo archivo los dos servicios necesarios: el contenedor de Odoo y el de la base de datos PostgreSQL.


<Image
  src="/images/posts/docker-odoo-16.png"
  alt="odoo-erp"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Pasos para instalar Odoo 16 con Docker

### 1. Instalamos Docker y Docker Compose

En un servidor Debian o Ubuntu, como usuario root:
```yml
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

### 2. Clonamos el repositorio y levantamos los contenedores

Clonamos mi repositorio, que ya incluye el archivo `docker-compose.yml`, y arrancamos los servicios en segundo plano:
```yml
git clone https://github.com/falconsoft3d/docker-odoo-16.git
cd docker-odoo-16
docker-compose up -d
```

### 3. Accedemos a Odoo

Cuando los contenedores estén en marcha (puedes comprobarlo con `docker ps`), abre en el navegador la IP o el dominio del servidor en el puerto que exponga el `docker-compose.yml` (por defecto, Odoo usa el 8069) y crea tu primera base de datos.

Aunque te muestro cómo instalarlo con Docker, puede que no sea la mejor opción para tu proyecto. Si tienes dudas, consulta a un experto en Odoo; puedes contactarme a través de los siguientes datos.

## Datos de contacto
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- YouTube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com