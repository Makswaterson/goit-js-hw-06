const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liIdRef = document.querySelector('#ingredients');

const listEl = ingredients.map(ingredient => {
  const liCreateEl = document.createElement('li');
  liCreateEl.textContent = `${ingredient}`;
  liCreateEl.classList.add('item');
  return liCreateEl;
});

liIdRef.append(...listEl);
console.log(listEl);
