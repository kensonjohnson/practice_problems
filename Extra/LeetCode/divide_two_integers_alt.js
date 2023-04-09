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
  // Condensed logic to find if answer is negative
  const answerIsNegative = Math.sign(divisor) !== Math.sign(dividend);

  // Remove any signs
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // Prepare count number of iterations
  let answer = 0;
  while (dividend >= divisor) {
    let value = divisor;
    let iterations = 1;
    // Becuase of the rules of multiplicity, I can take a iterations of the
    // divisor and divide by that until I get an amount that can be simply
    // evaluated later.
    while (value + value <= dividend) {
      value += value;
      iterations += iterations;
    }
    // The result should stop somewhere around the point that I can take one
    // more action and have the proper result.
    dividend = dividend - value;
    answer += iterations;
  }

  // We still have to handle large numbers
  if (answer > 2 ** 31 - 1) {
    return answerIsNegative ? -(2 ** 31) : 2 ** 31 - 1;
  }
  // And we still have to handle negative numbers
  return answerIsNegative ? -answer : answer;
};

var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let answer = 0,
    sign = 1;
  if (dividend < 0) (dividend = -dividend), (sign = -sign);
  if (divisor < 0) (divisor = -divisor), (sign = -sign);
  if (dividend === divisor) return sign;
  for (let i = 0, val = divisor; dividend >= divisor; i = 0, val = divisor) {
    // console.log(dividend);
    while (val > 0 && val <= dividend) {
      console.log("Before: ", val, i);
      val = divisor << ++i;
      console.log("After: ", val, i);
    }
    i--;
    console.log(toBinary(val), toBinary(divisor << i));
    dividend -= divisor << i;
    answer += 1 << i;
  }
  return sign < 0 ? -answer : answer;
};

console.log(divide(dividend1, divisor1)); // 10 / 3

function toBinary(n) {
  n = Number(n);
  if (n == 0) return "0";
  var r = "";
  while (n != 0) {
    r = (n & 1 ? "1" : "0") + r;
    n = n >>> 1;
  }
  return r;
}

console.log([1] == [1]);
// console.log(divide(dividend1, divisor1)); // Expect 3
// console.log(divide(dividend2, divisor2)); // Expect -2
// console.log(divide(dividend3, divisor3)); // Expect 715827882
