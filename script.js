"use strict";

const heroImg = document.getElementsByClassName("hero-img");
const arrayHeroImg = [...heroImg];
function updateHeroImage() {
  const screenWidth = window.innerWidth;
  const heroImg = document.getElementsByClassName("hero-img");
  const arrayHeroImg = [...heroImg];

  arrayHeroImg.forEach((image) => {
    if (screenWidth >= 940) {
      // iphone 15 pro
      arrayHeroImg[0].setAttribute(
        "src",
        "./assets/images/IPhone/hero-ip15-new.jpg"
      );
      // iphone 15
      arrayHeroImg[1].setAttribute(
        "src",
        "./assets/images/IPhone/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
      );
      // iphone 15 but alt
      arrayHeroImg[1].setAttribute(
        "alt",
        "iPhone 15"
      );
      // macbook air
      arrayHeroImg[2].setAttribute(
        "src",
        "./assets/images/Macbook/promo_macbook_air_m3__e43jegok3wuq_large_2x.jpg"
      )
      // macbook air but alt
      arrayHeroImg[2].setAttribute(
        "alt",
        "MacBook Air"
      )
      // grid wwdc2024
      arrayHeroImg[3].setAttribute(
        "src",
        "./assets/images/Promo/WWDC/promo_wwdc24_announce__fv0p5miwnjiq_large_2x.jpg"
      )
      arrayHeroImg[3].setAttribute(
        "alt",
        "WWDC 2024"
      )
      // grid apple vision
      arrayHeroImg[4].setAttribute(
        "src",
        "./assets/images/Promo/Vision Pro/apple-vision-pro.jpg"
      )
      // grid apple vision but alt
      arrayHeroImg[4].setAttribute(
        "alt",
        "Apple Vision Pro"
      )
      // grid apple smart watch
      arrayHeroImg[5].setAttribute(
        "src",
        "./assets/images/Promo/Watch/promo_apple_watch_series_9_order__b3u85rm9zf6u_large_2x.jpg"
      )
      // grid apple smart watch but alt
      arrayHeroImg[5].setAttribute(
        "alt",
        "Apple Smart Watch"
      )
      // grid apple ipad
      arrayHeroImg[6].setAttribute(
        "src",
        "./assets/images/Promo/Ipad/promo_ipad__fioegapg12qi_large_2x-1.jpg"
      )
      // grid apple ipad but alt
      arrayHeroImg[6].setAttribute(
        "alt",
        "iPad Pro"
      )
      // grid apple card
      arrayHeroImg[7].setAttribute(
        "src",
        "./assets/images/Promo/Card/tile__cauwwcyyn9hy_large_2x.jpg"
      )
      // grid apple card but alt
      arrayHeroImg[7].setAttribute(
        "alt",
        "iCard"
      )
      // grid apple trade-in
      arrayHeroImg[8].setAttribute(
        "src",
        "./assets/images/Promo/Trade in/promo_iphone_tradein__bugw15ka691e_large_2x.jpg"
      )
      // grid apple trade-in but alt
      arrayHeroImg[8].setAttribute(
        "alt",
        "Apple Trade-in"
      )
    } else {
      // iphone 15 pro
      arrayHeroImg[0].setAttribute(
        "src",
        "./assets/images/IPhone/For mobile/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg"
      );
      // iphone 15
      arrayHeroImg[1].setAttribute(
        "src",
        "./assets/images/IPhone/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
      );
      // macbook air
      arrayHeroImg[2].setAttribute(
        "src",
        "./assets/images/Macbook/promo_macbook_air_m3__e43jegok3wuq_small_2x.jpg"
      )
      // grid wwdc 2024
      arrayHeroImg[3].setAttribute(
        "src",
        "./assets/images/Promo/WWDC/promo_wwdc24_announce__fv0p5miwnjiq_small_2x.jpg"
      )
      // grid apple vision
      arrayHeroImg[4].setAttribute(
        "src",
        "./assets/images/Promo/Vision Pro/apple-vision-pro-small.jpg"
      )
      // grid apple smart watch but alt
      arrayHeroImg[5].setAttribute(
        "src",
        "./assets/images/Promo/Watch/promo_apple_watch_series_9_order__b3u85rm9zf6u_small_2x.jpg"
      )
      // grid apple card
      arrayHeroImg[7].setAttribute(
        "src",
        "./assets/images/Promo/Card/tile__cauwwcyyn9hy_small_2x.jpg"
      )
      // grid apple trade-in
      arrayHeroImg[8].setAttribute(
        "src",
        "./assets/images/Promo/Trade in/promo_iphone_tradein__bugw15ka691e_small_2x.jpg"
      )
    }
  });
}

updateHeroImage();

window.addEventListener("resize", updateHeroImage);
