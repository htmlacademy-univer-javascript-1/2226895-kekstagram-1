import {createPosts} from './data.js';

const photosTemplate = document.querySelector('#picture').content;
const photos = createPosts();
const listFragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');
export const renderMin = () => {
  photos.forEach(({url, likes, comments}) => {
    const onePhoto = photosTemplate.cloneNode(true);
    onePhoto.querySelector('.picture__img').src = url;
    onePhoto.querySelector('.picture__likes').textContent = likes;
    onePhoto.querySelector('.picture__comments').textContent = comments;
    listFragment.appendChild(onePhoto);
  });
  photosList.appendChild(listFragment);
};

renderMin();


