---
title: Comandos de Kubernetes
date: 2022/12/18
description: Comandos de Kubernetes
tag: kubernetes
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes

Permite ver la versión instalada de kubectl
```bash
kubectl version
```

Ver los namespaces que vienen por defecto.
```bash
kubectl get ns
```

Ver los pods del namesapaces kube-system
```bash
$ kubectl -n kube-system get pods
$ kubectl -n kube-system get pods -o wide
```

Borramos un Pod
```bash
kubectl -n kube-system delete pod kube-apiserver-docker-desktop
```

Corremos un pod
```bash
kubectl apply -f 01-pod.yaml
```

Para ver nuestros pods que estan corriendo
```bash
kubectl get pods
```

Entramos en  nuestro pod
```bash
kubectl exec -it nginx sh
```

Borramos el pod
```bash
kubectl delete pod nginx
```

ver el pod con el yaml
```bash
kubectl get pod nginx -o yaml
```

Borrar un deployment
```bash
kubectl delete -f 04-deployment.yaml
```

Describe un pod
```bash
kubectl describe pod my-csi-app-set-0
```

Describe el pedido.
```bash
kubectl get pvc
```

ver los state
```bash
kubectl get statefulsets
```

Borrar un StateFulSet
```bash
kubectl delete sts my-csi-app-set
```

Me permite ver los pod y los servicios.
```bash
kubectl get all
```

Describe un servicio
```bash
kubectl describe svc hello
```

Entramos al pod de ubuntu
```bash
kubectl exec -it ubuntu -- bash
```

Muestra la IP
```bash
kubectl get nodes -o wide
```

Abre el puerto 8080
```bash
kubectl apply -f 09-hello-deployment-svc-loadBalancer.yaml
```

