---
title: Conectarnos con Magento usando Python
date: 2022/12/21
description: Cómo conectarse a la API XML-RPC de Magento 1 desde Python para listar pedidos, productos y tiendas, y cómo filtrar resultados.
tag: python, magento, rpc
author: Marlon Falcon Hernandez
---

# Conectarnos con Magento usando Python

XML-RPC (Remote Procedure Call) es un protocolo de llamada a procedimiento remoto que usa XML para codificar los datos y HTTP como protocolo de transmisión de mensajes. Magento 1 ofrece una API XML-RPC/SOAP con la que podemos consultar y modificar pedidos, productos, clientes, etc. Desde Python podemos usarla directamente con el módulo estándar `xmlrpc.client`, lo que resulta muy útil, por ejemplo, para integrar Magento con Odoo.

Documentación: https://devdocs.magento.com/guides/m1x/api/soap/introduction.html

## Lista de comandos de la API de Magento
```
[cart[0m: create, info, license, order, totals
[cart_coupon[0m: add, remove
[cart_customer[0m: addresses, set
[cart_payment[0m: list, method
[cart_product[0m: add, list, moveToCustomerQuote, remove, update
[cart_shipping[0m: list, method
[catalog_category[0m: assignProduct, assignedProducts, create, currentStore, delete, info, level, move, removeProduct, tree, update, updateProduct
[catalog_category_attribute[0m: currentStore, list, options
[catalog_product[0m: create, currentStore, delete, getSpecialPrice, info, list, listOfAdditionalAttributes, multiUpdate, setSpecialPrice, update
[catalog_product_attribute[0m: addOption, create, currentStore, info, list, options, remove, removeOption, types, update
[catalog_product_attribute_media[0m: create, currentStore, info, list, remove, types, update
[catalog_product_attribute_set[0m: attributeAdd, attributeRemove, create, groupAdd, groupRemove, groupRename, list, remove
[catalog_product_attribute_tier_price[0m: info, update
[catalog_product_custom_option[0m: add, info, list, remove, types, update
[catalog_product_custom_option_value[0m: add, info, list, remove, update
[catalog_product_downloadable_link[0m: add, list, remove
[catalog_product_link[0m: assign, attributes, list, remove, types, update
[catalog_product_tag[0m: add, info, list, remove, update
[catalog_product_type[0m: list
[cataloginventory_stock_item[0m: list, multiUpdate, update
[core_magento[0m: info
[core_store[0m: info, list
[customer[0m: create, delete, info, list, update
[customer_address[0m: create, delete, info, list, update
[customer_group[0m: list
[directory_country[0m: list
[directory_region[0m: list
[giftmessage[0m: setForQuote, setForQuoteItem, setForQuoteProduct
[sales_order[0m: addComment, cancel, hold, info, list, unhold
[sales_order_creditmemo[0m: addComment, cancel, create, info, list
[sales_order_invoice[0m: addComment, cancel, capture, create, info, list, void
[sales_order_shipment[0m: addComment, addTrack, create, getCarriers, info, list, removeTrack, sendInfo
```

## Listar todos los pedidos de venta de Magento
Primero iniciamos sesión en la API, lo que nos devuelve un identificador de sesión que usaremos en el resto de llamadas:
```
# -- coding: utf-8 --
import xmlrpc.client
url = 'http://134.122.75.12:80'
username = 'odoo'
password = 'aqui_pones_pass'

proxy = xmlrpc.client.ServerProxy('{}/api/xmlrpc/'.format(url))
session = proxy.login('odoo', 'x1234567890')

args =  []
sales = proxy.call(session, 'sales_order.list', args)
print(sales)
```

## Versión de Magento
```
magento = proxy.call(session, 'magento.info')
print(magento)
```

## Listar una tienda específica
```
args =  [{'store_id':'1'}]
store = proxy.call(session, 'core_store.list', args)
print(store)
```

## Listar productos con pprint
```
import pprint
args =  []
product = proxy.call(session, 'catalog_product.list', args)
pprint.pprint(product)
```

## Operadores de filtrado
Los métodos `list` aceptan filtros sobre los campos, con los siguientes operadores:
```
from => After the given timestamp
to => Before the given timestamp
like => Like the given text (SQL syntax, using % for wildcards)
nlike => Not like the given text (SQL syntax)
eq => Equal to the given value
neq => Not equal to the given value
in => In the given array
nin => Not in the given array
null => Is null
notnull => Is not null
gt => Greater than
lt => Less than
gteq => Greater than or equal to
lteq => Less than or equal to
```

## Filtrar resultados
Ejemplo de filtrado de pedidos por fecha de creación:
```
args =  [ {'created_at':{'from':'2020-03-16 00:00:00'}}]
args =  [{'created_at':[{'key':'created_at','value':{'key':'eq','value':'2020-03-16 18:48:35'}}]}]
sales = proxy.call(session, 'sales_order.list', args)
pprint.pprint(sales)
```

## Nota

Esta API XML-RPC corresponde a Magento 1, que dejó de tener soporte oficial en 2020. En Magento 2 (Adobe Commerce) se utiliza la API REST o GraphQL.
