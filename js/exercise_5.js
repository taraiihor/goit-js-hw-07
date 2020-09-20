const input = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameTitle.textContent = event.currentTarget.value;
}
console.log(input);
