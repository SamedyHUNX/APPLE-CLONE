"use strict";

// hero common component
// its actually a common component (capitalized) but hosting server cant find the path (still figuring out) so i moved it here.
const heroSectionArray = Array.from(document.getElementsByClassName("hero"));

for (let i = 0; i < heroSectionArray.length; i++) {
  const section = heroSectionArray[i];
  section.innerHTML = `
  <img
    class="hero-img"
    src="#"
    alt="#"
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
// MARKING THE END OF THIS INJECTION SECTION
