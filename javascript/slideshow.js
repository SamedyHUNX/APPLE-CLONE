"use strict";

// slideshow section
const slideshowImg = [
  ...document.querySelectorAll(".slideshow .image-slider img"),
];
// slider section
const sliderImg = [
  ...document.querySelectorAll(".my-slider.carousel-slider .image-slider img"),
];

for (let i = 0; i < slideshowImg.length; i++) {
  slideshowImg[i].setAttribute("src", sliderImgArray[i]);
  slideshowImg[i].setAttribute("alt", sliderImgAlt[i]);
  sliderImg[i].setAttribute("src", sliderImgSmallerArray[i]);
  sliderImg[i].setAttribute("alt", sliderImgAltSmallerArray[i]);
}
// navigation dot

const navDots = document.getElementsByClassName("div-nav-dots")[0];
const slideshowLength = Math.floor(slideshowImg.length / 2);

for (let i = 0; i < slideshowLength; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", "dot");
  navDots.appendChild(button);
  if (i === Math.floor(slideshowLength / 2)) {
    button.classList.add("active");
  }
}

// navigation dot of the smaller carousel
const navDotsSmaller = document.querySelectorAll(
  ".carousel-slider .nav-dots"
)[0];

navDotsSmaller.remove();

// pause and play button to stop the second carousel

const pausePlayArray = [...document.getElementsByClassName("pause-play")];
const pause = document.getElementById("pause");
const play = document.getElementById("play");
const smallerCarousel = [
  ...document.querySelectorAll(".my-slider.carousel-slider .image-slider"),
];
const oldAnimationDuration = "15s";
const newAnimationDuration = "10000s";

function handlePauseClick() {
  play.classList.remove("hidden");
  pause.classList.add("hidden");
  smallerCarousel.forEach((slide) => {
    slide.style.animationDuration = newAnimationDuration;
  });
}

function handlePlayClick() {
  play.classList.add("hidden");
  pause.classList.remove("hidden");
  smallerCarousel.forEach((slide) => {
    slide.style.animationDuration = oldAnimationDuration;
  });
}

pause.addEventListener("click", handlePauseClick);
play.addEventListener("click", handlePlayClick);
