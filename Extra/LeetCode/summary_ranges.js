// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers
// in the array exactly. That is, each element of nums is covered by
// exactly one of the ranges, and there is no integer x such that x
// is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

// Example 1:
const nums1 = [0, 1, 2, 4, 5, 7];
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
const nums2 = [0, 2, 3, 4, 6, 8, 9];
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // create an array to store the answer
  const answer = [];
  // create a variable to hold the current range starting number
  let rangeStartingNumber = null;
  // iterate over nums
  for (let i = 0; i < nums.length; i++) {
    // if no range starting number, set it
    if (rangeStartingNumber === null) {
      rangeStartingNumber = nums[i];
    }
    // check if the next number is current number + 1
    if (nums[i] + 1 === nums[i + 1]) {
      // if yes, skip to next iteration
      continue;
    }

    // Handle storing the range
    // check if current number equals the range starting number
    if (nums[i] === rangeStartingNumber) {
      // if yes, add range starting number answer array as a string
      answer.push(rangeStartingNumber.toString());
    } else {
      // otherwise, add the string representing
      // the range of numbers to the answer array
      answer.push(rangeStartingNumber.toString() + "->" + nums[i].toString());
    }
    // Reset the range starting number
    rangeStartingNumber = null;
  }
  return answer;
};

console.log(summaryRanges(nums1));
console.log(summaryRanges(nums2));
