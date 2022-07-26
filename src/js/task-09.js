/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн
стиль при клике на button.change-color и выводит значение цвета в span.color.
 */


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onHandlerColor);

function onHandlerColor() {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    spanEl.textContent = color;
}
