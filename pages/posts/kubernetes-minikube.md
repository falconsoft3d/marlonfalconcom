---
title: Comandos de Kubernetes para Minikube
date: 2022/12/18
description: Comandos de Kubernetes para Minikube
tag: kubernetes, minikube
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes para Minikube

Instalando Minikube
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
sudo install minikube-darwin-amd64 /usr/local/bin/minikube

minikube start
```

Saber la versión.
```bash
kubectl version --output=yaml
```

Mostrar el log.
```bash
minikube logs
```

Saber el IP.
```bash
minikube ip
```

Directorio de configuración.
```bash
nano .kube
nano .minikube
```

Me lista los cluster
```bash
minikube profile list
```

Creamos un cluster con dos nodos.
```bash
minikube start --driver=docker -p clusterDesa --nodes=2
```

Eliminamos un cluster
```bash
minikube delete -p clusterDesa
```

Cambiamos la memoria
```bash
minikube config set memory 4G -p minikube
```

Saber la memoria
```bash
minikube config get memory
```

Nos cambiamos de cluster
```bash
minikube profile ClusterDesa
```