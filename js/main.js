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


const NAMES = [
  'Иван',
  'Петя',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Мария',
  'Илья',
];

const MESSAGES= [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Утро',
  'Завтрак',
  'Класс!',
  'Проогулка',
  'Звезды',
  'Праздник',
  'На отдыхе',
];

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const exclusiveNumber = (elements) => elements.splice(Math.random() * elements.length,1)[0];


const numbersForId = new Array(25);
for(let i = 0; i < 25; i++) {
  numbersForId[i] = i + 1;
}


const numbersForURL = numbersForId.slice(0);

const messageID = new Array(66666);
for(let i = 0; i < 66666; i++) {
  messageID[i] = i + 1;
}

const makeComment = () => ({
  message : getRandomArrayElement(MESSAGES),
  id: exclusiveNumber(messageID),
});

const createPost = () => ({
  id: exclusiveNumber(numbersForId),
  url: `photos/${exclusiveNumber(numbersForURL)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandom(15, 200),
  comments: Array.from({length: 2}, makeComment),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  name: getRandomArrayElement(NAMES),
});

const posts = Array.from({length: 25}, createPost);

// eslint-disable-next-line no-console
console.log(posts);


