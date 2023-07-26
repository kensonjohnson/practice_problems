// Given an integer array nums sorted in non-decreasing order, remove some duplicates
// in-place such that each unique element appears at most twice. The relative order
// of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you
// must instead have the result be placed in the first part of the array nums. More
// formally, if there are k elements after removing the duplicates, then the first
// k elements of nums should hold the final result. It does not matter what you
// leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying
// the input array in-place with O(1) extra memory.

// Custom Judge:
// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Example 1:

const nums1 = [1, 1, 1, 2, 2, 3];
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Check if incoming array has anything in it
  if (!nums.length) return 0;

  // k will hold our "pointer" to the last valid "unique" character
  let k = 0;

  // iterate over nums, starting on the second element
  for (let i = 1; i < nums.length; i++) {
    // check if current number does not equal number at k
    // or if number at k is different from number at k - 1
    if (nums[i] !== nums[k] || nums[k] !== nums[k - 1]) {
      // We go ahead and move k up one
      k++;
      // And we change nums at k with our new "unique" value
      nums[k] = nums[i];
    }
  }

  // And since nums is zero-indexed, we add 1 to represent the number of elements "remaining"
  return k + 1;
};

// Example one
let temp = [...nums1];
let k = removeDuplicates(temp);
console.log(temp.slice(0, k));

// Example two
temp = [...nums2];
k = removeDuplicates(temp);
console.log(temp.slice(0, k));
