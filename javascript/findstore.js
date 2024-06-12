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
};