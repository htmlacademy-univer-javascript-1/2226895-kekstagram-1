import {getRandomArrayElement} from './util.js';
import {getRandom} from './util.js';
import {exclusiveNumber} from './util.js';

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


const numbersForIds = Array.from({ length: 25 }, (_, i) => i + 1);

const numbersForURLs = numbersForIds.slice(0);

const messageIDs = Array.from({ length: 66666 }, (_, i) => i + 1);

const makeComment = () => ({
  message : getRandomArrayElement(MESSAGES),
  id: exclusiveNumber(messageIDs),
});

const createPost = () => ({
  id: exclusiveNumber(numbersForIds),
  url: `photos/${exclusiveNumber(numbersForURLs)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandom(15, 200),
  comments: Array.from({length: 2}, makeComment),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  name: getRandomArrayElement(NAMES),
});

const createPosts = () => Array.from({length: 25}, createPost);
export {createPosts};
