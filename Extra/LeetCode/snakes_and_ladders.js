// You are given an n x n integer matrix board where the cells are labeled from 1 to
// n2 in a Boustrophedon style starting from the bottom left of the board
// (i.e. board[n - 1][0]) and alternating direction each row.

// You start on square 1 of the board. In each move, starting from square curr,
// do the following:

// Choose a destination square next with a label in the range
// [curr + 1, min(curr + 6, n2)].
// This choice simulates the result of a standard 6-sided die roll: i.e., there
// are always at most 6 destinations, regardless of the size of the board.
// If next has a snake or ladder, you must move to the destination of that snake
// or ladder. Otherwise, you move to next.
// The game ends when you reach the square n2.
// A board square on row r and column c has a snake or ladder if board[r][c] != -1.
// The destination of that snake or ladder is board[r][c]. Squares 1 and n2 do not
// have a snake or ladder.

// Note that you only take a snake or ladder at most once per move. If the destination
// to a snake or ladder is the start of another snake or ladder, you do not follow the
// subsequent snake or ladder.

// For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your
// destination square is 2. You follow the ladder to square 3, but do not follow
// the subsequent ladder to 4.
// Return the least number of moves required to reach the square n2. If it is not
// possible to reach the square, return -1.

// Example 1:
const board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];
// Output: 4
// Explanation:
// In the beginning, you start at square 1 (at row 5, column 0).
// You decide to move to square 2 and must take the ladder to square 15.
// You then decide to move to square 17 and must take the snake to square 13.
// You then decide to move to square 14 and must take the ladder to square 35.
// You then decide to move to square 36, ending the game.
// This is the lowest possible number of moves to reach the last square, so return 4.

// Example 2:
const board2 = [
  [-1, -1],
  [-1, 3],
];
// Output: 1

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // Setup basic data.
  // We get the size of the board, which we know will always be a square.
  const size = board.length;

  // It will be useful to know our destination as well.
  const destination = size * size;

  // We also track each "move" we make by recording the point.
  // Each point contains an index and the number of moves taken so far.
  // We build the "queue" with the first point added.
  const queue = [[1, 0]];

  // We also need to see where we have been, so we don't get stuck
  // in any cycles and to make decisions on where to go next.
  // Since we are saving points as indexes, a Set should work for this.
  const visisted = new Set();

  // We can also add our first point to the visited set
  visisted.add(1);

  // We move over the board in BFS, starting with the 1st index (bottom-left corner).
  while (queue.length) {
    // We grab the next in queue
    const [index, movesTaken] = queue.shift();
    // and populate all of the possible moves given a six sided dice.
    for (let i = 1; i <= 6; i++) {
      let newIndex = index + i;
      // Grab the coordinates of the new index
      let [row, col] = findCoords(size, newIndex);
      // and check if that square is a snake, ladder, or normal square.
      if (board[row][col] !== -1) {
        // When square is a snake or ladder, just use the index provided
        newIndex = board[row][col];
      }
      // Now that we've taken our move, increment our movesTaken
      const newMovesTaken = movesTaken + 1;
      // If our move landed on the destination, we are done!
      if (newIndex === destination) {
        return newMovesTaken;
      }
      // Otherwise, we setup the next move in the queue.
      // If the index we have has already been visisted, we don't add
      // it to the queue, we just move on.
      if (visisted.has(newIndex)) {
        continue;
      }
      visisted.add(newIndex);
      queue.push([newIndex, newMovesTaken]);
    }
  }

  // And finally, if we make it all of the way through our search,
  // that means we couldn't reach our destination.
  return -1;
};

// Takes in the board size and the "sqaure" that we're on,
// and returns the proper, zero indexed coordinates.
function findCoords(size, index) {
  const distanceFromTopLeft = size * size - index;
  let row = Math.floor(distanceFromTopLeft / size);
  let remainder = distanceFromTopLeft % size;
  if (size % 2 === 0) {
    if (row % 2 === 0) {
      let col = remainder;
      return [row, col];
    }
    let col = size - 1 - remainder;
    return [row, col];
  }
  if (row % 2 === 0) {
    let col = size - 1 - remainder;
    return [row, col];
  }
  let col = remainder;
  return [row, col];
}

// This function didn't end up getting use
// Takes in a board size and position on said board
// and returns the "square" that we're on, which
// we are calling index.
function findIndex(size, row, col) {
  const max = size * size;
  let index = max - row * size;

  if (size % 2 === 0) {
    if (row % 2 === 0) {
      return index - col;
    }
    return index - (size - col) + 1;
  }

  if (row % 2 === 0) {
    return index - col;
  }
  return index - (size - col) + 1;
}
console.log(snakesAndLadders(board)); // Expect 4
console.log(snakesAndLadders(board2)); // Expect 1
