---
title: Conexión a base de datos SQLite con Python
date: 2022/12/20
description: Conexión a base de datos SQLite con Python
tag: python, sqlite
author: Conexión a base de datos SQLite con Python
---

# Conexión a base de datos SQLite con Python

## Conectar a una base de datos SQLite con Python
Conectar a una base de datos SQLite con Python es muy sencillo, solo necesitamos importar el módulo sqlite3 y crear una conexión a la base de datos.

```python
import sqlite3
conn = sqlite3.connect('test.db')
print("Opened database successfully");
```

## Crear una tabla en una base de datos SQLite con Python
Para crear una tabla en una base de datos SQLite con Python, primero debemos crear un cursor y luego ejecutar la sentencia SQL.

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
Para insertar datos en una tabla de una base de datos SQLite con Python, primero debemos crear un cursor y luego ejecutar la sentencia SQL.

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
Para consultar datos de una tabla de una base de datos SQLite con Python, primero debemos crear un cursor y luego ejecutar la sentencia SQL.

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
Para actualizar datos de una tabla de una base de datos SQLite con Python, primero debemos crear un cursor y luego ejecutar la sentencia SQL.

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
Para eliminar datos de una tabla de una base de datos SQLite con Python, primero debemos crear un cursor y luego ejecutar la sentencia SQL.

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



