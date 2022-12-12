const sizeNumber = document.querySelector('.scale__control--value');
const sizePlus = document.querySelector('.scale__control--bigger');
const sizeMinus = document.querySelector('.scale__control--smaller');

const imagePrev = document.querySelector('.img-upload__preview');

const MIN = 25;
const MAX = 100;
const STEP = 25;
const DEFAULT_SCALE = 100;

// при нажатии на кнопку увеличения
sizePlus.addEventListener('click', () => {
  let value;
  if (sizeNumber.value.length > 3) {
    value = Number(sizeNumber.value.substring(0, 3));
  } else {
    value = Number(sizeNumber.value.substring(0, 2));
  }
  if (value < MAX) {
    value += STEP;
    imagePrev.style = `transform: scale(${  value / 100  })`;
    sizeNumber.value = `${value  }%`;
  }
});

// при нажатии на кнопку уменьшения
sizeMinus.addEventListener('click', () => {
  let value;
  if (sizeNumber.value.length > 3) {
    value = Number(sizeNumber.value.substring(0, 3));
  } else {
    value = Number(sizeNumber.value.substring(0, 2));
  }
  if (value > MIN) {
    value -= STEP;
    imagePrev.style = `transform: scale(${  value / 100  })`;
    sizeNumber.value = `${value  }%`;
  }
});

export const resetScale = () => {
  imagePrev.style.transform = `scale(${DEFAULT_SCALE / 100})`;
  sizeNumber.value = `${DEFAULT_SCALE}%`;
};
