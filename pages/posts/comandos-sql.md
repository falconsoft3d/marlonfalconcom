---
title: Comandos SQL
date: 2022/12/18
description: Chuleta de comandos SQL básicos (SELECT, INSERT, UPDATE, DELETE) y de psql para trabajar con la base de datos de Odoo en PostgreSQL.
tag: sql
author: Marlon Falcon Hernandez
---

# Comandos SQL

En este post recojo los comandos SQL que más utilizo para consultar y modificar una base de datos PostgreSQL, en este caso la de una instalación de Odoo (tablas como `res_partner`, `res_users` o `account_move`). Son las cuatro operaciones básicas: consultar (SELECT), insertar (INSERT), modificar (UPDATE) y borrar (DELETE).

**Importante:** antes de ejecutar un UPDATE o un DELETE sobre una base de datos real, haz una copia de seguridad. Estos cambios no se pueden deshacer.

## Conectarnos a psql en Mac

```sql
psql postgres
\l
\c db14-spain
```

- `\l` lista las bases de datos disponibles.
- `\c nombre_bd` nos conecta a la base de datos indicada.

## Comandos iniciales

```sql
psql postgres
\l
\c db14-spain
$ SELECT name, email FROM res_partner LIMIT 10;
$ INSERT INTO res_partner (name, email)
VALUES ('Marlon', 'ceo@de.com');
$ UPDATE res_partner SET name='Marlon2' WHERE email='ceo@de.com';
$ DELETE FROM res_partner WHERE email = 'ceo@de.com';
exit
```

## SELECT: listar los usuarios del sistema

```sql
$ SELECT * FROM res_users;
$ SELECT name, email FROM res_partner LIMIT 10
$ SELECT id,login FROM res_users WHERE id=4
$ SELECT name,move_type FROM public.account_move
ORDER BY id ASC LIMIT 100
```

## INSERT: insertar un contacto

```sql
$ INSERT INTO res_partner (name, email)
VALUES ('Juan', 'Tom B. ceo@marlonfalcon.com');
```

## UPDATE: modificar la contraseña del admin

```sql
$ UPDATE res_users SET password='123' WHERE login='admin';
$ UPDATE account_move SET name = concat('F',old_id) WHERE old_id <> 0
UPDATE empleados SET edad = 23 WHERE sueldo > 12;
```

## DELETE: borrar las facturas canceladas

```sql
$ DELETE from account_move WHERE old_id IN (22001733,#,#)
$ DELETE FROM account_invoice WHERE state = 'cancel';
```

## Notas

- El símbolo `$` de los ejemplos solo indica que es un comando; no hay que escribirlo.
- En psql, cada sentencia SQL debe terminar en punto y coma para ejecutarse.
- Usa siempre una cláusula WHERE en los UPDATE y DELETE; sin ella, el cambio se aplica a todos los registros de la tabla.
