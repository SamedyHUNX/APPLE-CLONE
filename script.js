"use strict";

const heroImg = document.getElementsByClassName("hero-img");
const arrayHeroImg = [...heroImg];
function updateHeroImage() {
  const screenWidth = window.innerWidth;
  const heroImg = document.getElementsByClassName("hero-img");
  const arrayHeroImg = [...heroImg];

  arrayHeroImg.forEach((image) => {
    if (screenWidth >= 940) {
      arrayHeroImg[0].setAttribute(
        "src",
        "./assets/images/IPhone/hero-ip15-new.jpg"
      );
      arrayHeroImg[1].setAttribute(
        "src",
        "./assets/images/IPhone/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
      );
    } else {
      arrayHeroImg[0].setAttribute(
        "src",
        "./assets/images/IPhone/For mobile/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg"
      );
      arrayHeroImg[1].setAttribute(
        "src",
        "./assets/images/IPhone/hero-iphone15.jpg"
      );
    }
  });
}

updateHeroImage();

window.addEventListener("resize", updateHeroImage);
