import "./style.css";
import navBar from "./modules/nav";
import mainContent from "./modules/home";
import menuContent from "./modules/menu";
import aboutContent from "./modules/about";

const header = document.querySelector("header");

header.insertAdjacentHTML("afterbegin", navBar());

const DOM = {
  mainElement: document.querySelector("#main-content"),
  menuElement: document.querySelector("#menu-content"),
  aboutElement: document.querySelector("#about-content"),
  navButtons: document.querySelector(".nav-buttons"),
};

DOM.mainElement.insertAdjacentHTML("afterbegin", mainContent());
DOM.menuElement.insertAdjacentHTML("beforeend", menuContent());
DOM.aboutElement.insertAdjacentHTML("beforeend", aboutContent());

DOM.navButtons.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.classList.contains("button")) return;
  DOM.mainElement.classList.add("hidden");
  DOM.menuElement.classList.add("hidden");
  DOM.aboutElement.classList.add("hidden");
  document.getElementById(target.dataset.element).classList.remove("hidden");
});
