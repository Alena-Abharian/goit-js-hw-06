/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur),
проверяет его содержимое на правильное количество введённых символов.

-Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
-Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
 */

const inputEl = document.querySelector('#validation-input');

function setInputClass (addKey, removeKey) {
    inputEl.classList.add(addKey);
    inputEl.classList.remove(removeKey);
}

function onHandlerBlur(e) {
    if (e.currentTarget.value.length > inputEl.getAttribute('data-length')) {
        setInputClass('invalid', 'valid')
    } else {
        setInputClass('valid', 'invalid')
    }
}

inputEl.addEventListener('blur', onHandlerBlur)