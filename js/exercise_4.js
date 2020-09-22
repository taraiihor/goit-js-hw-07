// const counter = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };
// const refs = {
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
//   valueEl: document.querySelector('#value'),
// };

// refs.decrementBtn.addEventListener('click', function () {
//   counter.decrement();

//   refs.valueEl.textContent = counter.value;
// });

// refs.incrementBtn.addEventListener('click', function () {
//   counter.increment();

//   refs.valueEl.textContent = counter.value;
// });
const refs = {
  currentValueEl: document.querySelector('#value'),
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

refs.decrementEl.addEventListener('click', decrement);
refs.incrementEl.addEventListener('click', increment);
function decrement() {
  refs.currentValueEl.textContent = counterValue -= 1;
}
function increment() {
  refs.currentValueEl.textContent = counterValue += 1;
}
