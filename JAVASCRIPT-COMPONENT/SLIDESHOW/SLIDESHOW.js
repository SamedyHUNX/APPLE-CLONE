'use strict';

// slider injection
const mySliderArray = [...document.getElementsByClassName('my-slider')];

mySliderArray.forEach((slider) => {
  slider.innerHTML = `
  <div class="slider-figure slideshow-apple">
  <div class="image-slider">
    <img
      class="active"
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      class="active"
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  <div class="image-slider">
    <img
      src="#"
      alt="#"
    />
  </div>
  </div>
  <div class="nav-dots">
  <div class="div-nav-dots">
  </div>
  </div>
  `;
})

// MARKING THE END OF THE INJECTION SECTION