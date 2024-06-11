"use strict";

const searchBarArray = Array.from(
  document.getElementsByClassName("store-search-bar")
);

searchBarArray.forEach((search, i) => {
  search.innerHTML = `
          <div class="wrapper-wrapper">
        <div id="wrapper-wrapper-1">
          <a href="#">Find a Store</a>
        </div>
        <div class="input-search-bar">
          <form>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Search by location, ZIP, or store name"
            />
            <button onclick="submitForm()" type="submit">
              <i class="ri-search-line"></i>
            </button>
          </form>
        </div>
        <div id="wrapper-wrapper-2" class="complete-store-list">
          <a href="#">Complete store list ></a>
        </div>
      </div>
    `;
});
