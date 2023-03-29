// Given a sorted array of distinct integers and a target value, return
// the index if the target is found. If not, return the index where it would
// be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
const nums1 = [1, 3, 5, 6],
  target1 = 5;
// Output: 2

// Example 2:
const nums2 = [1, 3, 5, 6],
  target2 = 2;
// Output: 1

// Example 3:
const nums3 = [1, 3, 5, 6],
  target3 = 7;
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // setup our pointers
  let left = 0;
  let right = nums.length - 1;
  // keep midpoint outside
  let midpoint = 0;

  // loop until pointers cross
  while (left <= right) {
    // find midpoint
    midpoint = Math.floor((left + right) / 2);
    // compare to target
    const value = nums[midpoint];
    // if target, return mid
    if (value === target) {
      return midpoint;
    }
    // if greater than target,
    if (value > target) {
      // right = mid - 1
      right = midpoint - 1;
    } else {
      // left = mid + 1
      left = midpoint + 1;
    }
  }

  return right + 1;
};

console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));
