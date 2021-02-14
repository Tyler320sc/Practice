/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Practice creating arrays

/*
7.1 Create a variable to hold an array of numbers and print it.
*/
const arrOfNums = [1, 2, 3, 4, 5];
console.log(arrOfNums);

/*
7.11 Print an array of your top 3 favorite colors (as strings) without creating a variable.
*/
console.log(['green', 'royalblue', 'aquamarine']);

/*
7.12 Print an array of 4 different types of values.
*/
console.log([true, 1, 'Hello, world!', undefined]);

/*
7.13 Print a 2-dimensional array of numbers.
*/
console.log([1, 2, 3, [4, 5, 6, 7]]);

// Practice using array index

/*
7.2 Print the fourth name (Dave) of the array.
*/
const names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank'];

console.log(names[3]);

/*
7.21 Print the last name of the array, without using the length property.
*/
console.log(names[5]);

/*
7.22 Print each of the names at even indexes of the array.
*/
console.log(names[0]);
console.log(names[2]);
console.log(names[4]);
/*
7.23 Create a function called 'head' that takes an array and returns its first element. What does it return when given an empty array?

Remember to write tests!
*/
const head = arr => arr[0];

console.log('head===================================================================================');
console.log(head([1, 2, 3, 4, 10, 25, 2000]) === 1);
console.log(head(['Ty', 'Kris', 'Joe', 'Liv', 'May-May', ['Champion']]) === 'Ty');
console.log(head([true, false, undefined, null, 0, '', NaN, !true, !!false]) === true);
console.log(head([]) === undefined);
/*
7.24 Create a function called 'isAtIndex' that takes an array, a value, and a number. It should return true if the value is found at the index number of the array, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
const isAtIndex = (arr, value, number) => arr[number] === value;

console.log('isAtIndex=============================================================================');
console.log('Bob is at index 1 in names:', isAtIndex(names, 'Bob', 1));
console.log('Bob is not at index 0 in names:', !isAtIndex(names, 'Bob', 0));
console.log('3 is at index 0 in these numbers:', isAtIndex([3, 2, 1], 3, 0));
console.log('2 is not at index 2 in these numbers:', !isAtIndex([3, 2, 1], 2, 2));
/*
7.25 Create a function called 'area' that takes a rectangle and returns its area. The rectangle is represented by an array with 2 numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/
const area = recArr => recArr[0] * recArr[1];

console.log('area==============================================================================');
console.log('area tests');
console.log(area([1, 2]) === 2);
console.log(area([2, 2]) === 4);
console.log(area([6, 3]) === 18);
console.log(area([0, 9]) === 0);

/*
7.251 Create a function called 'areaDifference' that takes two rectangles and returns the difference between the areas of the rectangles. Each rectangle is represented by an array with 2 numbers: [length, width].
*/
const areaDifference = (rec1, rec2) => {
  const area1 = area(rec1);
  const area2 = area(rec2);

  if (area1 > area2) {
    return area1 - area2;
  } else {
    return area2 - area1;
  }
}
console.log('areaDifference=======================================================================');
console.log(areaDifference([2, 3], [1, 4]) === 2);
console.log(areaDifference([2, 10], [1, 4]) === 16);
console.log(areaDifference([0, 3], [1, 0]) === 0);
console.log(areaDifference([3, 3], [.5, 4]) === 7);
/*
======================================================================================================
                                  This should be completed by Monday                                  
                                  ==================================
                                       =========================
7.252 Create a function called 'volumeDifference' that takes two cuboids and returns the difference between the volumes of the cuboids. Each cuboid is represented by an array with 3 numbers: [length, width, height]. The volume of a cuboid can be calculated by multiplying length x width x height.
*/
const volumeDifference = (cube1, cube2) => {
  const volumn1 = cube1[0] * cube1[1] * cube1[2];
  const volume2 = cube2[0] * cube2[1] * cube2[2];

  if (volumn1 > volume2) {
    return volumn1 - volume2;
  } else {
    return volume2 - volumn1;
  }
}
console.log('volumnDifference======================================================================');
console.log(volumeDifference([2, 2, 2], [1, 1, 2]) === 6);
console.log(volumeDifference([2, 2, 2], [3, 3, 2]) === 10);
console.log(volumeDifference([22, 2, 2], [8, 1, 2]) === 72);
console.log(volumeDifference([9, 3, 2], [1, 1, 0]) !== 53);
console.log(volumeDifference([2, 2, 2], [2, 2, 2]) === 0);
/*
7.26 Create a function called 'suitValue' that takes a card suit (string) and returns its number value. The suits and their values are as follows.

clubs: 0
diamonds: 1
hearts: 2
spades: 3
*/
const suitValue = cardStr => {

  if (cardStr === 'clubs') {
    return 0;
  } else if (cardStr === 'diamonds') {
    return 1;
  } else if (cardStr === 'hearts') {
     return 2;
  } else {
    return 3;
  }
}
console.log('suitValue==============================================================================');
console.log(suitValue('clubs') === 0);
console.log(suitValue('diamonds') === 1);
console.log(suitValue('hearts') === 2);
console.log(suitValue('spades') === 3);
console.log(suitValue('spades') !== 0);
console.log(suitValue('clubs') !== false);
/*
7.261 Create a function called 'highCard' that takes two cards and returns the higher card of the two. A card is represented by an array: [card value, card suit]. If two cards have different values, the card with the higher value is the higher card. If two cards have the same values, the card with the higher suit value is the higher card.

The card values are numbers: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (Jack), 12 (Queen), 13 (King), 14 (Ace).
The card suits are strings: clubs, diamonds, hearts, spades.

For example, given the two cards [3, 'spades'] and [4, 'hearts'], the second one is the higher card. Given the two cards [11, 'spades'] and [11, 'hearts'], the first one is the higher card (because the Jack of Spades beats the Jack of Hearts).
*/
const highCard = (card1, card2) => {

  if (card1[0] > card2[0]) {
    return card1;
  } else if (card2[0] > card1[0]) {
    return card2;
  } else {
    const s1 = suitValue(card1[1]);  
    const s2 = suitValue(card2[1]);

    if (s1 > s2) {
      return card1;
    } else {
      return card2;
    }                        
  }
}
console.log('highCard=============================================================================');
const highCardTest1 = highCard([2, 'clubs'], [4, 'diamonds']);

console.log(highCardTest1[0] === 4 && highCardTest1[1] === 'diamonds');

const highCardTest2 = highCard([3, 'spades'], [3, 'clubs']);

console.log(highCardTest2[0] === 3 && highCardTest2[1] === 'spades');
/*
7.27 Print the number 8 from the following 2D array.
*/
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log('matrix1=================================================================================');
console.log(matrix1[1][3]);



/*
7.271 Create a function called 'valueInMatrix' that takes 4 arguments: matrix, number, row, column. It should return true if the number is found at the specified row and column in the 2D array matrix, otherwise false. For example, the number 10 is found at row 3, column 2 in the previous matrix.
*/
const valueInMatrix = (matrix, number, row, column) => {
  if (matrix[row - 1][column - 1] === number) {
    return true;
  } else {
    return false;
  }
}
console.log('valueInMatrix==========================================================================');
console.log(valueInMatrix(matrix1, 10, 3, 2));

// Practice using length

/*
7.3 Print the length of the names array.
*/
console.log(names.length);

/*
7.31 Print the last name in the array, using the length property.
*/
console.log(names[names.length - 1]);

/*
7.32 Print the sum of the lengths of the following arrays.
*/
const groceries = ['rice', 'bananas', 'avocados', 'blueberries', 'spinach', 'chickpeas', 'canned beans'];
const officeSupplies = ['pen', 'paper', 'tape', 'stapler'];

console.log(groceries.length + officeSupplies.length);

/*
7.33 Print the length of the first row in the following 2D array.
*/
const matrix2 = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
];
console.log(matrix2[0].length);


/*
7.34 Create a function called 'last' that takes an array and returns its last element.
*/
 const last = arr => arr[arr.length - 1];

 console.log(last(['', 2]) === 2);
 console.log(last(names) === 'Frank');
 console.log(last([undefined]) === undefined);
/*
7.35 Print the length of the last row in the following 2D array.
*/
const bigMatrix = [[45,39,89,67,7,71,85,44,47,39],[89,32,81,19,43,17,47,10,6,58],[8,59,79,3,14,21,83,18,27,49],[24,32,72,3,22,32,5,69,15,61],[64,31,73,28,5,98,6,29,90,4],[54,6,92,92,56,84,81,7,53,62],[6,33,41,77,23,3,46,19,57,40],[3,79,65,30,79,54,25,53,35,71],[60,1,54,49,44,61,42,50,18,43],[91,46,7,50,95,14,45,4,98,22]];
console.log(bigMatrix[bigMatrix.length - 1].length);


/*
7.36 Create a function called 'isEmpty' that takes an array and returns true if it is empty, otherwise false.
*/
const isEmpty = arr => arr.length === 0;

console.log(isEmpty([]));
console.log(!isEmpty([false, null]));

// Practice using the includes() method

/*
7.4 Create a function called 'goodColor' that takes a single color (string) and an array of good colors (strings). It should return true if the color is in the array, otherwise false.
*/
const colors = ['red', 'green', 'blue'];

const goodColor = (arr, str) => arr.includes(str);

console.log(goodColor(colors, 'green') === true);
console.log(goodColor(colors, 'orange') === !true);
console.log(goodColor(['red'], 'red') === true);
/*
7.41 Create a function called 'needToBuy' that takes a single item (string) and an array of owned items (strings). It should return true if the item isn't in the owned list (meaning we need to buy it!), otherwise false.
*/
const needToBuy = (arr, str) => !arr.includes(str);

console.log(needToBuy(['cat litter', 'dog food'], 'tea'));
console.log(needToBuy(['cat litter', 'dog food'], 'leash'));
console.log(!needToBuy(['cat litter', 'dog food'], 'cat litter'));
console.log(needToBuy([], 'tea'));
/*
7.42 Create a function called 'hasNull' that takes an array and returns true if any of the values are null, otherwise false.
*/
const hasNull = arr => arr.includes(null);

console.log('hasNull =============================================================================');
console.log(hasNull(['', null]));
console.log(hasNull([undefined]) === false);
console.log(hasNull([0]) === false)
console.log(hasNull([false]) === false);
console.log(hasNull([NaN]) === false);
/*
7.43 Create a function called 'badMatrix' that takes a 2D array with 3 rows. It should return true if any of the 3 rows contain a null value, otherwise false.
*/
const matrixNoGood = [
  [null, 'Hello'],
  ['0', 'grey', 1],
  [3, 2, 1, false]
];

const badMatrix = matrixArr => matrixArr[0].includes(null) || matrixArr[1].includes(null) || matrixArr[2].includes(null);

console.log('badMatrix ==============================================================================');
console.log(badMatrix([ [null, 'Hello'], [1], [3, 2, 1, false] ]));
console.log(!badMatrix([ ['hey!'], [true], ['null'] ]));
/*
7.44 Create a function called 'goodMatrix' that takes a 2D array with 3 rows. It should return true if none of the 3 rows contain a null value, otherwise false.
*/
// const goodMatrix = matrixArr => !matrixArr[0].includes(null) && !matrixArr[1].includes(null) && !matrixArr[2].includes(null);

const goodMatrix = matrixArr => !badMatrix(matrixArr);


console.log('goodMatrix ============================================================================');
console.log(goodMatrix([ ['hey!'], [true], ['null'] ]));
console.log(!goodMatrix([ [null], [''], ['hi'] ]));
console.log(!goodMatrix([ [null], [null], [null] ]));
/*
7.45 Create a function called 'middleIndex' that takes an array and returns the index of the middle element, as per the following tests.
Tip: Look up the Math.floor() function.
*/
const middleIndex = arr => {  
   return Math.floor((arr.length) / 2);                               
}
console.log('-- middleIndex tests');
console.log(middleIndex([1]) === 0);
console.log(middleIndex([1, 2]) === 1); 
console.log(middleIndex([1, 2, 3]) === 1);
console.log(middleIndex([1, 2, 3, 4]) === 2); 
console.log(middleIndex([1, 2, 3, 4, 5]) === 2);
console.log(middleIndex(['Alice', 'Bob', 'Carol']) === 1);

/*


7.46 Create a function called 'middle' that takes an array and returns the middle element, as per the following tests.
*/


const middle = arr => arr[middleIndex(arr)];
console.log('middle =================================================================================');
console.log(middle([1, 2, 3, 4, 5]) === 3);
console.log(middle([1, 2, 3, 4, 5, 6, 7]) === 4);
console.log(middle([true, 'Hello!', false]) === 'Hello!');
console.log(middle([1]) === 1);
console.log(middle([1, 2]) === 2);                         
console.log(middle([1, 2, 3]) === 2);
console.log(middle([1, 2, 3, 4]) === 3);
console.log(middle([1, 2, 3, 4, 5]) === 3);
console.log(middle([1, 2, 3, 4, 5, 6]) === 4);



// Practice using the slice() method

/*
7.5 Print the first 3 elements of the following array, using slice().
*/
const randomNumbers = [82, 31, 21, 59, 67, 2, 36, 86, 18];
                                
console.log(randomNumbers.slice(0, 3));

/*
7.501 Print the middle 3 random numbers, using slice().
*/
console.log(randomNumbers.slice(3, 6));

/*
7.502 Print the last 3 random numbers, using slice().
*/
console.log(randomNumbers.slice(6));

/*
7.51 Create a function called 'tail' that takes an array and returns the "tail" end of it; everything but the first element.

We can't use equality for comparing arrays, so it's tricky to write proper tests for functions like this, which return an array. For now, we can simply print the result and see if it looks right. The following lines should help you see if your function works correctly.
*/
const tail = arr => arr.slice(1);

console.log('-- tail tests');
console.log(tail([1, 2, 3]), '=== [2, 3]');
console.log(tail([1, 2]), '=== [2]');
console.log(tail([1]), '=== []');
console.log(tail([]), '=== []');

/*
7.511 Create a function called 'firstIsRepeated' that takes an array and returns true if the first element exists more than once in the array, otherwise false.
*/
const firstIsRepeated = arr => arr.slice(1).includes(arr[0]);
  
console.log('firstIsRepeated =========================================================================');
console.log(firstIsRepeated([1, 2, 3, 1]));
console.log(firstIsRepeated([8, 0, 9, 8]));
console.log(!firstIsRepeated([0, 1, 2, 3, 4]));
console.log(firstIsRepeated([true, false, !false]));
console.log(firstIsRepeated(['Hello', 'Ty', true, 'Hello']));
console.log(!firstIsRepeated(['amazing', 'grace', 'how', 'sweet']));
/*
7.52 Create a function called 'init' that takes an array and returns all the elements except the last one.

The following lines should help you see if your function works correctly.
*/
const init = arr => arr.slice(0, arr.length - 1); 

console.log('-- init tests');
console.log(init([1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(init([1, 2, 3]), '=== [3, 4]');
console.log(init([9]), '=== []');
console.log(init([]), '=== []');
console.log(init(['Ty', 'Tim', 'Leah']), "=== ['Ty', 'Tim']");
console.log(init([1, 2, 3]), '=== [1, 2]');
/*
7.521 Create a function called 'lastIsRepeated' that takes an array and returns true if the last element exists more than once in the array, otherwise false.
*/
const lastIsRepeated = arr => arr.slice(0, arr.length - 1).includes(arr[arr.length - 1]);


console.log('-- lastIsRepeated');
console.log(lastIsRepeated(['Help', 'me', 'please!', 'Help']));
console.log(lastIsRepeated([12, 113, 88, 99, 12]));
console.log(lastIsRepeated([true, false, true]));
console.log(!lastIsRepeated(['Learning', 'Js', 'is', 'fun!']));
console.log(!lastIsRepeated([18, 4, 21, true, 'P-Diddy']));
/*
7.522 Create a function called 'inner' that takes an array and returns all the elements except the first and last. 
*/
const inner = arr => arr.slice(1, arr.length - 1);

console.log('--- inner');
console.log(inner([18, 4, 21, true, 'P-Diddy']), '=== [4, 21, true]');
console.log(inner([12, 113, 88, 99, 12]), '=== [113, 88, 99]');
console.log(inner(['Learning', 'Js', 'is', 'fun!']), '=== ["Js", "is"]');
/*
7.53 Create a function called 'take' that takes a number (n) and an array. It should return the first n elements of the array.

The following lines should help you see if your function works correctly.
*/
const take = (n, arr) => arr.slice(0, n);

console.log('-- take tests');
console.log(take(3, [1, 2, 3, 4]), '=== [1, 2, 3]');
console.log(take(1, [1, 2, 3, 4]), '=== [1]');
console.log(take(0, [1, 2, 3, 4]), '=== []');
console.log(take(9, [1, 2, 3, 4]), '=== [1, 2, 3, 4]');

/*
7.54 Create a function called 'drop' that takes a number (n) and an array. It should drop the first n elements of the array and return the rest.

The following lines should help you see if your function works correctly.
*/
const drop = (n, arr) => arr.slice(n);

console.log('-- drop tests');
console.log(drop(0, [1, 2, 3, 4]), '=== [1, 2, 3, 4]');
console.log(drop(1, [1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(drop(2, [1, 2, 3, 4]), '=== [3, 4]');
console.log(drop(3, [1, 2, 3, 4]), '=== [4]');
console.log(drop(4, [1, 2, 3, 4]), '=== []');
console.log(drop(9, [1, 2, 3, 4]), '=== []');

/*
7.55 Create a function called 'middle3' that takes an array (of at least 3 elements) and returns the middle 3 elements (as an array), as per the following tests.

The following lines should help you see if your function works correctly.
*/
const middle3 = arr => {
  
}

// Math.floor((arr.length) / 2)

console.log('-- middle3 tests');
console.log(middle3([1, 2, 3]), '=== [1, 2, 3]');
console.log(middle3([1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5, 6]), '=== [3, 4, 5]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7]), '=== [3, 4, 5]');

/*
7.551 Create a function called 'middleN' that takes a number (n) and an array (of at least n elements). It should return the middle n elements.

The following lines should help you see if your function works correctly.
*/


// console.log('-- middleN tests');
// console.log(middleN(3, [1, 2, 3, 4, 5]), '=== [2, 3, 4]');
// console.log(middleN(1, [1, 2, 3, 4, 5]), '=== [3]');
// console.log(middleN(1, [1, 2, 3, 4, 5, 6]), '=== [4]');



// Practice using the sort() method

/*
7.6 Create a function called 'bottom3' that takes an array (of at least 3 elements) and returns the bottom 3 elements in ascending order.

The following lines should help you see if your function works correctly.
*/


// console.log('-- bottom3 tests');
// console.log(bottom3([9, 2, 5, 4, 7, 6, 1, 3, 8]), '=== [1, 2, 3]');
// console.log(bottom3([9, 2, 5, 1, 4, 1, 1, 3, 8]), '=== [1, 1, 1]');
// console.log(bottom3([3, 2, 1]), '=== [1, 2, 3]');

/*
7.61 Create a function called 'bottomN' that takes a number (n) and an array (of at least n elements). It should return the bottom n elements in ascending order.
*/


// Practice using the reverse() method

/*
7.7 Create a function called 'top3' that takes an array (of at least 3 elements) and returns the top 3 elements in descending order.
*/


/*
7.71 Create a function called 'topN' that takes a number (n) and an array (of at least n elements). It should return the top n elements in descending order.
*/