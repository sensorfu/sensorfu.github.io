---
layout: post
title: "Ghost Leak: Beacon is already dead and gone, but keeps calling back to Home"
date: 2026-03-15 09:30:00 +0200
categories: article
---

We love getting feedback from our clients about our product, SensorFu Beacon. Imagine our surprise however, when one of our clients 
called to tell us that not only had Beacon worked well, but it was apparently capable of achieving digital immortality.

An interesting case was reported to us last November by one of our clients. They were getting a DNS leak observation from one Beacon
device that was no longer online. Even though the Beacon was taken out of the network, shut down, and was no longer running, they still had 
a DNS leak showing up in the Beacon Home observation and their dashboard, once every six days.

While we designed SensorFu Beacon to continuously verify network isolation by testing a variety of escape methods, Beacon needs to be online
in order for it to work. That doesn’t mean we don’t get surprises every now and then.

A few years back one of our clients' security teams started to receive Beacon alerts from one of their business-critical remote sites from a
retired device. The culprit in that case was a device not being decommissioned and erased properly before being used somewhere else. While that 
made sense to us, this current situation was a bit more puzzling. A Beacon Ghost Leak? This time Beacon was offline so the source of the observation 
had to be something other than Beacon itself. Apparently, we’d discovered a feature we didn’t know we had.

> “We hadn’t anticipated this, but once we stepped back and considered the DNS caching behavior, it made complete sense. Beacon didn’t create the mystery; it simply revealed it.” –Lauri Jämsä

We learned from our client that they were using a public DNS server whose resolver had cached the escape and was periodically refreshing it. 
Because public DNS servers maintain cached entries with a certain amount of time-to-live (TTL), whether minutes or days, this particular server was 
configured to automatically refresh the cached entry just before it expired, even if no one had actively requested it. As a result, the DNS server 
was periodically asking Beacon Home about the DNS entry which essentially retriggered the leak.

Minor as it may seem, this could still pose a potential risk. We don’t know for certain if the client was expecting communication with a public DNS server, 
but in general, any outbound traffic, to a public DNS server or somewhere else is probably not the best idea unless it is planned and monitored.
Our client did manage to resolve the periodic observation by deleting Beacon from Home. Something we do recommend to our clients if Beacon is not installed. 
This won’t solve the problem completely as the underlying DNS cache refresh event observation could still occur, but by deleting Beacon from Home there will 
be no visible observation.

While this type of caching behaviour is somewhat unusual as it’s expected that when the cache expires the DNS server drops the query until someone asks again, 
we have seen similar cases in the past. This however is the first time we got confirmation that this is how the DNS server was working. DNS continues to be one 
of the most common leak paths from isolated networks, reminding us that DNS control cannot be left implicit when isolation truly matters.
