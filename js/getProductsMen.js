// Imports
import { dataMen } from "../api-products/men.js";

// DOM
const d = document;
const $template = document.querySelector("template").content;
const $fragment = document.createDocumentFragment();
const $products = document.getElementById("products");


dataMen.forEach((el) => {
  $template.querySelector(".card__image").setAttribute("src", el.image);
  $template.querySelector(".card__image").setAttribute("alt", el.name);
  $template.querySelector(".card__title").textContent = el.name;
  $template.querySelector(".card__bottom__price").textContent = "$" + el.price;
  $template.querySelector("#category").dataset.category = el.category;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$products.appendChild($fragment);



d.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("#category");

  cards.forEach(card => {
    card.parentNode.classList.add(card.dataset.category);
  });

  console.log(cards);
});

