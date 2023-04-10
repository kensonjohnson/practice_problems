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
const countPairs = (nums, k) => {
  const valueMap = Array(1e5 + 1).fill(0);
  const gcdData = [];
  // We need to store the answer
  let answer = 0;
  for (const currentNumber of nums) {
    let gcd = findGreatestCommonDenominator(currentNumber, k);
    for (const record of gcdData) {
      if ((gcd * record) % k == 0) {
        answer += valueMap[record];
      }
    }
    if (valueMap[gcd] === 0) {
      gcdData.push(gcd);
    }
    valueMap[gcd]++;
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
