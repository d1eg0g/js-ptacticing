const ADMIN_PASSWORD = "jqueryismyjam";
let message;

// Запитати у відвідувача пароль через prompt
const userPassword = prompt("Введіть пароль:");

// Перевірка введеного пароля
if (userPassword === null) {
  message = "Скасовано користувачем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

// Вивести результат до alert
alert(message);
