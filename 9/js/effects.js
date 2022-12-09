import nouislider from 'nouislider/src/nouislider';

const radioButton = document.querySelector('.effects__radio');
const imagePrev = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const pictureUploadValueElement = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');

const effects = {
  // оригинал
  'effect-none': {
    name: 'none',
    filter: '',
    unit: '',
    nouislider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
      connect: 'lower'
    },
  },
  // Хром
  'effect-chrome': {
    name: 'chrome',
    filter: 'grayscale',
    unit: '',
    nouisilder: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
      connect: 'lower'
    },
  },
  // Сепия
  'effect-marvin': {
    name: 'marvin',
    filter: 'invert',
    unit: '%',
    nouisilder: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
      connect: 'lower'
    },
  },

  // Фобос
  'effect-phobos': {
    name: 'phobos',
    filter: 'blur',
    unit: 'px',
    nouisilder: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
      connect: 'lower'
    },
  },
  // Зной
  'effect-heat': {
    name: 'heat',
    filter: 'brightness',
    unit: '',
    nouisilder: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
      connect: 'lower'
    },
  },
};

let effectId;
const changeSlider = () => {
  pictureUploadValueElement.value = sliderElement.noUiSlider.get();
  imagePrev.style.filter = `${effects[effectId].filter}(${sliderElement.noUiSlider.get()}${effects[effectId].unit})`;
};

const changeEffect = (evt) => {
  effectId = evt.target.getAttribute('id');
  if (imagePrev.className) {
    imagePrev.classList.remove(imagePrev.className);
  }
  imagePrev.classList.add(`effects__preview--${effects[effectId].name}`);
  sliderContainerElement.classList.add('hidden');
  imagePrev.style.filter = '';

  if (effectId !== 'effect-none') {
    sliderContainerElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions(effects[effectId].nouisilder, true);
  }
};

const createSlider = () => {
  nouislider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  effectId = document.querySelector('.effects__radio:checked').getAttribute('id');
  radioButton.forEach((element) => element.addEventListener('change', changeEffect));
  sliderElement.noUiSlider.on('update', changeSlider);
  sliderContainerElement.classList.add('hidden');

};

const removeSlider = () => {
  sliderElement.noUiSlider.destroy();
  radioButton.forEach((element) => element.removeEventListener('change', changeEffect));
};

createSlider();
removeSlider();


export{createSlider, removeSlider};


