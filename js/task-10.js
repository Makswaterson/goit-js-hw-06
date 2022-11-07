function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputBtnRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', onCreateBox);
destroyBtnRef.addEventListener('click', onDestroyBox);
inputBtnRef.addEventListener('input', onInputNumber);

let number = 0;
function onInputNumber(event) {
  number = Number(event.target.value);
  console.log(number);
}
const markup = [];

function onCreateBox() {
  for (let i = 0; i < number; i++) {
    const markupBox = `<div style="width: ${30 + i * 10}px; heigth: ${30 + i * 10}px;
     background-color: ${getRandomHexColor()}"></div>`;
    boxesRef.insertAdjacentHTML('afterbegin', markupBox);
    console.log(markupBox);
  }
}
console.log(boxesRef);

function onDestroyBox() {
  boxesRef.innerHTML = '';
  inputBtnRef.value = '';
}
