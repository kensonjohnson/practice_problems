// https://leetcode.com/problems/equal-row-and-column-pairs/

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj)
// such that row ri and column cj are equal.
// A row and column pair is considered equal if they contain the same elements in
// the same order (i.e., an equal array).

const grid1 = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

const grid2 = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

function equalPairs(grid) {
  let sum = 0;
  // create array of columns
  grid[0].forEach((_, index) => {
    const column = [];
    for (const row of grid) {
      column.push(row[index]);
    }
    // columns.push(column);
    grid.forEach((row) => {
      if (compareArrays(row, column)) {
        // add number of matches to sum
        sum++;
      }
    });
  });

  return sum;
}

console.log(equalPairs(grid1));
console.log(equalPairs(grid2));

function compareArrays(array1, array2) {
  const n = array1.length;
  for (let i = 0; i < n; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
