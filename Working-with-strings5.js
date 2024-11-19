// Запрашиваем строку для обрезки и удаляем лишние пробелы в начале и в конце
const userString = prompt('Введите текст для обрезки').trim();
console.log(userString)

// Запрашиваем индекс, с которого начнется обрезка строки и преобразуем его в число
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')

// Запрашиваем индекс, которым нужно закончить обрезку строки и преобразуем его в число
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')

//const endSliceIndex = parseInt(prompt('Введите индекс, которым нужно закончить обрезку строки'), 10);

// Обрезаем строку и сохраняем результат
const string = userString.slice(startSliceIndex, endSliceIndex)

// Выводим результат в модальном окне
alert(`Результат: ${string}`)
console.log(string)



/*
const userString = prompt("Введите текст для обрезки");
let startSliceIndex = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
);
let endSliceIndex = prompt(
  "Введите индекс, которым нужно закончить обрезку строки"
);
startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);

const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${resultString}`);
*/