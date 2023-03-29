// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
const nums1 = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
const nums2 = [0, 1];
// Output: [[0,1],[1,0]]

// Example 3:
const nums3 = [1];
// Output: [[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // Store the permutations
  const permutations = [];
  // Fire off DFS
  dfs(nums, new Set(), permutations);
  return permutations;
};
function dfs(nums, visited, permutations) {
  // Base Case: we have reached a leaf
  if (visited.size == nums.length) {
    permutations.push(Array.from(visited));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) continue;
    // Add the current number
    visited.add(nums[i]);
    dfs(nums, visited, permutations);
    // remove the current number for next iteration
    visited.delete(nums[i]);
  }
}

console.log(permute(nums1));
console.log(permute(nums2));
console.log(permute(nums3));
