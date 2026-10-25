---
title: Odoo, modificar datos con Python desde un fichero CSV utilizando RPC
date: 2022/12/18
description: Script de Python que lee un fichero CSV y actualiza el correo y el teléfono de contactos existentes en Odoo mediante XML-RPC.
tag: odoo, python, rpc
author: Marlon Falcon Hernandez
---

# Odoo: modificar datos con Python desde un fichero CSV utilizando RPC

Además de crear registros, la API XML-RPC de Odoo permite actualizar los existentes. En este ejemplo se lee un fichero `data.csv` con las columnas `name`, `email` y `phone`, y se actualizan el correo y el teléfono de los contactos (`res.partner`) que ya existen en Odoo.

## Cómo funciona el script

1. Se conecta al servidor de Odoo y obtiene el `uid` del usuario con `login`.
2. Recorre el CSV línea a línea con `csv.DictReader`.
3. Para cada fila, busca el contacto por su nombre con `search`.
4. Si lo encuentra, actualiza sus datos con `write`; si no, muestra un aviso.

Ten en cuenta que la búsqueda se hace por nombre, así que si tienes contactos con el mismo nombre se modificarán todos. Recuerda también ajustar los datos de conexión a los de tu instalación.

## Código de ejemplo

```
# -- coding: utf-8 --
#************#
# Create
#************#

import xmlrpc.client
import csv

host = '127.0.0.1'
port = 8069
db = 'db16-other'
user = 'admin'
password = 'x1234567890'

url = 'http://%s:%d/xmlrpc/2/' % (host, port)

common_proxy = xmlrpc.client.ServerProxy(url + 'common')
object_proxy = xmlrpc.client.ServerProxy(url + 'object')
uid = common_proxy.login(db, user, password)
if uid:
    print('Conectado al servidor maestro')

def _create(state):
    print("=1=")
    print(state)
    if state is True:
        archive = csv.DictReader(open('data.csv'))
        cont = 0
        for field in archive:
            cont += 1
            _name = field['name'].strip()
            _email = field['email'].strip()
            _phone = field['phone'].strip()

            vals = {}
            vals['email'] = _email
            vals['phone'] = _phone
            print(vals)

            # Validate the register does not exist
            _id = object_proxy.execute_kw(db, uid, password, 'res.partner', 'search', [[['name', '=', _name]]])
            if _id:
                _partner = object_proxy.execute(db, uid, password, 'res.partner' ,'write',_id , vals)
                if _partner:
                    print("Se ha modificado el registro: ")
                else:
                    print("No se ha modificado el registro: ")
            else:
                print('= El registro no existe =')
                
            
        cont += 1
        print("Se han modificado: ", cont)


def main():
    print("Ha comenzado el proceso")
    _create(True)
    print('Ha finalizado la carga tabla')
main()
```