---
title: ▷ Error con libreria wkhtmltopdf header spacing
date: 2024/7/17
description: ▷ Error con libreria wkhtmltopdf header spacing
tag: ssh, error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error con libreria wkhtmltopdf header spacing

Cuando tratamos de imprimir un reporte en un servidor de Odoo, y nos aparece el siguiente error:

```bash
odoo.addons.base.models.ir_actions_report: wkhtmltopdf: The switch --header-spacing, is not support using unpatched qt, and will be ignored.The switch --header-html, is not support using unpatched qt, and will be ignored.The switch --footer-html, is not support using unpatched qt, and will be ignored.QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-odoo'
```

Te dejo la solución a continuación, corre los siguientes comandos donde desinstalamos la versión de wkhtmltopdf que tenemos y descargamos la versión 0.12.6-1:
```bash
sudo apt-get remove wkhtmltopdf
sudo apt-get install -y xfonts-75dpi

wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.0g-2ubuntu4_amd64.deb
sudo dpkg -i libssl1.1_1.1.0g-2ubuntu4_amd64.deb

wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb

wkhtmltopdf --version
```

# Contactar un especialista en Odoo
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- Youtube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com