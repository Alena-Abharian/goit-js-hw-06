/*
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.

 */

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const createIngredientList = (ingredients) => {
    return ingredients.map(elem => {
        const itemEl = document.createElement('li')
        itemEl.classList.add('item')
        itemEl.textContent = elem;

        return itemEl
    })
}

const ingredientsListEL = document.querySelector('#ingredients')

ingredientsListEL.append(...createIngredientList(ingredients))