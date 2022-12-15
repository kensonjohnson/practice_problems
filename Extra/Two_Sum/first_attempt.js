// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const testArray1 = [2, 7, 11, 15];
const testTarget1 = 9; // Expected output: [0,1]
const testArray2 = [3, 2, 4];
const testTarget2 = 6; // Expected output: [1,2]
const testArray3 = [3, 3];
const testTarget3 = 6; // Expected output: [0,1]

var twoSum = function (nums, target) {
  let answerFound = false;
  let indices = [];
  outerLoop: for (let i = 0; i < nums.length; i++) {
    if (answerFound) {
      break;
    }
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        indices = [i, j];
        answerFound = true;
        break outerLoop;
      }
    }
  }
  if (answerFound) {
    return indices;
  }
};

console.log(twoSum(testArray1, testTarget1));
console.log(twoSum(testArray2, testTarget2));
console.log(twoSum(testArray3, testTarget3));
