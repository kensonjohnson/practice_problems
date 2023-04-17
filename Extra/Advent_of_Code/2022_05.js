const data = `        [Q] [B]         [H]        
[F] [W] [D] [Q]     [S]            
[D] [C] [N] [S] [G] [F]            
[R] [D] [L] [C] [N] [Q]     [R]    
[V] [W] [L] [M] [P] [S] [M]     [M]
[J] [B] [F] [P] [B] [B] [P] [F] [F]
[B] [V] [G] [J] [N] [D] [B] [L] [V]
[D] [P] [R] [W] [H] [R] [Z] [W] [S]
1   2   3   4   5   6   7   8   9 `;

// Create parsing function
function parseStartingPositions(stringOfStacks) {
  // split the string literal on each new line
  // reverse the created array
  const rowsData = stringOfStacks.split("\n").reverse();
  // create dictionary using the first row as header data
  // starting with the second (index 1) row on,
  // Parse string into crate data
}

function parseCratePlacement(crateString, stacks) {
  // split the string into n number of crates
}
// iterate over the crates
// if "crate" element not empty
// push that crate on to respective stack, remember index + 1
