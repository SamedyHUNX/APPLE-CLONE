"use strict";

// global dropdown
const subMenuGlobalArray = [...document.getElementsByClassName("dropdown")];
// dropdown container
const dropDownContainer = document.querySelector('.dropdown-container');

// common component for the navbar dropdown;
(function() {
subMenuGlobalArray.forEach(subArray => {
  subArray.innerHTML = `
<div class="dropdown-within">
<div class="submenu">
  <h2><a>#</a></h2>
  <ul class='ul-container'>
  </ul>
</div>
<div class="submenu">
  <h2><a>#</a></h2>
  <ul class='ul-container'>
  </ul>
</div>
<div class="submenu">
  <h2><a>#</a></h2>
  <ul class='ul-container'>
  </ul>
</div>
</div>
`;
});
})();

// make the dropdown appear when hovering over the navbar element
desktopGroupArray.forEach((element, i) => {
  element.addEventListener('mouseover', () => {
    subMenuGlobalArray[i].classList.remove('hidden');
  })

  dropDownContainer.addEventListener('mouseleave', () => {
    subMenuGlobalArray[i].classList.add('hidden');
  })
})

// dropdown
const subMenuArray = [...document.getElementsByClassName("submenu")];
// create li elements
const liElement = document.createElement('li');
liElement.className = 'wrapped-li';
// create a elements
const aElements = document.createElement("a");
// append the <a> element to the <li> elements
liElement.appendChild(aElements);
// ul container aka. each subarray
const ulContainersArray = [...document.getElementsByClassName('ul-container')];

// store dropdown
function initializeDropdown() {
const subMenuSubarrayAndElements = [
  ['Shop', ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories']],
  ['Quick Links', ['Find a Store', 'Order Status', 'Apple Trade In', 'Financing']],
  ['Shop Special Stores', ['Certified Refurbished', 'Education', 'Business', 'Veterans and Military', 'Government']]
]

subMenuArray.forEach((subMenu, i) => {
  subMenu.firstElementChild.textContent = subMenuSubarrayAndElements[i][0];
});

// Loop through each ul element and append list items
ulContainersArray.forEach((ulMenu, i) => {
  subMenuSubarrayAndElements[i][1].forEach(text => {
    const liElement = document.createElement('li');
    liElement.textContent = text;
    ulMenu.appendChild(liElement);
  });
});
};

desktopGroupArray.forEach((a, i) => {
  initializeDropdown(a);
})
