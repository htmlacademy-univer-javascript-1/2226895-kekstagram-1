function getRandom(min, max) {
  if (min > max || min < 0 || max < 0) {
    return 'Неверный диапазон';
  } else {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}

function stringLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else { 
    return false;
  }
}

console.log(getRandom(2, 8));
console.log(stringLength('erty', 7));