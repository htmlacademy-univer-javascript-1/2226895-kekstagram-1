import {createPosts} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.picture');
const posts = createPosts();

const showFullSize = () => {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', () => {
      bigPicture.classList.remove('hidden'); // 1. Удаляем класс hidden

      //2. Данные о фотографии
      bigPicture.querySelector('.big-picture__img').src = posts[i].url; // адрес изображения
      bigPicture.querySelector('.likes-count').textContent = posts[i].likes.toString(); // кол-во лайков
      bigPicture.querySelector('.social__caption').textContent = posts[i].description; //описание
      bigPicture.querySelector('.comments-count').textContent = posts[i].comments.length.toString(); // кол-во комментариев

      const comment = bigPicture.querySelector('.social__comments'); // куда вставляютя комменты
      const commentLi = comment.querySelector('li'); // шаблон

      posts[i].comments.forEach((dataComment) => { // проход по каждому комментарию
        const oneComment = commentLi.cloneNode(true);
        oneComment.querySelector('.social__text').textContent = dataComment['message'];
        oneComment.querySelector('img').src = dataComment['avatar'];
        oneComment.querySelector('img').alt = dataComment['name'];
        oneComment.appendChild(oneComment);
      });

      // 3. После открытия окна необходимо спятать блоки
      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');
      // 4. Добавить класс modal - open к body
      document.querySelector('.body').classList.add('modal-open');
    });
  }
};


// 5. Закрытие окна при esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

// 5. Клик по иконке закрытия
const cancel = document.querySelector('.big-picture__cancel');
cancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

showFullSize();

