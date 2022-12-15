import {showFullSize} from './fullSize.js';
import {getData} from './api.js';
import {initFilterButtons} from './filters.js';
import {showAlert} from './util.js';

const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listFragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');

const removeOLdPictureList = () => {
  photosList.querySelectorAll('.picture').forEach((item) => item.remove());
};

export const renderMin = (photos) => {
  removeOLdPictureList();
  if (photos !== undefined) {
    photos.forEach((element) => {
      const onePhoto = photosTemplate.cloneNode(true);
      onePhoto.href = `#${element.id}`;
      onePhoto.querySelector('.picture__img').src = element.url;
      onePhoto.querySelector('.picture__img').alt = element.description;
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

const bigPicElement = document.querySelector('.big-picture');

export const getPictureList = () => {
  getData((data) => {
    renderMin(data);
    initFilterButtons(data);
    bigPicElement.classList.add('hidden');
    imgFilters.classList.remove('img-filters--inactive');

  }, () => showAlert('Фотографии отсутствуют...'));
};

renderMin();
getPictureList();

