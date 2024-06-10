"use strict";

//  IIFE for hero-img picture..
(function() {
// all the hero-image elements
const arrayHeroImg = Array.from(document.getElementsByClassName("hero-img"));

// adjustment to make the photo appear differently in a different screen-width
function updateHeroImage() {
  const screenWidth = window.innerWidth;
  arrayHeroImg.forEach((image, i) => {
    if (screenWidth >= 1140) {
      // these photo appear on a bigger screen (desktop)
      image.setAttribute(heroImgAttributeArray[i][0][0], heroImgAttributeArray[i][0][1]);
      image.setAttribute(heroImgAttributeArray[i][1][0], heroImgAttributeArray[i][1][1]);
    } else {
      // these photo appear on a smaller screen (mobile)
      image.setAttribute(heroImgAttributeArray[i][2][0], heroImgAttributeArray[i][2][1]);
    }
  });
};

updateHeroImage();

window.addEventListener("resize", updateHeroImage);
})();

// marking the end of hero component styling..

// button deletion for grid section
// static styling deletion is used here because the index of element to delte 
const buttonLearnMore = [...document.getElementsByClassName('learn-more')];
const buttonBuy = [...document.getElementsByClassName('buy')];

buttonBuy[7].textContent = 'Apply now';

buttonLearnMore[8].textContent = 'Get your estimate';
buttonLearnMore[8].style.color = 'white';

buttonBuy[3].remove();
buttonBuy[8].remove();
// marking the end of button deletion for the grid section..

// text over hero image strong
let textStrongArray = [...document.getElementsByClassName("text-over-hero-img")];
const strongCopiedArray = textStrongArray.map(element => element.firstElementChild);
const h3SelectaArray = [...document.querySelectorAll('.text-over-hero-img h3')];
// external apple logo
const appleLogo = '<i class="apple-logo ri-apple-fill"></i>';

// static data like text is kept here since its only applicable to this page
let strongAndH3Array = [[
  'iPhone 15 Pro',
  'iPhone 15',
  'MacBook Air',
  ' ',
  'Vision Pro',
  'WATCH',
  'iPad',
  'Card',
  'Trade In',
], [
  'Titanium. So strong. So light. So Pro.',
    'New Camera. New Design. Newphoria.',
    'Lean. Mean. M3 machine.',
    'Apple Worldwide Developers Conference Join us online June 10-14.',
    'Welcome to the era of spatial computing.',
    'Smart. Brightier. Mightier',
    'Lovable. Drawable. Magical.',
    'Get up to 3% Daily Cash back with every purchase.',
    'Get $170-$630 in credit when you trade in iPhone 11 or higher.'
]]

// styling each strong element
textStrongArray.forEach((text, index) => {
    text.firstElementChild.textContent = strongAndH3Array[0][index];
})
// styling each h3 element
h3SelectaArray.forEach((element, index) => {
  element.textContent = strongAndH3Array[1][index];
})

// adding apple logo using external source
strongCopiedArray.forEach((element, index) => {
  for (let j = 0; j < strongCopiedArray.length; j++) {
      if (index >= 4 && !element.querySelector('.apple-logo')) {
          element.insertAdjacentHTML('afterBegin', appleLogo);
      }
  }
});
// marking the end of adding apple logo section..
// marking the end of the grid section styling..

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
// marking the end of button's background color styling..

