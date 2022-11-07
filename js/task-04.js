const decrementBtnAction = document.querySelector(' [data-action="decrement"]');
const incrementBtnAction = document.querySelector('[data-action="increment"]');
const valueBtnAction = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnRef = () => {
  counterValue -= 1;
  valueBtnAction.textContent = counterValue;
  //   console.log(onDecrementBtnRef);
};

decrementBtnAction.addEventListener('click', onDecrementBtnRef);

const onIncrementBtnRef = () => {
  counterValue += 1;
  valueBtnAction.textContent = counterValue;
  //   console.log(onIncrementBtnRef);
};
incrementBtnAction.addEventListener('click', onIncrementBtnRef);
