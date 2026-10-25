---
title: Ejecutar PostgreSQL en Kubernetes
date: 2022/12/21
description: Cómo desplegar PostgreSQL en Kubernetes con un ConfigMap, un volumen persistente NFS, un Deployment y un Service de tipo NodePort.
tag: kubernetes, postgresql
author: Marlon Falcon Hernandez
---

# Ejecutar PostgreSQL en Kubernetes

Kubernetes permite desplegar PostgreSQL como un contenedor más, pero al tratarse de una base de datos hay que prestar especial atención a la persistencia: los datos deben guardarse en un volumen que sobreviva a los reinicios del pod. En este ejemplo, pensado para un clúster de pruebas, se usa un volumen NFS y se expone la base de datos fuera del clúster con un Service de tipo NodePort.

## Comandos

Estos son los comandos para clonar el ejemplo, desplegarlo, revisar los logs, conectarse con `psql` y, finalmente, eliminar los recursos:
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

## El fichero postgresql.yaml

El manifiesto define cinco recursos:

- **ConfigMap:** variables de entorno de PostgreSQL (base de datos, usuario, contraseña y ruta de datos).
- **PersistentVolume:** un volumen de 1 GiB alojado en un servidor NFS.
- **PersistentVolumeClaim:** la solicitud de almacenamiento que enlaza con el volumen anterior mediante etiquetas.
- **Deployment:** el pod con la imagen oficial de `postgres`, que monta el volumen en `/var/lib/postgresql/data`.
- **Service (NodePort):** expone el puerto 5432 en el puerto 30100 de cada nodo del clúster.

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

**Nota:** en producción no conviene guardar la contraseña en un ConfigMap; lo recomendable es usar un Secret de Kubernetes y, para bases de datos, un StatefulSet o un operador de PostgreSQL.
