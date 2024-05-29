"use strict";

const subMenu = document.getElementsByClassName("dropdown")[0];

subMenu.innerHTML = `
<div class="dropdown-within">
<div class="submenu">
  <h2><a>#</a></h2>
  <ul>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
  </ul>
</div>
<div class="submenu">
  <h2><a>#</a></h2>
  <ul>
    <li class="wrapped-li" ><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
  </ul>
</div>
<div class="submenu">
  <h2><a>#</a></h2>
  <ul>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
    <li class="wrapped-li"><a></a></li>
  </ul>
</div>
</div>
`;
