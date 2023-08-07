// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

const matrix1 = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target1 = 3;
// Output: true
// Example 2:

const matrix2 = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target2 = 13;
// Output: false

const matrix3 = [[1]],
  target3 = 1;
// Output: true

const matrix4 = [[1, 3]],
  target4 = 3;
// Output: true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Binary search for row then binary search for column
  // search for row and store it
  const row = matrix[findRow(matrix, target)];
  // pass in row to findTarget and return the result
  return findTarget(row, target);
};

// Searches for row that can possibly contain target
function findRow(matrix, target) {
  //   if (matrix.length === 1) {
  //     return 0;
  //   }
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    // find midpoint
    const midpoint = Math.ceil((left + right) / 2);
    // if first value at midpoint > target
    if (matrix[midpoint][0] > target) {
      // go left
      right = midpoint - 1;
    } else {
      // go right
      left = midpoint;
    }
  }
  // if only one element remains, return the index of row
  return left;
}

// Searches for target in row with binary search
function findTarget(row, target) {
  //   if (row.length === 1) {
  //     return row[0] === target;
  //   }
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    // Grab value at midpoint
    const midpoint = Math.floor((left + right) / 2);
    // If midpoint is target, we're done
    if (row[midpoint] === target) {
      return true;
    }
    // Otherwise, we keep searching
    if (row[midpoint] > target) {
      // go left
      right = midpoint - 1;
    } else {
      // go right
      left = midpoint + 1;
    }
  }

  return false;
}

// console.log(findTarget(matrix1[0], 11));
// console.log(findTarget(matrix1[1], 11));
// console.log(findTarget(matrix3[0], 1));
// console.log(findTarget(matrix4[0], target4));

console.log(searchMatrix(matrix1, target1));
console.log(searchMatrix(matrix2, target2));
console.log(searchMatrix(matrix3, target3));
console.log(searchMatrix(matrix4, target4));
