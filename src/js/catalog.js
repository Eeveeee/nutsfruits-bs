import items from "./db";
const cardsContainer = document.querySelector(".catalog-cards");

export function init(items) {
  const weightMinusBtn = document.querySelectorAll(".button-minus");
  const weightPlusBtn = document.querySelectorAll(".button-plus");
  weightMinusBtn.forEach((btn) => btn.addEventListener("click", btnClick("-")));
  weightPlusBtn.forEach((btn) => btn.addEventListener("click", btnClick("+")));

  function btnClick(state) {
    return function (e) {
      const currentBtn = e.target;
      const currentCard = currentBtn.closest(".catalog__card");
      const currentCardId = currentCard.dataset.cardId;
      const price = currentCard.querySelector(".card-price");
      const weight = currentCard.querySelector(".card-weight");
      let diff = 0;
      let currentWeight = parseInt(weight.textContent);

      items.forEach((el) => {
        if (el.id == currentCardId) {
          diff = parseInt(el.price / 100);
        }
      });

      switch (state) {
        case "-":
          if (currentWeight <= 50) break;
          weight.textContent = currentWeight - 50;
          break;
        case "+":
          if (currentWeight >= 950) break;
          weight.textContent = currentWeight + 50;
          break;
      }
      price.textContent = parseInt(weight.textContent) * diff;
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});

export function createTemplate(el) {
  return `
  <div data-card-id="${el.id}" data-card-type="${el.type}" class="catalog__card">
  <div class="card-img"><img src="../src/img/catalog/${el.imgSrc}" alt="" /></div>
  <title class="card-name">${el.name}</title>
  <div class="card-price-wrap"><span class="card-price">${el.price}</span>₽</div>
  <div class="card-weight-selector">
  <button class="button button-minus">-</button>
  <div class="card-weight-wrap"><span class="card-weight">100</span>гр.</div>
  <button class="button button-plus">+</button>
  </div>
    <button class="button button-basket">В корзину</button>
  </div>
  `;
}

export function toHTML(arr) {
  let card = "";
  arr.forEach((el) => {
    card = createTemplate(el);
    cardsContainer.insertAdjacentHTML("beforeend", card);
  });
}

toHTML(items);
