---
title: ▷ Solución al problema de reportes desordenados en Odoo con wkhtmltopdf
date: 2025/09/08
description: ▷ Cómo evitar reportes PDF desordenados en Odoo configurando report.url para que wkhtmltopdf use la dirección local.
tag: wkhtmltopdf, odoo, pdf, reportes
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Solución al problema de reportes desordenados en Odoo con wkhtmltopdf

Cuando generamos reportes PDF en Odoo, a veces los documentos aparecen **desordenados, con estilos rotos o columnas fuera de lugar**.  
Este problema no suele deberse al CSS, sino a la forma en que **wkhtmltopdf accede a las vistas de Odoo**.

---

## 🚨 El problema
- wkhtmltopdf renderiza los reportes como si fuera un navegador.  
- Si está configurado para usar la **URL pública** de Odoo (ejemplo: `https://midominio.com`), pueden aparecer fallos:  
  - Certificados SSL autofirmados.  
  - Redirecciones HTTP/HTTPS.  
  - Problemas con proxys inversos (Nginx/Apache).  
  - Fallos de DNS o firewalls internos.  

El resultado: **reportes desordenados, imágenes que no cargan o tablas mal alineadas**.

---

## ✅ La solución
Configurar Odoo para que wkhtmltopdf use siempre la dirección **local (127.0.0.1)** al generar PDFs.

En **Ajustes → Técnico → Parámetros del sistema** asegúrate de lo siguiente:

- `report.url = http://127.0.0.1:8069`  
- `web.base.url = https://midominio.com`  

Además, si trabajas con proxy inverso (Nginx o Apache), habilita el modo proxy en Odoo (`proxy_mode = True`) y envía los encabezados correctos:

```nginx
proxy_set_header Host $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto https;
```

---

## Resultado
Después de guardar los parámetros y reiniciar Odoo (y Nginx, si cambiaste su configuración), vuelve a generar el reporte. Al acceder por la dirección local, wkhtmltopdf ya no depende del certificado SSL, del DNS ni de las redirecciones, y el PDF debería mostrarse con sus estilos y columnas en su sitio.

Si el problema persiste, revisa también que tengas instalada la versión de wkhtmltopdf recomendada por Odoo (la 0.12.x con Qt parcheado), ya que otras versiones pueden generar resultados distintos.
