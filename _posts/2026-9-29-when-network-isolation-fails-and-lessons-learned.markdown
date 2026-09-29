---
layout: post
title: "When Network Isolation Fails and Lessons Learned"
date: 2026-09-29 09:00:00 +0300
category: article
tags:
- article
image: /assets/img/articles/ot-control-room-leak.jpg
image_alt: OT Network Isolation
---
*An updated look at a 2020 security case and why the underlying lesson remains relevant.*

Traditional security assessments often establish that segmentation works under normal conditions. But industrial environments are rarely static. Devices reboot. Interfaces restart. VPNs reconnect. Services fail and recover, or equipment could lose power briefly and then come back online. 

These changes can create temporary states that are invisible during a conventional point-in-time test. That is why continuously testing the isolation of the network can reveal issues that configuration reviews and manual penetration tests may miss.

Back in 2020, we published an article about a security finding involving an [ABB Arctic Wireless Gateway](https://medium.com/sensorfu/test-for-network-leaks-discover-a-product-flaw-and-get-vendor-to-fix-c041abbda39a). The product was used to provide remote connectivity in an industrial environment, where network isolation was an important part of the security architecture.

A lot has changed since then. The Arctic product family is now legacy technology, with several products in limited or inactive lifecycle stages. So this is not a conversation about deploying an old product. It is a far more important conversation about something more fundamental.

What happens when a product unexpectedly breaks the network boundary it is supposed to enforce?

## Network Isolation Fails During Device Reboots

Our client had taken network segmentation seriously. Critical systems were isolated, and the team was confident that the architecture and configuration were doing what they were supposed to do.

As the customer's CISO explained at the time:

>"We were confident that we had done everything right and there would be no leaks to be found. Much to our surprise a vulnerability was found. We would never have found it by manual testing."

What they found was during the affected device’s reboot process, there was a brief window in which it failed to enforce network isolation as intended. SensorFu Beacon detected this transient behavior. The device served as a VPN tunneling solution, connecting a remote segment of the infrastructure to the core network.

We worked with our client to find the root cause, once it had been identified and the flaw reproduced, our client promptly reported the vulnerability to the vendor. The vendor then worked quickly to develop a fix and mitigation measures and published the vulnerability details. The issue was ultimately assigned CVE-2020-24684.

While our original article was written in 2020, it’s safe to say industrial environments are even more connected than six years ago. With remote access, cloud services, cellular connectivity, and increasingly complex OT architectures, organizations are becoming more dependent on their network infrastructure.

That makes continuous validation of security boundaries increasingly important. The goal isn't simply to build something that should be isolated. It is to discover when the real-world behavior of an environment differs from the security assumptions made about it.

As the customer's CISO said in the original case: 

>"We think this was a significant find. We must be able to protect our networks and block any exfiltration potential"



