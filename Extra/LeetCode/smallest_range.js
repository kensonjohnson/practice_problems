// You are given an integer array nums and an integer k.

// For each index i where 0 <= i < nums.length, change nums[i] to be either
// nums[i] + k or nums[i] - k.

// The score of nums is the difference between the maximum and minimum elements
// in nums.

// Return the minimum score of nums after changing the values at each index.

// Example 1:
const nums = [1],
  k = 0;
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// Example 2:
const nums2 = [0, 10],
  k2 = 2;
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

// Example 3:
const nums3 = [1, 3, 6],
  k3 = 3;
// Output: 3
// Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.

const nums4 = [7, 8, 8],
  k4 = 5;
// Expect 1

const nums5 = [3, 1, 10],
  k5 = 4;
//Expect 2

const nums6 = [9, 10, 5, 9],
  k6 = 5;
//Expect 5

const nums7 = [3, 4, 7, 0],
  k7 = 5;
// Expect 7

const nums8 = [9, 9, 2, 8, 7],
  k8 = 4;
// Expect 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  // store currentHighest, currentLowest, and average
  let lowest = 100000;
  let highest = 0;
  const numbers = new Set(nums);
  numbers.forEach((number) => {
    if (number < lowest) {
      lowest = number;
    }
    if (number > highest) {
      highest = number;
    }
  });
  const outerRange = highest - lowest;
  if (outerRange <= k) {
    return outerRange;
  }

  if (k * 2 > outerRange) {
    let smallestRangeFound = 0;
    let rangeAdjustment = k;
    const problemNumbers = [];
    const overlap = k * 2 - outerRange;
    if (k + overlap > outerRange) {
      return outerRange;
    }
    if (highest - k < lowest + k) {
      smallestRangeFound = highest - k - (lowest + k);
    }

    // get all of our problem numbers
    for (let i = 0; i < overlap; i++) {
      const possibleNumber = lowest + k - i;
      if (numbers.has(possibleNumber)) {
        problemNumbers.push(possibleNumber);
      }
    }

    problemNumbers.forEach((number) => {
      if (!numbers.has(number)) {
        return;
      }
      if (number + k > highest && number - k < lowest) {
        const currentRangeAdjustment = Math.min(
          Math.abs(lowest - (number - k)),
          number + k - highest
        );
        if (currentRangeAdjustment + k > rangeAdjustment) {
          rangeAdjustment = currentRangeAdjustment + k;
        }
      }
    });
    return smallestRangeFound + rangeAdjustment;
  }
  const newHigh = highest - k;
  const newLow = lowest + k;
  let smallestRangeFound = newHigh - newLow;
  if (smallestRangeFound < k) {
    const problemNumbers = [];
    const overlap = k - smallestRangeFound;

    // get all of our problem numbers
    for (let i = 0; i < overlap; i++) {
      const possibleNumber = lowest + k - i;
      if (numbers.has(possibleNumber)) {
        problemNumbers.push(lowest + k - i);
      }
    }

    let adjustLow = 0;
    let adjustHigh = 0;
    problemNumbers.forEach((number) => {
      if (number + k > newHigh && number - k < newLow) {
        const high = number + k - newHigh;
        const low = Math.abs(number - k + newLow);
        if (high < low && high > adjustHigh) {
          adjustHigh = high;
          return;
        }
        if (low < adjustLow) {
          adjustLow = low;
        }
      }
    });
    return newHigh + adjustHigh - (newLow - adjustLow);
  }

  return highest - k - (lowest + k);
};

console.log(smallestRangeII(nums, k));
console.log(smallestRangeII(nums2, k2));
console.log(smallestRangeII(nums3, k3));
console.log(smallestRangeII(nums4, k4));
console.log(smallestRangeII(nums5, k5));
console.log(smallestRangeII(nums6, k6));
console.log(smallestRangeII(nums7, k7));
console.log(smallestRangeII(nums8, k8));
