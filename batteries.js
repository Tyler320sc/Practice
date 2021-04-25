// Numbers

const isEven = n => n % 2 === 0;

const isOdd = n => !isEven(n);

const divisibleBy = (x, y) => x % y === 0;

const eqArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((_, y) => {
  if (Array.isArray(arr1[y]) && Array.isArray(arr2[y])) {
    return eqArrays(arr1[y], arr2[y]);
  } else { 
    return arr1[y] === arr2[y]; 
  }
});

// Arrays

const append = (y, arr) => [...arr, y];

const head = arr => arr.slice(0, 1);

const tail = arr => arr.slice(1);

const last = arr => arr.slice(arr.length - 1);

const init = arr => arr.slice(0, arr.length - 1);

const isEmpty = arr => arr.length < 1;

const take = (n, arr) => arr.slice(0, n);

const drop = (num, arr) => arr.slice(num);

const flatten = arr => arr.reduce((acc, x) => [...acc, ...x], []);

// const intersperse = (sep, arr) => arr.reduce((acc, x) => {
//   if (acc.length > 0 && acc.length < arr.length - 1 && isEven(acc.length)) {
//     return [...acc, sep, x];
//   } else {
//     return [...acc, x];
//   }
// }, [])

const intersperse = (sep, arr) => arr.reduce((acc, x)=> [...acc, x, sep], []).slice(0, -1);

// Number Arrays

const sum = arr => arr.reduce((acc, x) => acc + x, 0);

const product = arr => arr.reduce((acc, x) => acc * x, 1);

const maximum = arr => arr.reduce((acc, x) => acc > x ? acc : x, arr[0])

const minimum = arr => arr.reduce((acc, x) => acc < x ? acc : x, arr[0]);

// const range = (startNum, endNum) => ;

// Objects

const eqObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const setProp = (str, val, obj) => ({...obj, [str]: val});

const removeProp = (str, obj) => ({...obj, [str]: undefined});



module.exports = {
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
};