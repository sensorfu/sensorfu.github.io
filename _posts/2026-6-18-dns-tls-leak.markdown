---
layout: post
title: "When Security Products Create Unexpected DNS Covert Channels"
date: 2026-6-18 10:30:00 +0200
category: article
tags:
- article
image: /assets/img/articles/TLS_DNS_Header.png
image_alt: TLS leaking 
---

Many times our partners come to us with interesting stories from their clients about how they use Beacon in real-world environments. Recently, one partner shared a particularly unusual case involving DNS resolution activity being triggered by their client’s security inspection systems. While surprising at first, it quickly led us to a hypothesis about how this behavior could occur.

Modern firewalls and endpoint security platforms are designed to protect networks also by inspecting traffic through a deeper inspection than earlier generations of security products. As anyone in the field knows, malware operating inside restricted or isolated networks has traditionally attempted to “call home” by connecting directly to their command-and-control infrastructure on the internet. 

However, today’s security products no longer stop at surface-level inspection. Many next-generation firewalls perform deep content analysis and, in some cases, may transmit metadata, file samples, DNS requests, or other traffic-derived information to external services for further analysis. 

This can create an unexpected side effect where the security product itself unintentionally introduces a covert channel for data leakage. While these technologies are designed to improve security, they may also create entirely new paths for sensitive information to leave isolated environments.

Which is what happened. 

## DNS and TLS: An Overlooked Side Channel

In this case, a TLS connection was initiated: Beacon as the client sends a TLS Client Hello packet. Inside the TLS ClientHello packets is a field called Server Name Indication (SNI), which contains the hostname the client wants to connect to. Security products commonly inspect this field as part of their filtering and threat analysis processes. 

Our hypothesis is simple: ***What happens if a firewall or inspection device extracts the hostname from the SNI field and attempts to resolve it externally as part of its security analysis?***

Our latest escape test uses this idea. The payload is encoded into the SNI field, and the resolution of the DNS name results in a successful escape from the isolated network via this covert channel, created by the security product.

In highly restricted environments, even limited external communication performed by security tooling can become problematic. If a security product is allowed to communicate externally for analysis purposes, it may unintentionally provide malware with a route out of the environment, allowing the security infrastructure itself to transport or process content outside the isolated boundary.

![TLS_DNS_blogpost](/assets/img/articles/TLS_DNS_blogpost.png) 

The traffic path itself is technically logical, but operationally unexpected. Organizations typically assume their security products enforce isolation boundaries, not create alternate routes around them.

## The Complexity of Modern Network Isolation

Many modern enterprise security products rely on cloud-assisted analysis features such as sandbox detonation, DNS reputation checks, and TLS inspection to identify and stop threats. While these capabilities improve security in connected enterprise environments, they can introduce unexpected risks inside isolated or segmented networks.

With firewalls and security platforms becoming more advanced, organisations could easily assume their security tooling is behaving as expected. But, modern security architectures are incredibly complex. Features designed to improve visibility and protection can unintentionally create edge cases that weaken isolation assumptions.

DNS-based covert channels, and cloud sandbox execution all demonstrate the same core principle: A network may appear isolated while still leaking information through trusted security infrastructure.

That is precisely why testing matters. Not because the firewall is failing, but because it may be doing far more than administrators realize.



