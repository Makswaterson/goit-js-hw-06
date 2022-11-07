const listItemRef = document.querySelectorAll('.item');
console.log('Number of categories:', listItemRef.length);

listItemRef.forEach(item => {
  const headNameRef = item.querySelector('h2');
  console.log('Category:', headNameRef.textContent);
  const listElemRef = item.querySelectorAll('li');
  console.log('Elements:', listElemRef.length);
});

const categoryList = document.querySelector('#categories');
const categoryItem = categoryList.querySelectorAll('.item');
console.log(`В списку  присутні ${categoryItem.length} категорії`);

categoryItem.forEach(item => {
  const nameH2 = item.querySelector('h2');
  const listItem = item.querySelectorAll('li');
  console.log(` категорія ${nameH2.textContent} - кількість елементів ${listItem.length}`);
});
