// Запрашиваем у пользователя его имя
const userName = prompt('Как вас зовут?');
console.log(userName)
const ageUser = prompt('Сколько вам лет?')
console.log(Number(ageUser), typeof Number(ageUser))

// Форматируем строку: убираем лишние пробелы и переводим в верхний регистр
const formattedName = userName.trim().toUpperCase();
const formattedAge = ageUser.trim()
// Выводим отформатированное имя в модальном окне
alert(`Вас зовут ${formattedName} и вам ${formattedAge}`);

console.log(formattedName, formattedAge)
