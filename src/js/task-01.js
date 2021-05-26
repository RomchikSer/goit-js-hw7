
const itemsEl = document.querySelectorAll('.item');

const getCategoriesEl = () =>
  console.log(`В списке ${itemsEl.length} категории.`);

const getItemsEl = items => {
  return items.forEach(item => {
    const title = item.firstElementChild.textContent;
    const number = item.lastElementChild.children.length;
    console.log(`Категория: ${title}
  Количество елементов: ${number}`);
  });
};
getCategoriesEl('.item');
getItemsEl(itemsEl);