const myArr = [1, 2, 3, 4, 5];

const search = (arr, val) => arr.includes(val);

console.log(search(myArr, 2));



const recursiveFunc = number => {
  console.log(number);
  if (number < 8) {
    return recursiveFunc(number + 1);
  } 
  return 'Done!';
}
console.log(recursiveFunc(1));




