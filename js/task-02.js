const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsElem = document.querySelector('#ingredients');

function createLiElement(ingredient) {
  const liElem = document.createElement('li');
  liElem.classList.add('item');
  liElem.textContent = ingredient;

  return liElem;
}

ingredientsElem.append(...ingredients.map(createLiElement));
