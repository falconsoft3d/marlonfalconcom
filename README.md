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



## Tienda de módulos Odoo (`/tienda`)

El catálogo se lee en vivo de [apps.odoo.com](https://apps.odoo.com/apps/modules/browse?author=Marlon%20Falc%C3%B3n%20Hern%C3%A1ndez) al entrar en la tienda (`/api/tienda/catalogo`, con 5 minutos de caché en el CDN). Las imágenes se sirven desde `/api/tienda/imagen`, porque Odoo Apps cambia sus URLs cada vez que se actualiza un módulo. Los pedidos se guardan en la tabla privada `shop_orders` de falcondatabase.

Variables de entorno (`.env.local` y Vercel):

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `FALCONDB_SERVICE_KEY` | Sí | Clave *service* del proyecto `dntmjqkfhehnzvutqrrd` para guardar pedidos |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | No | Client ID de PayPal. Sin él, el cliente paga por PayPal y envía el comprobante por email |
| `PAYPAL_CLIENT_SECRET` | No | Secret de PayPal (solo servidor) |
| `PAYPAL_ENV` | No | `live` para cobrar de verdad; por defecto `sandbox` |

Estados de un pedido: `awaiting_payment` (manual, esperando comprobante), `pending` (orden de PayPal creada), `paid`, `payment_error`. El envío de los módulos es manual.
