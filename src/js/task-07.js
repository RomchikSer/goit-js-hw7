const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

console.log(refs.input);
console.log(refs.text);

refs.input.addEventListener('input', onFontSizeChange);

function onFontSizeChange (event) {
    refs.text.style.fontSize = event.currentTarget.value + "px";
};
