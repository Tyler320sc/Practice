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


/*
7.27 Print the number 8 from the following 2D array.
*/
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log('matrix=================================================================================');
console.log(matrix1[1][3]);


/*
7.271 Create a function called 'valueInMatrix' that takes 4 arguments: matrix, number, row, column. It should return true if the number is found at the specified row and column in the 2D array matrix, otherwise false. For example, the number 10 is found at row 3, column 2 in the previous matrix.
*/