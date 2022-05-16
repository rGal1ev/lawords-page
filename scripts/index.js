// IMPORT CLASSES
import Navigation from "./navigation/navigation.js";

document.addEventListener("DOMContentLoaded", ready());

function ready() {
  const header = document.querySelector(".header");

  // Инициализация навигации --
  const nav = new Navigation();
  nav.init();

  if (window.scrollY > header.offsetHeight) {
    nav.showNavigation();
  } else {
    nav.hideNavigation();
  }

  const interfaceWrapper = document.querySelector(".interface");
  const mainWrapper = document.querySelector(".main");

  const interfaceWrapperPos = interfaceWrapper.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > interfaceWrapperPos - 100) {
      mainWrapper.classList.add("_active-light");
    } else {
      mainWrapper.classList.remove("_active-light");
    }

    if (window.scrollY > header.offsetHeight - 500) {
      nav.showNavigation();
    } else {
      nav.hideNavigation();
    }
  });
}
