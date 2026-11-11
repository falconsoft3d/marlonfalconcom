---
title: ▷ Tema web de recambios de coche para Odoo con buscador de vehículos
date: 2026/11/11
description: ▷ Tema web de recambios para Odoo 19 - buscador de vehículos por marca, modelo y año, tienda filtrada por compatibilidad y oferta del día con cuenta atrás.
tag: odoo, odoo-19, modulos-odoo, tema-web, ecommerce, recambios
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Tema web de recambios de coche para Odoo: buscador de vehículos y compatibilidad

En una **tienda online de recambios** la pregunta del cliente siempre es la misma: *¿esta pieza le vale a mi coche?* Si la web no lo responde, el cliente se marcha a otra tienda o, peor aún, compra la pieza equivocada y la devuelve. **Auto Part1** es un **tema para el comercio electrónico de Odoo 19 (Community y Enterprise)** pensado para tiendas de recambios y accesorios de automóvil, con la función que este negocio necesita: un **buscador de vehículos por marca, modelo y año** que filtra la tienda y muestra en cada producto si encaja en el coche del cliente.

Tus piezas, precios, stock, carrito y pago siguen siendo los de Odoo. Auto Part1 añade sus propias marcas y modelos de vehículos y rediseña la tienda por completo.

## ¿Para quién es este tema de recambios para Odoo?

- **Tiendas de recambios y desguaces** que venden piezas por Internet y quieren reducir devoluciones por incompatibilidad.
- **Comercios de accesorios, aceites y herramientas** para automóvil que combinan piezas específicas con productos universales.
- **Talleres y distribuidores** que ya gestionan su catálogo en Odoo y quieren una web de venta lista sin desarrollar una a medida.

Solo depende del **comercio electrónico, la lista de deseos y el blog de Odoo**, todos incluidos en Community.

## Funciones principales

### Buscador de vehículos por marca, modelo y año

El cliente elige **la marca, luego el modelo y después el año de fabricación**. Los desplegables dependen unos de otros y se cargan sin recargar la página. El buscador aparece en el hero de la página de inicio, en la parte superior de la tienda y en la página del producto, y el vehículo elegido se recuerda durante toda la sesión. También puede compartirse en un enlace, por ejemplo `/shop?vehicle=12&year=2018`.

<Image
  src="/images/posts/modulos-odoo/auto_part1/finder.jpg"
  alt="Buscador de vehículos por marca, modelo y año en la tienda de recambios de Odoo"
  width={1280}
  height={800}
  className="next-image"
/>

### Tienda filtrada por compatibilidad con el coche

Con un vehículo seleccionado, la tienda muestra **solo las piezas compatibles con ese modelo más las piezas universales** (aceites, herramientas, accesorios...). Cada ficha lleva una etiqueta clara, «Encaja en tu coche» o «Universal», y una etiqueta «Tu vehículo» con una × permite cambiar de coche con un clic. El filtro se integra con la búsqueda estándar del eCommerce, así que **categorías, búsqueda, rango de precios, atributos, ordenación y paginación** siguen funcionando.

<Image
  src="/images/posts/modulos-odoo/auto_part1/shop-vehicle.jpg"
  alt="Tienda online de recambios en Odoo filtrada por las piezas compatibles con el vehículo del cliente"
  width={1280}
  height={800}
  className="next-image"
/>

### Compatibilidad en la página del producto

Antes de comprar, el cliente sabe si la pieza le sirve:

- **Encaja en tu vehículo**: confirmación en verde con el nombre del coche.
- **No encaja**: un aviso claro con los vehículos compatibles y un acceso directo para cambiar de vehículo.
- **Comprobar compatibilidad**: si aún no ha elegido coche, el buscador se abre en la misma página y vuelve al producto.
- **Lista de compatibilidad**: todas las marcas, modelos y años compatibles, con el vehículo del cliente resaltado.

<Image
  src="/images/posts/modulos-odoo/auto_part1/product-fits.jpg"
  alt="Página de producto en Odoo indicando que el recambio encaja en el vehículo del cliente"
  width={1280}
  height={800}
  className="next-image"
/>

### Marcas, modelos y pestaña de compatibilidad en el back office

Desde **Sitio web › Comercio electrónico › Vehículos** creas las marcas (con logotipo opcional y orden) y sus modelos, con **años de fabricación y tipo de carrocería**. En cada producto, la pestaña **Compatibilidad** recoge los vehículos en los que encaja la pieza, o la marca como **Universal**. Los filtros «Universal» y «Sin compatibilidad» localizan los productos que aún tienes por completar. Los responsables de ventas y del sitio web editan; la web solo lee.

<Image
  src="/images/posts/modulos-odoo/auto_part1/fitment-tab.jpg"
  alt="Pestaña de compatibilidad de vehículos en la ficha de producto de Odoo"
  width={1280}
  height={800}
  className="next-image"
/>

### Página de inicio pensada para una tienda de recambios

Al instalar el tema, la portada incluye todo lo que espera un comprador de piezas: **barra superior con tu mensaje**, cabecera con **búsqueda por categoría**, menú de categorías, lista de deseos, cuenta y carrito con su importe; **slider del hero** con tres diapositivas editables y el buscador encima; **fichas redondas de categorías** con su número de piezas; y pestañas de **destacados, más vendidos, novedades y en oferta**.

### Oferta del día con cuenta atrás

Un bloque que crea urgencia cada día. Eliges el producto en el formulario de diseño o, si lo dejas vacío, se muestra el **producto publicado con mayor descuento**. Usa el precio y el precio de comparación de Odoo, con tu lista de precios e impuestos, y una **cuenta atrás hasta medianoche**.

### Marcas, blog, boletín y pie de página

Franja de marcas (con nombres de ejemplo neutros para sustituir por las que vendes), las **tres últimas entradas del blog**, un **boletín** que convierte cada correo en un contacto con la etiqueta «Newsletter» (validado y protegido contra robots) y un pie de página oscuro con logotipo, contacto, enlaces, redes sociales y métodos de pago.

### Tienda, producto y carrito con el estilo del tema

Las páginas estándar del eCommerce de Odoo toman las fuentes y los colores del tema. **Proveedores de pago, métodos de envío y listas de precios** siguen funcionando como siempre.

### Diseño configurable desde Odoo

En **Sitio web › Configuración › Diseño Auto Parts** eliges el **color principal** (que también pasa a la paleta del editor web) y el color oscuro de cabecera y pie, el texto traducible de la barra superior, si el buscador aparece en la tienda y qué producto es la oferta del día. Un botón **Cargar datos de ejemplo** carga marcas, modelos, piezas, categorías, imágenes y entradas de blog en una base de datos creada sin demo, sin duplicar ni sobrescribir nada.

### Inglés, español y catalán, RGPD y mobile-first

Los tres idiomas se instalan con el módulo y el selector de idioma aparece en la cabecera. La **barra de cookies de la UE** está activada y la fuente Poppins la sirve el propio módulo. Cada bloque funciona desde **320 px**, con imágenes diferidas y un JavaScript ligero.

## Beneficios para tu tienda de recambios

- **Menos devoluciones**: el cliente ve si la pieza encaja antes de pagar y recibe un aviso si no es compatible.
- **Mejor experiencia de compra**: el buscador de vehículos responde en la primera pantalla a la pregunta clave del cliente.
- **Sin datos duplicados**: productos, precios, stock, carrito y pago son los de tu Odoo.
- **Tuyo para cambiarlo**: colores, logotipo, textos e imágenes con el editor web y un formulario de ajustes.
- **Hecho a la manera de Odoo**: sitio web estándar, carrito, lista de deseos, blog, cookies y traducciones, en Community y Enterprise.

## Cómo empezar

1. **Instala** Auto Part1. La página /auto-parts se convierte en la portada de los sitios web que no tienen una propia.
2. **Crea las marcas y modelos** que vendes en Sitio web › Comercio electrónico › Vehículos, o pulsa **Cargar datos de ejemplo** para ver la tienda completa.
3. **Completa la pestaña Compatibilidad** de tus productos o márcalos como Universal.
4. **Ajusta colores y textos** en Sitio web › Configuración › Diseño Auto Parts.

## Preguntas frecuentes

**¿Necesito comprar otro módulo?**
No. Depende del comercio electrónico, la lista de deseos y el blog de Odoo, todos incluidos en Community.

**¿Incluye una base de datos de vehículos?**
No. Tú creas las marcas y modelos para los que vendes piezas. Los datos de demostración incluyen 10 marcas y 29 modelos como ejemplo.

**¿El año filtra las piezas?**
Cada modelo lleva sus años de fabricación: el buscador ofrece esos años y los muestra en la etiqueta. Si las piezas cambian entre generaciones, crea un modelo por generación (por ejemplo Golf VII y Golf VIII).

**¿Sustituye mi página de inicio?**
Al instalarlo, /auto-parts pasa a ser la portada de los sitios web que no tienen una propia. Puedes cambiarlo en Diseño Auto Parts y, al desinstalarlo, se restaura.

**¿Puedo usar los logotipos de los fabricantes de coches?**
El logotipo de la marca es opcional y solo para logotipos que tengas derecho a publicar. El tema y la demo usan los nombres de las marcas como texto plano.

**¿Cumple con el RGPD?**
Sí. La barra de cookies de Odoo está activada y las fuentes las sirve el módulo, así que la web no contacta con terceros antes del consentimiento.

## Descarga el módulo

Puedes ver la ficha completa, todas las capturas y el precio de **Auto Part1** en la [tienda de temas Odoo](/tienda/odoo-template/19.0/auto_part1). Si necesitas cargar tu catálogo de vehículos o adaptar el diseño a tu marca, [contáctame](/contacto) y lo vemos juntos.
