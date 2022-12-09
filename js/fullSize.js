import {createPosts} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.picture');
const posts = createPosts();
const showMoreButton = bigPicture.querySelector('.social__comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const  numberOfComments = document.querySelector('.comments-count');

const createComment = (sample, comment, dataComment) => { //создание одного комментария
  const oneComment = sample.cloneNode(true);
  oneComment.querySelector('.social__text').textContent = dataComment['message'];
  oneComment.querySelector('img').src = dataComment['avatar'];
  oneComment.querySelector('img').alt = dataComment['name'];
  comment.appendChild(oneComment);
};

export const showFullSize = () => {
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

      let tempCount = 0;

      // всего комментариев
      numberOfComments.textContent = posts[i].comments.length.toString();

      if (posts[i].comments.length <= 5) { // если комментов <= 5
        for (let j = 0; j < posts[i].comments.length; j++) {
          createComment(commentLi, comment, posts[i].comments[j]);
        }
        commentCount.textContent = posts[i].comments.length.toString();
      } else { // если их > 5, то появляется кнопка и мы печатает первые 5 комментариев
        showMoreButton.classList.remove('hidden');
        for (let j = 0; j < 5; j++) {
          createComment(commentLi, comment, posts[i].comments[j]);
        }
        tempCount = 5;
        commentCount.textContent = tempCount;
      }

      showMoreButton.addEventListener('click', () => { // при нажатии на кнопку
        if (tempCount + 5 <= posts[i].comments.length) { // если мы не дошли до конца списка комментариев, то печатаем след 5
          for (let j = tempCount; j < tempCount + 5; j++) {
            createComment(commentLi, comment, posts[i].comments[j]);
          }
          tempCount += 5; // прибавляется счетчик сколько комментариев уже показали
          commentCount.textContent = tempCount;
        } else { // если мы дошли до конца списка и осталось < 5 комментариев
          for (let j = tempCount; j <= posts[i].comments.length - tempCount; j++) {
            createComment(commentLi, comment, posts[i].comments[j]);
            commentCount.textContent = posts[i].comments.length.toString();
          }
          showMoreButton.classList.add('hidden');
        }
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
