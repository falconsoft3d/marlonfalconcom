---
title: Flutter plantilla básica
date: 2022/12/25
description: Tres plantillas básicas para empezar proyectos de Flutter, con pantallas separadas, StatefulWidget y una llamada a una API REST con http.
tag: dart, flutter, father, apirest
author: Marlon Falcon Hernandez
---

# Flutter plantilla básica

En este post vamos a ver cómo crear una plantilla básica para nuestros proyectos de Flutter. Partir siempre de la misma estructura ahorra tiempo y mantiene el código ordenado: un `main.dart` mínimo, las pantallas en su propia carpeta y un archivo que las exporta todas juntas.

## Plantilla básica I

Creamos un proyecto y, en la carpeta `lib`, creamos los siguientes archivos.

`lib/main.dart`: en Visual Studio Code, con una extensión de snippets de Flutter, basta con escribir el atajo `mateapp` para generar la estructura de una aplicación con `MaterialApp`:
```
mateapp
```

```dart
import 'package:flutter/material.dart';
import 'package:login/screens/screens.dart';

void main() async { 
  runApp(const MyApp());
  }

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const LoginScreen(),
      theme: ThemeData(
        primarySwatch: Colors.yellow,
      ),
    );
  }
}
```

`lib/screens/screens.dart`: este archivo exporta todas las pantallas, de modo que en el resto de la app basta con un único import. Ten en cuenta que `login` es el nombre del proyecto (el definido en `pubspec.yaml`); cámbialo por el tuyo.
```dart
export 'package:login/screens/login_screen.dart';
```

`lib/screens/login_screen.dart`: la primera pantalla de la aplicación.
```dart
// fl-screen

import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
   
  const LoginScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
         child: Text('LoginScreen'),
      ),
    );
  }
}
```


## Plantilla básica II

En esta variante, `MyApp` es un `StatefulWidget`, útil si la raíz de la aplicación necesita mantener estado.

`lib/main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:nba_api/home_page.dart';

void main() async { 
  runApp(const MyApp());
  }

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
    }
}
```

`lib/home_page.dart`
```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
   
  const HomePage({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Scaffold();
  }
}
```

## Plantilla con llamada a una API REST

Para hacer peticiones HTTP añadimos el paquete `http` a las dependencias del `pubspec.yaml` y ejecutamos `flutter pub get`:
```
  cupertino_icons: ^1.0.2
  http: ^0.13.5
```


`lib/home_page.dart`: la función `getTeams` hace una petición GET a la API y muestra la respuesta por consola.

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);
  
  Future getTeams() async {
    final response = await http.get(Uri.https('balldontlie.io','api/v1/teams'));
    print(response.body);
  }

  @override
  Widget build(BuildContext context) {
    getTeams();
    return const Scaffold();
  }
}
```

**Nota:** llamar a `getTeams()` dentro de `build` sirve para una prueba rápida, pero en una app real conviene hacer la petición en `initState` de un `StatefulWidget` o usar un `FutureBuilder`, ya que `build` puede ejecutarse muchas veces.
