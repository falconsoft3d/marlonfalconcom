---
title: Comandos git
date: 2022/12/18
description: Chuleta con los comandos de Git más usados en el día a día, como tags, ramas, diferencias, historial y cómo descartar cambios.
tag: git
author: Marlon Falcon Hernandez
---

# Comandos git

Git es el sistema de control de versiones más utilizado: permite guardar el historial de cambios de un proyecto, trabajar en ramas y colaborar con otros desarrolladores. Esta es una chuleta con los comandos que más uso en el día a día.

## Tags

Listar los tags, crear uno nuevo y subirlo al repositorio remoto:

```
git tag 
git tag 0.0.1
git push --tags && push origin master
```

**Nota:** la segunda parte de la última línea debe ser `git push origin master` (falta la palabra `git`).

## Requirements (Python)

No es un comando de Git, pero suele ir de la mano: generar el fichero `requirements.txt` con las dependencias de un proyecto Python e instalarlas:

```
pip freeze > requirements.txt
pip install -r requirements.txt
```

## Ver diferencias

Muestra los cambios de los ficheros modificados que aún no se han añadido al *stage*:

```
git diff
```

## Ver lo modificado en un commit

Sustituye `<COMMIT>` por el identificador (hash) del commit:

```
git show <COMMIT>
```

## Ver el estado de los cambios locales

```
git status
```

## Ver las ramas

```
git branch
```

## Crear una rama

Crea una rama nueva y se cambia a ella:

```
git checkout -b branchname
```

## Eliminar una rama

```
git checkout -d branchname
```

**Nota:** el comando correcto para eliminar una rama local es `git branch -d branchname` (o `git branch -D branchname` para forzar el borrado si tiene cambios sin fusionar).

## Unir ramas

Nos situamos en la rama de destino y fusionamos en ella la otra rama:

```
git checkout master
git merge branchname
```

## Ver el log

Muestra los últimos commits; con `--pretty=oneline` se ve cada commit en una sola línea:

```
git log -3
```
```
git log -5 --pretty=oneline
```

## Descartar los cambios

Regresa todo al último commit de la rama:

```
git reset --hard
```

**Cuidado:** este comando elimina de forma definitiva los cambios no confirmados en los ficheros rastreados, así que úsalo solo cuando estés seguro.
