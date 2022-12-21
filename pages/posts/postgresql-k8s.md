---
title: Ejecutar PostgreSQL en Kubernetes
date: 2022/12/21
description: Ejecutar PostgreSQL en Kubernetes
tag: kubernetes, postgresql
author: Marlon Falcon Hernandez
---

# Ejecutar PostgreSQL en Kubernetes

Comandos para ejecutar PostgreSQL en Kubernetes.
```
git clone https://github.com/kubernetes-spain/postgresql-k8s.git
cd postgresql-k8s
kubectl apply -f postgresql.yaml
kubectl get all
kubectl logs
kubectl logs pod/psql-itwl-dev-01-594c7468c7-p9k9l -f
psql db -h 192.168.50.11 -p 30100 -U user
kubectl delete -f postgresql.yaml
```

postgresql.yaml
```
apiVersion: v1
kind: ConfigMap
metadata:
  name: psql-itwl-dev-01-cm
data:
  POSTGRES_DB: db
  POSTGRES_USER: user
  POSTGRES_PASSWORD: pass
  PGDATA: /var/lib/postgresql/data/k8s
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: psql-itwl-dev-01-pv
  labels: #Labels 
    app: psql
    ver: itwl-dev-01-pv 
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    server: 192.168.50.1
    path: "/mnt/vagrant-kubernetes/data"
          
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: psql-itwl-dev-01-pvc
spec:
  selector:
    matchLabels:  #Select a volume with this labels
      app: psql
      ver: itwl-dev-01-pv
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: psql-itwl-dev-01
  labels: 
    app: psql 
    ver: itwl-dev-01
spec:
  replicas: 1
  selector:
    matchLabels:  #Deploy in a POD that has labels app: color and color: blue
      app: psql
      ver: itwl-dev-01
  template: #For the creation of the pod      
    metadata:
      labels:
        app: psql
        ver: itwl-dev-01
      annotations:
        sidecar.istio.io/inject: "false"        
    spec:
      containers:
        - name: postgres
          image: postgres:latest
          imagePullPolicy: "IfNotPresent"
          ports:
            - containerPort: 5432 
          envFrom:
            - configMapRef:
                name: psql-itwl-dev-01-cm          
          volumeMounts:
            - mountPath: /var/lib/postgresql/data
              name: pgdatavol
      volumes:
        - name: pgdatavol
          persistentVolumeClaim:
            claimName: psql-itwl-dev-01-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-service-np
spec:
  type: NodePort
  selector:
    app: psql
  ports:
    - name: psql
      port: 5432        # Cluster IP http://10.109.199.234:port (docker exposed port)
      nodePort: 30100   # (EXTERNAL-IP VirtualBox IPs) http://192.168.50.11:nodePort/ http://192.168.50.12:nodePort/ http://192.168.50.13:nodePort/
      protocol: TCP
```


