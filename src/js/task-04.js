const counter = {
    value: 0,
    increment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    }
}

// const decrementBtn = document.querySelector("[data-action=decrement]");
// const incrementBtn = document.querySelector("[data-action=increment]");
// const counterValue = document.querySelector("#value");

const refs = {
    incrementBtn: document.querySelector("[data-action=increment]"),
    decrementBtn: document.querySelector("[data-action=decrement]"),
    counterValue: document.querySelector("#value")
};

refs.incrementBtn.addEventListener("click", function () {
    counter.increment();
    refs.counterValue.textContent = counter.value;
});

refs.decrementBtn.addEventListener("click", function () {
    counter.decrement();
    refs.counterValue.textContent = counter.value;
});

