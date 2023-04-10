// Given a 0-indexed integer array nums of length n and an integer k,
// return the number of pairs (i, j) such that:

// 0 <= i < j <= n - 1 and
// nums[i] * nums[j] is divisible by k.

// Example 1:
const nums1 = [1, 2, 3, 4, 5],
  k1 = 2;
// Output: 7
// Explanation:
// The 7 pairs of indices whose corresponding products are divisible by 2 are
// (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).
// Their products are 2, 4, 6, 8, 10, 12, and 20 respectively.
// Other pairs such as (0, 2) and (2, 4) have products 3 and 15 respectively, which are not divisible by 2.

// Example 2:
const nums2 = [1, 2, 3, 4],
  k2 = 5;
// Output: 0
// Explanation: There does not exist any pair of indices whose corresponding product is divisible by 5.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let valueMap = new Map();
  let factors = [];
  // If there are factors of k, find them
  for (let i = 1; i * i <= k; i += 1) {
    if (k % i === 0) {
      valueMap.set(i, 0);
      factors.push(i);
      valueMap.set(k / i, 0);
      if (k / i !== i) factors.push(k / i);
    }
  }

  let index = 0; // What we initialize it to doesn't matter
  let answer = 0; // We can store our answer here
  for (let num of nums) {
    index = k / findGreatestCommonDenominator(num, k);
    answer += valueMap.get(index);
    for (let factor of factors) {
      if (num % factor === 0) {
        valueMap.set(factor, valueMap.get(factor) + 1);
      }
    }
  }
  return answer;
};

function findGreatestCommonDenominator(numberOne, numberTwo) {
  if (numberTwo === 0) {
    return numberOne;
  }
  return findGreatestCommonDenominator(numberTwo, numberOne % numberTwo);
}

console.log(countPairs(nums1, k1));
console.log(countPairs(nums2, k2));
