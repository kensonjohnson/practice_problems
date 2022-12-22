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
      if (
        walk(arrayOfShips, ".", { x: x, y: y }, { x: x + 1, y: y }, beenHere)
      ) {
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
  // Starting point is not a ship
  if (arrayOfShips[startingPoint.y][startingPoint.x] === wall) {
    beenHere[startingPoint.y][startingPoint.x] = true;
    return false;
  }

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
  // We have been here
  if (
    beenHere[currentPoint.y] &&
    beenHere[currentPoint.y][currentPoint.x] &&
    beenHere[currentPoint.y][currentPoint.x] === true
  ) {
    return false;
  }

  // Base Case
  // We make it back to start
  if (
    currentPoint.x === startingPoint.x &&
    currentPoint.y === startingPoint.y
  ) {
    beenHere[currentPoint.y][currentPoint.x] = true;
    return true;
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

console.log(countShips(ships2));
