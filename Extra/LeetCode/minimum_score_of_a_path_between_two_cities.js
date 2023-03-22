// You are given a positive integer n representing n cities numbered from 1 to n.
// You are also given a 2D array roads where roads[i] = [ai, bi, distancei]
// indicates that there is a bidirectional road between cities ai and bi with
// a distance equal to distancei. The cities graph is not necessarily connected.

// The score of a path between two cities is defined as the minimum distance of
// a road in this path.

// Return the minimum possible score of a path between cities 1 and n.

// Note:
// A path is a sequence of roads between two cities.
// It is allowed for a path to contain the same road multiple times, and you can
// visit cities 1 and n multiple times along the path.
// The test cases are generated such that there is at least one path between 1
// and n.

// Example 1:
const n1 = 4;
const roads1 = [
  [1, 2, 9],
  [2, 3, 6],
  [2, 4, 5],
  [1, 4, 7],
];
// Output: 5
// Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4.
// The score of this path is min(9,5) = 5.
// It can be shown that no other path has less score.

// Example 2:
const n2 = 4;
const roads2 = [
  [1, 2, 2],
  [1, 3, 4],
  [3, 4, 7],
];
// Output: 2
// Explanation: The path from city 1 to 4 with the minimum score
// is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  // Create adjacency list
  const adjList = {};
  for (let i = 1; i < n + 1; i++) {
    adjList[i] = []; // create property with empty array for each node
  }

  // Populate all connections for each node
  for (const [startNode, endNode, distance] of roads) {
    adjList[startNode].push([endNode, distance]);
    adjList[endNode].push([startNode, distance]);
  }
  const visited = new Set(); // Track visited nodes
  const queue = [1]; // For BFS
  visited.add(1); // We only look at nodes past the first one

  let answer = Infinity;
  while (queue.length) {
    const node = queue.shift();
    for (const [next, distance] of adjList[node]) {
      answer = Math.min(answer, distance);
      if (visited.has(next)) continue;

      visited.add(next);
      queue.push(next);
    }
  }

  return answer;
};

console.log(minScore(n1, roads1));
console.log(minScore(n2, roads2));
