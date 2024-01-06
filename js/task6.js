let input;
let total = 0;

do {
  input = prompt("Введіть число:");

  if (input !== null) {
    input = Number(input);

    if (!isNaN(input)) {
      total += input;
    } else {
      alert("Було написано не число, спробуйте ще раз");
    }
  }
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`);
