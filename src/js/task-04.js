/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

-Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

-Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

-Обновляй интерфейс новым значением переменной counterValue.

 */

const btnInc = document.querySelector('button[data-action="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector('#value');

let counter = 0;

const onHandlerIncrement = () => {
    counter += 1;
    spanValue.textContent = counter;
}

const onHandlerDecrement = () => {
    counter -= 1;
    spanValue.textContent = counter;
}

btnInc.addEventListener('click', onHandlerIncrement);
btnDec.addEventListener('click', onHandlerDecrement);


