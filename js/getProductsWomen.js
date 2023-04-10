// Imports
import { dataWomen } from "../api-products/women.js";

// DOM
const d = document;
const $template = document.querySelector("template").content;
const $fragment = document.createDocumentFragment();
const $products = document.getElementById("products");

const getProducts = (dataWomen) => {
  dataWomen.forEach((el) => {
    $template.querySelector(".card__image").setAttribute("src", el.image);
    $template.querySelector(".card__image").setAttribute("alt", el.name);
    $template.querySelector(".card__title").textContent = el.name;
    $template.querySelector(".card__bottom__price").textContent = "$" + el.price;
    $template.querySelector("#category").dataset.category = el.category;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $products.appendChild($fragment);
};

getProducts(dataWomen);

