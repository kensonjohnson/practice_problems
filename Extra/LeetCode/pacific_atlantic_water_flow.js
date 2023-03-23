// There is an m x n rectangular island that borders both the Pacific Ocean and
// Atlantic Ocean. The Pacific Ocean touches the island's left and top edges,
// and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n
// integer matrix heights where heights[r][c] represents the height above sea
// level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring
// cells directly north, south, east, and west if the neighboring cell's height
// is less than or equal to the current cell's height. Water can flow from any
// cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes
// that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic
// oceans.

// Example 1:
const heights1 = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans,
// as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the
// Pacific and Atlantic oceans.

// Example 2:
const heights2 = [[1]];
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic
// oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // start from the pacific side, and find all of the points that can give rain
  // do the same for atlantic side
  // check for intersections between both

  const gridHeight = heights.length;
  const gridWidth = heights[0].length;

  const DIRECTIONS = [
    { row: -1, col: 0 }, // up
    { row: 0, col: 1 }, // right
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
  ];

  function dfs(y, x, prev, array, gridHeight, gridWidth, heights) {
    if (y < 0 || y >= gridHeight || x < 0 || x >= gridWidth) return; // Check boundaries

    const height = heights[y][x]; // Get elevation of current cell

    if (prev > height) return; // Base Case: We went down in elevation

    const index = gridHeight * x + y; // Convert to array index

    if (array[index]) return; // Base Case: We've already been here

    array[index] = true; // Mark that weve been here

    for (const { row, col } of DIRECTIONS) {
      // run DFS once for each direction
      dfs(y + row, x + col, height, array, gridHeight, gridWidth, heights);
    }
  }

  // Although one dimensional, these represent cells on the grid, just in indexed form
  const pacific = Array(gridHeight * gridWidth).fill(false);
  const atlantic = Array(gridHeight * gridWidth).fill(false);

  // Start from each of the edge squares and dfs to find the highest points
  for (let column = 0; column < gridWidth; column++) {
    dfs(0, column, 0, pacific, gridHeight, gridWidth, heights); // squares on the pacific side
    dfs(gridHeight - 1, column, 0, atlantic, gridHeight, gridWidth, heights); // squares on the atlantic side
  }

  // We do two, once for columns and again for rows, becuase we aren't guaranteed a square "island"
  for (let row = 0; row < gridHeight; row++) {
    dfs(row, 0, 0, pacific, gridHeight, gridWidth, heights); // squares on the pacific side
    dfs(row, gridWidth - 1, 0, atlantic, gridHeight, gridWidth, heights); // squares on the atlantic side
  }

  const result = [];

  // Check intersection
  for (let i = 0; i < gridHeight * gridWidth; i++) {
    if (atlantic[i] && pacific[i]) {
      // Convert back to x,y coords
      const x = Math.floor(i / gridHeight);
      const y = i % gridHeight;
      result.push([y, x]);
    }
  }

  return result;
};

console.log(pacificAtlantic(heights1));
console.log(pacificAtlantic(heights2));
