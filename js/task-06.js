const nameInputRef = document.querySelector('#validation-input ');
// const onInputBlur = event => {
//   const { dataset, value } = event.target;
//   const requiredLength = Number(dataset.length);
//   if (requiredLength === value.length) {
//     changeAddClassEl('valid', 'invalid');
//   } else {
//     changeremoveClassEl('invalid', 'valid');
//   }
//   console.log(dataset.length);
//   console.log(value.length);
//   console.log(requiredLength);
// };
// nameInputRef.addEventListener('blur', onInputBlur);

// function changeAddClassEl() {
//   nameInputRef.classList.add('valid');
//   nameInputRef.classList.remove('invalid');
// }
// function changeremoveClassEl() {
//   nameInputRef.classList.add('invalid');
//   nameInputRef.classList.remove('valid');
// }

// toggleClass(nameInputRef, 'valid', 'invalid');
// toggleClass(nameInputRef, 'invalid', 'valid');

// function toggleClass(refs, add, rem) {
//   refs.classList.add(add);
//   refs.classList.remove(rem);
// }
/////2 Variant/////
const onInputBlur = event => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);
  if (requiredLength === value.length) {
    changeClassEl('valid', 'invalid');
  } else {
    changeClassEl('invalid', 'valid');
  }
  console.log(dataset.length);
  console.log(value.length);
  console.log(requiredLength);
};
nameInputRef.addEventListener('blur', onInputBlur);

function changeClassEl(addClass, remClass) {
  nameInputRef.classList.add(addClass);
  nameInputRef.classList.remove(remClass);
}
/////// 3 Variant /////
// const onInputBlur = event => {
//   const { dataset, value } = event.target;
//   const requiredLength = Number(dataset.length);
//   if (requiredLength === value.length) {
//     changeClassEl(nameInputRef, 'valid', 'invalid');
//   } else {
//     changeClassEl(nameInputRef, 'invalid', 'valid');
//   }
//   console.log(dataset.length);
//   console.log(value.length);
//   console.log(requiredLength);
// };
// nameInputRef.addEventListener('blur', onInputBlur);

// function changeClassEl(refs, addClass, remClass) {
//   refs.classList.add(addClass);
//   refs.classList.remove(remClass);
// }
/////////////// 4 Variant///////
// const onInputBlur = event => {
//   const { dataset, value } = event.target;
//   const requiredLength = Number(dataset.length);

//   nameInputRef.classList.remove('valid', 'invalid');
//   let addClass = 'invalid';
//   if (requiredLength === value.length) {
//     addClass = 'valid';
//   }
//   nameInputRef.classList.add(addClass);
// };
// nameInputRef.addEventListener('blur', onInputBlur);

// /////////////5 Variant//////

// const onInputBlur = event => {
//   const { dataset, value } = event.target;
//   const requiredLength = Number(dataset.length);

//   nameInputRef.classList.remove('valid', 'invalid');
//   let addClass = requiredLength === value.length ? 'valid' : 'invalid';
//   nameInputRef.classList.add(addClass);
// };
// nameInputRef.addEventListener('blur', onInputBlur);
