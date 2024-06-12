"use strict";

// all the hero-image elements
const arrayHeroImg = Array.from(document.getElementsByClassName("hero-img"));

// adjustment to make the photo appear differently in a different screen-width
function updateHeroImage() {
  const screenWidth = window.innerWidth;
  arrayHeroImg.forEach((image, i) => {
    if (screenWidth >= 1140) {
      image.setAttribute(
        heroImgAttributeArray[i][0][0],
        heroImgAttributeArray[i][0][1]
      );
      image.setAttribute(
        heroImgAttributeArray[i][1][0],
        heroImgAttributeArray[i][1][1]
      );
    } else {
      image.setAttribute(
        heroImgAttributeArray[i][2][0],
        heroImgAttributeArray[i][2][1]
      );
    }
  });
}

updateHeroImage();

window.addEventListener("resize", updateHeroImage);
// MARKING THE END OF THNE HERO IMAGE STYLING

// button deletion for grid section
const buttonLearnMore = [...document.getElementsByClassName("learn-more")];
const buttonBuy = [...document.getElementsByClassName("buy")];

buttonBuy[7].textContent = "Apply now";

buttonLearnMore[8].textContent = "Get your estimate";
buttonLearnMore[8].style.color = "white";

buttonBuy[3].remove();
buttonBuy[8].remove();
// MARKING THE END OF BUTTON DELETION

// text over hero image strong
const textStrongArray = [
  ...document.getElementsByClassName("text-over-hero-img"),
];
const strongCopiedArray = textStrongArray.map(
  (element) => element.firstElementChild
);
const h3SelectaArray = [...document.querySelectorAll(".text-over-hero-img h3")];
// external apple logo
const appleLogo = '<i class="apple-logo ri-apple-fill"></i>';

textStrongArray.forEach((text, index) => {
  // strong elements
  const strongArray = [
    "iPhone 15 Pro",
    "iPhone 15",
    "MacBook Air",
    " ",
    "Vision Pro",
    "WATCH",
    "iPad",
    "Card",
    "Trade In",
  ];
  text.firstElementChild.textContent = strongArray[index];

  // h3 elements
  const h3Array = [
    "Titanium. So strong. So light. So Pro.",
    "New Camera. New Design. Newphoria.",
    "Lean. Mean. M3 machine.",
    "Apple Worldwide Developers Conference Join us online June 10-14.",
    "Welcome to the era of spatial computing.",
    "Smart. Brightier. Mightier",
    "Lovable. Drawable. Magical.",
    "Get up to 3% Daily Cash back with every purchase.",
    "Get $170-$630 in credit when you trade in iPhone 11 or higher.",
  ];
  for (let i = 0; i < h3SelectaArray.length; i++) {
    h3SelectaArray[i].textContent = h3Array[i];
  }
});
// MARKING THE END OF THIS GRID STYLING USING JAVASCIRPT

// black background so do not have to change strong, h3, button background to black or white
// 1 indicates black and 0 represents white
const excludedIndexes = [1, 0, 0, 1, 1, 1, 0, 0, 0];
excludedIndexes.forEach((element, i) => {
  if (element === 1) {
    h3SelectaArray[i].style.color = "white";
    strongCopiedArray[i].style.color = "white";
    buttonBuy[i].style.backgroundColor = "black";
  } else {
    h3SelectaArray[i].style.color = "black";
    strongCopiedArray[i].style.color = "black";
    buttonBuy[i].style.backgroundColor = "white";
  }
});
// MARKING THE END

// dynamically adding file path
strongCopiedArray.forEach((element, index) => {
  for (let j = 0; j < strongCopiedArray.length; j++) {
    if (index >= 4 && !element.querySelector(".apple-logo")) {
      element.insertAdjacentHTML("afterBegin", appleLogo);
    }
  }
});

const loginPageArray = [
  ...document.getElementsByClassName("nav-items-component"),
];

loginPageArray.forEach((login) => {
  login.lastElementChild.classList.add("right-group");
});

const rightGroupArray = [...document.getElementsByClassName("right-group")];

rightGroupArray.forEach((right) => {
  right.children[1].setAttribute("href", "/signin.html");
});
// MARKING THE END
