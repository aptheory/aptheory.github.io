---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
render_with_liquid: true
---

<!-- START: rotating text animation -->
<h2 align="center">
  <span id="name" class="animated-text">Hi, I'm Aungpao !</span>
</h2>

<style>
  .animated-text {
    display: inline-block;
    transition: opacity 0.8s ease, transform 0.3s ease, color 0.5s ease;
    font-weight: bold;
  }

  /* Hover Effect */
  .animated-text:hover {
    transform: scale(1.1); /* Slight enlarge on hover */
    cursor: pointer;
  }
</style>

<script>
  // Text options for rotation
  const names = ["สวัสดีครับ ผมชื่ออั่งเปา !", "こんにちは、アンパオです！", "Hi, I'm Aungpao !"];
  let index = 0;
  const nameElement = document.getElementById("name");

  function rotateText() {
    nameElement.style.opacity = "0"; // Fade out

    setTimeout(() => {
      nameElement.textContent = names[index];
      nameElement.style.opacity = "1"; // Fade in
      index = (index + 1) % names.length;
    }, 800); // Delay for smooth transition
  }

  // Rotate every 4 seconds
  setInterval(rotateText, 4000);

  // Detect dark mode based on `data-theme` attribute
  function updateTextColor() {
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    nameElement.style.color = isDarkMode ? "white" : "black";
  }

  // Initial check and listen for attribute changes
  updateTextColor();
  const observer = new MutationObserver(updateTextColor);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
</script>

<!-- END: rotating text animation -->

I am a Pharmaceutical Sciences student from 🇹🇭 Thailand, with hands-on experience in Artificial Intelligence (AI). I am driven to bridge the gap between technology and Pharma. By leveraging my PharmD background alongside AI expertise, I aim to contribute to transformative advancements across both the pharmaceutical industry and pharmacy practice.


* <i class="fa-solid fa-fire-flame-curved fa-sm" style="color: #ff477e;"></i>&nbsp;&nbsp;I’m currently working on {{ site.author.current_project }}
* <i class="fa-solid fa-comment-dots fa-sm"></i>&nbsp;&nbsp;Ask me about <i class="fa-solid fa-microchip fa-sm" style="color: #3b9aff;"></i>&nbsp;AI in&nbsp;<i class="fa-solid fa-capsules fa-sm" style="color: #1ca67c;"></i>&nbsp;Pharma
* <i class="fa-solid fa-cube fa-sm"></i>&nbsp;&nbsp;Experienced in <i class="fa-brands fa-python"></i>&nbsp;Python, <i class="fa-solid fa-database fa-sm"></i>&nbsp;SQL

