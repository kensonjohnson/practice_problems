// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which
// has some apples in their vertices. You spend 1 second to walk over one edge
// of the tree. Return the minimum time in seconds you have to spend to collect all
// apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where
// edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and
// bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true
// means that vertex i has an apple; otherwise, it does not have any apple.

// Example 1:
const input1 = 7;
const edges1 = [
  [0, 1],
  [0, 2],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 6],
];
const hasApple1 = [false, false, true, false, true, true, false];
// Expected output: 8
// Explanation: The figure above represents the given tree where red vertices
// have an apple. One optimal path to collect all apples is shown by the green
// arrows.

// Example 2:
const input2 = 7;
const edges2 = [
  [0, 1],
  [0, 2],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 6],
];
const hasApple2 = [false, false, true, false, false, true, false];
// Expected output: 6
// Explanation: The figure above represents the given tree where red vertices
// have an apple. One optimal path to collect all apples is shown by the green
// arrows.

// Example 3:
const input3 = 7;
const edges3 = [
  [0, 1],
  [0, 2],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 6],
];
const hasApple3 = [false, false, false, false, false, false, false];
// Expected output: 0

const input4 = 8;
const edges4 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [2, 5],
  [2, 6],
  [4, 7],
];
const hasApple4 = [true, true, false, true, false, true, true, false];
// Expected output: 10

const input5 = 4;
const edges5 = [
  [0, 2],
  [0, 3],
  [1, 2],
];
const hasApple5 = [false, true, false, false];

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const parentMap = new Map();
  let answer = 0;
  for (let i = 0; i < edges.length; i++) {
    parentMap.set(edges[i][1], edges[i][0]);
  }
  for (let i = 0; i < n; i++) {
    if (hasApple[i]) {
      let pointer = i;
      while (pointer !== 0) {
        const parent = parentMap.get(pointer);
        answer += 2;
        if (hasApple[parent]) {
          break;
        }
        hasApple[parent] = true;
        pointer = parent;
      }
    }
  }
  return answer;
};

console.log(minTime(input1, edges1, hasApple1));
console.log(minTime(input2, edges2, hasApple2));
console.log(minTime(input3, edges3, hasApple3));
console.log(minTime(input4, edges4, hasApple4));
console.log(minTime(input5, edges5, hasApple5));
