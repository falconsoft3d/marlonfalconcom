---
title: "Conexión a base de datos SQLite con Python"
date: 2022/12/20
description: "Cómo conectar Python con una base de datos SQLite usando el módulo sqlite3 - crear tablas, insertar, consultar, actualizar y eliminar datos."
tag: python, sqlite
author: Conexión a base de datos SQLite con Python
---

# Conexión a base de datos SQLite con Python

SQLite es una base de datos ligera que guarda toda la información en un único archivo y no necesita un servidor. Python incluye el módulo `sqlite3` en su librería estándar, así que no hay que instalar nada para usarla. Es ideal para aplicaciones pequeñas, prototipos o almacenar datos locales.

## Conectar a una base de datos SQLite con Python
Conectar a una base de datos SQLite con Python es muy sencillo: solo necesitamos importar el módulo sqlite3 y crear una conexión a la base de datos. Si el archivo `test.db` no existe, se crea automáticamente.

```python
import sqlite3
conn = sqlite3.connect('test.db')
print("Opened database successfully");
```

## Crear una tabla en una base de datos SQLite con Python
Para crear una tabla ejecutamos la sentencia SQL `CREATE TABLE`. En estos ejemplos usamos `conn.execute()`, un atajo que crea un cursor internamente y ejecuta la sentencia; también puedes crear el cursor explícitamente con `conn.cursor()`.

```python
#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')
print("Opened database successfully");

conn.execute('''CREATE TABLE COMPANY
         (ID INT PRIMARY KEY     NOT NULL,
         NAME           TEXT    NOT NULL,
         AGE            INT     NOT NULL,
         ADDRESS        CHAR(50),
         SALARY         REAL);''')
print("Table created successfully");

conn.close()
```

## Insertar datos en una tabla de una base de datos SQLite con Python
Para insertar datos ejecutamos sentencias `INSERT`. Es importante llamar a `conn.commit()` para que los cambios se guarden en la base de datos.

```python
#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')
print("Opened database successfully");

conn.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (1, 'Paul', 32, 'California', 20000.00 )");

conn.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (2, 'Allen', 25, 'Texas', 15000.00 )");

conn.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (3, 'Teddy', 23, 'Norway', 20000.00 )");

conn.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
      VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 )");

conn.commit()
print("Records created successfully");
conn.close()
```

## Consultar datos de una tabla de una base de datos SQLite con Python
Para consultar datos ejecutamos un `SELECT` y recorremos el cursor que devuelve; cada fila es una tupla con los valores de las columnas.

```python
#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')
print("Opened database successfully");

cursor = conn.execute("SELECT id, name, address, salary from COMPANY")
for row in cursor:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3], "\n")

print("Operation done successfully");
conn.close()
```

## Actualizar datos de una tabla de una base de datos SQLite con Python
Para actualizar datos ejecutamos un `UPDATE` y confirmamos con `conn.commit()`. La propiedad `total_changes` indica cuántas filas se han modificado desde que se abrió la conexión.

```python
#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')
print("Opened database successfully");

conn.execute("UPDATE COMPANY set SALARY = 25000.00 where ID = 1")
conn.commit()
print("Total number of rows updated :", conn.total_changes)

cursor = conn.execute("SELECT id, name, address, salary from COMPANY")
for row in cursor:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3], "\n")

print("Operation done successfully");
conn.close()
```

## Eliminar datos de una tabla de una base de datos SQLite con Python
Para eliminar datos ejecutamos un `DELETE` con la condición adecuada y confirmamos con `conn.commit()`.

```python
#!/usr/bin/python

import sqlite3

conn = sqlite3.connect('test.db')
print("Opened database successfully");

conn.execute("DELETE from COMPANY where ID = 2;")
conn.commit()
print("Total number of rows deleted :", conn.total_changes)

cursor = conn.execute("SELECT id, name, address, salary from COMPANY")
for row in cursor:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3], "\n")

print("Operation done successfully");
conn.close()
```

## Nota

Cuando los valores vengan del usuario, no los concatenes en la sentencia SQL: usa parámetros, por ejemplo `conn.execute("SELECT * FROM COMPANY WHERE ID = ?", (1,))`. Así evitas errores y ataques de inyección SQL.
