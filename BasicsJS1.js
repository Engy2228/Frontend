const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

const userLogin = prompt('Введите логин').trim()
console.log('userLogin', userLogin)

const userPassword = prompt('Введите пароль').trim()
console.log('userPassword', userPassword)

if (userLogin === existingUserLogin && userPassword === existingUserPassword) {
  alert(`Добро пожаловать, ${userLogin}`)
} 
  else  {
  alert(`Логин и (или) Пароль введены неверно!`)
}

