//console.log(Number('10'), typeof Number('10')); // явное



//1 - неявное преображени, typeof = Number
//let count = '50'
//console.log('count', typeof +count);
console.log(+'50')
console.log(Number('50'), typeof Number('50'))

//2 - явное, потому что функция Number
console.log(Number('100'), typeof Number('100')); 

//3 - неявное преображени, typeof = String
//let exempl = '' + 1
//console.log('' + 1); 
console.log(String('' + 1), typeof String('' + 1)); 

//4 - явное, потому что функция String
console.log(String(1), typeof String(1)); 

//5 - явное, потому что функция Boolean
console.log(Boolean(0), typeof Boolean(0)); 

//6 - неявное преображени, функция Number
//let numb = '001'
//console.log('numb', typeof +numb); 
console.log(+'001')
console.log(Number('001'), typeof Number('001'))

//7 - неявное преображени, число + строка , typeof = String
//let price = 1 + ''
//console.log(1 + '')
console.log(String(1 + ''), typeof String(1 + '')); 

//8  - явное, потому что функция Boolean
console.log(Boolean(1), typeof Boolean(1)); 

//9  - явное, потому что функция String
console.log(String(001), typeof String(001)); 

//10 - явное, потому что функция Number
console.log(Number('Hello World'), typeof Number('Hello World'));

/* Добрый день  
Оставила вам много комментов, так как неуверена в правильности решения, по комментариям будет виден ход моих мыслей
*/