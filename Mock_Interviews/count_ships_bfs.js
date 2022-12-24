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
  // relates to a coord on the grid, I named them row and col
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // check if we've already been here
      if (beenHere[row][col]) {
        continue;
      }
      beenHere[row][col] = true;
      if (arrayOfShips[row][col] === "S") {
        searchCurrentShip(arrayOfShips, beenHere, { row: row, col: col });
        numberOfShips++;
      }
    }
  }

  return numberOfShips;
}

// BFS
function searchCurrentShip(arrayOfShips, beenHere, startingPoint) {
  const DIRECTIONS = [
    { col: 0, row: -1 }, //up
    { col: 1, row: 0 }, //right
    { col: 0, row: 1 }, //down
    { col: -1, row: 0 }, //left
  ];
  // while "queue" is greater than 0
  let queue = [startingPoint];
  while (queue.length > 0) {
    // enqueue current point
    const currentPoint = queue.shift();
    // look each direction
    for (let i = 0; i < DIRECTIONS.length; i++) {
      let direction = DIRECTIONS[i];
      let lookingAt = {
        row: currentPoint.row + direction.row,
        col: currentPoint.col + direction.col,
      };
      if (
        lookingAt.row < 0 ||
        lookingAt.row >= arrayOfShips.length ||
        lookingAt.col < 0 ||
        lookingAt.col > arrayOfShips[0].length ||
        beenHere[lookingAt.row][lookingAt.col]
      ) {
        continue;
      } else if (arrayOfShips[lookingAt.row][lookingAt.col] === "S") {
        // if a direction is valid, meaning it exists and is a ship
        // add that to the queue and mark as seen
        queue.push(lookingAt);
        beenHere[lookingAt.row][lookingAt.col] = true;
      } else {
        // if not valid, mark as seen but do not add to queue
        beenHere[lookingAt.row][lookingAt.col] = true;
      }
    }
  }
}

console.time("Total Time:");
console.log(countShips(ships));
console.log(countShips(ships2));
console.timeEnd("Total Time:");
