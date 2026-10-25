---
title: ▷ Error con la librería wkhtmltopdf header spacing
date: 2024/7/17
description: ▷ Solución al aviso de wkhtmltopdf "unpatched qt" al imprimir informes en Odoo, instalando la versión 0.12.6-1 con Qt parcheado.
tag: ssh, error
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Error con la librería wkhtmltopdf header spacing

Odoo utiliza **wkhtmltopdf** para convertir sus informes HTML en PDF. Si al imprimir un reporte en un servidor de Odoo nos aparece el siguiente error en el log:

```bash
odoo.addons.base.models.ir_actions_report: wkhtmltopdf: The switch --header-spacing, is not support using unpatched qt, and will be ignored.The switch --header-html, is not support using unpatched qt, and will be ignored.The switch --footer-html, is not support using unpatched qt, and will be ignored.QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-odoo'
```

el problema es que tenemos instalada una versión de wkhtmltopdf compilada sin Qt parcheado (*unpatched qt*), que suele ser la que viene en los repositorios de la distribución. Esa versión ignora opciones como `--header-html` o `--footer-html`, por lo que los informes salen sin cabecera ni pie de página, o con márgenes incorrectos.

Te dejo la solución a continuación. Ejecuta los siguientes comandos, con los que desinstalamos la versión de wkhtmltopdf que tenemos y descargamos la versión 0.12.6-1 desde el repositorio oficial de empaquetado, que sí incluye Qt parcheado:
```bash
sudo apt-get remove wkhtmltopdf
sudo apt-get install -y xfonts-75dpi

wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.0g-2ubuntu4_amd64.deb
sudo dpkg -i libssl1.1_1.1.0g-2ubuntu4_amd64.deb

wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb

wkhtmltopdf --version
```

Si el comando `wkhtmltopdf --version` muestra `(with patched qt)`, la instalación es correcta. Reinicia el servicio de Odoo y vuelve a imprimir el informe.

**Nota:** el paquete del ejemplo está compilado para Ubuntu 20.04 (*focal*). Si usas otra versión de Ubuntu o Debian, descarga el paquete correspondiente desde la página de releases de wkhtmltopdf.

## Contactar un especialista en Odoo
- Nombre: Marlon Falcón Hernández
- WhatsApp [+34662470645](https://web.whatsapp.com/send?phone=34662470645&text=)
- GitHub [@falconsoft3d](https://github.com/falconsoft3d)
- YouTube [@marlonfalconhdez](https://www.youtube.com/@marlonfalconhdez)
- Telegram [@falconsoft]
- Phone +34 (662) 47 0645
- Email mfalconsoft@gmail.com