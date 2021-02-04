/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Practice creating arrays

/*
7.1 Create a variable to hold an array of numbers and print it.
*/


/*
7.11 Print an array of your top 3 favorite colors (as strings) without creating a variable.
*/


/*
7.12 Print an array of 4 different types of values.
*/


/*
7.13 Print a 2-dimensional array of numbers.
*/


// Practice using array index

/*
7.2 Print the fourth name (Dave) of the array.
*/
const names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank'];



/*
7.21 Print the last name of the array, without using the length property.
*/


/*
7.22 Print each of the names at even indexes of the array.
*/


/*
7.23 Create a function called 'head' that takes an array and returns its first element. What does it return when given an empty array?

Remember to write tests!
*/


/*
7.24 Create a function called 'isAtIndex' that takes an array, a value, and a number. It should return true if the value is found at the index number of the array, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/


// console.log('Bob is at index 1 in names:', isAtIndex(names, 'Bob', 1));
// console.log('Bob is not at index 0 in names:', !isAtIndex(names, 'Bob', 0));
// console.log('3 is at index 0 in these numbers:', isAtIndex([3, 2, 1], 3, 0));
// console.log('2 is not at index 2 in these numbers:', !isAtIndex([3, 2, 1], 2, 2));

/*
7.25 Create a function called 'area' that takes a rectangle and returns its area. The rectangle is represented by an array with 2 numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/


// console.log('area tests');
// console.log(area([1, 2]) === 2);
// console.log(area([2, 2]) === 4);
// console.log(area([6, 3]) === 18);
// console.log(area([0, 9]) === 0);

/*
7.251 Create a function called 'areaDifference' that takes two rectangles and returns the difference between the areas of the rectangles. Each rectangle is represented by an array with 2 numbers: [length, width].
*/


/*
7.252 Create a function called 'volumeDifference' that takes two cuboids and returns the difference between the volumes of the cuboids. Each cuboid is represented by an array with 3 numbers: [length, width, height]. The volume of a cuboid can be calculated by multiplying length x width x height.
*/


/*
7.26 Create a function called 'suitValue' that takes a card suit (string) and returns its number value. The suits and their values are as follows.

clubs: 0
diamonds: 1
hearts: 2
spades: 3
*/


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



/*
7.271 Create a function called 'valueInMatrix' that takes 4 arguments: matrix, number, row, column. It should return true if the number is found at the specified row and column in the 2D array matrix, otherwise false. For example, the number 10 is found at row 3, column 2 in the previous matrix.
*/