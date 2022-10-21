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

export {getRandomArrayElement};
export {exclusiveNumber};
