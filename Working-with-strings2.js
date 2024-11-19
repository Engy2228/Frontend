let myInfoText = 'Всем привет! Меня зовут Evgen. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript у Vladilen Minin. Я хочу стать веб-разработчиком, потому что I want to buy new bike. До этого я изучал(а) JavaScript 0 месяцев(а). Я уверен(а), что пройду данный курс до конца!»'
//myInfoText = myInfoText.replaceAll('JavaScript', 'javascript')
//myInfoText = myInfoText.replaceAll('курс', 'КУРС')

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript')
.replaceAll('курс', 'КУРС');
console.log(myInfoText)

myInfoText = 'Всем привет! Меня зовут Evgen. Сейчас я изучаю язык программирования javascript на КУРСе по javascript у Vladilen Minin. Я хочу стать веб-разработчиком, потому что I want to buy new bike. До этого я изучал(а) javascript 0 месяцев(а). Я уверен(а), что пройду данный КУРС до конца!»'

console.log(myInfoText.length)
console.log(myInfoText[0])
console.log(myInfoText[280 - 1])



