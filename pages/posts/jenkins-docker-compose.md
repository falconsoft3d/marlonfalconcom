---
title: ▷ Instalación de Jenkins con Docker Compose
date: 2022/12/30
description: ▷ Instalación de Jenkins con Docker Compose
tag: jenkins, docker, dockercompose
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# ▷ Instalación de Jenkins con Docker Compose

Docker Compose es una herramienta para definir y ejecutar aplicaciones Docker de múltiples contenedores. Con Compose, usa un archivo YAML para configurar los servicios de su aplicación. Luego, con un solo comando, crea e inicia todos los servicios desde su configuración. Para obtener más información sobre todos los comandos de Compose, vea la lista de comandos de Compose.


<Image
  src="/images/posts/jenkins-docker.png"
  alt="owl-odoo"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

## Instalación de Jenkins con Docker Compose

Para instalar Jenkins con Docker Compose, debemos crear un archivo docker-compose.yml en el directorio de trabajo. El archivo docker-compose.yml se puede crear con el siguiente contenido:


```yaml
version: '2'
services:
  jenkins:
    image: istresearch/jenkins:latest
    container_name: jenkins
    user: jenkins
    volumes:
      - ./data/jenkins:/var/jenkins_home
      - ./var/run/docker.sock:/var/run/docker.sock
    environment:
      JENKINS_HOST_HOME: "/data/jenkins"
    ports:
      - "8080:8080"
      - "5001:5001"
      - "50000:50000"
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
```

## Instalación de Docker y Docker Compose
```
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y
```

## Tambien lo podemos clonar
```
git clone https://github.com/falconsoft3d/jenkis-docker-compose.git
cd jenkis-docker-compose
```

## Ejecutar el contenedor
```
docker-compose up -d
```

## Ver la llave de acceso de Jenkins en docker
Esta clave se genera aleatoriamente, por lo que debe copiarla y pegarla en la página de inicio de sesión de Jenkins para completar la configuración inicial.
```
docker exec 79dc42e0a318 cat /var/jenkins_home/secrets/initialAdminPassword
```

## Instalación de Jenkis pero con Docker Swarm
Docker Swarm es un servicio de orquestación de contenedores nativo de Docker. Con Docker Swarm, puede crear un clúster de Docker y administrarlo. Docker Swarm incluye un orquestador de clúster y un conjunto de herramientas de administración de clúster.
```
git clone https://github.com/falconsoft3d/jenkis-docker-compose.git
cd jenkis-docker-compose
docker swarm init
docker-compose build
docker stack deploy jenkis -c docker-compose.yml
docker stack ls
```
