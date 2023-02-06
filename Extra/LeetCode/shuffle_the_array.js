// Given the array nums consisting of 2n elements in the form
// [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

const nums1 = [2, 5, 1, 3, 4, 7],
  n1 = 3;
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then
// the answer is [2,3,5,4,1,7].

// Example 2:
const nums2 = [1, 2, 3, 4, 4, 3, 2, 1],
  n2 = 4;
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
const nums3 = [1, 1, 2, 2],
  n3 = 2;
// Output: [1,2,1,2]

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // store new array
  const newArray = [];
  // loop up to n
  for (let i = 0; i < n; i++) {
    newArray.push(nums[i], nums[i + n]);
  }

  return newArray;
};

console.log(shuffle(nums1, n1));
console.log(shuffle(nums2, n2));
console.log(shuffle(nums3, n3));
