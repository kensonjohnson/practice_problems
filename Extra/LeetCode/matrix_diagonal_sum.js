// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and
// all the elements on the secondary diagonal that are not part of the
// primary diagonal.

const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

const mat2 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
// Output: 8
// Example 3:

const mat3 = [[5]];
// Output: 5

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  const n = mat.length;
  // iterate over matrix
  for (let i = 0; i < n; i++) {
    // evaluate first diag
    const diag1 = mat[i][i];
    const secondIndex = n - 1 - i;
    const diag2 = mat[i][secondIndex];
    if (secondIndex === i) {
      sum += diag1;
    } else {
      sum += diag1 + diag2;
    }
  }

  return sum;
};

console.log(diagonalSum(mat1));
console.log(diagonalSum(mat2));
console.log(diagonalSum(mat3));
