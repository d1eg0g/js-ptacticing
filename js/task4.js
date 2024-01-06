const credits = 23580;
const pricePerDroid = 3000;
let message;

// Запитати у відвідувача кількість дроїдів через prompt
const droidsToBuy = prompt("Скільки дроїдів ви хочете купити?");

// Перевірка чи користувач натиснув Cancel
if (droidsToBuy === null) {
  message = "Скасовано користувачем!";
} else {
  // Розрахунок загальної ціни замовлення
  const totalPrice = Number(droidsToBuy) * pricePerDroid;

  // Перевірка чи користувач може оплатити замовлення
  if (totalPrice > credits) {
    message = "Недостатньо коштів на рахунку!";
  } else {
    // Розрахунок залишку кредитів на рахунку
    const remainingCredits = credits - totalPrice;
    message = `Ви купили ${droidsToBuy} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.`;
  }
}

// Вивести результат до консолі
console.log(message);
