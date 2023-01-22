// This solution runs in O(n^2)

// There is a tree (i.e. a connected, undirected graph with no cycles) consisting
// of n nodes numbered from 0 to n - 1 and exactly n - 1 edges.

// You are given a 0-indexed integer array vals of length n where vals[i] denotes
// the value of the ith node. You are also given a 2D integer array edges where
// edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes
// ai and bi.

// A good path is a simple path that satisfies the following conditions:

// The starting node and the ending node have the same value.
// All nodes between the starting node and the ending node have values less than
// or equal to the starting node (i.e. the starting node's value should be the
// maximum value along the path).
// Return the number of distinct good paths.

// Note that a path and its reverse are counted as the same path.
// For example, 0 -> 1 is considered to be the same as 1 -> 0. A single node is
// also considered as a valid path.

// Example 1:
const vals = [1, 3, 2, 1, 3];
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
];
// Output: 6
// Explanation: There are 5 good paths consisting of a single node.
// There is 1 additional good path: 1 -> 0 -> 2 -> 4.
// (The reverse path 4 -> 2 -> 0 -> 1 is treated as the same as 1 -> 0 -> 2 -> 4.)
// Note that 0 -> 2 -> 3 is not a good path because vals[2] > vals[0].

// Example 2:
const vals2 = [1, 1, 2, 2, 3];
const edges2 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
];
// Output: 7
// Explanation: There are 5 good paths consisting of a single node.
// There are 2 additional good paths: 0 -> 1 and 2 -> 3.

// Example 3:
const vals3 = [1];
const edges3 = [];
// Output: 1
// Explanation: The tree consists of only one node, so there is one good path.

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
  const n = vals.length;
  // create a map of each node's neighbors
  const adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  edges.forEach((edge) => {
    const [parent, child] = edge;
    adjList.get(parent).push(child);
    adjList.get(child).push(parent);
  });

  const validPaths = new Set();

  // iterate over all nodes
  for (let i = 0; i < n; i++) {
    // dfs the tree looking for paths
    dfs(adjList, vals[i], vals, [i], validPaths);
  }
  return validPaths.size;
};

function dfs(adjList, startingValue, valueArray, path = [], validPaths) {
  // Base case
  // we've been here

  // current value is higher than value argument
  const node = path[path.length - 1]; // get current node from path
  if (valueArray[node] > startingValue) {
    return;
  }

  // check if current node's value === value argument
  if (valueArray[node] === startingValue) {
    // if yes, stringified k => v pair to validPaths
    // check if the reverse path already exists
    if (!validPaths.has(`${node}, ${path[0]}`)) {
      // if not, add the current path
      validPaths.add(`${path[0]}, ${node}`);
    }
  }

  // get neighbors
  const neighbors = adjList.get(node);

  // iterate over each neighbor
  neighbors.forEach((neighbor) => {
    // check if we have already been there
    if (path.includes(neighbor)) {
      return;
    }
    dfs(adjList, startingValue, valueArray, [...path, neighbor], validPaths);
  });
}

console.log(numberOfGoodPaths(vals, edges));
console.log(numberOfGoodPaths(vals2, edges2));
console.log(numberOfGoodPaths(vals3, edges3));
