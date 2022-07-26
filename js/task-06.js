/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur),
проверяет его содержимое на правильное количество введённых символов.

-Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
-Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
 */

const inputEl = document.querySelector('#validation-input');

function onHandlerBlur(e) {
    if (e.currentTarget.value.length > inputEl.getAttribute('data-length')) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
}

inputEl.addEventListener('blur', onHandlerBlur)