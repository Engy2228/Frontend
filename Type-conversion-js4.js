// 1 не поняла почему NaN
console.log(Number(' 1 2 3 4 5'));
// 2 не поняла почему NaN
console.log(Number('1234 5'));
// 3 число
console.log(Number('12345'));
// 4 boolean
console.log(String(false));
// 5  пусто это false
console.log(Boolean(0000000));
// 6 не пусто, поэтому true
console.log(Boolean(0.0000001));
// 7 не определено
console.log(String(undefined));
// 8 нет такого числа
console.log(Number('100f'));
// 9 число
console.log(Number('100'));
// 10 число
console.log(Number('000001'));


const string1 = 'LOWER TEXT';
// Присваиваем результат выполнения метода в переменную
const lowerString = string1.toLowerCase();
// В переменной lowerString содержится "lower text"
console.log(lowerString); // lower text

const string2 = 'upper text';
const upperString = string2.toUpperCase();
// В переменной upperString содержится "UPPER TEXT"
console.log(upperString); // UPPER TEXT