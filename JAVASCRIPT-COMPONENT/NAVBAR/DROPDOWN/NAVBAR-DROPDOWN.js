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
// marking the end of dropdown styling section..

// dropdown's submenu adding element
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
const subMenuDropdownArray = [...document.querySelectorAll('.dropdown-within')];

// all dropdown menu within the navbar;
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < subMenuSubarrayAndElementsArray.length; i++) {
    for (let j = 0; j < subMenuSubarrayAndElementsArray[i].length; j++) {
      subMenuDropdownArray[i].children[j].firstElementChild.firstElementChild.textContent = subMenuSubarrayAndElementsArray[i][j][0];
      for (let k = 0; k < subMenuSubarrayAndElementsArray[i][j][1].length; k++) {
        const liElement = document.createElement('li');
        dropDownContainerArray[0].children[i].firstElementChild.children[j].lastElementChild.appendChild(liElement);
        dropDownContainerArray[0].children[i].firstElementChild.children[j].lastElementChild.children[k].textContent = subMenuSubarrayAndElementsArray[i][j][1][k];
      }
    }
  }
});

// linking the bag logo to the signin page, so when a use clicks on the logo, it takes them to the sign-in page
const loginPageArray = [...document.getElementsByClassName('nav-items-component')];
loginPageArray.forEach(login => {
  login.lastElementChild.classList.add('right-group');
});

// static coding is used since its only one element applied
loginPageArray[0].lastElementChild.children[1].setAttribute('href', "./signin.html");s
// marking the end of this adding section..
  