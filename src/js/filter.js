import items from "./db";
import { toHTML, init } from "./catalog";

const checkboxes = document.querySelectorAll(".filter-checkbox");
const sortButton = document.querySelector(".button-sort");
const cardsContainer = document.querySelector(".catalog-cards");

const resetButton = document.querySelector(".button-reset");

function filter(types, result) {
  switch (types) {
    case "-":
      result.sort((a, b) => {
        if (a.price >= b.price) return -1;
        if (a.price <= b.price) return 1;
      });
      break;
    case "+":
      result.sort((a, b) => {
        if (a.price >= b.price) return 1;
        if (a.price <= b.price) return -1;
      });
      break;
    default:
      break;
  }
  toHTML(result);
  init(result);
  return;
}

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  clear();
  toHTML(items);
  init(items);
  checkboxes.forEach((el) => {
    el.classList.remove("checkbox-active");
    el.checked = false;
  });
});

sortButton.addEventListener("click", (e) => {
  e.preventDefault();

  let type = null;
  const types = [];
  const sortTypes = ["+", "-"];

  checkboxes.forEach((el) => {
    if (el.checked) {
      type = el.dataset.checkboxType;
      types.push(type);
    }
  });

  if (!types.length) return;
  clear();

  const result = items.reduce((acc, item) => {
    if (types.includes(item.type)) addItem(acc, item);
    else if (checkState(types)) addItem(acc, item);
    return acc;
  }, []);

  type = sortTypes.includes(type) ? type : "__INIT__";
  filter(type, result);
});

function clear() {
  cardsContainer.innerHTML = "";
}

function addItem(acc, item) {
  acc.push(item);
}

function checkState(types) {
  const check = types.map((type) => {
    if (
      (type === "+" || type === "-") &&
      !types.includes("орехи") &&
      !types.includes("сухофрукты") &&
      !types.includes("семечки")
    ) {
      return true;
    }
  });
  return check.join("");
}

const arr = [1, 2, 5, 8, 10];

const result = arr.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc += item;
  }
  return acc;
}, []);

console.log(result);
