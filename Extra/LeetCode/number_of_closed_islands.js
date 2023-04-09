// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a
// maximal 4-directionally connected group of 0s and a closed island is
// island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands

// Example 1:
const grid1 = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
// Output: 2
// Explanation:
// Islands in gray are closed because they are completely surrounded by water (group of 1s).

// Example 2:
const grid2 = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
];
// Output: 1

// Example 3:
const grid3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
// Output: 2

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let result = 0;
  let height = grid.length;
  let width = grid[0].length;
  // Checks if board is big enough to contain valid island
  if (width < 3 || height < 3) {
    return 0;
  }

  // Depth first search to mark all of the island
  function mapIsland(row, column) {
    // Base Case: Cell off grid
    if (row < 0 || row >= height || column < 0 || column >= width) {
      return false;
    }

    // Base Case: Cell is water
    if (grid[row][column] === 1) {
      return true;
    }

    grid[row][column] = 1; // Mark that we've been here by changing to water

    // Recursively search each direction. Each will return true if cell is
    // valid or false if any part continues past the grid.
    let left = mapIsland(row, column - 1);
    let right = mapIsland(row, column + 1);
    let top = mapIsland(row - 1, column);
    let bottom = mapIsland(row + 1, column);
    return left && right && top && bottom; // Returns false if ANY result is false.
  }

  // Walk the grid from top left to bottom right SKIPPING the walls.
  for (let row = 1; row < height - 1; row++) {
    for (let column = 1; column < width - 1; column++) {
      if (grid[row][column] === 0) {
        result += mapIsland(row, column); // coerces true or false into 1 or 0
      }
    }
  }
  return result;
};

console.log(closedIsland(grid1));
console.log(closedIsland(grid2));
console.log(closedIsland(grid3));
