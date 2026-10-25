---
title: Instalar una VPN con WireGuard
date: 2022/12/19
description: Cómo instalar una VPN con WireGuard y Pi-hole usando Docker Compose en Ubuntu 20.04 y conectar un cliente.
tag: vpn
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Instalar una VPN con WireGuard
WireGuard es un protocolo de VPN (red privada virtual) de código abierto y de alto rendimiento. Es muy fácil de configurar y usar. En este tutorial veremos cómo instalar una VPN con WireGuard en Ubuntu 20.04 usando Docker Compose, junto con Pi-hole como servidor DNS para bloquear publicidad y rastreadores.

## Instalar la VPN con WireGuard en el servidor
Primero instalamos Docker y Docker Compose:
```
apt install docker.io docker-compose -y
```

Creamos el archivo `docker-compose.yml`:
```
nano docker-compose.yml
```

Y pegamos la siguiente configuración. El servicio `wireguard` usa la imagen de linuxserver, que genera automáticamente las claves y la configuración de los clientes (`PEERS=2` crea dos), y el servicio `pihole` actúa como DNS de la VPN. Ajusta la zona horaria y cambia la contraseña de la interfaz web de Pi-hole (`WEBPASSWORD`).

```
version: '3.7'

services:
  wireguard:
    image: linuxserver/wireguard
    container_name: wireguard
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - SERVERPORT=51820 #optional
      - PEERS=2 #optional
      - PEERDNS=auto #optional
      - INTERNAL_SUBNET=10.13.13.0 #optional
    volumes:
      - /root/wireguard:/config
      - /lib/modules:/lib/modules
      - /usr/src:/usr/src
    ports:
      - 51820:51820/udp
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
    dns:
      - 172.20.0.7
    restart: unless-stopped
    networks:
      containers:
        ipv4_address: 172.20.0.6

  pihole:
    container_name: pihole
    image: pihole/pihole:v5.7
    expose:
      - "53"
      - "67"
      - "80"
      - "443"
    environment:
      TZ: 'America/Mendoza'
      WEBPASSWORD: 'peladonerd'
    volumes:
      - './etc-pihole/:/etc/pihole/'
      - './etc-dnsmasq.d/:/etc/dnsmasq.d/'
    cap_add:
      - NET_ADMIN
    restart: unless-stopped
    networks:
      containers:
        ipv4_address: 172.20.0.7

networks:
  containers:
    ipam:
      config:
        - subnet: 172.20.0.0/24
```

Levantamos los contenedores y revisamos los logs:
```
docker-compose up -d
docker-compose logs -f
```

## Ver el log del servidor
```
docker logs -f wireguard
```


Recuerda abrir el puerto 51820/UDP en el firewall del servidor.

## Instalar la VPN con WireGuard en el cliente
La configuración de cada cliente la sacamos del servidor usando el log (también se guarda en la carpeta `/root/wireguard`, en un subdirectorio por cada peer). Será algo parecido a esto:
```
[Interface]
PrivateKey = MOvnGsnqfjuKOA3339ccViL5zGd00QwayHIWLlm7ZAU4=
ListenPort = 51820
Address = 9.13.13.5/32
DNS = 9.13.13.2

[Peer]
PublicKey = U4qqVYtpHFNTXVY0Kl2KFTIsMQxtuonhFN2dafAeXc=
PresharedKey = yLc3JP4PP4Tz01BDGsf22gBAw1+k42lqBpeKWLbiJo=
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = 81.198.198.51:51820
```

## Configuras el cliente
Instala la aplicación oficial de WireGuard en tu equipo o móvil e importa esa configuración (en el móvil también puedes escanear el código QR que aparece en el log).

<Image
  src="/images/posts/wireguard.png"
  alt="owl-odoo"
  width={876}
  height={616}
  priority
  className="next-image"
/>

Al activar el túnel, todo tu tráfico pasará por el servidor (`AllowedIPs = 0.0.0.0/0, ::/0`). Las claves privadas son secretas: no compartas los archivos de configuración de los clientes.


