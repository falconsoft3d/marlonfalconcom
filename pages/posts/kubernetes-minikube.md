---
title: Comandos de Kubernetes para Minikube
date: 2022/12/18
description: Comandos básicos para instalar Minikube y gestionar clústeres locales de Kubernetes, perfiles, nodos y memoria.
tag: kubernetes, minikube
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes para Minikube

Minikube permite ejecutar un clúster de Kubernetes en local, en tu propio ordenador, lo que resulta ideal para aprender y para probar despliegues antes de llevarlos a un entorno real. Estos son los comandos que más utilizo.

## Instalar Minikube
Ejemplo de instalación en macOS (Intel):
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
sudo install minikube-darwin-amd64 /usr/local/bin/minikube

minikube start
```

## Saber la versión
```bash
kubectl version --output=yaml
```

## Mostrar el log
```bash
minikube logs
```

## Saber la IP
```bash
minikube ip
```

## Directorios de configuración
```bash
nano .kube
nano .minikube
```

## Listar los clústeres
```bash
minikube profile list
```

## Crear un clúster con dos nodos
```bash
minikube start --driver=docker -p clusterDesa --nodes=2
```

## Eliminar un clúster
```bash
minikube delete -p clusterDesa
```

## Cambiar la memoria
```bash
minikube config set memory 4G -p minikube
```

## Saber la memoria
```bash
minikube config get memory
```

## Cambiar de clúster
```bash
minikube profile ClusterDesa
```

Ten en cuenta que los nombres de perfil distinguen entre mayúsculas y minúsculas, así que deben escribirse igual que al crearlos.
