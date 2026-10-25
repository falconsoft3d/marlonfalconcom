---
title: Flutter en 20 pasos
date: 2022/12/24
description: Los 20 comandos y atajos básicos de Flutter para crear, ejecutar, compilar y mantener un proyecto, desde la instalación hasta la publicación.
tag: dart, flutter, 20pasos
author: Marlon Falcon Hernandez
---

# Flutter en 20 pasos

Flutter es un kit de herramientas de código abierto para desarrollar aplicaciones móviles, web y de escritorio desde una única base de código. En esta guía rápida repasamos los comandos y atajos que más se usan en el día a día.

## 1. Instalación
```bash
brew install flutter
```

En macOS se puede instalar con Homebrew. En otros sistemas, descarga el SDK desde la web oficial de Flutter y añádelo al `PATH`.

## 2. Crear un proyecto
```bash
flutter create nombre_proyecto
flutter create --org com.marlonfalcon firebasetutorial
```

La opción `--org` define el identificador de la organización, que se usa para generar el nombre del paquete de Android y el *bundle ID* de iOS.

## 3. Ejecutar el proyecto
```bash
cd nombre_proyecto
flutter run
```

## 4. Compilar el proyecto
```bash
flutter build apk
```

## 5. Ejecutar el proyecto en modo release
```bash
flutter run --release
```

## 6. Ejecutar el proyecto en modo profile
```bash
flutter run --profile
```

## 7. Ejecutar el proyecto en modo debug
```bash
flutter run --debug
```

## 8. Ver dependencias
```bash
flutter pub deps -- --style=compact
```

## 9. Verificar la instalación de Flutter
```bash
flutter doctor
```

`flutter doctor` revisa el SDK, Android Studio, Xcode, los dispositivos conectados y avisa de cualquier componente que falte.

## 10. Generar una app vacía en Visual Studio Code
```bash
mateapp
```

Este y los siguientes atajos no son comandos de terminal, sino *snippets* que se escriben en el editor de Visual Studio Code (requieren una extensión de snippets de Flutter, como Awesome Flutter Snippets). `mateapp` genera una aplicación con `MaterialApp`.

## 11. Generar un StatelessWidget vacío en Visual Studio Code
```bash
stless
```

## 12. Generar un StatefulWidget vacío en Visual Studio Code
```bash
stful
```

## 13. Generar un StatefulWidget con animación en Visual Studio Code
```bash
stanim
```

## 14. Descargar los paquetes de un proyecto existente
```bash
flutter packages get
```

En las versiones actuales también puedes usar el equivalente `flutter pub get`.

## 15. Añadir un paquete al proyecto
```bash
flutter pub add http
```

## 16. Ver los dispositivos disponibles
```bash
flutter devices
```

## 17. Limpiar el proyecto
```bash
flutter clean
```

Elimina la carpeta `build` y los archivos generados. Es útil cuando una compilación da errores extraños.

## 18. Actualizar Flutter
```bash
flutter upgrade
```

## 19. Compilar un App Bundle para Google Play
```bash
flutter build appbundle
```

## 20. Compilar para web
```bash
flutter build web
```

Con estos 20 pasos tienes a mano lo esencial para trabajar con Flutter. Si quieres repasar el lenguaje, echa un vistazo también a la guía de Dart en 20 pasos.
