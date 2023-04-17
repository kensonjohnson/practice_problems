const test = `30373
25512
65332
33549
35390`;

import { data } from "./2022_08_data.js";

function findVisiableTrees(gridString) {
  // split string into array of strings by row
  const grid = gridString.split("\n");
  // const results = new Array(5);
  // for (let i = 0; i < 5; i++) {
  //   const row = new Array(5).fill(null);
  //   results[i] = row;
  // }

  let count = 0;

  // walk from top left to bottom right
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const treeHeight = parseInt(grid[row][column]);
      // fire of isVisisbleFromInDirection, in each direction
      const visibleUp = isVisisbleInDirection(
        row - 1,
        column,
        "up",
        grid,
        treeHeight
      );
      const visibleDown = isVisisbleInDirection(
        row + 1,
        column,
        "down",
        grid,
        treeHeight
      );
      const visibleLeft = isVisisbleInDirection(
        row,
        column - 1,
        "left",
        grid,
        treeHeight
      );
      const visibleRight = isVisisbleInDirection(
        row,
        column + 1,
        "right",
        grid,
        treeHeight
      );

      // if all return true, increment count
      if (visibleUp || visibleDown || visibleLeft || visibleRight) {
        // results[row][column] = true;
        count++;
      } // else {
      // results[row][column] = false;
      // }
      // otherwise continue
      //   return "done";
    }
  }
  // console.log(results);

  return count;
}

const DIRECTIONS = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 },
};

// isVisisbleFromInDirection, takes in point, direction, grid, previous height
function isVisisbleInDirection(
  row,
  column,
  direction,
  grid,
  viewHeight,
  viewDistance
) {
  // Base Case: Off grid
  if (
    row < 0 ||
    row > grid.length - 1 ||
    column < 0 ||
    column > grid[0].length - 1
  ) {
    return true;
  }
  // console.log(parseInt(grid[row].charAt(column)), viewHeight);

  // Base Case: Tree taller than last tree
  if (parseInt(grid[row].charAt(column)) >= viewHeight) {
    return false;
  }

  // create new point
  const newRow = row + DIRECTIONS[direction].row;
  const newColumn = column + DIRECTIONS[direction].col;

  // recurse
  return isVisisbleInDirection(newRow, newColumn, direction, grid, viewHeight);
}

// console.log(findVisiableTrees(test));
// console.log(findVisiableTrees(data));

function findBestScenicScore(gridString) {
  // split string into array of strings by row
  const grid = gridString.split("\n");
  const scenicScores = new Array(5);
  for (let i = 0; i < 5; i++) {
    const row = new Array(5).fill(null);
    scenicScores[i] = row;
  }

  // walk from top left to bottom right
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const treeHeight = parseInt(grid[row][column]);
      // fire of isVisisbleFromInDirection, in each direction
      const visibleUp = scenicScoreForDirection(
        row - 1,
        column,
        "up",
        grid,
        treeHeight
      );
      const visibleDown = scenicScoreForDirection(
        row + 1,
        column,
        "down",
        grid,
        treeHeight
      );
      const visibleLeft = scenicScoreForDirection(
        row,
        column - 1,
        "left",
        grid,
        treeHeight
      );
      const visibleRight = scenicScoreForDirection(
        row,
        column + 1,
        "right",
        grid,
        treeHeight
      );

      scenicScores[row][column] =
        visibleUp * visibleDown * visibleLeft * visibleRight;
    }
  }

  return scenicScores;
}

// isVisisbleFromInDirection, takes in point, direction, grid, previous height
function scenicScoreForDirection(
  row,
  column,
  direction,
  grid,
  viewHeight,
  viewDistance = 1
) {
  // Base Case: Off grid
  if (
    row < 0 ||
    row > grid.length - 1 ||
    column < 0 ||
    column > grid[0].length - 1
  ) {
    return true;
  }

  // Base Case: Tree taller than last tree
  if (parseInt(grid[row].charAt(column)) >= viewHeight) {
    return viewDistance;
  }
  viewDistance++;

  // create new point
  const newRow = row + DIRECTIONS[direction].row;
  const newColumn = column + DIRECTIONS[direction].col;

  // recurse
  return scenicScoreForDirection(
    newRow,
    newColumn,
    direction,
    grid,
    viewHeight,
    viewDistance
  );
}

console.log(findBestScenicScore(test));
