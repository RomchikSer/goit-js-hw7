const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingradientsEl);

const makeListIngredientsOption = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingradients__item');
    itemEl.textContent = item;
    return itemEl;
  });
};

const items = makeListIngredientsOption(ingredients);
ingradientsEl.append(...items);

