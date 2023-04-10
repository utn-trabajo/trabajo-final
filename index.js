import membersButton from "./js/button_members.js";
import scrollTopButton from "./js/button_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
  membersButton(".btn-members");
});
