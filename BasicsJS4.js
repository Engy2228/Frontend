
let x = 0
while (x < 3) {
  let newStudent = prompt('Введите имя нового студента!').trim()
  x +=1
  alert(`Добро пожаловать, ${newStudent}!`)
  console.log(newStudent)
}
console.log(x)

let i = 0
do {
  let newStudent = prompt('Введите имя нового студента!').trim()
  i +=1
  alert(`Добро пожаловать, ${newStudent}!`)
  console.log(newStudent)
} while (i < 3)
  console.log(i)
