const catItemRef = document.querySelectorAll('.item');

console.log(`В списке ${catItemRef[0].parentElement.children.length} категории.`);

console.log(`Категория: ${catItemRef[0].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[0].lastElementChild.children.length}`);

console.log(`Категория: ${catItemRef[1].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[1].lastElementChild.children.length}`);

console.log(`Категория: ${catItemRef[2].firstElementChild.textContent}`);
console.log(`Количество элементов: ${catItemRef[2].lastElementChild.children.length}`);
