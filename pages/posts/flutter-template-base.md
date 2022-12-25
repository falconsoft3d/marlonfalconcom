---
title: Flutter plantilla basica
date: 2022/12/25
description: Flutter plantilla basica
tag: dart, flutter, father
author: Marlon Falcon Hernandez
---

# Flutter plantilla basica

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