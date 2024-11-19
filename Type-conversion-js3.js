
console.log(String(alert), typeof String(alert));
// Возвращает function alert() { [native code] }

console.log(String(console.log), typeof String(console.log))
//function log() { [native code] }
console.log(Number(console.log), typeof Number(console.log))
//NaN 'number'
console.log(Boolean(console.log), typeof Boolean(console.log))
//true 'boolean'

console.log(String({ name: 'Maxim' }), typeof String({ name: 'Maxim' }))
//[object Object] string
console.log(Number({ name: 'Maxim' }), typeof Number({ name: 'Maxim' }))
//NaN 'number'
console.log(Boolean({ name: 'Maxim' }), typeof Boolean({ name: 'Maxim' }))
//true 'boolean'

console.log(String(Symbol('key')), typeof String(Symbol('key')))
//Symbol(key) string
//console.log(Number(Symbol('key')), typeof Number(Symbol('key')))
//Cannot convert a Symbol value to a number at Number (<anonymous>)
console.log(Boolean(Symbol('key')), typeof Boolean(Symbol('key')))
//true 'boolean'

console.log(String(Number), typeof String(Number))
//function Number() { [native code] }
console.log(Number(Number), typeof Number(Number))
//NaN 'number'
console.log(Boolean(Number), typeof Boolean(Number))
//true 'boolean'

console.log(String(''), typeof String(''))
// string
console.log(Number(''), typeof Number(''))
//0 'number'
console.log(Boolean(''), typeof Boolean(''))
//false 'boolean'

console.log(String(0), typeof String(0))
//0 string
console.log(Number(0), typeof Number(0))
//0 'number'
console.log(Boolean(0), typeof Boolean(0))
//false 'boolean'

console.log(String(-10), typeof String(-10))
//-10 string
console.log(Number(-10), typeof Number(-10))
//-10 'number'
console.log(Boolean(-10), typeof Boolean(-10))
//true 'boolean'

console.log(String('-105'), typeof String('-105'))
//-105 string
console.log(Number('-105'), typeof Number('-105'))
//-105 'number'
console.log(Boolean('-105'), typeof Boolean('-105'))
//true 'boolean'