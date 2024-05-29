"use strict";

// slideshow section
const slideshowImg = [
  ...document.querySelectorAll(".slideshow .image-slider img"),
];
const sliderImgArray = [
  "./assets/images/Promo/Image Slider/Argylle/Argylle Small.jpg",
  "./assets/images/Promo/Image Slider/Franklin/Franklin Small.jpg",
  "./assets/images/Promo/Image Slider/Master of Air/Master of AIR SMALL.jpg",
  "./assets/images/Promo/Image Slider/Sugar/Sugar Small.jpg",
  "./assets/images/Promo/Image Slider/Ted Lasso/Ted Lasso small.jpg",
  "./assets/images/Promo/Image Slider/Argylle/Argylle Small.jpg",
  "./assets/images/Promo/Image Slider/Franklin/Franklin Small.jpg",
  "./assets/images/Promo/Image Slider/Master of Air/Master of AIR SMALL.jpg",
  "./assets/images/Promo/Image Slider/Sugar/Sugar Small.jpg",
  "./assets/images/Promo/Image Slider/Ted Lasso/Ted Lasso small.jpg",
];
const sliderImgAlt = [
  "Argylle",
  "Franklin",
  "Master of Air",
  "Sugar",
  "Ted Lasso",
  "Argylle",
  "Franklin",
  "Master of Air",
  "Sugar",
  "Ted Lasso",
];
// slider section
const sliderImg = [
  ...document.querySelectorAll(".my-slider.carousel-slider .image-slider img"),
];

const sliderImgSmallerArray = [
  "./assets/images/Carousal/Heartstring/Small.jpg",
  "./assets/images/Carousal/Helly Kitty Island Advanture/Small.jpg",
  "./assets/images/Carousal/NBA 2k24 Arcade Edition/Small.jpg",
  "./assets/images/Carousal/Superbloom/small.jpg",
  "./assets/images/Carousal/Additional/Mobile/228x228SC.DN01.jpg",
  "./assets/images/Carousal/Heartstring/Small.jpg",
  "./assets/images/Carousal/Helly Kitty Island Advanture/Small.jpg",
  "./assets/images/Carousal/NBA 2k24 Arcade Edition/Small.jpg",
  "./assets/images/Carousal/Superbloom/small.jpg",
  "./assets/images/Carousal/Additional/Mobile/228x228SC.DN01.jpg",
];

const sliderImgAltSmallerArray = [
  "Heartstring",
  "Hello Kitty World",
  "NBA 2k24",
  "Superbloom",
  "A-List Pop",
  "Heartstring",
  "Hello Kitty World",
  "NBA 2k24",
  "Superbloom",
  "A-List Pop",
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

// dropdown

const subMenuArray = [...document.getElementsByClassName("submenu")];
const wrappedLiArray = [...document.getElementsByClassName("wrapped-li")];
const aElements = document.createElement("a");

const h2Text = ["Shop", "Quick Links", "Shop Special Stores"];
const liText = [
  "Shop the Latest",
  "Mac",
  "iPad",
  "iPhone",
  "Apple Watch",
  "Apple Vision Pro",
  "Accessories",
  "Find a Store",
  "Order Status",
  "Apple Trade In",
  "Financing",
  "Certified Refurbished",
  "Education",
  "Business",
  "Veterans and Military",
  "Government",
];

for (let i = 0; i < h2Text.length; i++) {
  subMenuArray[i].firstElementChild.textContent = h2Text[i];
}

for (let i = 0; i < liText.length; i++) {
  for (let j of liText) {
    wrappedLiArray[i].firstElementChild.textContent = liText[i];
  }
}

// make the dropdown appear when clicking on the navbar element

const navbarItemsArray = [...document.getElementsByClassName("desktop-group")];
const dropDownArray = [...document.querySelectorAll(".dropdown")];

navbarItemsArray.forEach((item, index) => {
  item.addEventListener("click", () => {
    dropDownArray[index].classList.remove("hidden");
  });

  item.addEventListener("mouseleave", () => {
    dropDownArray[index].classList.add("hidden");
  });
});
