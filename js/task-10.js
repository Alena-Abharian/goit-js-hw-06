/*
  Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить,
коллекция элементов очищается.

  Создай функцию createBoxes(amount), которая принимает один параметр - число.
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

- Размеры самого первого <div> - 30px на 30px.

- Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

- Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию
  getRandomHexColor для получения цвета.

  Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */

const boxEl = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createDiv(size, color) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = color;
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';

    return newDiv;
}

function createBoxes(amount) {
    let defaultSize = 30;
    for (let i = 0; i < amount; i += 1) {
        const color = getRandomHexColor()
        const divEl = createDiv(defaultSize, color)
        boxEl.appendChild(divEl)
        defaultSize += 10
    }
}

function onHandlerBtnCreate() {
    createBoxes(inputEl.value)
    inputEl.value = ''
}

function onHandlerBtnDelete() {
    boxEl.replaceChildren()
    inputEl.value = ''
}

btnCreate.addEventListener('click', onHandlerBtnCreate);
btnDestroy.addEventListener('click', onHandlerBtnDelete);




