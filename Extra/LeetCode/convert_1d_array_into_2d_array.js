// https://leetcode.com/problems/convert-1d-array-into-2d-array/

// You are given a 0-indexed 1-dimensional (1D) integer array original,
// and two integers, m and n. You are tasked with creating a 2-dimensional
// (2D) array with  m rows and n columns using all the elements from original.

// The elements from indices 0 to n - 1 (inclusive) of original should
// form the first row of the constructed 2D array, the elements from
// indices n to 2 * n - 1 (inclusive) should form the second row of the
// constructed 2D array, and so on.

// Return an m x n 2D array constructed according to the above procedure,
// or an empty 2D array if it is impossible.

// Example 1:
const original1 = [1, 2, 3, 4],
  m1 = 2,
  n1 = 2;
// Output: [[1,2],[3,4]]
// Explanation: The constructed 2D array should contain 2 rows and 2 columns.
// The first group of n=2 elements in original, [1,2], becomes the first row
// in the constructed 2D array.
// The second group of n=2 elements in original, [3,4], becomes the second row
// in the constructed 2D array.

// Example 2:
const original2 = [1, 2, 3],
  m2 = 1,
  n2 = 3;
// Output: [[1,2,3]]
// Explanation: The constructed 2D array should contain 1 row and 3 columns.
// Put all three elements in original into the first row of the constructed
// 2D array.

// Example 3:
const original3 = [1, 2],
  m3 = 1,
  n3 = 1;
// Output: []
// Explanation: There are 2 elements in original.
// It is impossible to fit 2 elements in a 1x1 2D array, so return an empty
// 2D array.

const original4 = [1, 1, 1, 1];
const m4 = 4;
const n4 = 1;

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  // create new answer array
  const answer = [];

  // check that 2d array is possible with given inputs
  if (original.length !== m * n) {
    return answer;
  }
  // iterate m times
  for (let i = 0; i < m; i++) {
    // create a starting point for current slice
    const startingPoint = n * i;
    // slice from starting point to starting point plus n
    // append that slice to the answer array
    answer.push(original.slice(startingPoint, startingPoint + n));
  }

  return answer;
};

// console.log(construct2DArray(original1, m1, n1));
// console.log(construct2DArray(original2, m2, n2));
// console.log(construct2DArray(original3, m3, n3));
// console.log(construct2DArray(original4, m4, n4));

// This version only uses m to check if conversion possible
function construct2DArrayShortened(original, m, n) {
  // create new answer array
  const answer = [];

  // check that 2d array is possible with given inputs
  if (original.length !== m * n) {
    return answer;
  }
  // iterate m times
  for (let i = 0; i < original.length; i += n) {
    // slice from starting point to starting point plus n
    // append that slice to the answer array
    answer.push(original.slice(i, i + n));
  }

  return answer;
}

console.log(construct2DArrayShortened(original1, m1, n1));
console.log(construct2DArrayShortened(original2, m2, n2));
console.log(construct2DArrayShortened(original3, m3, n3));
console.log(construct2DArrayShortened(original4, m4, n4));
