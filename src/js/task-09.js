const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorText: document.querySelector('.color'),
  body: document.body,
};

refs.changeColorBtn.addEventListener('click', () => {
  const hex = getRandomHexColor();

  refs.body.style.backgroundColor = hex;
  refs.colorText.textContent = hex;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
