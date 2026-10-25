---
title: Odoo, conectar con JSON-RPC
date: 2022/12/20
description: Ejemplos de peticiones JSON-RPC para conectarse a Odoo - login, leer, buscar, crear y borrar registros, y validar facturas y ventas.
tag: odoo, rpc, json
author: Marlon Falcon Hernandez
---
# Odoo: conectar con JSON-RPC

Además de XML-RPC, Odoo permite conectarse mediante JSON-RPC, lo que resulta muy cómodo para integrarlo con aplicaciones web, móviles o herramientas como Postman. Todas las peticiones se envían por `POST` a la ruta `/jsonrpc` con un cuerpo JSON que indica el servicio (`common` u `object`), el método y sus argumentos.

El flujo básico es:

1. Hacer login con el servicio `common` para obtener el `uid` del usuario.
2. Usar ese `uid` junto con la base de datos y la contraseña para llamar al servicio `object`, indicando el modelo y el método que queremos ejecutar.

En los ejemplos se usa la base de datos `db15-spain` y el `uid` 2 devuelto por el login; cámbialos por los tuyos.

## Login
````
http://localhost:8069/jsonrpc/
````

````
  {
        "jsonrpc": "2.0",
        "method": "call",
        "params": {"service": "common", "method": "login", "args": ["db15-spain", "admin", "x1234567890"]}
    }
````

## Obtener los productos
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "product.template", "search_read", [], []]}
}
````

## Órdenes de venta por cliente
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "sale.order", "search_read", 
                            [ ["partner_id", "=", 7 ] ], 
                            ["name"]
                            ]}
    }
````

## Leer un producto por su ID
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "product.template", "read", [1], []]}
    } 
````

## Borrar productos
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "product.template", "unlink", [4] ]}
    }
````

## Validar facturas
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "account.move", "action_post", [12] ]}
    }
````

## Validar ventas
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "sale.order", "action_confirm", [12] ]}
    }
````

## Crear productos
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "product.template", "create", {
                        "name" : "demo",
                        "default_code" : "AZUL01010"
                    }]}
    }
````

## Crear órdenes de venta
````
{
        "jsonrpc": "2.0",
        "method": "call",
        "params": {
                    "service": "object", 
                    "method": "execute", 
                    "args": ["db15-spain", 2, "x1234567890", "sale.order", "create", {
                        "partner_id" : 7,
                        "order_line" : [ 
                                            [0,0, { 
                                                    "product_id": 1 , 
                                                    "product_uom_qty": 12,
                                                    "price_unit" : 5
                                                    }] 
                                        ]
                        
                    }]}
    }
````

En la creación de órdenes de venta, la tupla `[0, 0, valores]` le indica a Odoo que debe crear una nueva línea con esos valores dentro del campo `order_line`.
