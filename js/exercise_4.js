const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', function () {
  counter.decrement();

  refs.valueEl.textContent = counterValue.value;
});

refs.incrementBtn.addEventListener('click', function () {
  counter.increment();

  refs.valueEl.textContent = counterValue.value;
});
