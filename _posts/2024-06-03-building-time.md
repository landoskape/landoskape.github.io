---
title: We have a site!
layout: post
date: 2024-06-03
tags:
  - building
  - plants
author: Andrew Landau
subheader: Thoughts on building my first static website
---

Alright, that was fun. I've been wanting to build a static website for a while and finally did it. It was fun! Since the point of this website is to capture my thoughts and things I've learned, I'll start by sharing about my experience of making a site in the age of AI. 

### To depend or not to depend on a chat bot
Having never worked with HTML or CSS before, I started out with a jekyll template site as is customary for Github pages and used Claude and ChatGPT for help with customizing. Unfortunately, I found myself stuttering around without making much progress. I would tell them something that I want, they would print some code, I'd copy and paste, and then something would change in the site, but the changes weren't exactly what I wanted and I didn't fully understand how the changes were implemented. Don't get me wrong, chatbots are certainly useful, and I use them to help with python code somewhat often, but I didn't feel like they were helping me with this initial stage of learning to build a site.

### Back to the basics
I figured I needed to properly understand the basics, so I restarted my website and went through Jekyll's [step-by-step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) to get a handle for the basics. There's really nothing that beats learning from a manual or a basic tutorial. The tutorial is nicely structured with the key steps and basic functions of a jekyll site, so it rapidly brought me towards a gestalt for how the site is compiled. 

You know, it sometimes feels like hacking is faster. "Hmm, I just want to make the nav bar a bit prettier, let me ask ChatGPT for some advice". It makes a change, but not what you want, then you have to figure out how to fix the output of ChatGPT rather than just learning how to implement what you wanted as the first step.

<div class="text-highlight">
Unless hacks are built off of a basis of knowledge, they just slow you down in the long run.
</div>

With one big exception. Chatbots are sometimes really helpful when you want to do something but have no idea how to even look up what you want to do because you don't have the vocab to know what to ask. Over the ChatGPT era, I think this is where I've gotten the most value from them- chatbots are excellent at understanding what you _mean_, whereas a google search doesn't (yet?). That being said, this can only get you so far when trying to learn thoroughly from first principles.

### To not to depend first, and then...
After using the basic tutorial and looking up a few more how-tos online, the chatbots ended up becoming super useful. I think that once I had a little nugget of knowledge, I could understand the structure of the suggestions from chatbots and then build from there.

I guess it's a bit like bootstrapping-- you can't start a computer with the most complex program, you have to initialize it with something simpler first then work from there. Since I've never worked with HTML or CSS before, getting thrown a bunch of code from a chatbot was overwhelming and had too much information for me to digest. But after 30 minutes of careful, dedicated learning, they sped up my work a bunch and assisted with the learning process. 

Speaking of computers, back before we had electronic computers, we had people who were responsible for solving tedious calculations and they were called... "computers"... (Side note: I learned about this because [NASA](https://www.nasa.gov/image-article/computer-conducts-data-analysis/) hired many women 'computers', several of which were featured in the excellent movie [Hidden Figures](https://en.wikipedia.org/wiki/Hidden_Figures) that gave some long-overdue public kudos to these brilliant people). 

In this sense, a chatbot does exactly what the original intention for the concept of a "computer" implies. Chatbots speed up tedious calculations that we know how to do but would rather not so we can focus on higher level problems. And there's the key point of it all:

<div class="text-highlight">
The value of chatbots is maximized when we use them for things we already know how to do.
</div>

Case in point: I am a skilled python programmer and use chatbots somewhat often, but I almost never need them, I just use them to go faster. It's a huge powerup when I know what I need (for example, a PyQt GUI) but don't want to write the repetitive boiler plate code. However, since I know how to write PyQt GUIs, I can quickly edit the template provided by a chatbot to make it do exactly what I intended.
