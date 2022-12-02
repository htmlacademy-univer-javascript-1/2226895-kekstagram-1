import {checkingComments, checkingHashTags} from './validation';

const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

function pushEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideForm();
  }
}

function hideForm() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', pushEsc);
  buttonCancel.removeEventListener('click', () => {
    document.querySelector('body').classList.remove('modal-open');
    hideForm();
  });
}

function showForm() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', pushEsc);
  buttonCancel.addEventListener('click', () => {
    document.querySelector('body').classList.remove('modal-open');
    hideForm();
  });
}

function uploadFileFunc() {
  uploadFile.addEventListener('click', (evt)=>{
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    showForm();
  });
}

const formImage = document.querySelector('.img-upload__form');

const pristine = new Pristine(formImage, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
});

function formSubmit () {
  formImage.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (!isValid) {
      return 'Wrong Format';
    }
  });
}


const hashTag = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

hashTag.addEventListener('input', () => {
  hashTag.setCustomValidity(`${checkingHashTags(hashTag.value)}`);
  hashTag.reportValidity();
});

commentInput.addEventListener('input', () => {
  commentInput.setCustomValidity(`${checkingComments(commentInput.value)}`);
  commentInput.reportValidity();
});

formSubmit();
uploadFileFunc();


export {
  formSubmit,
  showForm,
  hideForm,
  uploadFileFunc,
};
