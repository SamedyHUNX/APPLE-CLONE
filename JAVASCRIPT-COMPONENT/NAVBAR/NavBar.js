"use strict";

const navBarArray = [...document.getElementsByClassName("navbar")];

(function() {
navBarArray.forEach(navBar => {
    navBar.innerHTML = `
    <ul class="nav-items-component">
        <li class="apple-logo">
        <a href="./index.html">
            <i class="ri-apple-fill" alt="apple logo"></i>
        </a>
        </li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group tv-home"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li class="desktop-group"><a href="#">#</a></li>
        <li id="right-logo">
            <a href="#"><i class="ri-search-line"></i></a>
            <a href="#"><i class="bag-logo ri-shopping-bag-line"></i></a>
            <a id="menu-logo" href="#"><i class="ri-menu-line menu-logo"></i></a>
        </li>
    </ul>
`;
})
})();

// adding text to each navigation element for all the navbar whereever the class is used
const desktopGroupClassArray = Array.from(document.getElementsByClassName('desktop-group'));
const desktopGroupArray = Array.from(document.querySelectorAll('.desktop-group a'));
const dropDownContainerArray = Array.from(document.getElementsByClassName('dropdown-container'));
const aTextContent = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Acessories', 'Support'];

(function() {

desktopGroupArray.forEach((a, index) => {
    a.textContent = aTextContent[index];
})
})();

// dynamically add the dropdown container based on the static array aTextContent..
(function() {
    for (let i = 0; i < aTextContent.length; i++) {
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown hidden';
        dropDownContainerArray[0].appendChild(dropdown);
    }
  })();
