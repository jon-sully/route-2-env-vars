---
layout: home
left_home_text: What's my ENV {{ site.env.MESSAGE }}?
title: "Route 1: Env Vars"
---

<p id="replaceMe">

Click the button to see a Function response with contextual ENV vars

</p>

<button onClick="fetch('/.netlify/functions/output-env-var').then(res=>res.json()).then(obj => document.getElementById('replaceMe').innerText = obj.secret )">
Click me
</button>
