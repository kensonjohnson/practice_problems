// Given an integer array nums and an integer k, return the k most
// frequent elements. You may return the answer in any order.

// Example 1:
const nums1 = [1, 1, 1, 2, 2, 3],
  k1 = 2;
// Output: [1,2]

// Example 2:
const nums2 = [1],
  k2 = 1;
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numberOfAppearances = new Map();
  const bucket = [];
  const result = [];

  for (let number of nums) {
    numberOfAppearances.set(number, (numberOfAppearances.get(number) || 0) + 1);
  }

  for (let [key, value] of numberOfAppearances) {
    bucket[value] = (bucket[value] || new Set()).add(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
