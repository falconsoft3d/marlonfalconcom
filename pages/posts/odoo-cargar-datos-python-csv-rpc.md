---
title: Odoo, cargar datos con Python desde un fichero CSV utilizando RPC
date: 2022/12/18
description: Script de Python que lee un fichero CSV y crea contactos en Odoo mediante XML-RPC, comprobando antes si ya existen.
tag: odoo, python, rpc
author: Marlon Falcon Hernandez
---

# Odoo: cargar datos con Python desde un fichero CSV utilizando RPC

Odoo expone una API externa mediante XML-RPC que permite leer, crear y modificar registros desde cualquier script, sin necesidad de entrar en la interfaz. Es muy útil para migraciones o cargas masivas de datos.

En este ejemplo se leen contactos desde un fichero `data.csv` y se crean en el modelo `res.partner`. El fichero debe tener, al menos, las columnas `name`, `email` y `phone`.

## Cómo funciona el script

1. Se conecta al servidor de Odoo con el endpoint `common` y obtiene el `uid` del usuario con `login`.
2. Recorre el CSV línea a línea con `csv.DictReader`.
3. Para cada fila, busca si ya existe un contacto con ese nombre (`search`).
4. Si no existe, lo crea con `create`; si existe, lo omite.

Recuerda ajustar `host`, `port`, `db`, `user` y `password` a los de tu instalación.

## Código de ejemplo

```
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
            vals['name'] = _name
            vals['email'] = _email
            vals['phone'] = _phone
            vals['active'] = True
            print(vals)

            # Validate the register does not exist
            _id = object_proxy.execute_kw(db, uid, password, 'res.partner', 'search', [[['name', '=', _name]]])
            if _id:
                print('= El registro ya existe =')
            else:
                new_partner = object_proxy.execute(db, uid, password, 'res.partner', 'create', vals)
                if new_partner:
                    print("Se ha creado el registro: ")
                else:
                    print("No se ha creado el registro: ")
            
        cont += 1
        print("Se han creado: ", cont)


def main():
    print("Ha comenzado el proceso")
    _create(True)
    print('Ha finalizado la carga tabla')
main()
```