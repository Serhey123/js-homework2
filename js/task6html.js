let input = document.querySelector(".js-value");
const addValueBtn = document.querySelector(".js-add-value");
const calcBtn = document.querySelector(".js-calculate");
let numbers = [];
let total = 0;

addValueBtn.addEventListener("click", function () {
  const value = Number(input.value);

  input.value = "";

  numbers.push(value);
  console.log(numbers);
});

calcBtn.addEventListener("click", function () {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
});
