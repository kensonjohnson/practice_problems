// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
// You are given two integer arrays nums1 and nums2 sorted in ascending
// order and an integer k.

// Define a pair (u, v) which consists of one element from the first array
// and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Example 1:
const nums11 = [1, 7, 11],
  nums12 = [2, 4, 6],
  k1 = 3;
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence:
// [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:
const nums21 = [1, 1, 2],
  nums22 = [1, 2, 3],
  k2 = 2;
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence:
// [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

// Example 3:
const nums31 = [1, 2],
  nums32 = [3],
  k3 = 3;
// Output: [[1,3],[2,3]]
// Explanation: All possible pairs are returned from the sequence:
// [1,3],[2,3]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new MinPriorityQueue({ priority: (x) => x[0] });

  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    const num2 = nums2[0];

    minHeap.enqueue([num1 + num2, i, 0]);
  }

  const n = nums2.length;
  const result = [];

  while (k > 0 && !minHeap.isEmpty()) {
    const [_, idx1, idx2] = minHeap.dequeue().element;

    result.push([nums1[idx1], nums2[idx2]]);

    if (result.length === k) return result;

    if (idx2 < n - 1) {
      minHeap.enqueue([nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1]);
    }
  }

  return result;
};
