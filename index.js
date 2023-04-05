import membersButton from "./js/boton_members.js";
import scrollTopButton from "./js/boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
  membersButton(".btn-members");
});
