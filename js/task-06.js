const validationInputElem = document.querySelector('#validation-input');

validationInputElem.addEventListener('blur', validationInputHandler);

function validationInputHandler({ currentTarget }) {
  const length = Number(currentTarget.dataset.length);

  if (currentTarget.value.length === length) {
    currentTarget.classList.add('valid');
    currentTarget.classList.remove('invalid');
  } else {
    currentTarget.classList.remove('valid');
    currentTarget.classList.add('invalid');
  }
}
