'use strict';

// slideshow section
const slideshowImg = [...document.querySelectorAll('.slideshow .image-slider img')];
const sliderImgArray = [
    './assets/images/Promo/Image Slider/Argylle/Argylle Small.jpg',
    './assets/images/Promo/Image Slider/Franklin/Franklin Small.jpg',
    './assets/images/Promo/Image Slider/Master of Air/Master of AIR SMALL.jpg',
    './assets/images/Promo/Image Slider/Sugar/Sugar Small.jpg',
    './assets/images/Promo/Image Slider/Ted Lasso/Ted Lasso small.jpg',
    './assets/images/Promo/Image Slider/Argylle/Argylle Small.jpg',
    './assets/images/Promo/Image Slider/Franklin/Franklin Small.jpg',
    './assets/images/Promo/Image Slider/Master of Air/Master of AIR SMALL.jpg',
    './assets/images/Promo/Image Slider/Sugar/Sugar Small.jpg',
    './assets/images/Promo/Image Slider/Ted Lasso/Ted Lasso small.jpg',
]
const sliderImgAlt = [
    'Argylle',
    'Franklin',
    'Master of Air',
    'Sugar',
    'Ted Lasso',
    'Argylle',
    'Franklin',
    'Master of Air',
    'Sugar',
    'Ted Lasso',
]
// slider section
const sliderImg = [...document.querySelectorAll('.my-slider.carousel-slider .image-slider img')];

const sliderImgSmallerArray = [
    './assets/images/Carousal/Heartstring/Small.jpg',
    "./assets/images/Carousal/Helly Kitty Island Advanture/Small.jpg",
    "./assets/images/Carousal/NBA 2k24 Arcade Edition/Small.jpg",
    "./assets/images/Carousal/Superbloom/small.jpg",
    "./assets/images/Carousal/Additional/Mobile/228x228SC.DN01.jpg",
    './assets/images/Carousal/Heartstring/Small.jpg',
    "./assets/images/Carousal/Helly Kitty Island Advanture/Small.jpg",
    "./assets/images/Carousal/NBA 2k24 Arcade Edition/Small.jpg",
    "./assets/images/Carousal/Superbloom/small.jpg",
    "./assets/images/Carousal/Additional/Mobile/228x228SC.DN01.jpg",
]

const sliderImgAltSmallerArray = [
    "Heartstring",
    "Hello Kitty World",
    "NBA 2k24",
    "Superbloom",
    "A-List Pop",
    "Heartstring",
    "Hello Kitty World",
    "NBA 2k24",
    "Superbloom",
    "A-List Pop",
]

for (let i = 0; i < slideshowImg.length; i++) {
    slideshowImg[i].setAttribute('src', sliderImgArray[i]);
    slideshowImg[i].setAttribute('alt', sliderImgAlt[i]);
    sliderImg[i].setAttribute('src', sliderImgSmallerArray[i]);
    sliderImg[i].setAttribute('alt', sliderImgAltSmallerArray[i])
}
// navigation dot

const navDots = document.getElementsByClassName('div-nav-dots')[0];
const slideshowLength = Math.floor(slideshowImg.length / 2);

for (let i = 0; i < slideshowLength; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'dot')
    navDots.appendChild(button);
    if (i === Math.floor(slideshowLength / 2)) {
        button.classList.add('active');
    }
}


