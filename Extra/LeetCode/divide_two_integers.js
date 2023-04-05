// Given two integers dividend and divisor, divide two integers without
// using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing
// its fractional part. For example, 8.345 would be truncated to 8, and
// -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store
// integers within the 32-bit signed integer range: [−231, 231 − 1]. For
// this problem, if the quotient is strictly greater than 231 - 1, then
// return 231 - 1, and if the quotient is strictly less than -231, then
// return -231.

// Example 1:
const dividend1 = 10,
  divisor1 = 3;
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
const dividend2 = 7,
  divisor2 = -3;
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

const dividend3 = -2147483648,
  divisor3 = -3;

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // resultIsNegative
  let resultIsNegative = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    resultIsNegative = true;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let answer = 0;
  // iterate until dividend is < divisor
  while (dividend >= divisor) {
    dividend -= divisor;
    answer++;
  }

  // Handle numbers above max
  const clampMax = Math.pow(2, 31);
  if (answer >= clampMax) {
    if (resultIsNegative) {
      return -clampMax;
    }
    return clampMax - 1;
  }
  if (resultIsNegative) {
    return -answer;
  }
  return answer;
};

console.log(divide(dividend1, divisor1)); // Expect 3
console.log(divide(dividend2, divisor2)); // Expect -2
console.log(divide(dividend3, divisor3)); // Expect 715827882
