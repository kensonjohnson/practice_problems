// Write a function that counts of the number of ships in a 2D grid.

// - Input: an array of arrays of strings, representing a 2D grid. The strings are either a `"."` for open water, or an `"S"` for part of a ship. Connected `"S"`es are part of the same ship.
// - Output: an integer that is the count of the number of ships in the grid.

// Facts about ships:

// - Ships are only horizontal or vertical, not diagonal.
// - Ships have a width of one or more and a height of one or more.
// - Ships never touch each other.

// The input will always be a well-formed grid (all rows are the same length).

const ships = [
  [".", "S", ".", "S"],
  [".", ".", ".", "S"],
  ["S", "S", ".", "S"],
  [".", ".", ".", "S"],
];

const ships2 = [
  ["S", "S", ".", "S", "S", "S", ".", "."],
  ["S", "S", ".", "S", "S", "S", ".", "."],
  ["S", "S", ".", ".", ".", ".", "S", "S"],
];

const DIRECTIONS = [
  { x: 0, y: -1 }, //up
  { x: 1, y: 0 }, //right
  { x: 0, y: 1 }, //down
  { x: -1, y: 0 }, //left
];
function countShips(arrayOfShips) {
  // create array to track where we've been
  let rows = arrayOfShips.length;
  let cols = arrayOfShips[0].length;
  let beenHere = [];
  for (let i = 0; i < rows; i++) {
    beenHere.push([]);
    for (let j = 0; j < cols; j++) {
      beenHere[i].push(false);
    }
  }
  let numberOfShips = 0;
  // normally this would be named for i and for j, but to understand how each
  // relates to a coord on the grid, I named them y and x
  for (let y = 0; y < arrayOfShips.length; y++) {
    for (let x = 0; x < arrayOfShips[y].length; x++) {
      if (beenHere[y][x] === true) {
        continue;
      }
      if (walk(arrayOfShips, ".", { x: x, y: y }, { x: x, y: y }, beenHere)) {
        numberOfShips++;
      }
    }
  }
  return numberOfShips;
}

// type walk(
// arrayOfShips : [[strings]],
// wall : string,
// startingPoint : {x: number, y: number},
// currentPoint : {x: number, y: number},
// beenHere : [[boolean]]){
// returns boolean
// }
function walk(arrayOfShips, wall, startingPoint, currentPoint, beenHere) {
  // Base Case
  // Off the map
  if (
    currentPoint.x < 0 ||
    currentPoint.x >= arrayOfShips[0].length ||
    currentPoint.y < 0 ||
    currentPoint.y >= arrayOfShips.length
  ) {
    return false;
  }
  // Base Case
  // Not a ship
  if (
    arrayOfShips[currentPoint.y] &&
    arrayOfShips[currentPoint.y][currentPoint.x] &&
    arrayOfShips[currentPoint.y][currentPoint.x] === wall
  ) {
    beenHere[currentPoint.y][currentPoint.x] = true;
    return false;
  }

  // Base Case
  // We make it back to start
  if (
    currentPoint.x === startingPoint.x &&
    currentPoint.y === startingPoint.y &&
    beenHere[currentPoint.y][currentPoint.x]
  ) {
    beenHere[currentPoint.y][currentPoint.x] = true;
    return true;
  }

  // Base Case
  // We have been here
  if (
    beenHere[currentPoint.y] &&
    beenHere[currentPoint.y][currentPoint.x] &&
    beenHere[currentPoint.y][currentPoint.x] === true
  ) {
    return false;
  }

  // Recursion steps
  // 1. pre
  beenHere[currentPoint.y][currentPoint.x] = true;

  // Recursion steps
  // 2. recurse
  for (let i = 0; i < DIRECTIONS.length; i++) {
    if (
      walk(
        arrayOfShips,
        wall,
        startingPoint,
        {
          x: currentPoint.x + DIRECTIONS[i].x,
          y: currentPoint.y + DIRECTIONS[i].y,
        },
        beenHere
      )
    ) {
      return true;
    }
  }

  // Recursion steps
  // 3. post
  return false;
}

console.time("Total Time:");
console.log(countShips(ships));
console.log(countShips(ships2));
console.timeEnd("Total Time:");
