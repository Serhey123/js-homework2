const numbers = [];
let total = 0;

do {
  let input = prompt("Введи число", "");

  if (input == null) {
    break;
  }

  const value = Number(input);

  const notANumber = Number.isNaN(value);

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(value);
  console.log(numbers);
} while (true);
for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
