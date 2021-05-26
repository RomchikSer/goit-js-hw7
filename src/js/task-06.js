const inputChange = document.querySelector('#validation-input');

inputChange.addEventListener('blur', onInputLength);

function onInputLength (event) {
    const lengthData = inputChange.dataset.length;
    if (event.currentTarget.value.length === parseInt(lengthData, 10)) {
        inputChange.classList.add('valid');
        inputChange.classList.remove('invalid');
    } else {
        inputChange.classList.add('invalid');
        inputChange.classList.remove('valid');
    }
};

