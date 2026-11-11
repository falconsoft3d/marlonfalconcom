---
title: ▷ Política de contraseñas en Odoo - Contraseñas seguras, caducidad y generador
date: 2026/11/11
description: ▷ Exige contraseñas seguras en Odoo 18, 19 y 20 - mínimo 8 caracteres, mayúscula y símbolo, renovación cada 6 meses, aviso en rojo y generador de contraseñas.
tag: odoo, odoo-19, modulos-odoo, seguridad, contrasenas, password
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Política de contraseñas en Odoo: contraseñas seguras, caducidad y generador

Por defecto, Odoo acepta casi cualquier contraseña: `1234`, `password` o el nombre de la empresa. Y una vez puesta, nadie la cambia en años. Es la puerta de entrada más habitual en los ataques a un ERP. **Password Policy & Generator** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que impone una **política de contraseñas seguras**, obliga a **renovarlas cada pocos meses**, avisa con un **banner rojo** a quien tiene una contraseña antigua y le ofrece un **generador de contraseñas** para cambiarla en segundos.

## ¿Para quién es esta política de contraseñas para Odoo?

- **Empresas con muchos usuarios internos** donde no se puede revisar a mano la calidad de cada contraseña.
- **Organizaciones con requisitos de cumplimiento** (auditorías, normativas internas o de protección de datos) que exigen complejidad y caducidad de contraseñas.
- **Administradores de Odoo** que quieren mejorar la seguridad sin depender de que cada usuario lo haga bien.

Solo necesita los módulos base de Odoo.

## Funciones principales

### Contraseñas seguras obligatorias

Cada contraseña debe tener **al menos 8 caracteres, una letra mayúscula y un carácter especial** como ! @ # $ % *. Si no cumple, Odoo la rechaza y enumera las reglas que incumple.

<Image
  src="/images/posts/modulos-odoo/strong_password/weak.png"
  alt="Odoo rechaza una contraseña débil y muestra las reglas de la política de contraseñas que incumple"
  width={1160}
  height={320}
  className="next-image"
/>

### La política se aplica en todas partes

No hay atajos: la regla se comprueba en **Preferencias**, en el asistente de actualización, en **Cambiar contraseña del administrador** y en el **correo de restablecimiento de contraseña**. También afecta a cualquier contraseña del portal.

### Caducidad de contraseñas cada 6 meses

Las contraseñas **caducan a los 6 meses** por defecto. Puedes elegir otro periodo, en meses, en **Ajustes > Opciones generales > Permisos > Renovación de contraseña**.

### Banner rojo para contraseñas antiguas

Un usuario interno cuya contraseña ha superado el periodo ve un **aviso rojo en la parte superior de todas las pantallas** hasta que la actualiza. Imposible de ignorar.

<Image
  src="/images/posts/modulos-odoo/strong_password/banner.png"
  alt="Banner rojo en Odoo que pide al usuario actualizar una contraseña antigua"
  width={1600}
  height={240}
  className="next-image"
/>

### Generador de contraseñas aleatorias

El banner abre un asistente que propone una **contraseña aleatoria de 14 caracteres** que ya cumple la política. Puedes generar otra o escribir la tuya.

<Image
  src="/images/posts/modulos-odoo/strong_password/wizard.png"
  alt="Asistente de Odoo para actualizar la contraseña con generador de contraseñas seguras"
  width={1000}
  height={420}
  className="next-image"
/>

### Sugerencias listas para copiar

En **Preferencias > Cambiar contraseña** aparecen **tres contraseñas seguras sugeridas**, cada una con un botón para copiarla.

<Image
  src="/images/posts/modulos-odoo/strong_password/preferences.png"
  alt="Tres sugerencias de contraseñas seguras en el diálogo Cambiar contraseña de Odoo"
  width={1000}
  height={520}
  className="next-image"
/>

### Sin dejar rastro

Si un usuario escribe una contraseña actual incorrecta en el asistente, **se borra de la base de datos al instante**.

### En inglés y español

Traducción completa al español, mensajes de error incluidos.

## Beneficios de una política de contraseñas en Odoo

- **Menos riesgo de intrusión**: se acabaron las contraseñas triviales y reutilizadas durante años.
- **Cumplimiento sin esfuerzo**: complejidad y caducidad controladas desde los ajustes.
- **Usuarios que colaboran**: el generador y las sugerencias hacen que cambiar la contraseña lleve segundos.
- **Cobertura total**: la regla se aplica en cualquier lugar donde se establezca una contraseña.

Para reforzar aún más tu instancia, consulta también estos [consejos para mejorar la seguridad de Odoo ERP](/posts/consejos-para-mejorar-seguridad-odoo-erp).

## Cómo empezar en tres pasos

1. **Instala** Strong Password desde Aplicaciones. Solo necesita los módulos base de Odoo.
2. **Define el periodo** de renovación en Opciones generales > Permisos si quieres otro distinto de 6 meses.
3. **Los usuarios actualizan**: tras la instalación se pide una vez a cada usuario que establezca una contraseña que cumpla la política.

## Preguntas frecuentes

**¿Qué exige la política?**
Al menos 8 caracteres, una letra mayúscula y un carácter especial como ! @ # $ % *.

**¿Por qué todos ven el banner después de instalarlo?**
Las contraseñas existentes nunca se comprobaron con la política, así que se pide a cada usuario que establezca una nueva una sola vez.

**¿Se aplica a los usuarios del portal?**
La política se aplica a toda contraseña que se establezca, portal incluido. El banner solo se muestra a los usuarios internos.

**¿Puedo cambiar el periodo de renovación?**
Sí, en Opciones generales > Permisos > Renovación de contraseña, en meses.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, en Community y Enterprise.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio de **Password Policy & Generator** en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/strong_password). Si quieres combinarlo con otros controles de seguridad o adaptarlo a tu política interna, [contáctame](/contacto).
