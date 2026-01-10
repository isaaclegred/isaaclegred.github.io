---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Physics, Caltech, 2025
* M.S. in Physics, Caltech, 2024
* B.A. in Physics, Cornell University, 2020

Work experience
======
* 2021-2025 : Graduate Research Assistant
  * Caltech
  * Duties includes: Updates and improvements to template
  * Supervisor: Katerina Chatziioannou

  
Skills
======
* Python
* Data Analysis
  * Bayesian Inference
  * Stochastic Sampling
  * Regression
* C++
* Mathematical Modeling

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Caltech SURF Mentor 2021-2025
