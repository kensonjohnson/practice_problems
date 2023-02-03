// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
const x1 = 121;
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
const x2 = -121;
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
const x3 = 10;
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// First Attempt
// Basic solution, convert the number into a string and reverse it.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // if negative, return false
  if (x < 0) {
    return false;
  }
  // convert to string
  const number = x.toString();
  // split into an array of string numbers
  const integers = number.split("");
  // reverse the order of integers
  integers.reverse();
  // recombine integers into a number string
  const reversedNumber = integers.join("");
  // determine if the to stringified numbers are the same and return the result
  return number === reversedNumber;
};

// Second Attempt
// Find solution without converting to string
var isPalindrome2 = function (x) {
  // if negative, return false
  if (x < 0) {
    return false;
  }
  // create pointers
  let left = 0;
  let right = Math.floor(Math.log(Math.abs(x)) / Math.LN10);

  // we need a function to return the digit at a given position in integer
  function getDigit(num, pos) {
    return Math.floor(
      (num /
        Math.pow(10, Math.floor(Math.log(Math.abs(num)) / Math.LN10) - pos)) %
        10
    );
  }

  // Check each digit to the oposite digit and work your way towards the middle
  let isValid = true;
  while (left < right) {
    if (getDigit(x, left) !== getDigit(x, right)) {
      isValid = false;
      break;
    }
    left++;
    right--;
  }
  return isValid;
};

// A top solution from LeetCode
var isPalindrome3 = function (x) {
  // If negative, return false
  if (x < 0) {
    return false;
  }
  // setup to "reverse" the number
  let temp = x;
  let rem;
  let rev = 0;
  while (temp !== 0) {
    rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return rev === x;
};

// console.log(isPalindrome(x1));
// console.log(isPalindrome(x2));
// console.log(isPalindrome(x3));
// console.log(isPalindrome2(x1));
// console.log(isPalindrome2(x2));
// console.log(isPalindrome2(x3));
console.log(isPalindrome3(x1));
console.log(isPalindrome3(x2));
console.log(isPalindrome3(x3));

// How the last algo works:
// x = 121, temp = x, rem = undefined, rev = 0

// First pass
// rem = 121 % 10, rev = 0 * 10 + 1, temp = Math.floor(121 / 10)
// rem = 1, rev = 1, temp = 12

// Second pass
// rem = 12 % 10, rev = 1 * 10 + 2, temp = Math.floor(12 / 10)
// rem = 2, rev = 12, temp = 1

// Final pass
// rem = 1 % 10, rev = 12 * 10 + 1, temp = Math.floor(1 / 10)
// rem = 1, rev = 121, temp = 0

// Output from return rev === x
// rev === x is 121 === 121, so true is returned
