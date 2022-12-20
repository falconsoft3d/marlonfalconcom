---
title: Odoo conectar con json rpc
date: 2022/12/20
description: Odoo conectar con json rpc
tag: odoo, rpc, json
author: Marlon Falcon Hernandez
---
# Odoo conectar con json rpc

Odoo permite conectarse con json rpc, para esto se debe seguir los siguientes pasos:

Login
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

Obtener los productos
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

Ordenes de ventas por clientes
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

Obtener productos
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

Borrar productos
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

Validar facturas
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

Validar ventas
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

Crear productos
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

Crear ordenes de ventas
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


