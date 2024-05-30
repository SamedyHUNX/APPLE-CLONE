'use strict';

const footer = document.getElementsByClassName('footer')[0];

footer.innerHTML = `
<div class="another-footer-container">
<div class="footer-text-wrapper">
  <ul class="footer-text-container">
    <li>
      1. Trade-in values will vary based on the condition, year, and
      configuration of your eligible trade-in device. Not all devices
      are eligible for credit. You must be at least 18 years old to be
      eligible to trade in for credit or for an Apple Gift Card.
      Trade-in value may be applied toward qualifying new device
      purchase, or added to an Apple Gift Card. Actual value awarded is
      based on receipt of a qualifying device matching the description
      provided when estimate was made. Sales tax may be assessed on full
      value of a new device purchase. In-store trade-in requires
      presentation of a valid photo ID (local law may require saving
      this information). Offer may not be available in all stores, and
      may vary between in-store and online trade-in. Some stores may
      have additional requirements. Apple or its trade-in partners
      reserve the right to refuse or limit quantity of any trade-in
      transaction for any reason. More details are available from
      Apple’s trade-in partner for trade-in and recycling of eligible
      devices. Restrictions and limitations may apply.
    </li>
    <li>
      Available in the U.S. on <a href="apple.com">apple.com</a>, in the
      Apple Store app, and at Apple Stores.
    </li>
    <li>
      To access and use all Apple Card features and products available
      only to Apple Card users, you must add Apple Card to Wallet on an
      iPhone or iPad that supports and has the latest version of iOS or
      iPadOS. Apple Card is subject to credit approval, available only
      for qualifying applicants in the United States, and issued by
      Goldman Sachs Bank USA, Salt Lake City Branch.
    </li>
    <li>
      If you reside in the U.S. territories, please call Goldman Sachs
      at 877-255-5923 with questions about Apple Card.
    </li>
    <li>
      Learn more about how Apple Card applications are evaluated at
      support.apple.com/kb/HT209218.
    </li>
    <li>A subscription is required for Apple TV+.</li>
    <li>
      A subscription is required for Apple Arcade, Apple Fitness+, and
      Apple Music.
    </li>
  </ul>
</div>
<div class="footer-dropdown-wrapper">
  <div id="div-1">
    <div class="mobile-footer">
      <span data-dropdown="dropdown1">Shop and Learn</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown1">
      <div>
        <li><a href="/findstore/findstore.html">Store</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Vision</a></li>
        <li><a href="#">AirPods</a></li>
        <li><a href="#">TV & Home</a></li>
        <li><a href="#">AirTag</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Gift Cards</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown2">Apple Wallet</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown2">
      <div>
        <li><a href="#">Wallet</a></li>
        <li><a href="#">Apple Card</a></li>
        <li><a href="#">Apple Pay</a></li>
        <li><a href="#">Apple Cash</a></li>
      </div>
    </div>
  </div>
  <div id="div-2">
    <div class="mobile-footer">
      <span data-dropdown="dropdown3">Account</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown3">
      <div>
        <li><a href="#">Manage Your Apple ID</a></li>
        <li><a href="#">Apple Store Account</a></li>
        <li><a href="#">iCloud.com</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown4">Entertainment</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown4">
      <div>
        <li><a href="#">Apple One</a></li>
        <li><a href="#">Apple TV+</a></li>
        <li><a href="#">Apple Music</a></li>
        <li><a href="#">Apple Arcade</a></li>
        <li><a href="#">Apple Fitness+</a></li>
        <li><a href="#">Apple News+</a></li>
        <li><a href="#">Apple Podcasts</a></li>
        <li><a href="#">Apple Books</a></li>
        <li><a href="#">Apple Store</a></li>
      </div>
    </div>
  </div>
  <div id="div-3">
    <div class="mobile-footer">
      <span data-dropdown="dropdown5">Apple Store</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown5">
      <div>
        <li><a href="#">Find a Store</a></li>
        <li><a href="#">Genius Bar</a></li>
        <li><a href="#">Today at Apple</a></li>
        <li><a href="#">Group Reservations</a></li>
        <li><a href="#">Apple Camp</a></li>
        <li><a href="#">Apple Store App</a></li>
        <li><a href="#">Certified Refurbished</a></li>
        <li><a href="#">Apple Trade in</a></li>
        <li><a href="#">Financing</a></li>
        <li><a href="#">Carrier Deals at Apple</a></li>
        <li><a href="#">Order Status</a></li>
        <li><a href="#">Shopping Help</a></li>
      </div>
    </div>
  </div>
  <div id="div-4">
    <div class="mobile-footer">
      <span data-dropdown="dropdown6">For Business</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown6">
      <div>
        <li><a href="#">Apple and Business</a></li>
        <li><a href="#">Apple Store Account</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown7">For Education</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown7">
      <div>
        <li><a href="#">Apple and Education</a></li>
        <li><a href="#">Shop for K-12</a></li>
        <li><a href="#">Shop for College</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown8">For Healthcare</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown8">
      <div>
        <li><a href="#">Apple in Healthcare</a></li>
        <li><a href="#">Health on Apple Watch</a></li>
        <li><a href="#">Health Records on iPhone</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown8">For Government</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown8">
      <div>
        <li><a href="#">Shop for Government</a></li>
        <li><a href="#">Shop for Veterans and Military</a></li>
      </div>
    </div>
  </div>
  <div id="div-5">
    <div class="mobile-footer">
      <span data-dropdown="dropdown9">Apple Values</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown9">
      <div>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Environment</a></li>
        <li><a href="#">Inclusion and Diversity</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Racial Equity and Justice</a></li>
        <li><a href="#">Supply Chain</a></li>
      </div>
    </div>
    <div class="mobile-footer">
      <span data-dropdown="dropdown10">About Apple</span>
      <i class="up-arrow ri-arrow-up-s-line hide"></i>
      <i class="down-arrow ri-arrow-down-s-line"></i>
    </div>
    <div class="wrapped-div hidden" id="dropdown10">
      <div>
        <li><a href="#">Newsroom</a></li>
        <li><a href="#">Apple Leadership</a></li>
        <li><a href="#">Career Opportunities</a></li>
        <li><a href="#">Investors</a></li>
        <li><a href="#">Ethic & Compliance</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact Apple</a></li>
      </div>
    </div>
  </div>
</div>
<div class="gf-footer">
  <div id="first-div">
    <p>
      More ways to shop: <a href="#">Find an Apple Store</a> or
      <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
    </p>
  </div>
  <div id="second-div">
    <p>
      Copyright <i class="ri-copyright-line"></i> 2024 Apple Inc. All
      rights reserved.
    </p>
    <ul>
      <a id="first-a" href="#">Privacy Policy</a>
      <a class="mid-element" href="#">Terms of Use</a>
      <a class="mid-element" href="#">Sales and Refunds</a>
      <a class="mid-element" href="#">Legal</a>
      <a id="last-a" href="#">Site Map</a>
    </ul>
    <p>United States</p>
  </div>
</div>
</div>
`

// marking the end of the injection codes

const eachLiFooterArray = [...document.getElementsByClassName('wrapped-div')];

const upArrowsArray = [...document.getElementsByClassName('up-arrow')];
const downArrowsArray = [...document.getElementsByClassName('down-arrow')];

downArrowsArray.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    upArrowsArray[index].classList.remove('hide');
    downArrowsArray[index].classList.add('hide');
    eachLiFooterArray[index].classList.remove('hidden');
  })

  upArrowsArray[index].addEventListener('click', () => {
    upArrowsArray[index].classList.add('hide');
    downArrowsArray[index].classList.remove('hide');
    eachLiFooterArray[index].classList.add('hidden');
  })
})