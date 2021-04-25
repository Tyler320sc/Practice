// const someNumbers = require('./numbers.js');

// console.log(someNumbers.a); // 1
// console.log(someNumbers.b); // 2
// console.log(someNumbers.c); // 3
// console.log(someNumbers.d); // 4

// const {a, c} = require('./numbers.js'); // Import a and c from the numbers module

// console.log(a); // 1
// console.log(c); // 3

const {isEven, convertTemperature} = require('./functions.js');

const x = 24;

if (isEven(x)) {
  console.log(convertTemperature(x, 'CtoF')); // 75.2
}