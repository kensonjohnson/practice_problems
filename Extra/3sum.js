// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
const test1 = [-1, 0, 1, 2, -1, -4];
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
const test2 = [0, 1, 1];
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
const test3 = [0, 0, 0];
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// function takes in array of numbers
function sumThree(nums) {
  let answers = [];
  let length = nums.length;

  // iterate over numbers
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < length; k++) {
        if (k === i || k === j) {
          continue;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          let answer = [nums[i], nums[j], nums[k]];
          answer.sort((a, b) => {
            return a - b;
          });
          answers.push(answer);
        }
      }
    }
  }

  let finalAnswers = [];
  // iterate over answers
  answers.forEach((arr) => {
    let isNew = true;
    if (finalAnswers.length < 1) {
      finalAnswers.push(arr);
      return;
    }
    // iterate over already stored answers
    for (let i = 0; i < finalAnswers.length; i++) {
      let isMatch = true;
      let toCheck = finalAnswers[i];
      // check one to one, each array for match
      for (let j = 0; j < 3; j++) {
        if (toCheck[j] !== arr[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        isNew = false;
        break;
      }
    }
    if (isNew) {
      finalAnswers.push(arr);
    }
  });
  // check one to one, each index in finalAnswers for a match,
  // if none are found, push the answer

  return finalAnswers;
}

// store the current number in a way that it can't be used again
// iterate over remaining numbers
// store second number
// iterate one last time for third number
// if all three numbers sum to 0
// store all three as an answer

// return answer array

console.log(sumThree(test1));
console.log(sumThree(test2));
console.log(sumThree(test3));
