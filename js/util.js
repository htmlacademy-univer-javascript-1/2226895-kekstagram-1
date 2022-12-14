export function getRandom(min, max) {
  if (min > max || min < 0 || max < 0) {
    return new Error('Неверный диапазон');
  } else {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}
function getRandomArrayElement(elements) {
  if (elements.length === 0) {
    throw new Error('No more elements');
  }
  return elements[getRandom(0, elements.length - 1)];
}

const exclusiveNumber = (elements) => elements.splice(Math.random() * elements.length,1)[0];

const rightEnding = (number, words) => words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];

const ALERT_SHOW_TIME = 10000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100px';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0px';
  alertContainer.style.top = '0px';
  alertContainer.style.right = '0px';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {exclusiveNumber, rightEnding, getRandomArrayElement, showAlert};
