---
title: Flutter plantilla basica
date: 2022/12/25
description: Flutter plantilla basica
tag: dart, flutter, father, apirest
author: Marlon Falcon Hernandez
---

# Flutter plantilla basica I

En este post vamos a ver como crear una plantilla basica para nuestros proyectos de Flutter.

## 1. Crear un proyecto y en la carpeta lib crear los siguientes archivos:

lib/main.dart

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

lib/screens/screens.dart
```dart
export 'package:login/screens/login_screen.dart';
```

lib/screens/login_screen.dart
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


# Plantilla básica II

lib/main.dart

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

lib/home_page.dart
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

# Plantilla con llamada a api rest

pubspec.yaml
```
  cupertino_icons: ^1.0.2
  http: ^0.13.5
```


lib/home_page.dart

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

