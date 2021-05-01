/**
 * Exercise 1
 * Basic Recursion 
 * 
 * This function generates a random number every time it is called 
 * 
 * Exercise
 * 1. Before you start coding execute the function without a basecase. What is printed in the 
 *    console?
 * 2. Complete the base case on line 18 that should return a string "<number> is divisible by 2!",
 *    if the randomNumber is divisible by 2 and does not equal 0 
 * 3. Use console.log to help you visualize what is happening in the recursive function when the 
 *    base case is not met. Where can you put the console.log? What is printed to the console if 
 *    you move it around in the function?
 * 
 * @returns {string} 
 * 
 */
 const basicRecursion = () => {
  ​
      // Random number generation
      const randomNumber = Math.floor(Math.random() * 25);
  ​
      // Base case 
      // ... code here
  ​
      // Recursive call
      return basicRecursion(randomNumber);
  };
  ​
  // Exercise 1
  console.log('basicRecursion: ', basicRecursion());
  ​
  //-------------------------------------------------------
  ​
  /**
   * Exercise 2
   * Recursion From Scratch
   * 
   * Exercise
   * 1. Build a recursive function that takes 2 numbers as arguments.
   *    Each number should be multiplied by 2.
   *    The resulting new numbers should then be added together.
   *    If the final sum is greater than 250, exit the function and
   *    return that number.
   *    If the final sum is less than 250, recursively call the function again 
   *    with the newly multipled numbers as arguments until you hit the base case.
   * 
   * Tips
   * 1. Try writing your base case/exit condition first and build the rest of your function
   *    around that.
   * 2. Remember the order of operations in a recursive function is often very important
   * 3. Use console.log to help you understand what is happening in the function and how 
   *    many times it runs before the result is greater than 250
   * 4. Write some tests to confirm your function is working correctly
   * 
   * @param {number} number1
   * @param {number} number2
   * @returns {number} 
   * 
   */
  const recursiveFromScratch = (number1, number2) => {
      // your code goes here...
  };
  ​
  // Exercise 2
  console.log('recursiveFromScratch: ', recursiveFromScratch(5, 4));
  ​
  // Exercise 2 Tests
  // Your tests go here...