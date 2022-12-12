import {EFFECTS} from './data.js';

const imagePrev = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderEffect = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

const sliderContainer = document.querySelector('.img-upload__effect-level');

const def = EFFECTS[0];
let chosenEffect = def;

noUiSlider.create(sliderEffect, {
  range: {
    min: def.min,
    max: def.max
  },
  start: def.max,
  step: def.step,
  connect: 'lower',
});

const updateSlider = () => {
  sliderEffect.classList.remove('hidden');
  sliderContainer.style.display = 'block';
  sliderEffect.noUiSlider.updateOptions ({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  }, true);
  if (chosenEffect === def) {
    sliderEffect.classList.add('hidden');
    sliderContainer.style.display = 'none';
  }
};

const changeSlider = () => {
  imagePrev.style.filter = 'none';
  imagePrev.className = '';
  effectValue.value = '';
  if (chosenEffect === def) {
    return;
  }
  const sliderValue = sliderEffect.noUiSlider.get();
  imagePrev.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imagePrev.classList.add(`effects__preview--${chosenEffect.name}`);
  effectValue.value = sliderValue;
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const resetEffect = () => {
  chosenEffect = def;
  updateSlider();
};

form.addEventListener('change', onFormChange);
sliderEffect.noUiSlider.on('update', changeSlider);

export {resetEffect};
