// create 8x8 gameboard
// 0 represents an empty tile

export function createGamebaord(height, width, char = " ") {
  let gameboard = [];
  if (!height || !width || height < 1 || width < 1) {
    return null;
  }
  for (let i = 0; i < height; i++) {
    gameboard.push([]);
    for (let j = 0; j < width; j++) {
      gameboard[i].push(char);
    }
  }
  return gameboard;
}

// Helper function to display the current board
export function displayBoard(board) {
  let top = "┌───";
  let header = "│ ◢ ";
  let seperator = "├───";
  let bottom = "└───";
  for (let i = 0; i <= board[0].length; i++) {
    if (i > 0) {
      top += "┬───";
      header += `│ ${i} `;
      seperator += "┼───";
      bottom += "┴───";
    }
  }
  top += "┐";
  header += "│";
  seperator += "┤";
  bottom += "┘";
  console.log(top);
  console.log(header);
  console.log(seperator);
  board.forEach((row, index) => {
    let string = `│ ${index + 1} `;
    row.forEach((tile) => {
      string += `│ ${tile} `;
    });
    string += "│";
    console.log(string);
    if (index + 1 < board.length) {
      console.log(seperator);
    }
  });
  console.log(bottom);
}

const KNIGHT_MOVES = [
  { row: 2, col: 1 }, // up 2, right 1
  { row: 1, col: 2 }, // up 1, right 2
  { row: -1, col: 2 }, // down 1, right 2
  { row: -2, col: 1 }, // down 2, right 1
  { row: -2, col: -1 }, // down 2, left 1
  { row: -1, col: -2 }, // down 1, left 2
  { row: 1, col: -2 }, // up 1, left 2
  { row: 2, col: -1 }, // up 2, left 1
];

export function findPath(startingPosition, targetPosition) {
  if (
    startingPosition.row === targetPosition.row &&
    startingPosition.col === targetPosition.col
  ) {
    return "Already there!";
  }
  let seen = createGamebaord(8, 8, false);

  // convert the inputed coords to zero index
  const currentPosition = {
    row: startingPosition.row - 1,
    col: startingPosition.col - 1,
    path: [[startingPosition.row - 1, startingPosition.col - 1]],
  };
  const target = { row: targetPosition.row - 1, col: targetPosition.col - 1 };

  // Generate starting moves and mark them as seen
  const startingMoves = generateMoveset(currentPosition, seen);
  startingMoves.forEach((move) => {
    seen[move.row][move.col] = true;
  });

  let notFound = true;
  let finalPathObject;
  let queue = [...startingMoves];
  while (notFound) {
    const current = queue.shift();
    if (current.row === target.row && current.col === target.col) {
      notFound = false;
      finalPathObject = current;
      break;
    }
    const validMoves = generateMoveset(current, seen);
    queue = [...queue, ...validMoves];
  }
  return finalPathObject.path;
}

function generateMoveset(position, seen) {
  let validMoves = [];
  KNIGHT_MOVES.forEach((movement) => {
    const newRow = position.row + movement.row;
    const newCol = position.col + movement.col;
    const move = {
      row: newRow,
      col: newCol,
      path: [...position.path, [newRow, newCol]],
    };
    if (isValidTile(move, seen)) {
      validMoves.push(move);
    }
  });
  return validMoves;
}

function isValidTile(position, seen) {
  if (
    position.row < 0 ||
    position.row > 7 ||
    position.col < 0 ||
    position.col > 7 ||
    seen[position.row][position.col]
  ) {
    return false;
  }
  return true;
}
