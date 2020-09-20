const input = document.querySelector('#validation-input');
console.log(input);
input.addEventListener('blur', blurInputFocus);

function blurInputFocus(event) {
  const length = this.value.length;
  const inputColor = event.currentTarget;
  if (length === 6) {
    inputColor.classList.add('valid');
  } else {
    inputColor.classList.add('invalid');
  }
}
