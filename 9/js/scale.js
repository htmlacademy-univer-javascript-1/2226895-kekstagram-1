const sizeNumber = document.querySelector('.scale__control--value');
const sizePlus = document.querySelector('.scale__control--bigger');
const sizeMinus = document.querySelector('.scale__control--smaller');

const imagePrev = document.querySelector('.img-upload__preview');

const min = 25;
const max = 100;
const step = 25;

// при нажатии на кнопку увеличения
sizePlus.addEventListener('click', () => {
  let value;
  if (sizeNumber.value.length > 3) {
    value = Number(sizeNumber.value.substring(0, 3));
  } else {
    value = Number(sizeNumber.value.substring(0, 2));
  }
  if (value < max) {
    value += step;
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
  if (value > min) {
    value -= step;
    imagePrev.style = `transform: scale(${  value / 100  })`;
    sizeNumber.value = `${value  }%`;
  }
});
