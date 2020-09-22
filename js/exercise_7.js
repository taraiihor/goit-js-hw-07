const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onTextSize);

function onTextSize(event) {
  textEl.style.fontSize = event.currentTarget.value;
  console.log(textEl.style.fontSize);
}
