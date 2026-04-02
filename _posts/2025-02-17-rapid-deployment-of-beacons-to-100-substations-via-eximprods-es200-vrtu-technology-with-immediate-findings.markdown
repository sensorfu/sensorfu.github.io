---
layout: post
title: "Rapid deployment of Beacons to 100 substations"
date: 2025-09-17 00:00:00 +0000
category: article
tags: 
- case study 
image 1: /assets/img/articles/SensorFu_rasberry_Pi_web.png
image_alt: SensorFu Beacon Device, Raspberry Pi
image 2: /assets/img/articles/Es200_and_Beacon_web.png
image_alt: ES200 and Beacon Integration
---

At SensorFu, we are committed to serving our customers with seamless deployment solutions and are always eager to collaborate with companies that share our vision. That’s why we’ve teamed up with Eximprod, a Romanian company offering a comprehensive range of equipment, solutions, and services tailored to the energy sector. Through this partnership, Eximprod can offer SensorFu Beacon to their clients.

Eximprod, who specializes in smart grid edge computing solutions, was tasked to deploy 100 SensorFu Beacons and one SensorFu Home to continuously test a European DSO’s network isolation from 100 secondary substations, located geographically in various and often hard-to-reach locations.


## What is SensorFu Beacon and how does it work.

SensorFu Beacon was designed to continuously try to find new network leak paths from isolated networks or network segments using two components: Beacon (sensor) and Beacon Home (home server). It is an easy-to-install solution that does not need a cybersecurity specialist to do. It can be used as an application, a virtual machine, or with a device.

![SensorFu Beacon Device, Raspberry Pi](SensorFu_rasberry_Pi_web.png)

Beacons are placed in isolated data networks, from which the beacons try to connect to Beacon Home, using various methods. Beacon Home can be run on the public internet, hosted by us or on-prem, hosted by the customer.

If a beacon manages to connect to Home, it means that there is a gap in the network isolation, and Beacon Home alerts you about the successful connection. Once the gap is known, it can be repaired. Beacon does not require a management connection or any other changes to firewall or network settings to function.

## Deployment process with a real-world case.


Since Eximprod already had experience in running third-party applications in Cisco IOx environment, we were there just to offer support if needed. Eximprod had developed their own software RTU product, the ES200 vRTU and deployed it to multiple substations using Cisco IOx devices. They understand that getting new hardware deployed and managed at multiple sites can sometimes be difficult due to company policies, logistics and space constraints. Having the hardware and software orchestration solution on site already, deploying Beacons inside the same hardware was the rational thing to do.

The deployment was supported with:

***IoT Hardware Platform***
- Cisco IR1101 (aarch64)
- Cisco IR809 (amd64)

***IoT Software***
- Cisco IOx, ES200 vRTU
- SensorFu Beacon

***Communications & Security***
- Next-gen encryption
- WWAN backup
- Firewall (ACL)

![ES200 and Beacon Integration](Es200_and_Beacon_web.png)

The Beacon Home was installed on-premise in the client’s data center (Debian 12 on a dedicated server) by Eximprod specialists, within the DMZ. Within the first few minutes of active deployment, Beacons managed to escape the network isolation and call Home.

## The value given to the client

By having an immediate alert that there are leaks within their secondary substation network isolation, the client now has the capability to close these leaks before they can be used by malicious actors. As well as trust that they will know if any other leaks occur in the future.

> “SensorFu’s Beacon is a game-changer for OT network security. We were struggling to proactively identify potential vulnerabilities in our highly segmented environment. Your solution provides the critical visibility we need to ensure our network remains truly isolated. The ability to detect and address network leaks before they become a serious issue is invaluable to our operations.” states the client.

If you are interested in learning about how SensorFu Beacon can assist you in detecting network isolation leaks, contact us at contact@sensorfu.com



