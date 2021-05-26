const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

refs.inputName.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.outputName.textContent = event.currentTarget.value.trim() !== ''
    ? event.currentTarget.value
    : 'незнакомец';
};