---
title: Instalación en Linux de wkhtmltopdf
date: 2022/12/18
description: Cómo instalar wkhtmltopdf 0.12.6 con Qt parcheado en Ubuntu, la versión que necesita Odoo para generar correctamente los informes en PDF.
tag: odoo
author: Marlon Falcon Hernandez
---

# Instalación en Linux de wkhtmltopdf

**wkhtmltopdf** es una herramienta de línea de comandos que convierte páginas HTML en documentos PDF. Odoo la utiliza para generar todos sus informes en PDF (facturas, presupuestos, albaranes...), por lo que es imprescindible instalarla en el servidor.

Es importante instalar la versión con Qt parcheado que se publica en el repositorio oficial de empaquetado de wkhtmltopdf, y no la que viene en los repositorios de la distribución: esta última no admite cabeceras ni pies de página en HTML y los informes de Odoo salen mal maquetados. A continuación tienes los comandos para la versión 0.12.6-1 según tu versión de Ubuntu.

## Ubuntu 22.04/20.04

```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb
```

**Nota:** este paquete está compilado para Ubuntu 20.04 (*focal*). En Ubuntu 22.04 (*jammy*) depende de `libssl1.1`, que ya no viene en el sistema, así que es preferible descargar el paquete específico para *jammy* desde la página de releases del repositorio `wkhtmltopdf/packaging`.

## Ubuntu 18.04

```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.bionic_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.bionic_amd64.deb
```

## Ubuntu 16.04

```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.xenial_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.xenial_amd64.deb
```

## Comprobar la instalación

Puedes verificar la versión instalada con `wkhtmltopdf --version`. Si en el resultado aparece `(with patched qt)`, la instalación es correcta. Después reinicia Odoo para que empiece a usarla.
