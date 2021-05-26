const refs = {
    renderBtn: document.querySelector('[data-action=render]'),
    destroyBtn: document.querySelector('[data-action=destroy]'),
    divBoxes: document.querySelector('#boxes'),
    input: document.querySelector('input')
}

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
    const amount = refs.input.value;
    createBoxes(amount);
}

function createBoxes (amount) {
    const basicSize = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
        const size = basicSize + [i] * 10;
        const div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    refs.divBoxes.appendChild(fragment);
};

function destroyBoxes () {
    refs.divBoxes.innerHTML = '';
};

function random() {
    return Math.floor(Math.random() * 256);
}

