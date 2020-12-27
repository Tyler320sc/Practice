// Practice with a single number
const num = 12;

/*
1. Only print this message if num is greater than 10.
Try changing the value of num to make sure your code works.
*/
// if (num > 10) {
//   console.log('num is greater than 10');
// }


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
    //if (num >= 10 && num <= 100) {
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
// if (num % 2 === 0 || num >= 20 && num >= 30) {
//   console.log('num is an even number');
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
const x = 3;
const y = 5;

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
const z = 2;

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
const walletInCents = 25;
const priceInDollars = 1.25;
// 1.25
/*
11. Print 'Exact amount!' when the wallet contains the exact amount for the price. Print 'More than enough.' when there is more than enough money in the wallet. Print 'Not enough money.' when there is not enough money in the wallet.

Notice that the wallet is in cents and the price is in dollars, so you'll have to do a bit of work to compare them.
*/

// if (priceInDollars === (0 + '.' + walletInCents)) {
//   console.log('Exact amount!');
// } else if ((0 + '.' + walletInCents) > priceInDollars) {
//   console.log('More than enough');
// } else {
//   console.log('Not enough money');
// }
// Don't really like this solution, but I'm real sure how else to approach this if you have any tips I would love to refactor this "hard coded" solution