"use strict";

const sections = document.getElementsByClassName("hero");

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  section.innerHTML = `
  <img
    class="hero-img"
    src="#"
    alt="iPhone 15 Pro"
  />
  <div class="text-over-hero-img">
    <strong>#</strong>
    <h3>#</h3>
    <div class="button-wrap">
      <button class="learn-more"><a href="#">Learn more</a></button>
      <button class="buy"><a href="#">Buy</a></button>
    </div>
  </div>
  `;
}
