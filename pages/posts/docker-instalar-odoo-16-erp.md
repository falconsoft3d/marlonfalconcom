---
title: Docker instalar odoo 16 erp
date: 2022/12/18
description: Docker instalar odoo 16 erp
tag: docker, odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Docker instalar odoo 16 erp

Odoo es un software ERP de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral. Odoo es una plataforma de software de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral. Odoo es una plataforma de software de código abierto que permite a las empresas gestionar sus procesos de negocio de forma integral.


<Image
  src="/images/posts/docker-odoo-16.png"
  alt="odoo-erp"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Para instalar odoo 16 en docker solo debemos ejecutar los siguientes comandos:

Instalamos Docker y Docker Compose
```yml
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

Clonamos el repositorio y ejecutamos el docker-compose desde el repo de marlon
```yml
git clone https://github.com/falconsoft3d/docker-odoo-16.git
cd docker-odoo-16
docker-compose up -d
```

Aunque te muestro como instalarlo con Docker puede que no sea lo mejor en tu proyecto, si quieres consulta a un experto en Odoo, puedes contactarme en los datos de contacto.

## Datos de contacto
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- Youtube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com