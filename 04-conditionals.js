// Practice with a single number
const num = 2;

/*
1. Only print this message if num is greater than 10.
Try changing the value of num to make sure your code works.
*/
if (num > 10) {
  console.log('num is greater than 10');
}


/*
2. Only print the message 'num is less than 100' when appropriate.
*/
// if (num < 100) {
//   console.log('num is less than 100');
// } 

/*
3. Now do the same with 'num is a positive number'.
*/
// if (num > 0) {
//   console.log('num is a positive number');
// } 

/*
4. 'num is between 10 and 100' (exclusive)
// */
    //if (num > 10 && num < 100) {
//   console.log('num is between 10 and 100');
// }


/*
5. 'num is even'
*/
// if (num % 2 === 0) {
//   console.log('num is even');
// }

/*
6. 'num is an even number between 20 and 30' (inclusive)
*/
// if (num % 2 === 0 && num >= 20 && num <= 30) {
//   console.log('num is an even number between 20 and 30');
// }

/*
7. 'num is odd or negative'
*/
// if (num % 2 !== 0 || num <= 0) {
//   console.log('num is odd or negative');
// } else {
//   console.log('num is even');
// }

// Practice comparing numbers
const x = 1;
const y = 1;

// console.log('The bigger number is:');
/*
8. Print either x or y, whichever is bigger.
*/
// if (x < y) {
//   console.log('The bigger number is: ' + y);
// } else {
//   console.log('The bigger number is: ' + x);
// }

/*
9. Print either message 'x and y are equal' or 'x and y are not equal'.
*/
// if (x === y) {
//   console.log('x and y are equal');
// } else {
//   console.log('x and y are not equal');
// }

// Let's add another number into the mix.
const z = 1;

// console.log('The biggest number is:');
/*
10. Print either x, y, or z, whichever is bigger.
Remember to change the values of x, y, and z to make sure it works!
*/
// if (x > y && x > z) {
//   console.log('x id greater than y and z');
// } else if (y > x && y > z) {
//   console.log('y is greater than x and z');
// } else {
//   console.log('z is greater than x and y');
// }

// Practice with more operators
// const walletInCents = 25;
// const priceInDollars = 1.25;
// const priceInCents = priceInDollars * 100;
/*
11. Print 'Exact amount!' when the wallet contains the exact amount for the price. Print 'More than enough.' when there is more than enough money in the wallet. Print 'Not enough money.' when there is not enough money in the wallet.

Notice that the wallet is in cents and the price is in dollars, so you'll have to do a bit of work to compare them.
*/

// if (priceInCents === walletInCents) {
//   console.log('Exact amount!');
// } else if (walletInCents > priceInCents) {
//   console.log('More than enough');
// } else {
//   console.log('Not enough money');
// }


//---------------------------------------------------------------------------------------------------- 


// New exercises
// Ignore any lines that look like this
// process.stdout.write('\n12. ');
/*
12. Do the same thing as in 11, but let's add in some error handling. In the case where the wallet is negative, print 'Wallet cannot be negative.' When the price is negative, print 'Price cannot be negative.' Think about the importance of the order of the conditions.
*/
// const walletInCents = 1;
// const priceInDollars = 1;
// const priceInCents = priceInDollars * 100;

// if (priceInCents < 0) {
//   console.log('Price cannot be negative');
// } else if (walletInCents < 0) {
//   console.log('Wallet cannot be negative');
// } else if (priceInCents === walletInCents) {
//   console.log('Exact amount!');
// } else if (walletInCents > priceInCents) {
//   console.log('More than enough')
// } else {
//   console.log('Not enough money');
// }

// Practice comparing strings
// let username = 'Alice';
// let password = '1234';
// const expectedUsername = 'Zed';
// const expectedPassword = '9876';

// if (username !== expectedUsername) {
//   console.log('Invalid Login!');
// } else if (password !== expectedPassword) {
//   console.log('Invalid Login!');
// } else {
//   console.log('Welcome!');
// }
/*
13. To simulate authentication, we have a username, a password, and expected values for each. The login is successful if the username and password match the expected values. Otherwise, either the username is wrong or the password is wrong. Print appropriate messages for each of the 3 cases. (Don't worry about the case where the username and password are both wrong; one of the other cases will catch it.)
*/
// Practice nesting conditionals
const a = 0;
const b = 0;
/*
14. Print the appropriate message for any of the following cases comparing a and b:
Matching positive numbers.
Matching negative numbers.
No match of positive numbers.
No match of negative numbers.
No match.
*/
if (a === b && a > -1 && b > -1) {
  console.log('Matching positive numbers.');
}
if (a === b && a < 0 && b < 0) {
  console.log('Matching negative numbers.');
}
if (a !== b && a > -1 && b > -1) {
  console.log('No match of positive numbers.');
}
if (a !== b && a < 0 && b < 0) {
  console.log('No match of negative numbers.');
}
if (a !== b) {
  console.log('No match.');
}
// Practice with more information
const myUsername = 'Alice';
const myPassword = '1234';
const salary = 25000;
const employeeUsername = 'Zarya';
const employeePassword = '9876';
const ceoUsername = 'Xyrho';
const ceoPassword = 'hunter2';
const juniorSalaryMinimum = 50000;
const juniorSalaryMaximum = 70000;
const intermediateSalaryMinimum = 75000;
const intermediateSalaryMaximum = 90000;
const seniorSalaryMinimum = 95000;
const seniorSalaryMaximum = 120000;
const ceoSalaryMinimum = 110000;

/*
15. We have another authentication, but this time with a salary as well. We want to print a personalized welcome message to users who log in. For example, if the username and password match the employee username and password and their salary is within the junior range, print 'Welcome, junior employee Zarya.' In the case where the salary is not within any of the set ranges, simply print 'Welcome, employee Zarya.' If the username and password match the CEO credentials but the salary is below the CEO's minimum salary, we have an imposter! For an invalid login, just print 'Invalid login.' (don't worry about whether it was the username or password that didn't match).
If you notice you're repeating a certain condition more than once, try nesting if statements to avoid the repeitition.
*/
// Practice complex conditions
const creditCard = 123;
// process.stdout.write('\n16. ');
/*
16. Print a message saying whether the credit card number is valid or not. A valid credit card in this system must have all of the following properties:
- It is exactly 5 digits
- Tripling it gives an even number
- It is divisible by either 5 or 7
*/