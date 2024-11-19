let correctAnswers = 0
let incorrectAnswers = 0

let question1 = prompt('Сколько будет 2 + 2?')
question1 = Number(question1)
const answer1 = 4
console.log(Number(question1), typeof Number(question1))

if (question1 === answer1) {++correctAnswers, 
  alert('Ответ Верный')
} else {++incorrectAnswers
  alert('Ответ неверный')
}

let question2 = prompt('Сколько будет 2 * 2?')
question2 = Number(question2)
const answer2 = 4
console.log(Number(question2), typeof Number(question2))

if (question2 === answer2) {++correctAnswers, 
  alert('Ответ Верный')
} else {++incorrectAnswers, 
  alert('Ответ неверный')
}

let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
question3 = Number(question3)
const answer3 = 1
console.log(Number(question3), typeof Number(question3))

if (
  question3 === answer3) {++correctAnswers, 
  alert('Ответ Верный')
} else {++incorrectAnswers
  alert('Ответ неверный')
}

let question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
question4 = Number(question4)
const answer4 = 12
console.log(Number(question4), typeof Number(question4))

if (
  question4 === answer4) {++correctAnswers, 
  alert('Ответ Верный')
} else {++incorrectAnswers
  alert('Ответ неверный')
}

let question5 = prompt('Сколько будет 2 + 2 * 2?')
question5 = Number(question5)
const answer5 = 6
console.log(Number(question4), typeof Number(question4))

if (
  question5 === answer5) {++correctAnswers, 
  alert('Ответ Верный')
} else {++incorrectAnswers
  alert('Ответ неверный')
}

console.log(correctAnswers)
console.log(incorrectAnswers)

alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`)
