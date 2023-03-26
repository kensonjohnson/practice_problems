// https://leetcode.com/problems/longest-cycle-in-a-graph/
// You are given a directed graph of n nodes numbered from 0 to n - 1, where
// each node has at most one outgoing edge.

// The graph is represented with a given 0-indexed array edges of size n,
// indicating that there is a directed edge from node i to node edges[i].
// If there is no outgoing edge from node i, then edges[i] == -1.

// Return the length of the longest cycle in the graph. If no cycle exists,
// return -1.

// A cycle is a path that starts and ends at the same node.

// Example 1:
const edges1 = [3, 3, 4, 2, 3];
// Output: 3
// Explanation: The longest cycle in the graph is the cycle: 2 -> 4 -> 3 -> 2.
// The length of this cycle is 3, so 3 is returned.

// Example 2:
const edges2 = [2, -1, 3, 1];
// Output: -1
// Explanation: There are no cycles in this graph.

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycleDFS = function (edges) {
  const visited = new Set();
  let longestCycleFound = -1; // Default return of -1
  for (let node = 0; node < edges.length; node++) {
    const connections = new Map(); // this stores the path from current node
    let currentCycleLength = detectCycles(edges, visited, connections, node, 0);
    if (currentCycleLength > longestCycleFound) {
      longestCycleFound = currentCycleLength;
    }
  }
  // Recursively search for a cycle.
  // If one found, return length of cycle, otherwise return -1
  function detectCycles(edges, visited, connections, node, length) {
    // Base Case: Cycle detected
    if (connections.has(node)) {
      // We get the length of the cycle by subtracting the length of non-cyclic
      // portion from the total connections found.
      return length - connections.get(node);
    }
    // Base Case: We have been here before
    if (visited.has(node)) {
      return -1;
    }

    connections.set(node, length); // Track our length at each iteration
    visited.add(node);

    if (edges[node] >= 0)
      return detectCycles(edges, visited, connections, edges[node], length + 1);

    connections.delete(node);
  }
  return longestCycleFound;
};

var longestCycle = function (edges) {
  // The visited map serves two purposes:
  // Record if we have seen a node, and record how we entered that node.
  // We can use this information to detect cycles.
  const visited = new Map();
  let answer = -1; // Our default return

  for (let node = 0; node < edges.length; node++) {
    // Because of our constraints, each node can only be part of one solution.
    // This means we can safely skip it if we have already seen it.
    if (visited.has(node)) {
      continue;
    }

    // If we haven't already seen this node, it has the potential of
    // leading to a new cycle. We start by storing the current node.
    let currentNode = node;

    // This loop will run until a leaf is found. Leaves point to -1.
    while (currentNode !== -1) {
      // Cycle Detection:
      // Follow path given by edges until a leaf node is found
      // or we stumble upon a node we already visited (a cycle).
      if (!visited.has(currentNode)) {
        visited.set(currentNode, node);
        currentNode = edges[currentNode];
        continue;
      }

      // If we make it this far, then we entered a previously visited node.
      // If the entrance previously recorded for this node is the same as
      // the entrance we just took, that means we found a cycle.
      if (visited.get(currentNode) === node) {
        // Find the length of the cycle:
        // Set this node as the starting point.
        let cycleLength = 1;
        let startNode = currentNode;
        currentNode = edges[currentNode];

        // Iterate through the cycle until we return to the start,
        // incrementing our cycle length each iteration.
        while (currentNode !== startNode) {
          cycleLength++;
          currentNode = edges[currentNode];
        }
        // Check this cycle length against previous longest length
        answer = Math.max(cycleLength, answer);
      }
      // Our work is done, break out.
      break;
    }
  }
  return answer;
};

console.log(longestCycleDFS(edges1));
console.log(longestCycleDFS(edges2));
console.log(longestCycle(edges1));
console.log(longestCycle(edges2));
