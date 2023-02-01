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

var smallestRangeII = function (nums, k) {
  // how many elements
  let n = nums.length;

  // Sort, lowest to highest
  nums.sort((a, b) => a - b);

  // Base case, all incremented OR all decremented
  // This is found by subtracting the smallest number from the largest
  let score = nums[n - 1] - nums[0];

  // Save as a possible answer
  let ans = score;

  // Both sets will be non-empty
  for (let divisor = 0; divisor < n - 1; divisor++) {
    // Compute maximum and minimum after partitioning
    let maximumAfterDivision = Math.max(nums[divisor] + k, nums[n - 1] - k);
    let minimumAfterDivision = Math.min(nums[divisor + 1] - k, nums[0] + k);

    // Score after dividing here
    score = maximumAfterDivision - minimumAfterDivision;

    // ans will be minimum score
    ans = Math.min(ans, score);
  }

  // return answer
  return ans;
};

console.log(smallestRangeII(nums, k));
console.log(smallestRangeII(nums2, k2));
console.log(smallestRangeII(nums3, k3));
console.log(smallestRangeII(nums4, k4));
console.log(smallestRangeII(nums5, k5));
console.log(smallestRangeII(nums6, k6));
console.log(smallestRangeII(nums7, k7));
console.log(smallestRangeII(nums8, k8));
