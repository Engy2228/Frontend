// Запрашиваем у пользователя его имя
const userName = prompt('Как вас зовут?');
console.log(userName)
// Форматируем строку: убираем лишние пробелы и переводим в верхний регистр
const formattedName = userName.trim().toUpperCase();

// Выводим отформатированное имя в модальном окне
alert(`Вас зовут ${formattedName}`);

console.log(formattedName)