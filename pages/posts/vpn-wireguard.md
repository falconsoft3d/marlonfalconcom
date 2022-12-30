---
title: Instalar un VPN con Wireguard
date: 2022/12/19
description: Instalar un VPN con Wireguard
tag: vpn
author: Marlon Falcon Hernandez
---
import Image from 'next/image'

# Instalar un VPN con Wireguard
Wireguard es un VPN que permite crear una red privada virtual. Es un protocolo de código abierto y de alto rendimiento. Es muy fácil de configurar y usar. En este tutorial veremos como instalar un VPN con Wireguard en Ubuntu 20.04.

# Instalar un VPN con Wireguard en el servidor
```
apt install docker.io docker-compose -y
```

```
nano docker-compose.yml
```

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


```
docker-compose up -d
docker-compose logs -f
```

# Ver el log del servidor
```
docker logs -f wireguard
```


# Instalar un VPN con Wireguard en el cliente
Esto lo sacamos del servidor usando el log
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

