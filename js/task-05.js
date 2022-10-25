const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', nameInputUpdateHandler);

function nameInputUpdateHandler({ currentTarget: { value } }) {
  refs.nameOutput.textContent = value || 'Anonymous';
}
