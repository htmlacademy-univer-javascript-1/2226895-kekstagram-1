import {resetEffect} from './effects.js';
import {resetScale} from './scale.js';
import {sendData} from './api.js';
import {showErrorModal} from './error-upload.js';
import {showSuccessModal} from './succes-upload.js';
import {pristine} from './validation.js';
import {resetFileInput} from './uploadPhoto.js';

const formImage = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const submitButton = document.querySelector('.img-upload__submit');
const cancelButton = document.querySelector('#upload-cancel');

export function showForm() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetEffect();
  resetScale();
  document.addEventListener('keydown', onOverlayEscKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
}

export function hideForm() {
  formImage.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onOverlayEscKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
}

function onOverlayEscKeydown(evt) {
  if (evt.key === 'Escape' && evt.target !== hashtagField && evt.target !== commentField) {
    evt.preventDefault();
    hideForm();
  }
}

function onCancelButtonClick () {
  hideForm();
}

const onFileInputChange = () => {
  showForm();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

function resetUploadForm() {
  formImage.reset();
  onCancelButtonClick();
  resetFileInput();
}

const onSubmitForm = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      () => {
        resetUploadForm();
        showSuccessModal();
        unblockSubmitButton();
      },
      () => {
        resetUploadForm();
        showErrorModal();
        unblockSubmitButton();
      },
      new FormData(formImage),
    );
  }
};


export const addFormAction = () => {
  uploadFile.addEventListener('change', onFileInputChange);
  formImage.addEventListener('submit', onSubmitForm);
};

addFormAction();

export {resetUploadForm};
