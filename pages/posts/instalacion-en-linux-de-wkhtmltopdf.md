---
title: Instalacion en Linux de wkhtmltopdf
date: 2022/12/18
description: Instalación en Linux de wkhtmltopdf
tag: odoo
author: Marlon Falcon Hernandez
---

# Instalación en Linux de wkhtmltopdf

Ubuntu 22.04/20.04:
```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb
```

Ubuntu 18.04:
```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.bionic_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.bionic_amd64.deb
```

Ubuntu 16.04:
```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.xenial_amd64.deb
sudo apt install ./wkhtmltox_0.12.6-1.xenial_amd64.deb
```