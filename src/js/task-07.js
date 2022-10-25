const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

updateFontSize(refs.fontSizeControl.value);

refs.fontSizeControl.addEventListener('input', (evt) => {
  updateFontSize(evt.currentTarget.value);
});

function updateFontSize(value) {
  refs.text.style.fontSize = `${value}px`;
}
