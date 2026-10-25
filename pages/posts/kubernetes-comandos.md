---
title: Comandos de Kubernetes
date: 2022/12/18
description: Chuleta de comandos de kubectl para trabajar con namespaces, pods, deployments, servicios, volúmenes y StatefulSets en Kubernetes.
tag: kubernetes
author: Marlon Falcon Hernandez
---

# Comandos de Kubernetes

Kubernetes es la plataforma de referencia para orquestar contenedores, y `kubectl` es la herramienta de línea de comandos para interactuar con un clúster. Estos son los comandos que uso con más frecuencia; los archivos `.yaml` de los ejemplos son manifiestos propios de cada proyecto.

Ver la versión instalada de kubectl.
```bash
kubectl version
```

Ver los namespaces que vienen por defecto.
```bash
kubectl get ns
```

Ver los pods del namespace kube-system.
```bash
$ kubectl -n kube-system get pods
$ kubectl -n kube-system get pods -o wide
```

Borrar un pod.
```bash
kubectl -n kube-system delete pod kube-apiserver-docker-desktop
```

Crear un pod a partir de un manifiesto.
```bash
kubectl apply -f 01-pod.yaml
```

Ver los pods que están en ejecución.
```bash
kubectl get pods
```

Entrar en nuestro pod.
```bash
kubectl exec -it nginx sh
```

Borrar el pod.
```bash
kubectl delete pod nginx
```

Ver la definición del pod en YAML.
```bash
kubectl get pod nginx -o yaml
```

Borrar un deployment.
```bash
kubectl delete -f 04-deployment.yaml
```

Describir un pod.
```bash
kubectl describe pod my-csi-app-set-0
```

Ver las solicitudes de volumen persistente (PersistentVolumeClaims).
```bash
kubectl get pvc
```

Ver los StatefulSets.
```bash
kubectl get statefulsets
```

Borrar un StatefulSet.
```bash
kubectl delete sts my-csi-app-set
```

Ver los pods, servicios y demás recursos del namespace.
```bash
kubectl get all
```

Describir un servicio.
```bash
kubectl describe svc hello
```

Entrar en el pod de Ubuntu.
```bash
kubectl exec -it ubuntu -- bash
```

Mostrar los nodos con su IP.
```bash
kubectl get nodes -o wide
```

Aplicar un deployment con un servicio de tipo LoadBalancer (en el ejemplo, expone el puerto 8080).
```bash
kubectl apply -f 09-hello-deployment-svc-loadBalancer.yaml
```

