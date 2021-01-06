// Practice calling a function with no arguments

/*
5.1 Call the following function.
*/
// const sayHello = () => {
//   console.log('Hello, world!');
// };
// sayHello();


/*
5.11 Call the following function.
*/
// const sayHelloLonger = () => {
//   console.log('Hello!');
//   console.log('Bonjour!');
//   console.log('Guten Tag!');
// };
// sayHelloLonger();


// Practice creating a function with no arguments

/*
5.2 Create a function so the following line of code prints the message 'Welcome!'
*/
// const sayWelcome = () => {
//   console.log('Welcome!');
// }
// sayWelcome();

// Practice calling a function with one argument

/*
5.3 Call the following function, providing a language as the argument.
*/
// const sayHelloLanguage = language => {
//   if (language === 'English') {
//     console.log('Hello!');
//   } else if (language === 'French') {
//     console.log('Bonjour!');
//   } else if (language === 'German') {
//     console.log('Guten Tag!');
//   } else {
//     console.log('Unknown language');
//   }
// };
// sayHelloLanguage('French');


// Practice creating a function with one argument

/*
5.4 Create a function called 'greet' that takes a name as an argument. Call the function a few times to achieve the same goal as the following lines of code.
*/
// const greet = name => {
//   return `Hello, ${name}!`;
// }
// console.log(greet('Alice'));
// console.log(greet('Bob'));
// console.log(greet('Carol'));
// console.log(greet('Dean'));
// console.log('Hello, Alice!');
// console.log('Hello, Bob!');
// console.log('Hello, Carol!');
// console.log('Hello, Dean!');
/*
5.41 Create a function called 'isPositive' that takes a number as an argument and returns true if the number is positive (greater than 0), otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
// const isPositive = num => {
//   if (num > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log('10 is positive:', isPositive(10) === true);
// console.log('-10 is not positive:', isPositive(-10) === false);

/*
5.411 Create a function called 'isNegative' that takes a number as an argument and returns true if the number is negative (less than 0), otherwise false.

The following lines should help test if your function works correctly.
*/
// const isNegative = num => {
//   if (num < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log('10 is not negative:', isNegative(10) === false);
// console.log('-10 is negative:', isNegative(-10) === true);

/*
5.42 Create a function called 'isEven' that takes a number as an argument and returns true if the number is even, otherwise false.

Write some lines of code to test if your function works correctly.
*/
// const isEven = num => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log('10 is even:', isEven(10) === true);
// console.log('1 is odd:', isEven(1) === false);

/*
5.421 Create a function called 'isOdd' similar to isEven. Can you use isEven to make this function?
*/
// const isOdd = num => {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log('1 is odd:', isOdd(1) === true);
// console.log('10 is even:', isOdd(10) === false);


/*
5.43 Create a function called 'isValidCreditCard' that takes a credit card number and returns true if it is valid, otherwise false. Refer to the credit card exercise in conditionals.
*/
//----------------------------------------
const creditCard = 22220;
/*
16. Print a message saying whether the credit card number is valid or not. A valid credit card in this system must have all of the following properties:

- It is exactly 5 digits
- Tripling it gives an even number
- It is divisible by either 5 or 7
*/
// const isValidCreditCard = cardNum => {
//   if ((`${cardNum}`.length === 5) && ((cardNum * 3) % 2 === 0) && (cardNum % 5 === 0) || cardNum % 7 === 0) {
//     console.log('Credit card is valid.');
//   } else {
//     console.log('Credit card is invalid.');
//   }
// }
// isValidCreditCard(creditCard);

/*
5.44 Create a function called 'dollarsToCents' that takes a value in dollars and returns the corresponding value in cents.
*/



/*
5.45 Create a function called 'fToC' that takes a temperature in Fahrenheit and returns the temperature in Celsius.
*/



/*
5.451 Create a function called 'cToF' that takes a temperature in Celsius and returns the temperature in Fahrenheit.
*/



// Practice calling a function with multiple arguments

/*
5.5 Call the following function, providing a name and a language.
*/
const greetLanguage = (name, language) => {
  if (language === 'English') {
    console.log('Hello, ' + name + '!');
  } else if (language === 'French') {
    console.log('Bonjour, ' + name + '!');
  } else if (language === 'German') {
    console.log('Guten Tag, ' + name + '!');
  } else {
    console.log('Unknown language');
  }
};

