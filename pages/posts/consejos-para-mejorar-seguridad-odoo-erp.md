---
title: Consejos para mejorar la seguridad de Odoo ERP
date: 2022/12/28
description: Siete recomendaciones para proteger tu Odoo ERP - contraseñas, actualizaciones, 2FA, permisos, copias de seguridad, VPN y firewall.
tag: odoo, vpn, seguridad
author: Marlon Falcon Hernandez
---

# Consejos para mejorar la seguridad de Odoo ERP

En el mundo empresarial actual, es fundamental contar con un sistema de gestión de recursos empresariales (ERP) sólido y seguro para asegurar la eficiencia y productividad de la empresa. Uno de los sistemas ERP más populares es Odoo, una plataforma de código abierto que ofrece una amplia variedad de herramientas de negocio, incluyendo gestión de inventario, facturación, CRM y mucho más.

Sin embargo, al utilizar cualquier sistema de software, es importante tomar medidas de seguridad para proteger la información confidencial de la empresa y evitar cualquier tipo de violación de seguridad. A continuación, se presentan algunas recomendaciones de seguridad para Odoo ERP:

1. **Utilizar contraseñas seguras**: es fundamental utilizar contraseñas seguras y únicas para cada cuenta de usuario. Las contraseñas deben tener al menos 8 caracteres y combinar letras, números y símbolos. Además, es recomendable utilizar un gestor de contraseñas para almacenar y proteger las contraseñas de manera segura.

2. **Mantener actualizado el software**: es importante mantener el software de Odoo actualizado con las últimas versiones y parches de seguridad. Esto puede ayudar a proteger la plataforma de vulnerabilidades conocidas y posibles ataques.

3. **Utilizar autenticación de dos factores**: la autenticación de dos factores requiere que el usuario proporcione dos formas de verificación de identidad, como una contraseña y un código enviado a un dispositivo móvil. Esto puede ayudar a proteger la cuenta de usuario de posibles intentos de acceso no autorizado. Odoo incluye de forma nativa la autenticación en dos pasos, que cada usuario puede activar desde sus preferencias.

4. **Restringir el acceso a la información confidencial**: es importante establecer niveles de acceso adecuados para proteger la información confidencial de la empresa. Los usuarios deben tener acceso solo a la información y las funcionalidades que necesitan para realizar su trabajo, y se deben establecer políticas claras para el uso y el acceso a la información confidencial.

5. **Realizar copias de seguridad regulares**: es esencial realizar copias de seguridad de la información de la empresa con regularidad para protegerla en caso de pérdida de datos o ataque. Las copias de seguridad deben almacenarse en un lugar seguro y protegido, y deben probarse regularmente para asegurar que se pueden restaurar correctamente.

6. **Utilizar VPN**: las redes privadas virtuales (VPN) pueden ayudar a proteger la información confidencial de la empresa al cifrar los datos y ocultar la ubicación de la red. Las VPN también pueden ayudar a proteger la información de la empresa de posibles ataques de red.

7. **Utilizar un firewall**: un firewall permite controlar qué tráfico llega al servidor y bloquear los accesos no autorizados. Lo recomendable es dejar abiertos solo los puertos imprescindibles (por ejemplo, 80 y 443) y no exponer directamente el puerto de Odoo ni el de PostgreSQL a internet.

## Otras medidas específicas de Odoo

- Sirve Odoo siempre detrás de un proxy inverso (Nginx, Traefik, etc.) con HTTPS.
- Cambia la contraseña maestra (`admin_passwd` en `odoo.conf`) por una robusta y, en producción, desactiva el gestor de bases de datos con `list_db = False`.
- Evita usar el usuario administrador para el trabajo diario.

Aplicar estas medidas no requiere grandes inversiones y reduce mucho el riesgo de sufrir un incidente de seguridad.
