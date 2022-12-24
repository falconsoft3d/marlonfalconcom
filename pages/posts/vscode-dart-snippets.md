---
title: Creando Snippets para Dart en VsCode
date: 2022/12/24
description: Creando Snippets para Dart en VsCode
tag: vscode, dart, snippets
author: Marlon Falcon Hernandez
---

# Creando Snippets para Dart en VsCode

import Image from 'next/image'

Un Snippet es una pequeña porción de código que se puede insertar en el editor de código. Los snippets se pueden usar para insertar código repetitivo, como declaraciones o bloques de código completos.

Los snippets se pueden crear para cualquier lenguaje de programación, pero en este caso vamos a crear snippets para Dart.

## Abrimos la paleta de comandos

<Image
  src="/images/posts/vs_code_snippets_1.png"
  alt="odoo9"
  width={1634}
  height={267}
  priority
  className="next-image"
/>

## Buscamos el configurador de snippets

<Image
  src="/images/posts/vs_code_snippets_2.png"
  alt="odoo9"
  width={1452}
  height={165}
  priority
  className="next-image"
/>

## Seleccionamos el lenguaje Dart

<Image
  src="/images/posts/vs_code_snippets_3.png"
  alt="odoo9"
  width={1448}
  height={269}
  priority
  className="next-image"
/>

## Creamos el snippet

<Image
  src="/images/posts/vs_code_snippets_4.png"
  alt="odoo9"
  width={1494}
  height={767}
  priority
  className="next-image"
/>

````
{
	// Place your snippets for dart here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"A new Flutter Screen with a Scaffold": {
		"prefix": "fl-screen",
		"body": [
			"import 'package:flutter/material.dart';",
			"",
			"class ${1:Home}Screen extends StatelessWidget {",
			"   ",
			"  const ${1:Home}Screen({Key? key}) : super(key: key);",
			"  ",
			"  @override",
			"  Widget build(BuildContext context) {",
			"    return const Scaffold(",
			"      body: Center(",
			"         child: Text('${1:Home}Screen'),",
			"      ),",
			"    );",
			"  }",
			"}"			
		],
		"description": "Crea una pantalla con un Scaffold"
	}
}
```

