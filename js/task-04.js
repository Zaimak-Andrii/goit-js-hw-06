const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};
let counterValue = 0;
updateValue(counterValue);

refs.increment.addEventListener('click', () => {
  counterValue += 1;
  updateValue(counterValue);
});

refs.decrement.addEventListener('click', () => {
  counterValue -= 1;
  updateValue(counterValue);
});

function updateValue(value) {
  refs.value.textContent = value;
}
