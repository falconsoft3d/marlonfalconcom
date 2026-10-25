---
title: Comandos de Kubernetes para MicroK8s
date: 2022/12/18
description: Comandos básicos para instalar MicroK8s en Mac, gestionar nodos, despliegues y servicios, y activar complementos como Portainer.
tag: kubernetes, microk8s
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes para MicroK8s

MicroK8s es una distribución ligera de Kubernetes creada por Canonical. Es muy fácil de instalar y sirve tanto para desarrollo local como para clústeres pequeños. Todos los comandos de `kubectl` se ejecutan anteponiendo `microk8s`.

## Instalar MicroK8s en Mac
```bash
brew install ubuntu/microk8s/microk8s
microk8s install
microk8s status --wait-ready
```

## Obtener los nodos
```bash
microk8s kubectl get nodes
```

## Información de la IP de Kubernetes
```bash
microk8s kubectl cluster-info
```

## Obtener los servicios
```bash
microk8s kubectl get services
```

## Probar una aplicación
```bash
microk8s kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

## Borrar un despliegue
```bash
microk8s kubectl delete deployment kubernetes-bootcamp
```


## Obtener los pods
```bash
microk8s kubectl get pods
```

## Instalar complementos (addons)
```bash
microk8s enable dns storage portainer
microk8s enable portainer
microk8s add-node // No te unas pero te dará el ip.

http://192.168.64.2:30777/#!/init/admin
X1234567890x1234567890
```

## Detener MicroK8s
```bash
microk8s stop
```

## Iniciar MicroK8s
```bash
microk8s start
```

## Estado de MicroK8s
```bash
microk8s status
```
