const userText = prompt('Введите текст').trim()
console.log(userText)

const wordFromText = prompt(`Введите слово из текста ${userText}`).trim()
console.log(wordFromText)

const indexOfWord = userText.indexOf(wordFromText)
console.log(indexOfWord)

const string = userText.slice(0, indexOfWord)

alert(`Результат: ${string}`)

/*
let userText = prompt("Введите текст");
userText = userText.trim();
let wordFromText = prompt("Введите слово из текста");
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
const resultString = userText.slice(0, indexOfWord);
alert(`Результат: ${resultString}`);
*/