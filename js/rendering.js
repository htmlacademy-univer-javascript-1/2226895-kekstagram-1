import {showFullSize} from './fullSize.js';

const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listFragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');
export const renderMin = (photos) => {
  if (photos !== undefined) {
    photos.forEach((element) => {
      const onePhoto = photosTemplate.cloneNode(true);
      onePhoto.querySelector('.picture__img').src = element.url;
      onePhoto.querySelector('.picture__likes').textContent = element.likes;
      onePhoto.querySelector('.picture__comments').textContent = element.comments.length;
      listFragment.appendChild(onePhoto);
      onePhoto.addEventListener('click', () => {
        showFullSize(element);
      });
    });
    photosList.appendChild(listFragment);
    return photosList;
  }
};

renderMin();


