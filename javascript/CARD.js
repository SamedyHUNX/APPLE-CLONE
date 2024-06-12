const storeCardsArray = [...document.querySelectorAll(".card")];

storeCardsArray.forEach((card) => {
  card.innerHTML = `
        <div class="apple-card">
        <img
        src="#"
        alt="#"
        />
        <div class="card-content">
        <h2>#</h2>
        <address>
        #
        </address>
        <span>#</span>
        </div>`;
});
