---
title: ▷ La forma correcta de hacer un prompt para Odoo - Solicitudes de cambio con PDF, captura y flecha
date: 2026/11/25
description: ▷ Cómo pedir un cambio en Odoo (a tu desarrollador o a una IA) con un PDF claro - captura marcada con una flecha, problema, solución, criterios de aceptación, 7 prompts numerados y las 10 cosas que no se deben hacer.
tag: odoo, odoo-20, inteligencia-artificial, prompts, solicitud-de-cambio, soporte-odoo
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ La forma correcta de hacer un prompt para Odoo

«Ponme un campo en el producto.» Ese es el tipo de mensaje que más tiempo hace perder en un proyecto de Odoo. ¿Qué campo? ¿En qué pantalla? ¿Para qué? ¿Quién lo rellena? ¿Qué pasa con los productos que ya existen?

Da igual que la petición vaya a tu **desarrollador de Odoo** o a una **IA** como Claude o ChatGPT: quien la recibe **solo sabe lo que escribes**. Un buen prompt para Odoo es, en realidad, una **solicitud de cambio bien hecha**: un documento corto, normalmente un **PDF de una página**, con una **captura marcada con una flecha**, el **problema**, la **solución** que propones y cómo sabremos que está terminado.

En este artículo te explico la estructura que uso con mis clientes, un ejemplo real sobre la **ficha de producto de Odoo**, **7 prompts numerados** listos para copiar, **las 10 cosas que no se deben hacer** y un **PDF descargable** con todo.

## Las 8 partes de un buen prompt para Odoo

1. **Contexto**: versión de Odoo (Community o Enterprise, 17, 18, 19, 20…), módulo y empresa o base de datos.
2. **Dónde**: la ruta del menú (por ejemplo, *Inventario › Productos › Productos*) y una **captura con una flecha** que señale el lugar exacto.
3. **Problema**: qué pasa hoy, a quién le afecta y cuánto cuesta (tiempo, errores, dinero).
4. **Solución propuesta**: qué quieres que cambie. Si es un campo: nombre, tipo, valores posibles, si es obligatorio y quién lo rellena.
5. **Regla basada en datos**: la condición se apoya en un **campo, una categoría, una etiqueta o una referencia interna**, nunca en el nombre del producto o del contacto.
6. **Ejemplo concreto**: un registro real (referencia interna, número de pedido) con el resultado que esperas.
7. **Criterios de aceptación**: la lista de comprobaciones que dirán «esto está terminado».
8. **Qué no se debe tocar**: lo que tiene que seguir funcionando igual.

## Ejemplo: pedir un campo nuevo en la ficha de producto

Este ejemplo está hecho sobre una base de datos de demostración de **Odoo 20**. La empresa vende productos químicos y de construcción, y el almacén necesita saber qué productos son **mercancía peligrosa** antes de preparar un envío.

### 1. Captura marcada con una flecha

La captura es la parte que más tiempo ahorra. Abre el producto, haz la captura de la pantalla completa (que se vea el menú y la pestaña) y dibuja **una flecha roja** hacia el sitio donde quieres el campo, con una nota corta.

<Image
  src="/images/posts/prompt-odoo/ficha-producto-flecha.jpg"
  alt="Ficha de producto de Odoo 20 con una flecha roja que señala dónde añadir el campo Mercancía peligrosa"
  width={1440}
  height={900}
  className="next-image"
/>

Basta con **una flecha, un recuadro y una nota**: no hace falta diseño. En la sección siguiente tienes **las apps y extensiones** para hacerlo.

### 2. Problema

> Al preparar un envío, el almacén no sabe qué productos son mercancía peligrosa (ADR) ni dónde está su ficha de datos de seguridad (FDS). Hoy se guían por el nombre: «si pone *disolvente*, es peligroso». La semana pasada se envió el producto «Limpiador industrial 5 L» sin documentación porque su nombre no lo indicaba. Nos ocurre de 2 a 3 veces al mes y cada incidencia supone una devolución.

### 3. Solución propuesta

> En la ficha de producto, pestaña **Información general**, debajo de **Categoría**:
>
> - Una casilla **«Mercancía peligrosa (ADR)»**, no obligatoria, desmarcada por defecto. La rellena el responsable de compras.
> - Si está marcada, se muestra el campo **«Ficha de datos de seguridad»** (archivo PDF) y pasa a ser obligatorio.
> - En la transferencia de salida, cuando alguna línea tenga un producto peligroso, se muestra un aviso: «Este envío contiene mercancía peligrosa: adjunta la FDS».

### 4. Criterios de aceptación

> - Marco la casilla en «Limpiador industrial 5 L» (referencia LIM-005) y no me deja guardar sin la FDS.
> - Creo una venta con LIM-005, confirmo, y la transferencia de salida muestra el aviso.
> - Una venta sin productos peligrosos no muestra ningún aviso.
> - Si cambio el nombre del producto, el aviso sigue apareciendo.
> - Los productos existentes quedan desmarcados; no se ha cambiado nada más en la ficha.

Con esas cuatro partes en **un PDF de una o dos páginas**, cualquier desarrollador o IA puede estimar, hacer y probar el cambio sin una sola llamada.

## Apps y extensiones para marcar la captura con flechas

No necesitas Photoshop. Estas herramientas permiten hacer la captura y dibujar **flechas, recuadros, texto y resaltados**, y muchas ya vienen con tu sistema:

| Herramienta | Dónde | Precio | Para qué la uso |
| --- | --- | --- | --- |
| Captura + Vista Previa | macOS | Incluida | `Cmd + Mayús + 5` para capturar; en Vista Previa, *Herramientas › Anotar* para flechas, formas y texto |
| Recortes (Snipping Tool) | Windows | Incluida | `Win + Mayús + S` para capturar; lápiz y resaltador para marcar |
| Shottr | macOS | Gratis | Captura rápida con flechas, recuadros, desenfoque de datos y texto |
| CleanShot X | macOS | De pago | Captura, flechas, desenfoque, grabación de vídeo y enlace para compartir |
| ShareX | Windows | Gratis | Captura con editor de flechas, numeración de pasos y desenfoque |
| Greenshot | Windows | Gratis | Captura con flechas, recuadros, texto y exportación directa a PDF |
| Snagit | Windows y macOS | De pago | Editor completo: flechas, pasos numerados, plantillas y vídeo |
| Flameshot | Linux y Windows | Gratis | Captura con flechas, recuadros, numeración y desenfoque |
| Awesome Screenshot | Extensión de Chrome, Edge y Firefox | Gratis con plan de pago | Captura de la página entera de Odoo y anotación en el navegador |
| Lightshot | Extensión y app | Gratis | Selecciona una zona y dibuja flechas y texto al momento |
| Marcación del móvil | iPhone y Android | Incluida | Tras la captura, toca la miniatura y dibuja sobre ella |

**Consejos para que la marca se entienda:**

- Usa **rojo** para la flecha y el recuadro: destaca sobre los colores de Odoo.
- **Una flecha por cambio.** Si hay varios puntos, numéralos (1, 2, 3) y explícalos en el texto con el mismo número.
- **Desenfoca** los datos personales (clientes, precios, correos) antes de enviar la captura.
- Captura la **pantalla completa**, con el menú y la pestaña visibles, para que se sepa dónde estás.

**Para montar el PDF**: pega las capturas en Word, Google Docs o Pages y usa *Archivo › Descargar/Exportar como PDF*, o usa *Imprimir › Guardar como PDF* desde cualquier app. Si el cambio se entiende mejor en movimiento, graba un vídeo corto con **Loom** o con la grabación de pantalla de tu sistema y añade el enlace al PDF.

## Importante: nunca bases una regla en el nombre de un producto o contacto

Es el error más habitual y el más caro: «si el producto se llama *Disolvente…*, que salga el aviso» o «si el cliente es *Construcciones García*, aplica un 10 % de descuento». Funciona el primer día y falla en silencio después, porque **el nombre puede cambiar**:

- **Se renombra**: «Disolvente universal» pasa a «Disolvente universal 5 L» o se corrige una errata.
- **Se traduce**: en una base de datos multidioma el nombre del producto cambia según el idioma del usuario.
- **Se duplica o se parece**: dos contactos «Construcciones García S.L.» y «Construcciones Garcia SL», o un producto nuevo que contiene la palabra sin serlo («Tapón para disolvente»).
- **Cambia la razón social**: una empresa se fusiona, cambia de nombre o se da de alta como persona y luego como empresa.
- **Nadie lo ve**: la regla está escondida en el código y quien renombra el registro no sabe que acaba de desactivarla.

**Qué usar en su lugar**: un **campo** (como la casilla «Mercancía peligrosa»), una **categoría de producto**, una **etiqueta de contacto**, una **tarifa** o una **posición fiscal**. Son datos visibles que el usuario controla y que no cambian por accidente. En el prompt, escríbelo así: *«la regla se basa en el campo X, no en el nombre»*.

## Las 10 cosas que no se deben hacer al pedir un cambio en Odoo

1. **Basar la regla en el nombre** de un producto, contacto o empresa. El nombre cambia; usa un campo, una categoría o una etiqueta.
2. **Pedirlo por WhatsApp, audio o llamada** sin dejarlo por escrito. Lo que no está en el PDF no existe a la hora de probar.
3. **Mandar una captura sin marcar**, o recortada sin el menú. Una flecha y la ruta del menú evitan la pregunta «¿dónde?».
4. **Dar la solución sin el problema** («pon un campo aquí»). Si no se explica el porqué, no se puede proponer una alternativa mejor.
5. **Mezclar varios cambios en una sola solicitud.** Un PDF por cambio: se estima, se aprueba y se prueba por separado.
6. **Escribir «no funciona» o «está mal»** sin los pasos para reproducirlo ni el resultado que esperabas.
7. **No dar un ejemplo real**: ni referencia de producto, ni número de pedido, ni cliente de prueba.
8. **Marcar todo como urgente.** Indica la prioridad real y la fecha en la que lo necesitas, y por qué.
9. **Olvidar los criterios de aceptación.** Sin ellos nadie sabe cuándo está terminado y la tarea vuelve una y otra vez.
10. **Enviar contraseñas o datos sensibles** en el documento o pedir que se cambie directamente en producción. Usa una base de datos de pruebas y comparte el acceso por un canal seguro.

## 7 prompts numerados para Odoo listos para copiar

Copia el prompt, sustituye lo que está entre corchetes y adjunta la captura con la flecha. Funcionan igual para enviarlos a tu desarrollador que para pegarlos en una IA.

### Prompt 1 - Pedir un campo nuevo en la ficha de producto

```text
Contexto: Odoo [20 Community], módulo Inventario, base de datos de pruebas [nombre].
Dónde: Inventario > Productos > Productos > pestaña Información general,
debajo de "Categoría" (ver captura adjunta, flecha roja).

Problema: [qué pasa hoy, a quién afecta y cuántas veces ocurre].

Solución propuesta:
- Campo "[nombre del campo]" de tipo [casilla / texto / lista / fecha / archivo].
- Valores posibles: [...]. Valor por defecto: [...].
- Obligatorio: [sí / no / solo si ...]. Lo rellena: [rol].
- Regla: se basa en este campo, NO en el nombre del producto.

Ejemplo: en el producto [referencia interna], al [acción] debe ocurrir [resultado].

Criterios de aceptación:
1. [...]
2. [...]
3. Si cambio el nombre del producto, el comportamiento no cambia.

No tocar: [qué debe seguir igual].
```

### Prompt 2 - Convertir tus notas en una solicitud de cambio

```text
Actúa como consultor funcional de Odoo [versión]. Con mis notas de abajo,
redacta una solicitud de cambio con estas secciones: Contexto, Dónde (ruta
del menú), Problema, Solución propuesta, Ejemplo, Criterios de aceptación y
Qué no se debe tocar. Si falta información, no la inventes: hazme una lista
de preguntas al final. Si alguna regla depende del nombre de un producto o
contacto, propón un campo, categoría o etiqueta en su lugar.

Mis notas:
[pega aquí tus notas, el audio transcrito o el correo]
```

### Prompt 3 - Revisar tu solicitud antes de enviarla

```text
Revisa esta solicitud de cambio para Odoo y dime qué falta o qué es ambiguo.
Compruébala contra esta lista: ¿tiene captura con flecha y ruta del menú?
¿explica el problema y no solo la solución? ¿hay un único cambio? ¿incluye
un ejemplo real? ¿tiene criterios de aceptación? ¿alguna regla depende del
nombre de un producto o contacto? ¿contiene contraseñas o datos sensibles?
Devuélveme la lista de problemas y la solicitud corregida.

Solicitud:
[pega aquí tu solicitud]
```

### Prompt 4 - Reportar un error en Odoo

```text
Contexto: Odoo [versión], módulo [módulo], usuario [rol, no la contraseña].
Dónde: [ruta del menú] (captura adjunta con flecha en el error).

Pasos para reproducirlo:
1. [...]
2. [...]
3. [...]

Resultado actual: [qué pasa, mensaje de error completo].
Resultado esperado: [qué debería pasar].
Desde cuándo: [fecha o "desde la actualización de ..."].
Registro de ejemplo: [número de pedido, factura o referencia].
Frecuencia: [siempre / a veces / solo con ...].
```

### Prompt 5 - Pedir una regla para clientes sin usar su nombre

```text
Contexto: Odoo [versión], módulo Ventas.
Problema: a los clientes distribuidores hay que aplicarles [condición], y hoy
se hace a mano buscando su nombre.

Solución propuesta: crear la etiqueta de contacto "Distribuidor" (o usar la
tarifa [nombre]) y aplicar [condición] a los contactos que la tengan.
La regla NO debe depender del nombre del contacto ni de su razón social,
porque puede cambiar, estar duplicado o escrito de otra forma.

Ejemplo: el contacto [referencia] con la etiqueta "Distribuidor" recibe
[resultado]; sin la etiqueta, no.
Criterios de aceptación: [...]
```

### Prompt 6 - Pedir un informe o listado

```text
Contexto: Odoo [versión], módulo [módulo].
Necesito un informe de [qué] para [quién y para qué decisión].
Columnas: [columna 1, columna 2, ...].
Filtros: [fechas, estados, almacén, comercial...].
Agrupado por: [...]. Ordenado por: [...].
Formato: [vista lista en Odoo / Excel / PDF]. Frecuencia: [diario, mensual].
Ejemplo: con los datos de [mes], la fila de [producto o cliente] debe
mostrar [valores esperados].
```

### Prompt 7 - Generar criterios de aceptación y pruebas

```text
A partir de esta solicitud de cambio para Odoo, escribe:
1. Criterios de aceptación numerados, cada uno comprobable por un usuario.
2. Casos de prueba paso a paso (datos de entrada, acción, resultado esperado),
   incluyendo un caso en el que se cambia el nombre del registro y la regla
   debe seguir funcionando, y un caso negativo en el que no debe ocurrir nada.
3. Qué funcionalidades existentes conviene volver a probar.

Solicitud:
[pega aquí tu solicitud]
```

## Descarga el PDF con el ejemplo y los prompts

He reunido el ejemplo de la ficha de producto con la flecha, los **7 prompts numerados** y la lista de **las 10 cosas que no se deben hacer** en un PDF para imprimir o compartir con tu equipo:

**[Descargar el PDF: La forma correcta de hacer un prompt para Odoo](/doc/prompt-correcto-odoo-solicitud-de-cambio.pdf)**

<Image
  src="/images/posts/prompt-odoo/pdf-solicitud-de-cambio.jpg"
  alt="Primera página del PDF con la solicitud de cambio para Odoo: captura con flecha, problema y solución"
  width={1240}
  height={1754}
  className="next-image"
/>

## Lista rápida antes de enviar tu solicitud

- [ ] Versión de Odoo, módulo y ruta del menú.
- [ ] Captura de pantalla completa con **una flecha** y una nota.
- [ ] Problema explicado con un caso real.
- [ ] Solución con nombre, tipo y valores del campo.
- [ ] La regla se basa en un campo, categoría o etiqueta, **no en un nombre**.
- [ ] Criterios de aceptación numerados.
- [ ] Un solo cambio por PDF y sin contraseñas.

## Preguntas frecuentes

**¿Es lo mismo un prompt que una solicitud de cambio?**
En la práctica, sí. Una IA y un desarrollador necesitan la misma información: contexto, lugar, problema, solución y cómo comprobarla. Si tu solicitud sirve para una persona, servirá para una IA.

**¿Por qué en PDF y no en un correo?**
Porque el PDF mantiene la captura con la flecha junto al texto, se adjunta a la tarea o al ticket sin perder el formato y queda como referencia cuando se prueba el cambio.

**¿Y si no sé qué solución proponer?**
Describe bien el problema y deja la solución como «abierta». Usa el prompt 2 para ordenar tus ideas y el prompt 3 para revisarlas.

**¿Puedo usar el nombre del producto si «nunca va a cambiar»?**
No. Siempre acaba cambiando: una errata, una traducción, un formato nuevo o un producto parecido. Un campo o una categoría cuesta lo mismo de crear y no falla.

¿Quieres que revise tus solicitudes o que implante los cambios en tu Odoo? [Contáctame](/contacto) y lo vemos juntos.
