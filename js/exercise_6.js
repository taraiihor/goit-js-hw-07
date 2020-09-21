const input = document.querySelector('#validation-input');
console.log(input);
input.addEventListener('blur', blurInputFocus);
console.log();
function blurInputFocus(event) {
  const length = input.value.length;
  const inputColor = event.currentTarget;
  if (length === Number(input.dataset.length)) {
    inputColor.classList.add('valid');
    inputColor.classList.remove('invalid');
  } else {
    inputColor.classList.add('invalid');
    inputColor.classList.remove('valid');
  }
}
