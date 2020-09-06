console.log('Задание 8');

const inputRef = document.querySelector('.js-input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

btnRenderRef.addEventListener('click', onRenderBoxes);
btnDestroyRef.addEventListener('click', onDestroyBoxes);

function onRenderBoxes() {
  createBoxes(inputRef.value);
}

function createBoxes(amount) {
  const firstBox = 30;
  const allBoxes = [];
  let changeBoxesValue = 0;

  for (let i = 0; i < amount; i += 1) {
    const boxesDiv = document.createElement('div');
    boxesDiv.classList.add('box');
    boxesDiv.style.width = firstBox + changeBoxesValue + 'px';
    boxesDiv.style.height = firstBox + changeBoxesValue + 'px';
    boxesDiv.style.backgroundColor = getRandomColor();

    allBoxes.push(boxesDiv);
    changeBoxesValue += 10;
  }
  boxRef.append(...allBoxes);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onDestroyBoxes() {
  destroyBoxes();
}

function destroyBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    box.remove();
  });
}
