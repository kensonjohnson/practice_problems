// You are given a large integer represented as an integer array digits,
// where
// each digits[i] is the ith digit of the integer. The digits are ordered from
// most significant to least significant in left-to-right order. The large integer
// does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
const digits = [1, 2, 3];
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
const digits2 = [4, 3, 2, 1];
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
const digits3 = [9];
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // look at last index
  // increment last index

  // this queue holds indexes
  let queue = [digits.length - 1];
  let currentIndex = 0;
  while (queue.length) {
    currentIndex = queue.shift();
    let number = digits[currentIndex];
    number++;
    if (number > 9) {
      // if 10 after increment, look at index - 1
      queue.push(currentIndex - 1);
      digits[currentIndex] = 0;
      if (currentIndex === 0) {
        queue = [];
        digits.unshift(1);
      }
    } else {
      // repeat on each index until increment !== 10
      digits[currentIndex] = number;
    }
  }

  return digits;
};

console.log(plusOne(digits));
console.log(plusOne(digits2));
console.log(plusOne(digits3));
