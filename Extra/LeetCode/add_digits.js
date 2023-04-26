// Given an integer num, repeatedly add all its digits until the result
// has only one digit, and return it.

// Example 1:
const num1 = 38;
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
const num2 = 0;
// Output: 0

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};
