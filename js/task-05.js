// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value.trim();

  inputValue === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = inputValue);
}
