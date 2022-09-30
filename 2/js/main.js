function getRandom(min, max) {
  if (min > max || min < 0 || max < 0) {
    return new Error('Неверный диапазон');
  } else {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}
function stringLength(str, maxLength) {
  return str.length <= maxLength;
}
getRandom(2, 8);
stringLength('erty', 7);
