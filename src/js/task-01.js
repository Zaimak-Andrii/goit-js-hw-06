const categoryElem = document.querySelector('#categories');
const categoriesList = categoryElem.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}`);

  console.log(`Elements: ${lastElementChild.children.length}`);
});
