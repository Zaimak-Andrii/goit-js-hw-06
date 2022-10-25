const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
};

refs.createBtn.addEventListener('click', () => {
  createBoxes(refs.input.value);
  refs.input.value = '';
});

refs.clearBtn.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
});

function createBoxes(numberOfBoxes) {
  const step = 10;
  const startSize = 30 + refs.boxes.children.length * step;

  let str = '';

  for (let i = 0; i < numberOfBoxes; i += 1) {
    str += `<div style="
    background-color: ${getRandomHexColor()}; 
    width: ${startSize + i * step}px; 
    height: ${startSize + i * step}px">
    </div>`;
  }

  refs.boxes.insertAdjacentHTML('beforeend', str);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
