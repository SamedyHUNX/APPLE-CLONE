"use strict";

const navBarArray = [...document.getElementsByClassName("navbar")];


navBarArray.forEach(navBar => {
    navBar.innerHTML = `
    <ul class="nav-items-component">
        <li id="apple-logo">
        <a href="/index.html">
            <i class="ri-apple-fill" alt="apple logo"></i>
        </a></li>
        <li class="desktop-group"><a href="#">Store</a></li>
        <li class="desktop-group"><a href="#">Mac</a></li>
        <li class="desktop-group"><a href="#">iPad</a></li>
        <li class="desktop-group"><a href="#">iPhone</a></li>
        <li class="desktop-group"><a href="#">Watch</a></li>
        <li class="desktop-group"><a href="#">Vision</a></li>
        <li class="desktop-group"><a href="#">AirPods</a></li>
        <li id="tv-home" class="desktop-group"><a href="#">TV & Home</a></li>
        <li class="desktop-group"><a href="#">Entertainment</a></li>
        <li class="desktop-group"><a href="#">Accessories</a></li>
        <li class="desktop-group"><a href="#">Support</a></li>
        <li id="right-logo">
            <a href="#"><i class="ri-search-line"></i></a>
            <a href="#"><i class="bag-logo ri-shopping-bag-line"></i></a>
            <a id="menu-logo" href="#"><i class="ri-menu-line menu-logo"></i></a>
        </li>
    </ul>
`;

})