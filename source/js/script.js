const menuButton = document.querySelector(".header__button");
const menuContainer = document.querySelector(".site-navigation__list");
const header = document.querySelector(".header--nojs")
const burgerButton = document.querySelector(".menu-button");
// const mapContainer = document.querySelector(".contacts__map");
// const mapFallback = document.querySelector(".contacts__map-fallback");

// скрытие меню по-умолчанию
menuButton.classList.toggle("header__button--nojs");
menuContainer.classList.remove("site-navigation__list--nojs");
header.classList.remove("header--nojs");
// mapContainer.classList.remove("contacts__map--nojs");
// mapFallback.classList.remove("contacts__map-fallback--nojs");

// переключатель состояния меню
function menuToggle() {
  menuContainer.classList.toggle("site-navigation__list--opened");
}

// открытие/закрытие меню по кнопке
menuButton.addEventListener("click", menuToggle);

// переключатель кнопки меню
function buttonToggle() {
  burgerButton.classList.toggle("menu-button--opened");
}

burgerButton.addEventListener("click", buttonToggle);

// интерактивная карта
const shopPlace = [59.96839, 30.31758]; // подобрал числа по гуглкартам и макету

const markerIcon = L.icon({
  iconUrl: './../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const markerOptions = {
  icon: markerIcon,
};

const mapOptions = {
  attributionControl: false,
  zoomControl: false,
  boxZoom: false,
  scrollWheelZoom: 'center',
  center: shopPlace,
  zoom: 18,
};

const map = L.map('map', mapOptions);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(shopPlace, markerOptions).addTo(map);