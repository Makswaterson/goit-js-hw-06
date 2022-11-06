const inputSizeActionRef = document.querySelector('#font-size-control');
const textInputSizeRef = document.querySelector('#text');

textInputSizeRef.style.fontSize = inputSizeActionRef.value + 'px';

const onInputRangeMove = event => {
  textInputSizeRef.style.fontSize = inputSizeActionRef.value + 'px';
};

inputSizeActionRef.addEventListener('input', onInputRangeMove);
