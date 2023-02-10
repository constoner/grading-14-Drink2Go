const menuButton = document.querySelector(".header__button");
const menuContainer = document.querySelector(".site-navigation");
const header = document.querySelector(".header--nojs")
const burgerButton = document.querySelector(".menu-button");
// const mapContainer = document.querySelector(".contacts__map");
// const mapFallback = document.querySelector(".contacts__map-fallback");

// скрытие меню по-умолчанию
menuContainer.classList.remove("site-navigation--nojs");
header.classList.remove("header--nojs");
// mapContainer.classList.remove("contacts__map--nojs");
// mapFallback.classList.remove("contacts__map-fallback--nojs");

// переключатель состояния меню
function menuToggle() {
  menuContainer.classList.toggle("site-navigation--opened");
}

// открытие/закрытие меню по кнопке
menuButton.addEventListener("click", menuToggle);

// переключатель кнопки меню
function buttonToggle() {
  burgerButton.classList.toggle("menu-button--opened");
}

burgerButton.addEventListener("click", buttonToggle);
