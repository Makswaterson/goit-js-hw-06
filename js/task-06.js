const nameInputRef = document.querySelector('#validation-input ');
const onInputBlur = event => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);
  if (requiredLength === value.length) {
    changeAddClassEl('valid', 'invalid');
    // nameInputRef.classList.add('valid');
    // nameInputRef.classList.remove('invalid');
  } else {
    changeremoveClassEl('invalid', 'valid');
    // nameInputRef.classList.remove('valid');
    // nameInputRef.classList.add('invalid');
  }
  console.log(dataset.length);
  console.log(value.length);
  console.log(requiredLength);
};
nameInputRef.addEventListener('blur', onInputBlur);

function changeAddClassEl() {
  nameInputRef.classList.add('valid');
  nameInputRef.classList.remove('invalid');
}
function changeremoveClassEl() {
  nameInputRef.classList.add('invalid');
  nameInputRef.classList.remove('valid');
}
