function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputEl = document.querySelector('[type="number"]');
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createButtonEl.addEventListener("click", onCreateButtonClick);
destroyButtonEl.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick(event) {

 }

function onDestroyButtonClick(value) { }

function createBoxes(amount) {
  for (let i = 1; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = 30
    boxesEl.append(box);
  }
}

createBoxes(10);
