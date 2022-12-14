const NUMBER_HASHTAGS = 5;
const COMMENT_LENGTH = 140;
const REGEX_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const formImage = document.querySelector('.img-upload__form');
const hashtagField = formImage.querySelector('.text__hashtags');
const commentField = formImage.querySelector('.text__description');

// приводим строку к списку
const createHashtagArray = (value) => value.split(' ');

const isValidHashtag = (value) => {
  if (!value) {
    return true;
  }
  const hashtag = createHashtagArray(value);
  return hashtag.every((test) => REGEX_HASHTAG.test(test));
};

const isValidCount = (value) => {
  const hashtag = createHashtagArray(value);
  return hashtag.length <= NUMBER_HASHTAGS;
};

const isUniqueHashtags = (value) => {
  const hashtag = createHashtagArray(value);
  const uniqHashtag = new Set(hashtag);
  return uniqHashtag.size === hashtag.length;
};

const isValidComment = (comment) => comment.length <= COMMENT_LENGTH;

const pristine = new Pristine(formImage, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

pristine.addValidator(
  hashtagField,
  isValidHashtag,
  'Неправильный хэштег'
);

pristine.addValidator(
  hashtagField,
  isValidCount,
  'Максимальное количество хэштегов равно 5'
);

pristine.addValidator(
  hashtagField,
  isUniqueHashtags,
  'Хэштеги не должны повторяться (регистр букв не учитывается)'
);

pristine.addValidator(
  commentField,
  isValidComment,
  'Длина комментария не может превышать 140 символов'
);
export {pristine};
