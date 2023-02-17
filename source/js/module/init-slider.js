//
//Модуль настройки и подключения рейндж-слайдера noUiSlider
//

const slider = document.querySelector('.slider');
const inputMin = document.querySelector('.form__input--min');
const inputMax = document.querySelector('.form__input--max');
const inputContainer = document.querySelector('.form__input-container');
const resetButton = document.querySelector('button[type="reset"].form__button');

const MIN = parseInt(inputMin.min, 10);
const MAX = parseInt(inputMax.max, 10);

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

const initSlider = () => {

    noUiSlider.create(slider, {
        start: [inputMin.value, inputMax.value],
        connect: true,
        step: 1,
        range: {
            'min': MIN,
            'max': MAX
        },
        cssClasses: {
          target: 'target',
          base: 'base slider__base',
          origin: 'origin',
          handle: 'handle slider__handle',
          handleLower: 'handle-lower',
          handleUpper: 'handle-upper',
          touchArea: 'touch-area slider__touch-area',
          horizontal: 'horizontal',
          vertical: 'vertical',
          background: 'background',
          connect: 'connect slider__connect',
          connects: 'connects slider__connects',
          ltr: 'ltr',
          rtl: 'rtl',
          textDirectionLtr: 'txt-dir-ltr',
          textDirectionRtl: 'txt-dir-rtl',
          draggable: 'draggable',
          drag: 'state-drag',
          tap: 'state-tap',
          active: 'active',
          tooltip: 'tooltip',
          pips: 'pips',
          pipsHorizontal: 'pips-horizontal',
          pipsVertical: 'pips-vertical',
          marker: 'marker',
          markerHorizontal: 'marker-horizontal',
          markerVertical: 'marker-vertical',
          markerNormal: 'marker-normal',
          markerLarge: 'marker-large',
          markerSub: 'marker-sub',
          value: 'value',
          valueHorizontal: 'value-horizontal',
          valueVertical: 'value-vertical',
          valueNormal: 'value-normal',
          valueLarge: 'value-large',
          valueSub: 'value-sub'
      }
    });

    slider.noUiSlider.on('slide', () => onSliderChange());
    inputContainer.addEventListener('input', () => onInputChange());
    resetButton.addEventListener('click', () => slider.noUiSlider.reset());
}

export { initSlider };
