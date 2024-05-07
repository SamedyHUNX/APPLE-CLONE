// targeting dropdown menu when clicking on the bag logo...

const bagLogo = document.getElementsByClassName('bag-logo')[0];
const closeLogo = document.getElementById('close-logo');
const navBar = document.getElementsByClassName('navbar-container')[0];
const bagDropdown = document.getElementsByClassName('bag-dropdown')[0];

const mediaQuery = window.matchMedia("(max-width: 930px)");

// Function to handle the media query change
function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Code to apply styles for screens less than or equal to 930px
    bagLogo.addEventListener('click', () => {
        bagDropdown.classList.remove('hide');
        navBar.classList.add('hide');
    });

    closeLogo.addEventListener('click', () => {
        bagDropdown.classList.add('hide');
        navBar.classList.remove('hide');
    });
  } else {
    // Code to apply styles for screens greater than 930px
    bagLogo.addEventListener('click', () => {
        bagDropdown.classList.remove('hide');
    });
  }
}

handleMediaChange(mediaQuery);

mediaQuery.addEventListener("change", handleMediaChange);

// targeting pause and play button to stop or play the carousel

const playButton = document.querySelector('#play');
const pauseButton = document.getElementById('pause');
const stopCarousel = document.querySelector('.carousel-slider .carousel-figure .image-slider img');

pauseButton.addEventListener('click', () => {
  playButton.classList.remove('hide');
  pauseButton.classList.add('hide');
})

playButton.addEventListener('click', () => {
  playButton.classList.add('hide');
  pauseButton.classList.remove('hide');
  
})

// footer dropdown menu
document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.mobile-footer span');
  const dropDowns = document.querySelectorAll('.wrapped-div');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
    const dropdownId = this.dataset.dropdown;
    const dropdown = document.getElementById(dropdownId);

    // isHidden

    const isHidden = dropdown.classList.contains('hidden');

    dropDowns.forEach(d => {
      d.classList.add('hidden');
    })

    if (isHidden) {
      dropdown.classList.remove('hidden');
    } else {
      dropdown.classList.add('hidden')
    }

    dropdown.classList.remove('hidden');

    item.addEventListener('click', function() {
      const dropdownId = this.dataset.dropdown;
      const dropdown = document.getElementById(dropdownId);

      dropdown.classList.add('hidden');
    })
    })
  })
})





