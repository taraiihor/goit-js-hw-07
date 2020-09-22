const input = document.querySelector('#validation-input');

input.addEventListener('blur', blurInputFocus);

function blurInputFocus(event) {
  const inputColor = event.currentTarget;
  if (inputColor.value.length === Number(input.dataset.length)) {
    inputColor.classList.add('valid');
    inputColor.classList.remove('invalid');
  } else {
    inputColor.classList.add('invalid');
    inputColor.classList.remove('valid');
  }
}
