---
layout: post
title: "NIS2,BSIG and Critical Facilities: Why Network Isolation Verification Matters"
date: 2026-11-09 09:00:00 +0200
category: article
tags:
- article
image: /assets/img/articles/ot-and-signal.jpg
image_alt: Network Isolation Verification
---

The cybersecurity landscape across Germany, Austria and Switzerland is changing rapidly. For manufacturers and operators of connected industrial systems, cybersecurity is no longer simply an IT responsibility. Increasingly, organisations are expected to identify and manage cyber risks as part of their wider operational resilience.

A key driver of this change is the EU's NIS2 Directive, which strengthens cybersecurity requirements for organisations providing important and critical services. In Germany, NIS2 has been implemented through the NIS2 Implementation Act (NIS2-Umsetzungsgesetz), which amended the BSI Act (BSIG). The amended BSIG establishes two main categories of regulated organisations: “particularly important entities” (besonders wichtige Einrichtungen – bwE) and “important entities” (wichtige Einrichtungen – wE).

The distinction is important for organisations operating industrial and critical infrastructure environments. Under the BSIG, operators of critical facilities (kritische Anlagen) are classified as particularly important entities, alongside other organisations meeting the criteria set out in the legislation. Critical facilities support services in sectors such as energy, transport, healthcare, water, food and digital infrastructure, where disruption can have significant consequences for society and the economy.

For these organisations, cybersecurity is closely linked to operational resilience. It is not enough to have security policies, network diagrams and protective technologies in place. Organisations need confidence that their security controls continue to work as intended as systems, networks and operating environments change.

## Supporting NIS2 and BSIG Risk Management
One of the most fundamental security controls in industrial environments is network segmentation. Critical systems are separated into security zones, with firewalls and other controls restricting communication between them. The objective is straightforward: if one part of the environment is compromised, an attacker should not automatically be able to move into another critical zone.

But segmentation can degrade over time.

A firewall rule can change during maintenance. A firmware update can introduce a new communication path. A device can be connected to the wrong network. Shared DNS or other infrastructure can create unintended connectivity. A multihomed device can bridge environments that were intended to remain separate.

The network architecture may still look secure on paper while the operational network tells a different story.

Traditional security assessments often examine configurations, architecture diagrams and policies at a particular point in time. These remain essential, but they do not necessarily answer a fundamental question:

Can a system actually communicate across a boundary where communication should be blocked?

## From Configuration to Continuous Verification
This is where SensorFu Beacon helps close the gap between documented security architecture and operational reality.

Beacon continuously tests whether intended network boundaries remain effective. Rather than relying solely on firewall configuration, it actively verifies whether restricted communication can actually cross defined network boundaries.

Beacon can test multiple communication methods, including TCP/UDP, DNS, ICMP, IP protocols and broadcast behaviour. If communication is detected where it should not be possible, Beacon can identify the isolation failure and provide information for investigation.

This gives security teams an additional layer of assurance, helping them to:

- Identify unintended connectivity between security zones
- Detect changes that weaken network segmentation
- Validate isolation after maintenance and configuration changes
- Identify potential security-control failures earlier
- Support incident investigation and response
- Maintain timestamped evidence of isolation testing
- Strengthen ongoing cybersecurity risk management

This is particularly valuable in environments containing legacy systems, where network segmentation may be used as a compensating control because the underlying equipment cannot support modern security capabilities.

The result is a shift from “Our networks should be isolated.” to “We continuously verify that our networks are isolated.”

SensorFu Beacon does not replace a NIS2 or BSIG compliance programme, nor does it replace firewalls, SIEM, vulnerability management or other security controls. Instead, it provides a focused additional capability: Continuous verification that network segmentation and isolation is working as intended.

*Generated with AI assistance and finalized by human editors to ensure accuracy and quality.*

