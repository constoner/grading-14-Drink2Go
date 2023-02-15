
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  // autoplay: true,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// бургер меню
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
  burgerButton.classList.toggle("menu-button--opened");
  menuContainer.classList.toggle("site-navigation__list--opened");
}

// открытие/закрытие меню по кнопке
menuButton.addEventListener("click", menuToggle);
menuContainer.addEventListener("click", menuToggle);


// рейндж-слайдер

const slider = document.querySelector('.slider');
const inputMin = document.querySelector('.form__input--min');
const inputMax = document.querySelector('.form__input--max');
const inputContainer = document.querySelector('.form__input-container');
const resetButton = document.querySelector('button[type="reset"].form__button');

const MIN = parseInt(inputMin.min, 10);
const MAX = parseInt(inputMax.max, 10);

noUiSlider.create(slider, {
    start: [inputMin.value, inputMax.value],
    connect: true,
    step: 1,
    range: {
        'min': MIN,
        'max': MAX
    },
    cssClasses: {
      target: "target",
      base: "base slider__base",
      origin: "origin",
      handle: "handle slider__handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area slider__touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect slider__connect",
      connects: "connects slider__connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub"
  }
});

const onSliderChange = () => {
  inputMin.value = Math.round(slider.noUiSlider.get(true)[0]);
  inputMax.value = Math.round(slider.noUiSlider.get(true)[1]);
};

const onInputChange = () => {
  const inputValue = [inputMin.value, inputMax.value];

  if (inputMax.value === '') {
    inputValue[1] = MAX;
  }

  slider.noUiSlider.set(inputValue);
};

slider.noUiSlider.on('slide', () => onSliderChange());
inputContainer.addEventListener('input', () => onInputChange());
resetButton.addEventListener('click', () => slider.noUiSlider.reset());

// интерактивная карта
const mapCenter = [59.96842, 30.31755]; // подобрал числа по гуглкартам и макету
const shopPlace = [59.96835, 30.31763]; // подобрал числа по гуглкартам и макету

const markerIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const markerOptions = {
  icon: markerIcon,
};

const mapOptions = {
  attributionControl: false,
  zoomControl: false,
  scrollWheelZoom: false,
  boxZoom: true,
  keyboard: false,
  center: mapCenter,
  zoom: 18,
};

const map = L.map('map', mapOptions);

const enableMapZoom = (evt) => {
  
  if (evt.shiftKey === true) {
    map.scrollWheelZoom.enable();
  }
};

window.addEventListener('keydown', (evt) => enableMapZoom(evt));
window.addEventListener('keyup', () => map.scrollWheelZoom.disable());

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(shopPlace, markerOptions).addTo(map);