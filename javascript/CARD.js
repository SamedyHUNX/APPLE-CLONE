// card injection
// note: its a common component but hosting site cant recognixe it so i moved it here
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
// MARKING THE END OF THE INJECTION SECTION
