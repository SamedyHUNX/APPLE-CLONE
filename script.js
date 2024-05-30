"use strict";
const arrayHeroImg = [...document.getElementsByClassName("hero-img")];
function updateHeroImage() {
  const screenWidth = window.innerWidth;
  const heroImg = document.getElementsByClassName("hero-img");

  arrayHeroImg.forEach((image) => {
    if (screenWidth >= 1140) {
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
        "iPad"
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
      // grid apple ipad
      arrayHeroImg[6].setAttribute(
        "src",
        "./assets/images/Promo/Ipad/promo_ipad__fioegapg12qi_small_2x.jpg"
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

// button deletion for grid section
const buttonLearnMore = [...document.getElementsByClassName('learn-more')];
const buttonBuy = [...document.getElementsByClassName('buy')];

buttonBuy[7].textContent = 'Apply now';

buttonLearnMore[8].textContent = 'Get your estimate';
buttonLearnMore[8].style.color = 'white';

buttonBuy[3].remove();
buttonBuy[8].remove();

// text over hero image strong
const textStrongArray = [...document.getElementsByClassName("text-over-hero-img")];
const strongCopiedArray = textStrongArray.map(element => element.firstElementChild);
const h3SelectaArray = [...document.querySelectorAll('.text-over-hero-img h3')];
const appleLogo = '<i class="apple-logo ri-apple-fill"></i>';

textStrongArray.forEach((text, index) => {
    // strong elements
    const strongArray = [
    'iPhone 15 Pro',
    'iPhone 15',
    'MacBook Air',
    ' ',
    'Vision Pro',
    'WATCH',
    'iPad',
    'Card',
    'Trade In',
    ]
    text.firstElementChild.textContent = strongArray[index];

    // h3 elements
    const h3Array = ['Titanium. So strong. So light. So Pro.',
    'New Camera. New Design. Newphoria.',
    'Lean. Mean. M3 machine.',
    'Apple Worldwide Developers Conference Join us online June 10-14.',
    'Welcome to the era of spatial computing.',
    'Smart. Brightier. Mightier',
    'Lovable. Drawable. Magical.',
    'Get up to 3% Daily Cash back with every purchase.',
    'Get $170-$630 in credit when you trade in iPhone 11 or higher.'
    ]
    for (let i = 0; i < h3SelectaArray.length; i++) {
        h3SelectaArray[i].textContent = h3Array[i];
    }
})
// marking the end

// black background so do not have to change strong, h3, button background to black or white
// 1 indicates black and 0 represents white
const excludedIndexes = [1, 0, 0, 1, 1, 1, 0, 0, 0]
excludedIndexes.forEach((element, i) => {
    if (element === 1) {
        h3SelectaArray[i].style.color = 'white';
        strongCopiedArray[i].style.color = 'white';
        buttonBuy[i].style.backgroundColor = 'black';
    } else {
        h3SelectaArray[i].style.color = 'black';
        strongCopiedArray[i].style.color = 'black';
        buttonBuy[i].style.backgroundColor = 'white';
    }
})
// marking the end

strongCopiedArray.forEach((element, index) => {
    for (let j = 0; j < strongCopiedArray.length; j++) {
        if (index >= 4 && !element.querySelector('.apple-logo')) {
            element.insertAdjacentHTML('afterBegin', appleLogo)
        }
    }
});

const loginPageArray = [...document.getElementsByClassName('nav-items-component')];

loginPageArray.forEach(login => {
  login.lastElementChild.classList.add('right-group');
})

const rightGroupArray = [...document.getElementsByClassName('right-group')];

rightGroupArray.forEach(right => {
  right.children[1].setAttribute('href', "/signin.html")
})

