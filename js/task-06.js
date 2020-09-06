console.log('Задание 6');
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  const field = event.target;
  const fieldLength = Number(field.dataset.length);
  const fieldValue = field.value.length;

  if (fieldLength === fieldValue) {
    field.classList.add('valid');
    field.classList.remove('invalid');
  } else {
    field.classList.add('invalid');
    field.classList.remove('valid');
  }
}
