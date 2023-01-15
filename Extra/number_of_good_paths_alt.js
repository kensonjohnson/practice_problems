// This solution runs in O(n*logn) using Union Find

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
var findP = (arr, i) => {
  if (arr[i] < 0) {
    return i;
  }
  arr[i] = findP(arr, arr[i]);
  return arr[i];
};

var union = (parents, dp, vals, i, j) => {
  let p1 = findP(parents, i);
  let p2 = findP(parents, j);
  if (p1 === p2) {
    return 0;
  }
  parents[p1] = p2;
  let valM = Math.max(vals[i], vals[j]);
  let v1 = dp[p1][0] === valM ? dp[p1][1] : 0;
  let v2 = dp[p2][0] === valM ? dp[p2][1] : 0;

  dp[p2][0] = valM;
  dp[p2][1] = v1 + v2;
  return v1 * v2;
};

var numberOfGoodPaths = function (vals, edges) {
  let n = vals.length;
  let parents = new Array(n).fill(-1);
  let dp = Array.from({ length: n }, () => [0, 0]);

  for (let i = 0; i < n; i++) {
    dp[i][0] = vals[i];
    dp[i][1] = 1;
  }

  edges.sort(
    (a, b) =>
      Math.max(vals[a[0]], vals[a[1]]) - Math.max(vals[b[0]], vals[b[1]])
  );

  let res = n;
  for (let i = 0; i < edges.length; i++) {
    res += union(parents, dp, vals, edges[i][0], edges[i][1]);
  }
  return res;
};

console.log(numberOfGoodPaths(vals, edges));
console.log(numberOfGoodPaths(vals2, edges2));
console.log(numberOfGoodPaths(vals3, edges3));
