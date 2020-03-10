console.log("Задание 1");
const categoriesRef = document.querySelectorAll(`#categories .item`);
const quantityCategories = categoriesRef.length;
console.log(`В списке ${quantityCategories} категории.`);

categoriesRef.forEach(item => {
    console.log('Категория: ', item.querySelector('h2').textContent);
    console.log('Количество элементов: ', item.querySelectorAll('li').length);
});