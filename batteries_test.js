

const {
  isEven,
  isOdd,
  divisibleBy,
  append,
  eqArrays,
  head,
  tail,
  last,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperse,
  sum,
  product,
  maximum,
  minimum,
  // range,
  eqObjects,
  setProp,
  removeProp
} = require('./batteries.js');



console.log('-- isEven');
console.log(isEven(10));

console.log('-- isOdd');
console.log(isOdd(11));

console.log('-- divisibleBy');
console.log(divisibleBy(12, 2));

console.log('-- eqArrays tests');
console.log(eqArrays([1, 2, 3], [1, 2, 3]));

console.log('-- append');
console.log(eqArrays(append('Carroll', ['Ty']), ['Ty', 'Carroll']));

console.log('-- head');
console.log(eqArrays(head([1, 2, 3]), [1]));

console.log('-- tail');
console.log(eqArrays(tail(['null', true, false]), [true, false]));

console.log('-- last');
console.log(eqArrays(last([1, 2, 3, true]), [true]));

console.log('-- init');
console.log(eqArrays(init([1, 2, 3]), [1, 2]));

console.log('-- isEmpty');
console.log(isEmpty([]));

console.log('-- take');
console.log(eqArrays(take(3, [1, 2, 3, 4]), [1, 2, 3]));

console.log('-- drop');
console.log(eqArrays(drop(2, [1, 2, 3]), [3]));

console.log('-- flatten tests');
console.log(eqArrays(flatten([ [1, 2, 3], [4, 5, 6] ]),[1, 2, 3, 4, 5, 6]));

console.log('-- intersperse tests');
console.log(eqArrays(
  intersperse(0, [1, 2, 3]),
  [1, 0, 2, 0, 3]
));

console.log('--- sum');
console.log(sum([1, 2, 3, 4, 5]) === 15); 

console.log('--- product');
console.log(product([1, 2, 3, 4, 5]) === 120);

console.log('---maximum');
console.log(maximum([-1, -2, -3, -4]) === -1);

console.log('---minimum');
console.log(minimum([-1, -2, -3, -4]) === -4);

console.log('-- eqObjects tests');
console.log(eqObjects(
  {a: 1, b: 2, c: 3},
  {a: 1, b: 2, c: 3}
));

console.log('-- setProp');
console.log(eqObjects(
  setProp('a', 28, {a: 1, b: 2, c: 3}), 
  {a: 28, b: 2, c: 3}));

  console.log('-- removeProp tests');
  console.log(eqObjects(
    removeProp('password', {name: 'Tim', password: 'hunter2', title: 'Developer'}),
    {name: 'Tim', title:  'Developer', password: undefined}
  ));