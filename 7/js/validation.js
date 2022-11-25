const checkingHashTags = (text) => {
  // приводим строку к списку
  const hashtags = text.replace(/\s\s+/g, ' ').trim().split(' ');
  //состав хэштэга и его длина

  const regex = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  if (!(hashtags.every((hashtag) => regex.test(hashtag)))) {
    return 'Неправильный хэштег';
  }
  if (hashtags.length > 5) {
    return 'Максимальное количество хэштегов равно 5';
  }

  //проверка символа #
  const firstSymbol = /^#/;
  if (!(hashtags.every((hashtag) => firstSymbol.test(hashtag)))) {
    return 'Хэштег должен начинаться с символа #';
  }

  //приводим к нижнему регистру
  const hashtagsLowerCase = hashtags.map((hashtag) => hashtag.toLowerCase());
  //без дубликатов
  const uniqueHashtagsLowerCase = new Set(hashtagsLowerCase);
  if (hashtagsLowerCase.length !== uniqueHashtagsLowerCase.size) {
    return 'Хэштеги не должны повторяться (регистр букв не учитывается)';
  }
  return '';
};

const checkingComments = (evtText) => {
  if (evtText.length > 140) {
    return 'Длина комментария не может превышать 140 символов';
  }
  return '';
};


export { checkingHashTags };
export { checkingComments };
