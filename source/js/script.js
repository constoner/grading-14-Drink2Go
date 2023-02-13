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
const shopPlace = [59.96839, 30.31758]; // подобрал числа по гуглкартам и макету

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
  boxZoom: false,
  scrollWheelZoom: 'center',
  center: shopPlace,
  zoom: 18,
};

const map = L.map('map', mapOptions);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker(shopPlace, markerOptions).addTo(map);