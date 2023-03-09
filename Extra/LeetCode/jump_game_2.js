// You are given a 0-indexed array of integers nums of length n. You are initially
// positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index
// i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are
// generated such that you can reach nums[n - 1].

// Example 1:
const nums1 = [2, 3, 1, 1, 4];
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
const nums2 = [2, 3, 0, 1, 4];
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let index = 0;
  let count = 0;
  // iterate over nums
  if (nums.length === 1) {
    return 0;
  }

  while (index < nums.length) {
    count++;
    // determine range that can jump
    let range = index + nums[index];
    let maxRangeFound = range;
    if (range >= nums.length - 1) {
      return count;
    }
    // decide which to jump to
    for (let i = index + 1; i <= range; i++) {
      if (i + nums[i] > range && i + nums[i] > maxRangeFound) {
        maxRangeFound = Math.max(maxRangeFound, i + nums[i]);
        index = i;
      }
    }
  }
  return count;
};

console.log(jump(nums1));
console.log(jump(nums2));
