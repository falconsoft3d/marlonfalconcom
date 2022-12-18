---
title: Comandos SQL
date: 2022/12/18
description: Comandos SQL.
tag: sql
author: Marlon Falcon Hernandez
---

# Comandos SQL

Conectarnos a PSQL en MAC

```sql
psql postgres
\l
\c db14-spain
```

Comandos iniciales

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

SELECT Listar los usuarios del sistema.

```sql
$ SELECT * FROM res_users;
$ SELECT name, email FROM res_partner LIMIT 10
$ SELECT id,login FROM res_users WHERE id=4
$ SELECT name,move_type FROM public.account_move
ORDER BY id ASC LIMIT 100
```


INSERT insertamos un contacto.

```sql
$ INSERT INTO res_partner (name, email)
VALUES ('Juan', 'Tom B. ceo@marlonfalcon.com');
```

UPDATE modificamos el password del admin.

```sql
$ UPDATE res_users SET password='123' WHERE login='admin';
$ UPDATE account_move SET name = concat('F',old_id) WHERE old_id <> 0
UPDATE empleados SET edad = 23 WHERE sueldo > 12;
```

DELETE borramos las facturas canceladas.
```sql
$ DELETE from account_move WHERE old_id IN (22001733,#,#)
$ DELETE FROM account_invoice WHERE state = 'cancel';
```
