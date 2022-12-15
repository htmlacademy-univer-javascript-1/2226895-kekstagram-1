import {createRandomArrayFromRange, debounce} from './util.js';
import {renderMin} from './rendering.js';

const imgFiltersButton = document.querySelectorAll('.img-filters__button');
const DEBOUNCE_DELAY = 500;
const imgFiltersForm = document.querySelector('.img-filters__form');

const toggleActiveButton = (button) => {
  imgFiltersButton.forEach((el) => {
    el.classList.remove('img-filters__button--active');
  });
  button.classList.add('img-filters__button--active');
};

const applyFilter = (id, imagesArray) => {
  let newImageArray;
  switch (id) {
    case 'filter-random':
      newImageArray = createRandomArrayFromRange(0, imagesArray.length - 1, 10)
        .map((index) => imagesArray[index]);
      break;
    case 'filter-discussed':
      newImageArray = imagesArray.slice().sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      newImageArray = imagesArray;
  }
  renderMin(newImageArray);
};

const applyTimeOut = debounce(applyFilter, DEBOUNCE_DELAY);

export const initFilterButtons = (imagesArray) => {
  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      toggleActiveButton(evt.target);
      applyTimeOut(evt.target.id, imagesArray);
    }
  });
};
initFilterButtons();
