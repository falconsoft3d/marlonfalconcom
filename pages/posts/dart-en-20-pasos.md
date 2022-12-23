---
title: Dart en 20 pasos
date: 2022/12/24
description: Dart en 20 pasos
tag: dart, 20pasos
author: Auditoría Odoo ERP
---

# Dart en 20 pasos

Dart es un lenguaje de programación desarrollado por Google, que se ejecuta en una máquina virtual de código abierto llamada Dart VM. Dart es un lenguaje orientado a objetos, con tipado estático opcional, sintaxis de estilo C, y soporte para programación funcional y programación reactiva.

## 1. Instalación
````bash
brew install dart
````

## 2. Programa
En dart debes crear un archivo con la extensión .dart, por ejemplo: hola_mundo.dart
````dart
void main() {
    print('Hola mundo');
    }
````

## 3. Comentarios
````bash
// Esto es un comentario

/* 
  Esto es un comentario
  de varias líneas
*/
````

## 4. Constantes
````dart
  const PI = 3.1416;
  final double gravedad = 9.8;
````

## 5. Variables
````dart
  var nombre = 'Juan';
  String nombre = 'Juan';
  int edad = 20;
  double estatura = 1.80;
  bool esMayor = true;
````

## 6. Operadores de asignación
````dart
  int d = 10;
  d += 2; // 12
  d -= 2; // 10
  d *= 2; // 20
  d %= 6; // 4
````

## 7. Operadores relacionales
````dart
  // >, <, >=, <=, ==, !=
  int x = 10;
  int y = 4;
  
  bool res = x > y; // true
````

## 8. Operadores lógicos
````dart
  bool activo = true;
  bool logueado = false;

  bool resultado = activo && logueado; // false
  resultado = activo || logueado; // true
  resultado = !activo; // false
````

## 9. Operadores condicionales
````dart
  int z = 10;
  String mensaje = z > 10 ? 'Z es mayor a 10' : 'Z es menor o igual a 10';
````

## 10. Condicional if
````dart
  if (z > 10) {
    print('Z es mayor a 10');
  } else if (z < 10) {
    print('Z es menor a 10');
  } else {
    print('Z es igual a 10');
  }
````

## 11. Condicional switch
````dart
  int mes = 2;
  String estacion;

  switch (mes) {
    case 1:
    case 2:
    case 12:
      estacion = 'Invierno';
      break;
    default:
      estacion = 'Mes incorrecto';
  }
````

## 12. Ciclo for
````dart
  for (int i = 0; i < 10; i++) {
    print(i);
  }
````

## 13. Ciclo while
````dart
  int i = 0;
  while (i < 10) {
    print(i);
    i++;
  }
````

## 14. Ciclo do while
````dart
  int i = 0;
  do {
    print(i);
    i++;
  } while (i < 10);
````

## 15. Ciclo for in
````dart
  List<String> listado = ['rojo', 'verde', 'azul'];

  for (String color in listado) {
    print(color);
  }
````

## 16. Ciclo for each
````dart
  List<String> listado = ['rojo', 'verde', 'azul'];

  listado.forEach((color) => print(color));
````

## 17. Funciones
````dart
  void saludar() {
    print('Hola mundo');
  }

  void saludar2(String nombre) {
    print('Hola $nombre');
  }

  String saludar3(String nombre, String mensaje) {
    return '$mensaje $nombre';
  }

  String saludar4(String nombre, [String mensaje = 'Hola']) {
    return '$mensaje $nombre';
  }

  String saludar5(String nombre, {String mensaje = 'Hola'}) {
    return '$mensaje $nombre';
  }
````

## 18. Funciones flecha
````dart
  void saludar() => print('Hola mundo');

  void saludar2(String nombre) => print('Hola $nombre');

  String saludar3(String nombre, String mensaje) => '$mensaje $nombre';

  String saludar4(String nombre, [String mensaje = 'Hola']) => '$mensaje $nombre';

  String saludar5(String nombre, {String mensaje = 'Hola'}) => '$mensaje $nombre';
````

## 19 Listas
````dart
  List<int> numeros = [1, 2, 3, 4, 5];
  List<String> ciudades = ['Quito', 'Guayaquil', 'Cuenca'];

  print(numeros);
  print(ciudades);

  // Agregar elementos a una lista
  ciudades.add('Loja');
  print(ciudades);

  // Eliminar elementos de una lista
  ciudades.remove('Loja');
  print(ciudades);
````

## 20 Diccionarios
````dart
  Map<String, dynamic> persona = {
    'nombre': 'Juan',
    'edad': 20,
    'soltero': true
  };

  print(persona);
  print(persona['nombre']);
  print(persona['edad']);
  print(persona['soltero']);

  // Agregar elementos a un diccionario
  persona.addAll({'altura': 1.80});
  print(persona);

  // Eliminar elementos de un diccionario
  persona.remove('altura');
  print(persona);
````


