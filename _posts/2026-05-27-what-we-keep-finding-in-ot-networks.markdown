---
layout: post
title: "What We Keep Finding in OT Networks"
date: 2026-05-27 09:30:00 +0200
category: article
tags:
- article
image: /assets/img/articles/terrafame.jpeg
image_alt: Terrafame
---

In many of the environments our clients operate in, cybersecurity extends far beyond traditional IT concern. These organizations often rely on OT (Operational Technology) systems, where one of the biggest challenges is the long lifespan of industrial equipment.

Unlike typical IT infrastructure, which evolves rapidly, equipment in industrial OT systems can remain relatively static in operation for decades. Update cycles are slow, and it’s not surprising that vendor support may expire long before a system can realistically be replaced. Companies rely heavily on network segmentation and isolation to protect critical OT assets in their operations.

While we have seen policies and best practices evolve over time, network segmentation and isolation is nothing new. Ask anyone in the field and they will tell you that the rule number one is: segment and isolate your networks. 

**The key question is: How do we know our segmented networks are truly isolated, and how do we verify it?**

With network isolation vulnerabilities being found in roughly 80% of organizations where Beacons have been deployed, SensorFu Beacon has repeatedly demonstrated that networks that were thought to be isolated are oftentimes not. 

These types of findings can be found in the feasibility study “[Tonttu](https://www.kyberturvallisuuskeskus.fi/sites/default/files/media/file/TONTTU-raportti_EN_FINAL.pdf),” which was conducted in collaboration with the National Cyber Security Centre Finland of the Finnish Transport and Communications Agency Traficom. The main findings of the study demonstrated that many organisations are not as secure as they believe. 

Given the prevalence of leakages in real-world environments, discovering leaks during new deployments is the norm rather than the exception. Recently, we conducted a case study with Terrafame Oy, which highlights this. Headquartered in Sotkamo, Finland, Terrafame operates one of the region’s largest integrated mining and chemical production sites, supplying raw materials for electric vehicles and energy storage systems. 
Terrafame had implemented a private LTE network in order to enhance connectivity across their numerous OT networks. By implementing the LTE network, it enabled secure and reliable communication for critical systems while using different APNs for network segmentation.

Terrafame then deployed SensorFu Beacons in order to verify the network isolation between the APNs and the Internet. The purpose for this was to allow them to maintain their strict segmentation policies and prevent cross-network leaks that could perhaps compromise both safety and possibly even their operational integrity. 

>“The deployment process of SensorFu Beacon on physical devices was very simple, and making changes to configuration, or upgrading software on the devices is a seamless process.” -Terrafame Case Study

Once Beacons were deployed, a misconfiguration was identified. Terrafame quickly spotted a firewall misconfiguration that was letting some traffic slip between network segments. It turned out to be an old rule that was no longer needed but was still active. 

>“Terrafame now has Beacons in critical environments, ready to alert if any new firewall rules or other configurations cause traffic to leak between network segments.”- Terrafame Case Study
 
Stories like this make it clear that companies need to take a proactive approach and actually verify that networks are properly isolated before any vulnerabilities have a chance to be exploited. When you know your segmented networks are truly isolated, you’re in a much stronger position to protect your operations and stay ahead of potential risks. 
