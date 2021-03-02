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
// const firstIsRepeated = arr => arr.slice(1).includes(arr[0]);
  
const firstIsRepeated = arr => tail(arr).includes(head(arr));

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
const init = arr => arr.slice(0, -1); 

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
// const lastIsRepeated = arr => arr.slice(0, arr.length - 1).includes(arr[arr.length - 1]);

const lastIsRepeated = arr => init(arr).includes(last(arr));

console.log('-- lastIsRepeated');
console.log(lastIsRepeated(['Help', 'me', 'please!', 'Help']));
console.log(lastIsRepeated([12, 113, 88, 99, 12]));
console.log(lastIsRepeated([true, false, true]));
console.log(!lastIsRepeated(['Learning', 'Js', 'is', 'fun!']));
console.log(!lastIsRepeated([18, 4, 21, true, 'P-Diddy']));
/*
7.522 Create a function called 'inner' that takes an array and returns all the elements except the first and last. 
*/
// const inner = arr => arr.slice(1, -1);

const inner = arr => init(tail(arr));

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
// const middle3 = arr => arr.slice(Math.floor((arr.length) / 2 - 1), Math.floor((arr.length) / 2 + 2));

const middle3 = arr => {
  const m = middleIndex(arr);
  return arr.slice(m -1, m + 2);
}

console.log('-- middle3 tests');
console.log(middle3([1, 2, 3]), '=== [1, 2, 3]');
console.log(middle3([1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5, 6]), '=== [3, 4, 5]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7]), '=== [3, 4, 5]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8]), '=== [4, 5, 6]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8, 9]), '=== [4, 5, 6]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), '=== [5, 6, 7]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), '=== [5, 6, 7]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), '=== [6, 7, 8]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), '=== [6, 7, 8]');

/*
7.551 Create a function called 'middleN' that takes a number (n) and an array (of at least n elements). It should return the middle n elements.

The following lines should help you see if your function works correctly.
*/
const middleN = (n, arr) => {
  const m = middleIndex(arr);
  const half = Math.floor(n / 2);
  return arr.slice(m - half, m + half + 1);
}

console.log('-- middleN tests');
console.log(middleN(3, [1, 2, 3, 4, 5]), '=== [2, 3, 4]');
console.log(middleN(1, [1, 2, 3, 4, 5]), '=== [3]');
console.log(middleN(1, [1, 2, 3, 4, 5, 6]), '=== [4]');

// Practice using the sort() method

/*
7.6 Create a function called 'bottom3' that takes an array (of at least 3 elements) and returns the bottom 3 elements in ascending order.

The following lines should help you see if your function works correctly.
*/
// const bottom3 = arr => arr.sort((a, b) => a - b).slice(0, 3);

const bottom3 = arr => take(3, arr.sort((a, b) => a - b));

console.log('-- bottom3 tests');
console.log(bottom3([9, 2, 5, 4, 7, 6, 1, 3, 8]), '=== [1, 2, 3]'); 
console.log(bottom3([9, 2, 5, 1, 4, 1, 1, 3, 8]), '=== [1, 1, 1]');
console.log(bottom3([3, 2, 1]), '=== [1, 2, 3]');
console.log(bottom3([101, 19, 15, 18]), '=== [15, 18, 19]');

/*
7.61 Create a function called 'bottomN' that takes a number (n) and an array (of at least n elements). It should return the bottom n elements in ascending order.
*/
const bottomN = (n, arr) => arr.sort((a, b) => a - b).slice(0, n);

console.log('--- bottomN');
console.log(bottomN(1, [0, 1, 2]), '=== [0]');
console.log(bottomN(3, [3, 2, 1]), '=== [1, 2, 3]');
console.log(bottomN(4, [9, 8, 7, 6, 5]), '=== [5, 6, 7, 8]');
console.log(bottomN(5, [9, 7, 3, 2, 1, 5, 4, 0]), '=== [0, 1, 2, 3, 4]');
console.log(bottomN(5, [99, 89, 97, 101, 3, 0, 13, 105, 10, 2009]), '=== [0, 3, 10, 13, 89]');
console.log(bottomN(5, [101, 19, 22, 38, 44, 0, 1, 2, 4, 3]), '=== [0, 1, 2, 3, 4]');

// Practice using the reverse() method

/*
7.7 Create a function called 'top3' that takes an array (of at least 3 elements) and returns the top 3 elements in descending order.
*/
const top3 = arr => arr.sort((a, b) => b - a).slice(0, 3); // Can only solve w/ reverse() ? ? ?

console.log('----- top3');
console.log(top3([1, 2, 3]), '=== [3, 2, 1]');
console.log(top3([8, 9, 10, 11]), '=== [11, 10, 9]');
console.log(top3([101, 38, 43, 1, 0]), '=== [101, 43, 38]');
/*

7.71 Create a function called 'topN' that takes a number (n) and an array (of at least n elements). It should return the top n elements in descending order.
*/
const topN = (n, arr) => arr.sort((a, b) => b - a).slice(0, n);

console.log('--- topN');
console.log(topN(3, [1, 2, 3, 4, 5, 6, 7]), '=== [7, 6, 5]');
console.log(topN(4, [89, 90, 91, 92, 93]), '=== [93, 92, 91, 90]');
console.log(topN(2, [1001, 1002]), '=== [1002, 1001]');

// Practice adding elements to arrays

/*
7.8 Print the following array with the number 4 added to the end, so we get [1, 2, 3, 4].
*/
const oneTwoThree = [1, 2, 3];
console.log([...oneTwoThree, 4]);

/*
7.801 Print the following array with the number 1 added to the beginning, so we get [1, 2, 3, 4].
*/
const twoThreeFour = [2, 3, 4];
console.log([1, ...twoThreeFour]);


/*
7.802 Print the following array with the name 'Dave' added to the end, so we get ['Alice', 'Bob', 'Carol', 'Dave'].
*/
const someNames = ['Alice', 'Bob', 'Carol'];
console.log([...someNames, 'Dave']);


/*
7.803 Print the following two arrays added together, so we get ['apple', 'banana', 'cherry', 'date', 'elderberry'].
*/
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['date', 'elderberry'];
console.log([...fruits, ...moreFruits]);

/*
7.804 Print the following 2D array with another row added to the end.
*/
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(...matrix3, [7, 8, 9]);


/*
7.81 Create a function called 'nullHead' that takes an array and returns a new array with the first element replaced with null.

The following lines should help you see if your function works correctly.
*/
const nullHead = arr => [null, ...arr.slice(1)];

console.log('-- nullHead tests');
console.log(nullHead([1, 2, 3]), '=== [null, 2, 3]');
console.log(nullHead(['a', 'b', 'c']), '=== [null, b, c]');


/*
7.82 Create a function called 'append' that takes a value and an array, and returns a new array with the value added to the end.
*/
const append = (val, arr) => [...arr, val];

console.log('--- append');
console.log(append(8, [3, true, 24]), '=== [3, true, 24, 8]');
console.log(append('28', ['Ty is']), "=== ['Ty is, 28']");
/*
========================== Complete by Wed ================================================================
7.821 Create a function called 'appendHead' that takes an array and returns a new array with its first value added to the end.
*/
const appendHead = arr => [...arr, arr[0]];

console.log('--- appendHead');
console.log(appendHead([1, 2, 3]), '=== [1, 2, 3, 1]');
console.log(appendHead([true, false, 0, '']), "=== [true, false, 0, '', true]");
console.log(appendHead(['Well', 'Hello', 'there']), "=== ['Well', 'Hello', 'there', Well]");

/*
7.83 Create a function called 'swapEnds' that takes an array and returns a new array with the first and last elements swapped.
Tip: Try using our head(), last(), and inner() functions to help.
*/
const swapEnds = arr => [last(arr), ...inner(arr), head(arr)];

console.log('--- swapEnds');
console.log(swapEnds(['Ty', 'is', 'incredible']), "=== ['incredible', 'is', 'Ty']");
console.log(swapEnds(['backwards', 'sentence', 'was', 'This']), "=== ['This', 'sentence', 'was', 'backwards']");

/*
7.84 Create a function called 'countUp' that takes an array of numbers counting up and returns a new array with the next number added to the end.

The following lines should help you see if your function works correctly.

Tip: Try using our last() function to help.
*/

const countUp = arr => [...arr, last(arr) + 1];
console.log('-- countUp tests');
console.log(countUp([1, 2, 3]), '=== [1, 2, 3, 4]');
console.log(countUp([25, 26, 27, 28, 29]), '=== [25, 26, 27, 28, 29, 30]');

/*
7.841 Create a function called 'countMore' that takes an array of numbers in a sequence (with a constant interval) and returns a new array with the next number in the sequence added to the end.

The following lines should help you see if your function works correctly.
*/

const countMore = arr => {
  const lastNum1 = last(arr);
  const lastNum2 = arr[arr.length - 2];
  const interval = lastNum1 - lastNum2;
  return [...arr, last(arr) + interval]
}

console.log('-- countMore tests');
console.log(countMore([1, 2, 3]), '=== [1, 2, 3, 4]'); //
console.log(countMore([2, 4, 6]), '=== [2, 4, 6, 8]'); //
console.log(countMore([1, 3, 5, 7]), '=== [1, 3, 5, 7, 9]'); //
console.log(countMore([10, 20, 30, 40, 50]), '=== [10, 20, 30, 40, 50, 60]');
console.log(countMore([-1, -2, -3]), '=== [-1, -2, -3, -4]');

/*
7.85 Create a function called 'insertAt' that takes an index, a value, and an array. It should return a new array with the given value inserted at the given index.

The following lines should help you see if your function works correctly.

Tip: Try using our take() and drop() functions to help.
*/
const insertAt = (index, val, arr) => [...take(index, arr), val, ...drop(index, arr)];

console.log('-- insertAt tests');
console.log(insertAt(3, 4, [1, 2, 3, 5]), '=== [1, 2, 3, 4, 5]');
console.log(insertAt(4, 5, [1, 2, 3, 4]), '=== [1, 2, 3, 4, 5]');
console.log(insertAt(2, 'c', ['a', 'b', 'd']), "=== ['a', 'b', 'c', 'd']");

/*
7.86 Create a function called 'addToShoppingList' that takes a shopping list (array of strings) and an item (string). It should return a shopping list with the new item added to it. If the item is already in the shopping list, return the shopping list unchanged.
*/

// const addToShoppingList = (arr, str) => {
//   if (arr.includes(str)) {
//     return arr;
//   } else {
//     return [...arr, str];
//   }
// }

const addToShoppingList = (arr, str) => arr.includes(str) ? arr : [...arr, str];

console.log('--- addToShoppingList');
console.log(addToShoppingList(['cheese', 'bananas'], 'grapes'), "=== ['cheese', 'bananas', 'grapes']");
console.log(addToShoppingList(['cheese', 'bananas'], 'bananas'), "=== ['cheese', 'bananas']");
console.log(addToShoppingList([], 'almond milk'), "=== ['almond milk']");
console.log(addToShoppingList(['eggs', 'grapes', 'hummus'], 'tuna'), "=== ['eggs', 'grapes', 'hummus', 'tuna']");
console.log(addToShoppingList(['cherries', 'pizza', 'butter'], 'butter'), "=== ['cherries', 'pizza', 'butter']");


// ======================================== Higher Order Functions ========================================
//=========================================================================================================

// Practice using the some() method

/*
8.1 Create a function called 'anyOdd' that takes an array of numbers and returns true if any of them are odd, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/
const anyOdd = arr => arr.some(x => x % 2 === 1);

console.log('-- anyOdd tests');
console.log(anyOdd([1, 2, 4, 6]));
console.log(anyOdd([2, 4, 6, 7]));
console.log(!anyOdd([2, 4, 6, 8]));

/*
8.11 Create a function called 'anyNegative' that takes an array of numbers and returns true if any of them are negative, otherwise false.
*/
const anyNegative = arr => arr.some(x => x < 0);

console.log('--- anyNegative');
console.log(anyNegative([1, 3, 12, -2]));
console.log(!anyNegative([0]));
console.log(!anyNegative([1, 2, 3, 4, 5, 7]));

/*
8.12 Create a function called 'anyZs' that takes an array of words (strings) and returns true if the letter "z" is found in any of the words, otherwise false.
*/
const anyZs = arr => arr.some(x => x.includes('Z') || x.includes('z'));

console.log('--- anyZs');
console.log(anyZs(['Zebulon']));
console.log(anyZs(['x', 'y', 'z']));
console.log(anyZs(['a', 'bz']));
console.log(!anyZs(['Hello']));
console.log(!anyZs(['x']));

/*
8.13 Create a function called 'overTheLimit' that takes a limit (number) and an array of account balances (numbers). It should return true if any of the account balances is greater than the given limit, otherwise false.
*/
const overTheLimit = (limitNum, arrNum) => arrNum.some(x => x > limitNum);

console.log('--- overTheLimit');
console.log(overTheLimit(23, [22, 1, 24]));
console.log(!overTheLimit(230, [22, 1, 24]));
console.log(overTheLimit(28, [22, 1, 24, 28.5]));
console.log(!overTheLimit(23, [22, 1, 21]));

// Practice using the every() method

/*
8.2 Create a function called 'irishGroup' that takes an array of surnames (strings) and returns true if they all begin with "Mc", otherwise false.
*/
const irishGroup = arr => arr.every(a => a.startsWith('Mc'));

console.log('--- irishGroup');
console.log(irishGroup(['Mclovin']));
console.log(irishGroup(['McTim']));
console.log(!irishGroup(["O'Carroll"]));
console.log(!irishGroup(['Cannon', 'McGyver', 'McChicken']));

/*
8.21 Create a function called 'allWhole' that takes an array of numbers and returns true if they are all whole numbers, otherwise false. Whole numbers are the numbers starting from 0 and counting up forever: 0, 1, 2, 3, 4, 5, ... . Negative numbers and decimals (e.g. 1.5) are not whole numbers.
*/
const allWhole = arr => arr.every(b => b > -1 && b % 1 === 0);

console.log('--- allWhole');
console.log(allWhole([0, 2, 3, 4, 5]));
console.log(!allWhole([8, 18, 3, -1]));
console.log(!allWhole([1, 11, 3.25]));

/*
======================================== Finish by 11am Monday ============================================

8.22 Create a function called 'britishGang' that takes an array of surnames (strings) and returns true if they are all likely British. A surname that is likely British starts with "Mac" or "Mc", or is any of the top 10 British surnames: Smith, Jones, Williams, Taylor, Davies, Brown, Wilson, Evans, Thomas, Johson.

Tip: Consider making a helper function 'isBritish' to check if a single surname is British.
*/

const britishNames = ['Smith', 'Jones', 'Williams', 'Taylor', 'Davies', 'Brown', 'Wilson', "Evans", 'Thomas', 'Johson'];

const isBritish = name => name.startsWith('Mac') || name.startsWith('Mc') || britishNames.includes(name)

const britishGang = arr => arr.every(isBritish);

console.log('--- britishGang');
console.log(britishGang(['MacDonnald', 'McLovin']));
console.log(!britishGang(['MacDonnald', 'McLovin', 'Joe']));
console.log(britishGang(['MacDonnald', 'McLovin', 'Jones', 'Smith', 'Williams', 'Taylor']));
console.log(!britishGang(['MacDonnald', 'McLovin', 'Jones', 'Smith', 'Williams', 'Taylor', 'Jed']));

/*
8.23 Create a function called 'eqArrays' that takes two arrays and returns true if they are equal, otherwise false. Two arrays are considered equal if they are the same length and every element is equal (in the same order).

Tip: The every() method can use the array indexes as a second argument of the callback function. See the documentation for more detail:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

The following lines should help test if your function works correctly. They should print true.
*/
// arr.every(callback(element[, index[, array]])[, thisArg])
// array1.length === array2.length && array1.every((value, index) => value === array2[index])

const eqArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((_, y) => {
  if (Array.isArray(arr1[y]) && Array.isArray(arr2[y])) {
    return eqArrays(arr1[y], arr2[y]);
  } else { 
    return arr1[y] === arr2[y]; 
  }
} );

console.log('-- eqArrays tests');
console.log(eqArrays([], []));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(!eqArrays([1, 2, 3], [1, 3, 2]));
console.log(!eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(!eqArrays([1, 2, 3, 4], [1, 2, 3]));
console.log(eqArrays(['Alice', 'Bob', 'Carol'], ['Alice', 'Bob', 'Carol']));
console.log(eqArrays([1, 2, 3, [4, 5, 6]], [1, 2, 3, [4, 5, 6]]));

// =========================================== New Exercises ==============================================
// ========================================================================================================
// ======================================== Complete By March 1st =========================================


// Practice using the map() method

/*
8.3 Create a function called 'convertMoney' to convert an array of values in dollars to an array of values in cents.

The following lines should help test if your function works correctly. They should print true.
*/

const dollarsToCents = dollar => dollar * 100;

const convertMoney = arr => arr.map(dollarsToCents);

console.log('-- convertMoney tests');
console.log(eqArrays(convertMoney([2, 3.5, 10]), [200, 350, 1000]));
console.log(eqArrays(convertMoney([0, 0.25, 99.99]), [0, 25, 9999]));

/*
8.31 Create a function called 'convertTemperatures' that takes an array of temperatures (numbers) and either 'FtoC' or 'CtoF', and returns an array of the converted temperatures.

The following lines should help test if your function works correctly. They should print true.
*/

const fToC = tempInFahrenheit => (tempInFahrenheit - 32) * 5/9;

const cToF = tempInCelsius => tempInCelsius * 9/5 + 32; 

const convertTemperatures = (arr, func) => func === 'FtoC' ? arr.map(fToC) : arr.map(cToF);

console.log('-- convertTemperatures tests');
console.log(eqArrays(convertTemperatures([32, 41], 'FtoC'), [0, 5]));
console.log(eqArrays(convertTemperatures([0, -10], 'CtoF'), [32, 14]));

/*
8.32 Create a function called 'bonusSalaries' that takes an array of salary-bonus pairs and returns the new salaries. Each salary-bonus pair is an array with a salary and a boolean that says whether or not the salary receives a bonus. A bonus salary is the salary multiplied by 10.

The following lines should help test if your function works correctly. They should print true.
 */
const bonusTime = (salary, bool) => bool ? salary * 10 : salary;

const bonusSalaries = arr => arr.map(([num, bool]) => bonusTime(num, bool));

console.log('-- bonusSalaries tests');
console.log(eqArrays(
  bonusSalaries([ [123, false], [123, true] ]),
  [123, 1230]
));
console.log(eqArrays(
  bonusSalaries([ [10000, true], [10000, false], [30000, true], [100000, false], [64000.99, true] ]),
  [100000, 10000, 300000, 100000, 640009.9]
));
/*
8.33 Create a function called 'rpsResults' that takes an array of "Rock, Paper, Scissors" games and returns an array of results. Each game is an array of two hands. Each hand is either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, the result is 1. If the first hand loses, the result is -1. In the case of a draw, the result is 0.

The following lines should help test if your function works correctly. They should print true.
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

const rpsResults = (arr) => arr.map(([hand1, hand2]) => rps(hand1, hand2)); 

// const rpsResults = (arr) => arr.map(x => rps(x[0], x[1]));

console.log('-- rpsResults tests');
console.log(eqArrays(
  rpsResults([ ['rock', 'scissors'], ['paper', 'scissors'], ['scissors', 'scissors'] ]),
  [1, -1, 0]
));
console.log(eqArrays(
  rpsResults([ ['rock', 'rock'], ['paper', 'paper'], ['scissors', 'scissors'], ['scissors', 'paper'], ['paper', 'rock'] ]),
  [0, 0, 0, 1, 1]
));

/*
8.34 Create a function called 'makeSquares' that takes an array of numbers and returns an array of squares. A square is an array of two numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/
// const rpsResults = (arr) => arr.map(([hand1, hand2]) => rps(hand1, hand2));

const makeSquares = arr => arr.map(x => [x, x]);

console.log('-- makeSquares tests');
console.log(eqArrays(
  makeSquares([1, 2, 3, 4]),
  [ [1, 1], [2, 2], [3, 3], [4, 4] ]
));
console.log(eqArrays(
  makeSquares([-1, 0, 99, 1000]),
  [ [-1, -1], [0, 0], [99, 99], [1000, 1000] ]
));

// Practice using the forEach() method

/*
8.4 Say hello to each of the names in the following array (e.g. Hello, Alice!).
*/
const names1 = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];

const greet = name => `Hello, ${name}!`;

const sayHello = names1.forEach(x => greet(x));

/*
8.41 Greet each person in their own language (e.g. Bonjour, Alice!).
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

const people1 = [['Alice', 'French'], ['Bob', 'English'], ['Carol', 'German']];
console.log('--- greetLanguage');
people1.forEach(([name, language]) => greetLanguage(name, language)); 
// const rpsResults = (arr) => arr.map(([hand1, hand2]) => rps(hand1, hand2)); 
/*
8.42 Create a function called 'manyLovers' that takes an array of couples and prints that the first names love the second names (e.g. Alice loves Bob).
*/
// destructuring
const lovers = (firstName, secondName) => console.log(`${firstName} loves ${secondName}`);

const manyLovers = [['Alice', 'Bob'], ['Carol', 'Dave'], ['Eve', 'Frankie']];

console.log('--- manyLovers');
manyLovers.forEach(([firstName, secondName]) => lovers(firstName, secondName));


// Practice using the filter() method

/*
8.5 Create a function called 'wholeNumbers' that takes an array of numbers and returns a new array containing only the numbers that are whole. Whole numbers are the numbers starting from 0 and counting up forever: 0, 1, 2, 3, 4, 5, ... . Negative numbers and decimals (e.g. 1.5) are not whole numbers.
*/

const wholeNumbers = arr => arr.filter(b => b > -1 && b % 1 === 0); 

console.log('--- wholeNumbers'); 
console.log(eqArrays( wholeNumbers([1.5, 3, 8, 2.2]), [3, 8] ));
console.log(eqArrays( wholeNumbers([2.8, 0.8, 9.9995, 9.7]), [] ));
/*
8.51 Create a function called 'countNulls' that takes an array and returns how many null values are in it.
*/
// const isEven = num => num % 2 === 0;
// console.log(someNumbers.filter(isEven).length); // 3
const nullCount = x => x === null; 

const countNulls = arr => arr.filter(nullCount).length; 
  
console.log('--- countNulls');
console.log(countNulls([null]), '=== 1');
console.log(countNulls([null, null, null]), '=== 3');
console.log(countNulls(['Hey', 12, 23, false, null, undefined, null, null, true, 'grey', null]), '=== 4');
/*
8.52 Create a function called 'mostlyScottish' that takes an array of surnames (strings) and returns true if more than half of them are Scottish, otherwise false. A Scottish surname is one that starts with "Mac".
*/

const mostlyScottish = arr => {
  const scottishPrefix = arr.filter(x => x.startsWith('Mac'));

  if (scottishPrefix.length > (arr.length) / 2) { 
    return true;
  } else {
    return false;
  }
}

console.log('--- mostlyScottish');
console.log(mostlyScottish(['MacMinn', 'MacDougal', 'O Carroll'])); //true
console.log(mostlyScottish(['MacDweeb', 'Halifax'])); // false
console.log(mostlyScottish(['MacSwain', 'MacMacken', 'MacFred', 'McTim', 'O Carroll'])); // true
console.log(mostlyScottish(['MacTyler', 'O David', 'MacTeague', 'McCharlie'])); // false
/*
8.53 Create a function called 'removeLetterNames' that takes a letter and an array of names (strings). It should return the names without any starting with the given letter.
*/
const removeLetterNames = (letter, arr) => arr.filter(a => !a.startsWith(letter));

console.log('--- removeLetterNames');
console.log(eqArrays (removeLetterNames('T', ['Tyler', 'Taylor', 'Tim']), [] ));
console.log(eqArrays (removeLetterNames('Z', ['Zane', 'Zoey', 'Xann', 'Chii']), ['Xann', 'Chii'] ));
console.log(eqArrays (removeLetterNames('M', ['Tasha, Oscar', 'Chad', 'John', 'Matthew']), ['Tasha, Oscar', 'Chad', 'John'] ));
/*
8.54 Create a function called 'rpsPoints' that takes an array of rock-paper-scissors games and returns the number of games where the first player won.

The following lines should help test if your function works correctly. They should print true.
*/
const rpsPoints = arr => arr.filter(([hand1, hand2]) => {
  if (eqArrays(rpsResults(hand1, hand2)) === [1, -1]) {
    return 1;
  } else if (eqArrays(rpsResults(hand1, hand2)) === [1, 0]) {
    return 1;
  } else {
    return false;
  }
});

// const rpsPoints = arr => {
//   if ()
// }


console.log('-- rpsPoints tests');
console.log(rpsPoints([ ['paper', 'rock'] ]) === 1);
console.log(rpsPoints([ ['paper', 'rock'], ['paper', 'paper'], ['scissors', 'rock'] ]) === 1);
console.log(rpsPoints([ ['paper', 'rock'], ['rock', 'scissors'], ['scissors', 'paper'] ]) === 3);


// 8.33 Create a function called 'rpsResults' that takes an array of "Rock, Paper, Scissors" games and returns an array of results. Each game is an array of two hands. Each hand is either 'rock', 'paper', or 'scissors'. If the first hand beats the second hand, the result is 1. If the first hand loses, the result is -1. In the case of a draw, the result is 0.

// The following lines should help test if your function works correctly. They should print true.
// */

// const rps = (hand1, hand2) => {
//   if (hand1 === 'scissors' && hand2 === 'paper') {
//     return 1;
//   } else if (hand1 === 'scissors' && hand2 === 'rock') {
//     return -1;
//   } else if (hand1 === 'paper' && hand2 === 'scissors') {
//     return -1;
//   } else if (hand1 === 'paper' && hand2 === 'rock') {
//     return 1;
//   } else if (hand1 === 'rock' && hand2 === 'scissors') {
//     return 1;
//   } else if (hand1 === 'rock' && hand2 === 'paper') {
//     return -1;
//   } else if (hand1 === hand2) {
//     return 0;
//   }
// }

// const rpsResults = (arr) => arr.map(([hand1, hand2]) => rps(hand1, hand2)); 