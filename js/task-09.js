function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorRef = document.querySelector('body');
const btnChangeColorRef = document.querySelector('.change-color');
const colorSpanRef = document.querySelector('.color');

const onBgColorChange = event => {
  const currentColor = getRandomHexColor();
  colorSpanRef.textContent = `${currentColor}`;
  bodyColorRef.style.backgroundColor = currentColor;
};

btnChangeColorRef.addEventListener('click', onBgColorChange);
