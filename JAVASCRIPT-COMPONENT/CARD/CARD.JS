'use strict';

// card component main used for find-a-store pages..

const storeCardsArray = [...document.querySelectorAll(".card")];

storeCardsArray.forEach((card) => {
  card.innerHTML = `
        <div class="apple-card">
        <img
        src="#"
        alt="#"
        />
        <div class="card-content">
        <h2>#</h2>
        <address>
        #
        </address>
        <span>#</span>
        </div>`;
});

// apple card images
const appleCardsArray = [...document.querySelectorAll(".apple-card img")];
const cardContentsH2Array = [...document.querySelectorAll(".card-content h2")];
const cardContentAddressesArray = [
  ...document.querySelectorAll(".card-content address"),
];
const cardContentSpansArray = [
  ...document.querySelectorAll(".card-content span"),
];

for (let i = 0; i < appleCardsArray.length; i++) {
  appleCardsArray[i].setAttribute("src", cardSourcesArray[i]);
  appleCardsArray[i].setAttribute("alt", altsArray[i]);
  cardContentsH2Array[i].textContent = altsArray[i];
  cardContentAddressesArray[i].textContent = addressesArray[i];
  cardContentSpansArray[i].textContent = timeClosesArray[i];
}
