# Marlon Falcon Website

## Usar Node 22 en este proyecto mio

Este repo está configurado para usar Node 22. Hay varios archivos que fijan la versión para diferentes gestores de entorno:

- `.nvmrc` — contiene `22` para usuarios de nvm
- `.node-version` — contiene `22` para asdf u otras herramientas
- `package.json` — campo `engines` y `volta.node` apuntan a Node 22

Comandos útiles:

```bash
# Usando nvm (instala si hace falta y activa la versión 22)
nvm install 22
nvm use

# Usando Volta (instala automáticamente la versión declarada en package.json)
volta install node@22

# Comprobar versión activa
node -v
```

Si usas otra herramienta (asdf, fnm, etc.), el archivo `.node-version` también contiene `22`.



## Torre de control de agentes (`/agentes/<token>`)

Desde `/dashboard`, pestaña Agentes, se crea una sala con una URL con token. Claude informa con `POST /api/agentes/<token>` y la página muestra una fila por agente con su barra y sus tareas; las instrucciones y la API están documentadas en esa misma página y en el dashboard. Los datos están en las tablas privadas `agent_rooms` y `agent_states` de falcondatabase. El plugin de Chrome está en `extension/`: `npm run extension:zip` genera la descarga `public/torre-de-control-chrome.zip`.

## Tienda de módulos Odoo (`/tienda`)

El catálogo se lee en vivo de [apps.odoo.com](https://apps.odoo.com/apps/modules/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez), módulos y [temas web](https://apps.odoo.com/apps/themes/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez) (pestaña «Webs», `/tienda?tipo=webs`), al entrar en la tienda (`/api/tienda/catalogo`, con 5 minutos de caché en el CDN). Cada ficha está en `/tienda/odoo-module/<versión>/<módulo>` o `/tienda/odoo-template/<versión>/<web>`; la ruta antigua `/tienda/<versión>/<módulo>` redirige a ellas y `/sitemap-tienda.xml` las lista en vivo. Las imágenes se sirven desde `/api/tienda/imagen`, porque Odoo Apps cambia sus URLs cada vez que se actualiza un módulo. Los pedidos se guardan en la tabla privada `shop_orders` de falcondatabase.

Variables de entorno (`.env.local` y Vercel):

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `FALCONDB_SERVICE_KEY` | Sí | Clave *service* del proyecto `dntmjqkfhehnzvutqrrd` para guardar pedidos |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | No | Client ID de PayPal. Sin él, el cliente paga por PayPal y envía el comprobante por email |
| `PAYPAL_CLIENT_SECRET` | No | Secret de PayPal (solo servidor) |
| `PAYPAL_ENV` | No | `live` para cobrar de verdad; por defecto `sandbox` |

Estados de un pedido: `awaiting_payment` (manual, esperando comprobante), `pending` (orden de PayPal creada), `paid`, `payment_error`. El envío de los módulos es manual.


## Calendario de reservas (`/calendario`) y dashboard (`/dashboard`)

Página de reservas estilo Calendly: el visitante elige reunión (30 min, 1 h o 2 h), día y hora, o pulsa «Primera hora libre» / «… de la próxima semana». El calendario está en español, inglés, catalán y ruso (selector propio o `?lang=ca`); el resto de la web sigue en español e inglés. Las horas se ven en su zona horaria (o la que elija) y debajo en hora de Madrid. Para reservar resuelve una suma que aparece entre dos ninjas luchando (captcha local, firmado en el servidor y de un solo uso).

Los huecos salen del horario semanal, menos los bloqueos («No trabajo»), las reservas y las horas ocupadas de los calendarios conectados. Al abrir la página se releen los calendarios (como mucho una vez cada 20 s) y se vuelve a comprobar todo justo antes de guardar una reserva.

Todo se configura en `/dashboard`: reservas, vista semanal de horas ocupadas, horario, bloqueos, calendarios y tipos de reunión. Tablas privadas en falcondatabase: `booking_settings`, `booking_event_types`, `booking_blocks`, `booking_calendars`, `booking_google_accounts` y `bookings`.

Calendarios conectados:

- **Google (botón «Conectar con Google»)**: OAuth de solo lectura con FreeBusy, sin títulos de eventos. Se pueden conectar varias cuentas y elegir qué calendarios de cada una cuentan como ocupados. En el dashboard están los pasos para crear el cliente OAuth. La app de Google Cloud tiene que estar **publicada**: en modo «Prueba» Google corta la conexión a los 7 días.
- **Dirección iCal**: Outlook, iCloud o la «dirección secreta en formato iCal» de un calendario de Google.
- **Feed de reservas**: `/api/calendario/feed?token=…` (el enlace está en el dashboard) para ver las reservas en Google Calendar.

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `DASHBOARD_PASSWORD` | Sí | Contraseña de `/dashboard`. Si la cambias, se cierran todas las sesiones |
| `DASHBOARD_SECRET` | No | Se añade a la firma de la cookie de sesión |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | No | Activan el botón «Conectar con Google» |
| `GOOGLE_REDIRECT_URI` | No | Por defecto `https://<host>/api/dashboard/google/callback` |
| `CAPTCHA_SECRET` | No | Clave del captcha; por defecto usa `FALCONDB_SERVICE_KEY` |
| `TELEGRAM_BOT_TOKEN` | No | Token del bot de Telegram (de @BotFather) que envía los avisos |
| `TELEGRAM_CHAT_ID` | No | Id del grupo de Telegram donde llegan los avisos (el dashboard lo detecta con «Detectar grupo») |

Avisos: con `TELEGRAM_BOT_TOKEN` y `TELEGRAM_CHAT_ID`, cada reserva nueva o cancelada y cada mensaje de `/contacto` llega al grupo de Telegram. No se envían emails: el invitado puede añadir la reunión a su calendario desde la página de confirmación.

## Contacto (`/contacto`)

Formulario con el mismo captcha de los ninjas. Al enviarlo se guarda en la tabla privada `contact_messages` (pestaña «Mensajes» del dashboard), se avisa por Telegram y se abre WhatsApp con el mensaje ya escrito para el +34 662 47 0645.
