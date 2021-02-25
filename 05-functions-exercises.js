// Practice calling a function with no arguments

/*
// 5.1 Call the following function.
// */
const sayHello = () => {
  console.log('Hello, world!');
};
sayHello();


/*
5.11 Call the following function.
*/
const sayHelloLonger = () => {
  console.log('Hello!');
  console.log('Bonjour!');
  console.log('Guten Tag!');
};
sayHelloLonger();


// Practice creating a function with no arguments

/*
5.2 Create a function so the following line of code prints the message 'Welcome!'
*/
const sayWelcome = () => {
  console.log('Welcome!');
}
sayWelcome();

// Practice calling a function with one argument

/*
5.3 Call the following function, providing a language as the argument.
*/
const sayHelloLanguage = language => {
  if (language === 'English') {
    console.log('Hello!');
  } else if (language === 'French') {
    console.log('Bonjour!');
  } else if (language === 'German') {
    console.log('Guten Tag!');
  } else {
    console.log('Unknown language');
  }
};
sayHelloLanguage('French');


// Practice creating a function with one argument

/*
5.4 Create a function called 'greet' that takes a name as an argument. Call the function a few times to achieve the same goal as the following lines of code.
*/
const greet = name => `Hello, ${name}!`;

console.log(greet('Alice'));
console.log(greet('Bob'));
console.log(greet('Carol'));
console.log(greet('Dean'));
console.log('Hello, Alice!');
console.log('Hello, Bob!');
console.log('Hello, Carol!');
console.log('Hello, Dean!');
/*
5.41 Create a function called 'isPositive' that takes a number as an argument and returns true if the number is positive (greater than 0), otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
const isPositive = num => {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
console.log('10 is positive:', isPositive(10) === true);
console.log('-10 is not positive:', isPositive(-10) === false);

/*
5.411 Create a function called 'isNegative' that takes a number as an argument and returns true if the number is negative (less than 0), otherwise false.

The following lines should help test if your function works correctly.
*/
const isNegative = num => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}

const isNegative2 = num => {
  return num < 0;
} 
console.log('10 is not negative:', isNegative(10) === false);
console.log('-10 is negative:', isNegative(-10) === true);

/*
5.42 Create a function called 'isEven' that takes a number as an argument and returns true if the number is even, otherwise false.

Write some lines of code to test if your function works correctly.
*/
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEven2 = num => {
  return num % 2 === 0;
}
console.log('10 is even:', isEven2(10) === true);
console.log('1 is odd:', isEven2(1) === false);

/*
5.421 Create a function called 'isOdd' similar to isEven. Can you use isEven to make this function?
*/
const isOdd = num => {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

const isOdd2 = num => {
  return !isEven(num); 
}
console.log('1 is odd:', isOdd(1) === true);
console.log('10 is even:', isOdd(10) === false);


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
const isValidCreditCard = cardNum => {
  if ((`${cardNum}`.length === 5) && ((cardNum * 3) % 2 === 0) && (cardNum % 5 === 0) || cardNum % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
isValidCreditCard(creditCard);
 
console.log('credit card number 22220 is valid:', isValidCreditCard(22220) === true);
console.log('credit card number 22221 is invalid:', isValidCreditCard(22221) === false);
console.log('credit card number 22240 is valid:', isValidCreditCard(22240) === true);
console.log('credit card number 2222 is invalid:', isValidCreditCard(2222) === false);
/*
5.44 Create a function called 'dollarsToCents' that takes a value in dollars and returns the corresponding value in cents.
*/

const dollarsToCents = dollar => dollar * 100;

console.log('1.25 dollars === 125 cents:', dollarsToCents(1.25) === 125);
/*
5.45 Create a function called 'fToC' that takes a temperature in Fahrenheit and returns the temperature in Celsius.
*/
// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by . 5556 (or 5/9).
const fToC = tempInFahrenheit => (tempInFahrenheit - 32) * 5/9;

console.log('28 degrees Fahrenheit === -2.22 degrees Celsius:', fToC(28) === -2.2222222222222223);
console.log('40 degrees Fahrenheit === 4.45 degrees Celsius:', fToC(40) === 4.444444444444445);
/*
5.451 Create a function called 'cToF' that takes a temperature in Celsius and returns the temperature in Fahrenheit.
*/
// convert celsius to fahrenheit (0°C × 9/5) + 32 = 32°F :) DUH!!!

const cToF = tempInCelsius => tempInCelsius * 9/5 + 32;

console.log('-2.22 degrees Celsius === 28 degrees Fahrenheit:', cToF(-2.2222222222222223) === 28);
console.log('4.45 degrees Celsius === 40 degrees Fahrenheit:', cToF(4.444444444444445) === 40);
// Practice calling a function with multiple arguments

/*
5.5 Call the following function, providing a name and a language
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
greetLanguage('Ty', 'German');
greetLanguage('Tim', 'French');
greetLanguage('Tiffany', 'Mandarin');
// We cant test console.log because theres no return value
// console.log('Name is Ty and greeting is Hello:', greetLanguage('Ty', 'English') === 'Hello, Ty!');
/*
5.51 Write some lines of code to test if the following function multiplies 3 numbers together correctly.
*/
const multiplyAll = (a, b, c) => {
  return a * b * c;
};
console.log('1 * 2 * 3 === 6:', multiplyAll(1, 2, 3) === 6);
console.log('12 * 3 * 3 === 108:', multiplyAll(12, 3, 3) === 108);

// Practice creating a function with multiple arguments
/*
5.6 Create a function called 'languageGreeting' that takes a name and a language and returns a greeting instead of printing it.
The following lines should help test if your function works correctly. They should print true.
*/
const languageGreeting = (name, language) => {
  if (language === 'English') {
    return 'Hello, ' + name + '!';
  } else if (language === 'French') {
    return 'Bonjour, ' + name + '!';
  } else if (language === 'German') {
    return 'Guten Tag, ' + name + '!';
  } else {
    return 'Unkown language';
  }
}
console.log('English greeting works:', languageGreeting('Alice', 'English') === 'Hello, Alice!');
console.log('French greeting works:', languageGreeting('Alice', 'French') === 'Bonjour, Alice!');
console.log('German greeting works:', languageGreeting('Alice', 'German') === 'Guten Tag, Alice!');
console.log('Unknown language works:', languageGreeting('Alice', 'gibberish') === 'Unknown language');

/*
5.61 Create a function called 'lovers' that takes two names and returns a string that the first name loves the second name.
The following lines should help test if your function works correctly. They should print true.
*/
const lovers = (firstName, secondName) => {
  return `${firstName} loves ${secondName}`;
}
console.log('Alice loves Bob:', lovers('Alice', 'Bob') === 'Alice loves Bob');
console.log('Bob loves Alice:', lovers('Bob', 'Alice') === 'Bob loves Alice');
/*
5.62 Create a function called 'convertTemperature' that takes a number and either 'FtoC' or 'CtoF', and returns the converted temperature. How can you use the functions from 5.45 and 5.451 to make this easier?
The following lines should help test if your function works correctly. They should print true.
*/
const convertTemperature = (temp, kindOfTemp) => {
  if (kindOfTemp === 'FtoC') {
    return fToC(temp);
  } else {
    return cToF(temp);
  }
}
console.log('32 F = 0 C:', convertTemperature(32, 'FtoC') === 0);
console.log('0 C = 32 F:', convertTemperature(0, 'CtoF') === 32);
/*
5.63 Create a function called 'divisibleBy' that takes two numbers and returns true if the first number is divisible by the second, otherwise false.
The following lines should help test if your function works correctly. They should print true.
*/
const divisibleBy = (num, num2) => num % num2 === 0;

console.log('5 is not divisible by 3:', divisibleBy(5, 3) === false);
console.log('1 is divisible by 1:', divisibleBy(1, 1) === true);
console.log('6 is divisible by 2:', divisibleBy(6, 2) === true);
console.log('6 is divisible by 3:', divisibleBy(6, 3) === true);
/*
5.64 Create a function called 'bonusTime' that takes a salary (number) and a boolean. If the second argument is true, return the salary multiplied by 10, otherwise the original salary.
Write some lines of code to test if your function works correctly.
*/
const bonusTime = (salary, bool) => {
    if (bool) {
      return salary * 10;
    }
    return salary;
  }
console.log('bool === true:', bonusTime(3, true) === 30);
console.log('bool !== true:', bonusTime(3, false) === 3);
/*
5.65 Create a function called 'rps' for playing the game Rock, Paper, Scissors. It should take two arguments, which should each be either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, return 1. If the first hand loses, return -1. In the case of a draw, return 0.
Write some lines of code to test if your function works correctly.
*/
const rps = (hand1, hand2) => {
  if (hand1 === 'scissors' && hand2 === 'paper') {
    return 1;
  } else if (hand1 === 'scissors' && hand2 === 'rock') {
    return -1;
  } else if (hand1 === 'paper' && hand2 === 'scissors') {
    return -1;
  } else if (hand1 === 'paper' && hand2 === 'rock') {
    return 1;
  } else if (hand1 === 'rock' && hand2 === 'scissors') {
    return 1;
  } else if (hand1 === 'rock' && hand2 === 'paper') {
    return -1;
  } else if (hand1 === hand2) {
    return 0;
  }
}
console.log('--- rps');
console.log('paper looses to scissors:', rps('paper', 'scissors') === -1);
console.log('paper beats rock:', rps('paper', 'rock') === 1);
console.log('rock beats scissors:', rps('rock', 'scissors') === 1);
console.log('rock === rock is a draw:', rps('rock', 'rock') === 0);
console.log('scissors beats paper:', rps('scissors', 'paper') === 1);