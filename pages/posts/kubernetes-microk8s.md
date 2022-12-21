---
title: Comandos de Kubernetes para Microk8s
date: 2022/12/18
description: Comandos de Kubernetes para Microk8s
tag: kubernetes, microk8s
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes para Microk8s

Instalando MicroK8s en Mac.
```bash
brew install ubuntu/microk8s/microk8s
microk8s install
microk8s status --wait-ready
```

Obtener nodos.
```bash
microk8s kubectl get nodes
```

Información de la Ip de kubernetes
```bash
microk8s kubectl cluster-info
```

Obtener servicios.
```bash
microk8s kubectl get services
```

Probar una app.
```bash
microk8s kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

Borrar un deplo
```bash
microk8s kubectl delete deployment kubernetes-bootcamp
```


Get pods.
```bash
microk8s kubectl get pods
```

Instalar un addons.
```bash
microk8s enable dns storage portainer
microk8s enable portainer
microk8s add-node // No te unas pero te dará el ip.

http://192.168.64.2:30777/#!/init/admin
X1234567890x1234567890
```

Parar MicroK8s.
```bash
microk8s stop
```

Iniciar MicroK8s.
```bash
microk8s start
```

Estado de  MicroK8s.
```bash
microk8s status
```