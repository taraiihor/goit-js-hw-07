// const inputEl = document.querySelector('#font-size-control');
// const textEl = document.querySelector('#text');

// inputEl.addEventListener('input', onTextSize);

// function onTextSize(event) {
//   textEl.style.fontSize = event.currentTarget.value;
//   console.log(textEl.style.fontSize);
// }
const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputFontSizeControl);

function onInputFontSizeControl(event) {
  // console.log(event.currentTarget.value + 'px');

  refs.text.style.fontSize = event.currentTarget.value + 'px';
  console.log(refs.text.style.fontSize);
}
