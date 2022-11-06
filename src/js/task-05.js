const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

const handleInputName = event => {
  const { value } = event.target;
  outputNameRef.textContent = value ? value : 'Anonymous';
  //   if ((outputNameRef.textContent = value)) {
  //     value;
  //   } else {
  //     ('Anonymous');
  //   }
};
inputNameRef.addEventListener('input', handleInputName);
