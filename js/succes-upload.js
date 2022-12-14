const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const successModalElement = successTemplateElement.cloneNode(true);
const successButton = successModalElement.querySelector('.success__button');

const bodyElement = document.querySelector('body');

const onSuccessModalEscKeydown = (evt) => {
  if (evt === 'Escape') {
    evt.preventDefault();
    closeSuccessMessageModal();
  }
};

const onSuccessBackDropClick = (evt) => {
  if (evt.target === successModalElement) {
    closeSuccessMessageModal();
  }
};

function closeSuccessMessageModal () {
  document.removeEventListener('keydown', onSuccessModalEscKeydown);
  document.removeEventListener('click', onSuccessBackDropClick);
  successModalElement.remove();
}

const showSuccessModal = () => {
  successModalElement.style.zIndex = 10;

  bodyElement.append(successModalElement);

  document.addEventListener('keydown', onSuccessModalEscKeydown);
  document.addEventListener('click', onSuccessBackDropClick);
  successButton.addEventListener('click', closeSuccessMessageModal);
};

export {showSuccessModal};
