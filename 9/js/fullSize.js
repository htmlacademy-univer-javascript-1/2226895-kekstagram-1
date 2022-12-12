import {rightEnding} from './util.js';

const COMMENTS = 5;

const ENDINGS = ['комментария', 'комментариев', 'комментариев'];

const bigPicture = document.querySelector('.big-picture');
const bigPictureElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const descriptionElement = document.querySelector('.social__caption');
const commentCountOnPic = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');


// создаем комментарий
const createComments = (comments) => {
  commentsList.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    commentsFragment.appendChild(commentElement);
  });
  commentsList.appendChild(commentsFragment);
};

let comment;
let tempCount = 0;
// если есть незагруженные комментарии, то добавляем кнопку загрузить
const updateComments = () => {
  if (tempCount === comment.length) {
    commentsLoader.classList.add('hidden');
    return;
  }
  commentsLoader.classList.remove('hidden');
};

let commentLength;
const showComments = (from, to) => {
  tempCount = Math.min(to, comment.length);
  createComments(comment.slice(from, tempCount));
  commentCountOnPic.textContent = `${tempCount} из ${commentLength} ${rightEnding(commentLength, ENDINGS)}`;
  updateComments();
};

// при нажатии показываем следующие 5 комментариев
const pressUpdate = (evt) => {
  evt.preventDefault();
  showComments(tempCount, tempCount + COMMENTS);
};

// 5. Закрытие окна при esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    commentsLoader.removeEventListener('click', pressUpdate);
  }
});

// 5. Клик по иконке закрытия
const cancel = document.querySelector('.big-picture__cancel');
cancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  commentsLoader.removeEventListener('click', pressUpdate);
});

// функция демонстрации полного изображения с комментариями
const showFullSize = (picture) => {
  bigPicture.classList.remove('hidden');
  commentCountOnPic.classList.remove('hidden');
  document.body.classList.add('modal-open');

  comment = picture.comments;
  commentLength = comment.length;

  commentsList.innerHTML = '';
  bigPictureElement.src = picture.url;
  bigPictureElement.alt = picture.description;
  likesCountElement.textContent = picture.likes;
  descriptionElement.textContent = picture.description;
  showComments(0, COMMENTS);
  commentsLoader.addEventListener('click', pressUpdate);
};

export {showFullSize};
