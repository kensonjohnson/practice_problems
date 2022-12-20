// There is a bi-directional graph with n vertices, where each vertex is labeled
// from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D
// integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional
// edge between vertex ui and vertex vi. Every vertex pair is connected by at most
// one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to
// vertex destination.

// Given edges and the integers n, source, and destination, return true if there is
// a valid path from source to destination, or false otherwise.

const n1 = 3;
const edges1 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source1 = 0;
const destination1 = 2;

const n2 = 6;
const edges2 = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
const source2 = 0;
const destination2 = 5;
