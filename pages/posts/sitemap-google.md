---
title: Enviar el sitemap a Google
date: 2022/12/18
description: Cómo enviar el sitemap de tu sitio web a Google para que descubra e indexe tus páginas.
tag: google, seo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Enviar el sitemap a Google

El sitemap es un archivo XML que lista las URL de tu sitio web. Enviarlo a Google ayuda a que el buscador descubra tus páginas y las indexe antes. Hay dos formas de hacerlo.

## 1. Mediante un ping

Puedes avisar a Google de que tu sitemap existe o ha cambiado abriendo la siguiente URL (sustituye el dominio por el tuyo):
```
https://www.google.com/ping?sitemap=http://www.tusitio.com/sitemap.xml
```

**Nota:** Google anunció en 2023 la retirada de este endpoint de ping, por lo que hoy la opción recomendada es Search Console.

## 2. Desde Google Search Console

Te registras en Google Search Console, verificas la propiedad de tu dominio y, en la sección **Sitemaps**, añades la URL de tu sitemap:
```
https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Amarlonfalcon.com
```

<Image
  src="/images/posts/sitemap.png"
  alt="odoo9"
  width={2456}
  height={1806}
  priority
  className="next-image"
/>

Una vez enviado, Search Console muestra el estado del sitemap y cuántas URL ha descubierto. También puedes indicar la ubicación del sitemap en el archivo `robots.txt` con la línea `Sitemap: https://www.tusitio.com/sitemap.xml`.
