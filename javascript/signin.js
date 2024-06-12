'use strict';

// create common footer component both commonally and dynamically..
const footerArray = [...document.querySelectorAll('footer')];

// iterate through each item in pContentArray
pContentArray.forEach((item, index) => {
    const key = Object.keys(item)[0];
    const contents = item[key];

    // create the footer-top or footer-botton or copyright div based on index
    let sectionDiv;
    if (index === 0) {
        sectionDiv = document.createElement('div');
        sectionDiv.classList.add('footer-top');
    } else if (index === 1) {
        sectionDiv = document.createElement('div');
        sectionDiv.classList.add('footer-bottom');
    } else if (index === 2) {
        sectionDiv = document.createElement('div');
        sectionDiv.classList.add('copyright');
    }

    // iterate through each content in the current section
    contents.forEach(content => {
        const pElement = document.createElement('p');
        pElement.innerHTML = content;

        // append the paragraph to the section div
        sectionDiv.appendChild(pElement);
    });

    footerArray.forEach(footer => {
        footer.appendChild(sectionDiv.cloneNode(true));
    })
});
// MARKING THE END