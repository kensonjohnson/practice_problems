// There is an undirected graph with n nodes, where each node is
// numbered between 0 and n - 1. You are given a 2D array graph,
// where graph[u] is an array of nodes that node u is adjacent to.
// More formally, for each v in graph[u], there is an undirected
// edge between node u and node v. The graph has the following
// properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate
// values). If v is in graph[u], then u is in graph[v] (the graph
// is undirected).
// The graph may not be connected, meaning there may be two nodes u
// and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two
// independent sets A and B such that every edge in the graph
// connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

// Example 1:
const graph1 = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
];
// Output: false
// Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.

// Example 2:
const graph2 = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
];
// Output: true
// Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  // even-odd

  // setup two buckets
  // boolean that tracks A or B
  let isBucketA = true;

  const bucketA = new Set();
  const bucketB = new Set();

  // iterate over input
  for (let i = 0; i < graph.length; i++) {
    const children = graph[i];
    if (isBucketA) {
      for (let j = 0; j < children.length; j++) {
        const child = children[j];
        if (bucketA.has(child)) {
          return false;
        }
        bucketB.add(child);
      }
      isBucketA = !isBucketA;
    } else {
    }
  }
  // place node in bucket determined by boolean
  // flip the boolean
};
