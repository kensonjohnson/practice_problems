// You are given an array of integers nums. You are also given an integer original which
// is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

// Example 1:
const nums1 = [5, 3, 6, 1, 12],
  original1 = 3;
// Output: 24
// Explanation:
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.

// Example 2:
const nums2 = [2, 7, 9],
  original2 = 4;
// Output: 4
// Explanation:
// - 4 is not found in nums. Thus, 4 is returned.

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let result = original;
  // throw nums into a set
  const numbers = new Set(nums);
  // iterate until original not found
  while (numbers.has(result)) {
    // multiply original by 2, store as new original
    result *= 2;
  }
  return result;
};

console.log(findFinalValue(nums1, original1)); // Expect 24
console.log(findFinalValue(nums2, original2)); // Expect 4
