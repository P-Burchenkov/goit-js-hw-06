// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeEl = document.getElementById("font-size-control");
const texEl = document.getElementById("text");

rangeEl.addEventListener("input", onRangeInput);

function onRangeInput(event) {
  texEl.style.fontSize = `${event.currentTarget.value}px`;
}
