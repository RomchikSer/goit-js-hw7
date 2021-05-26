const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('#ingredients');

// const elements = ingredients.map(option => {
//     const ingredientsItemEl = document.createElement('li');
//     ingredientsItemEl.classList.add('ingredients-item');
//     const itemTextEl = document.createElement('p');
//     itemTextEl.classList.add('ingredients-text');
//     itemTextEl.textContent = option;
//     ingredientsItemEl.appendChild(itemTextEl);
//     return ingredientsItemEl;
// }); 
// ingredientsRef.append(...elements);

const ingredientsOptions = (options) => {
  return options.map(option => {
    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.classList.add('ingredients-item');
    const itemTextEl = document.createElement('p');
    itemTextEl.classList.add('ingredients-text');
    itemTextEl.textContent = option;
    ingredientsItemEl.appendChild(itemTextEl);
    return ingredientsItemEl;
  }); 
};

const elements = ingredientsOptions(ingredients);
ingredientsRef.append(...elements);

console.log(ingredientsRef);

