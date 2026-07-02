---
layout: post
title: "Beacon: Escape Testing and Common Leaks"
date: 2026-07-02 10:30:00 +0300
category: article
tags:
- article
image: /assets/img/articles/beacon_leaks_article.jpg
image_alt: Beacon tests and common leaks
---
Security failures can emerge at any layer of the network, whether through firewall rules, routing configurations, VLAN segmentation, switch settings, cabling mistakes, or third-party integrations. As environments grow and change, being able to continuously verify that every control is still behaving  as intended becomes a significant challenge. 

To address this, Beacon uses a dual-cycle testing approach that balances rapid detection with extensive coverage. A short testing loop runs approximately every 30 minutes, focusing on the most critical communication paths, hand picked list of the most important TCP and UDP ports, and common escape techniques to provide near real-time visibility into network segmentation effectiveness and quickly identify newly introduced leaks. 

Complementing this is a longer, more comprehensive testing cycle that typically spans 4-14 days, depending on network conditions. Operating with a low traffic profile, it  systematically evaluates network isolation across the environment, providing deep coverage while minimizing impact on production systems.

***SensorFu Beacon runs the following tests:***
- The Basics:  TCP and UDP over IPv4 and IPv6 → All ports.
- DNS Tunneling: Use name server infrastructure to covertly sneak out.
- Broadcasting: Trigger improper routing decision in multihomed devices.
- Spoofing: Bypass firewalls and routers with spoofed IP packets.
- ICMP:	Often overlooked during firewall and segmentation reviews, ICMP can still create unexpected communication paths if not properly controlled.
- IP payload: Find leaks related to easily forgotten protocols like IGMP and L2TP.
- TLS  test: A content-aware firewall may pass TLS connections through the controls.

## The Most Common Network Leaks

Over the years our clients have found some pretty interesting leaks, ones that made us sit back for a second and think, how is that possible? However, the most frequently observed leak is a standard DNS query. A system sends a DNS request either to an internal DNS server or directly to an external resolver. While this behavior appears normal, it can violate isolation requirements in segmented environments. 

The second most common leak involves [Ethernet broadcast](https://medium.com/sensorfu/why-ethernet-broadcast-tests-matter-6d17924b5233). In these cases, a broadcast message, typically a DNS query, is sent onto the local network where another device receives it and forwards it to the internet, creating an unintended communication path.

![Beacon Leaks](/assets/img/articles/leaks.png) 

***Occurrence of the most commonly observed leaks from the past 90 days***


Most leaks are discovered quickly, many times within minutes of deployment or at least within the first day of testing. In fact approximately 80% of our customers reveal at least one unintended communication path. This figure has been backed up with a [feasibility study](https://www.kyberturvallisuuskeskus.fi/files/media/file/TONTTU-raportti_EN_FINAL.pdf) that was done by the National Cyber Security Centre Finland of the Finnish Transport and Communications Agency Traficom.  

Our newest technique,  the TLS Hello escape has proven really interesting.  In several real-world cases, security products have successfully blocked outbound traffic but then attempted to inspect or classify the connection, generating their own DNS queries to external services in the process. 

This behavior can unintentionally create a data leakage path even when the original connection was denied. These [TLS- and DNS](https://sensorfu.com/article/2026/06/18/dns-tls-leak.html)-related interactions have become some of the most valuable and surprising escape scenarios identified by SensorFu in recent years.

We have found that environments that combine IT and OT networks often reveal the highest number of findings. Complex architectures, legacy systems, third-party integrations, and operational requirements create additional opportunities for unexpected communication paths to emerge.

That doesn’t mean that  heavily segmented and isolated environments, such as power generation facilities, don't also contain leaks. In many cases, the root cause has been third-party technology behavior or simple human error for example, when a retired device was calling home. 


## Continuous Validation Matters

Network security is never finished. Maintaining compliance with security requirements such as NIS2 and DORA, as well as effective network segmentation and isolation, requires continuous validation rather than periodic assumptions. Controls that are effective today can become ineffective tomorrow as a result of configuration changes, software updates, infrastructure modifications, human error, or the introduction of new devices and services.

Beacon provides our clients with ongoing verification.  By helping organizations identify leaks early and validate their security posture over time, Beacon reinforces a principle we strongly believe in: the fundamentals of cybersecurity matter. 

While new threats and technologies continue to emerge, consistently validating the basics, understanding what can communicate, where it can communicate, and whether it should be allowed to communicate at all, remains one of the most effective ways to improve security.
