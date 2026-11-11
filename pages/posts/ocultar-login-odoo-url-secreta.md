---
title: ▷ Ocultar el login de Odoo con una URL secreta y un login falso (honeypot)
date: 2026/11/11
description: ▷ Protege Odoo contra ataques de fuerza bruta - mueve el acceso real a una URL secreta y convierte /web/login en un login falso que registra cada intento.
tag: odoo, odoo-19, modulos-odoo, seguridad, login, ciberseguridad
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Ocultar el login de Odoo con una URL secreta y un login falso

Cualquier instancia de Odoo publicada en Internet recibe a diario intentos de acceso en **/web/login**: bots que prueban `admin`, listas de contraseñas filtradas y ataques de **fuerza bruta**. **Hidden Login URL & Fake Login Honeypot** es un módulo para **Odoo 18, 19 y 20 (Community y Enterprise)** que mueve el acceso real a una **URL secreta** y convierte `/web/login` en un **login falso** que nunca deja entrar y registra cada intento.

## ¿Cómo funciona el login oculto en Odoo?

El acceso real pasa a `/web/login/<tu clave>`. La página de siempre, `/web/login`, se ve exactamente igual que el login de Odoo, pero **incluso la contraseña correcta recibe «Nombre de usuario o contraseña incorrectos»**. Quien no conoce la URL secreta no puede entrar, por muchas contraseñas que pruebe.

<Image
  src="/images/posts/modulos-odoo/fake_login/fake_login.png"
  alt="Login falso de Odoo en /web/login rechazando la contraseña correcta del administrador"
  width={1180}
  height={760}
  className="next-image"
/>

## Funciones principales

### URL de acceso secreta

La clave se genera sola al instalar. Puedes escribir la tuya o **crear otra con un clic** desde Ajustes > Opciones generales > Login oculto. Cambiar la clave invalida todos los navegadores recordados.

<Image
  src="/images/posts/modulos-odoo/fake_login/settings.png"
  alt="Ajustes del login oculto de Odoo con la URL secreta de acceso"
  width={996}
  height={356}
  className="next-image"
/>

### Honeypot: cada intento registrado

El login falso guarda **fecha, usuario escrito, dirección IP, país y navegador o herramienta** de cada intento. Es un **honeypot** dentro de Odoo: en lugar de bloquear a ciegas, te dice quién está atacando.

### Alerta de usuarios reales atacados

Si el usuario escrito existe en tu base de datos, el intento aparece **en rojo**: alguien conoce ese login y conviene revisar su contraseña o activar el doble factor.

<Image
  src="/images/posts/modulos-odoo/fake_login/attempts.png"
  alt="Registro de intentos de acceso en Odoo con IP, país y usuarios reales atacados en rojo"
  width={1600}
  height={640}
  className="next-image"
/>

### Quién llama y desde dónde

Gráficos y tabla dinámica por **día, IP, país o usuario** para detectar un ataque de un vistazo y ver qué direcciones insisten más.

<Image
  src="/images/posts/modulos-odoo/fake_login/graph.png"
  alt="Gráfico de intentos de login por día apilados por país en Odoo"
  width={1600}
  height={900}
  className="next-image"
/>

### Las contraseñas nunca se guardan

El login falso **nunca comprueba ni almacena las contraseñas escritas**. No hay nada sensible que filtrar.

### Indetectable para los bots

Misma página, mismo mensaje y **mismo tiempo de respuesta** que un fallo real. Un script automatizado no puede distinguir el honeypot del login auténtico.

### Compatible con todo Odoo

Doble factor (2FA), llaves de acceso (passkeys), registro, restablecer contraseña, sitio web y portal siguen funcionando desde la URL secreta. Los intentos antiguos se borran solos tras los días que elijas.

## Beneficios para la seguridad de tu Odoo

- **Fin de la fuerza bruta**: el formulario público ya no da acceso, aunque acierten la contraseña.
- **Inteligencia sobre ataques**: sabes qué IP, países y usuarios están en el punto de mira.
- **Sin riesgo de quedarte fuera**: la protección no se activa al instalar, solo cuando marcas la opción.
- **Integraciones intactas**: XML-RPC, JSON-RPC y claves API funcionan igual.

## Cómo empezar en tres pasos

1. **Instala** Fake Login desde Aplicaciones (solo depende de Opciones generales, incluido en Community).
2. **Actívalo** en Ajustes > Opciones generales > Login oculto, marcando «Ocultar la página de acceso real».
3. **Comparte tu URL** con tus usuarios y guárdala en favoritos. Desde ese momento `/web/login` solo registra intentos.

## Preguntas frecuentes

**¿Y si olvido mi URL de acceso?**
Cualquier administrador con sesión abierta la ve en Ajustes. Sin sesión, puedes leerla en la base de datos con `SELECT value FROM ir_config_parameter WHERE key = 'fake_login.key';`.

**¿Mis usuarios tienen que escribir la URL secreta cada vez?**
No. Un navegador que abre la URL secreta se recuerda durante 90 días.

**¿Funciona detrás de Nginx o un balanceador?**
Sí. Arranca Odoo con `proxy_mode` para registrar la IP real del visitante en lugar de la del proxy.

**¿De dónde sale el país?**
De la base de datos GeoIP de Odoo, si está instalada en el servidor.

**¿Qué versiones de Odoo soporta?**
Odoo 18.0, 19.0 y 20.0, Community y Enterprise.

## Descarga el módulo

Consulta la ficha completa, las capturas y el precio en la [tienda de módulos Odoo](/tienda/odoo-module/19.0/fake_login). Si quieres reforzar la seguridad de tu instancia con historial de accesos y alertas, echa también un vistazo a mis otros módulos de seguridad o [contáctame](/contacto).
