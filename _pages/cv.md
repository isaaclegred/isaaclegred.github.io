---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF version of my CV is available [here]({{ base_path }}/files/Legred_CV.pdf).

Appointments
======
* 2025–present: Postdoctoral Research Associate, University of Illinois Urbana-Champaign

Education
======
* Ph.D. in Physics, California Institute of Technology, 2025
  * Thesis: [*Neutron Stars: Robust Constraints on Dense Matter from Astrophysics*]({{ base_path }}/publication/2025-05-23-phd-legred)
  * Advisor: Katerina Chatziioannou
* M.S. in Physics, California Institute of Technology, 2024
* B.A. in Physics and Mathematics, Cornell University, 2020
  * *Magna cum laude* in Physics and in Mathematics; Distinction in all Subjects
  * Senior thesis: *Testing the No-Hair Theorem: The Precessing Case* ([code](https://github.com/isaaclegred/qnm-fitting))

Honors and awards
======
* 2026: Finalist, Cecilia Payne-Gaposchkin Doctoral Dissertation Award in Astrophysics, American Physical Society
* 2024: James A. Cullen Memorial Fellowship, Caltech
* 2020: Wallace L. W. Sargent Fellowship, Caltech
* 2020: Hans Bethe Senior Thesis Prize, Cornell University

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Software and collaborations
======
* Member of the LIGO-Virgo-KAGRA, SXS, and MUSES collaborations
* [SpECTRE](https://spectre-code.org): contributor to the hydrodynamics modules
* [lwp](https://doi.org/10.5281/zenodo.6127519): LVK inference of the dense-matter equation of state from gravitational waves (lead developer)

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Mentoring
======
* Caltech LIGO Summer Undergraduate Research Fellowship (SURF) students, 2021–2025
  * Celine Wang: Optimal settings for BNS skymaps
  * Oscar Sy-Garcia: Assessing EoS independence under nonparametric models ([paper]({{ base_path }}/publication/2024-02-12-assessing-eos-independent-relations))
  * Carter Anderson: Simulating head-on collisions of neutron stars with SpECTRE
  * Lana Alabbasi: Distinguishing neutron star postmerger from black hole ringdown with gravitational waves
* Graduate students mentored as a postdoc, 2025–present
  * Brook Burbridge: Observables of thermal neutron stars
  * Kaitlyn Prokup: Simultaneous sampling of neutron star properties and the equation of state
  * Emily Dillingham: Understanding neutron star maximum mass dependence on microphysics with emulators

Service
======
* 2026–2027: Co-organizer, Student and Postdoc Seminar, Simons Collaboration on Black Holes and Strong Gravity
* 2025–2026: Co-organizer, MUSES seminar series
* Referee for *The Astrophysical Journal*, *Physical Review D*, and *Physical Review Letters*

Skills
======
* Python, C++
* Data analysis: Bayesian inference, stochastic sampling, regression
* Mathematical modeling and numerical simulation
