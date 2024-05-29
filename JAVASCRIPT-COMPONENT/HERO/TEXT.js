"use strict";

// text over hero image strong
const textStrong = document.getElementsByClassName("text-over-hero-img");
const textStrongArray = [...textStrong];
const h3SelectaArray = [...document.querySelectorAll('.text-over-hero-img h3')]
const strongCopiedArray = textStrongArray.map(element => element.firstElementChild)

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
    'Card'
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
    'Get up to 3% Daily Cash back with every purchase.'
    ]
    for (let i = 0; i < h3SelectaArray.length; i++) {
        h3SelectaArray[i].textContent = h3Array[i];
    }
})

strongCopiedArray.forEach((element, index) => {
    for (let j = 0; j < strongCopiedArray.length; j++) {
        if (index >= 4 && !element.querySelector('.apple-logo')) {
            element.insertAdjacentHTML('afterBegin', '<i class="apple-logo ri-apple-fill"></i>')
        }
    }
})
