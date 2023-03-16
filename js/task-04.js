// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  btnDecrementEl: document.querySelector('button[data-action="decrement"]'),
  btnIncrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.getElementById("value"),
};
let counterValue = 0;

refs.btnDecrementEl.addEventListener("click", onBtnDecrementClick);
refs.btnIncrementEl.addEventListener("click", onIncrementBtnClick);

function onBtnDecrementClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}
function onIncrementBtnClick() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
