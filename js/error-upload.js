const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorModalElement = errorTemplateElement.cloneNode(true);
const errorButton = errorModalElement.querySelector('.error__button');

const bodyElement = document.querySelector('body');

const onErrorModalEscKeydown = (evt) => {
  if (evt === 'Escape') {
    evt.preventDefault();
    closeErrorMessageModal();
  }
};

const onErrorBackDropClick = (evt) => {
  if (evt.target === errorModalElement) {
    closeErrorMessageModal();
  }
};

function closeErrorMessageModal() {
  document.removeEventListener('keydown', onErrorModalEscKeydown);
  document.removeEventListener('click', onErrorBackDropClick);

  errorModalElement.remove();
}

const showErrorModal = () => {
  errorModalElement.style.zIndex = 10;

  bodyElement.append(errorModalElement);

  document.addEventListener('keydown', onErrorModalEscKeydown);
  document.addEventListener('click', onErrorBackDropClick);
  errorButton.addEventListener('click', closeErrorMessageModal);
};

export {
  showErrorModal
};
