import { readFileSync } from "fs";

// Create Graph Function
function createGraph(letterMatrix) {
  const height = letterMatrix.length;
  const width = letterMatrix[0].length;

  const graph = [];
  for (let i = 0; i < height; i++) {
    const row = letterMatrix[i].split("");
    graph.push(row);
  }
  return graph;
}

// create prefix tree node
class Node {
  constructor(key, prefix) {
    this.key = key ? key.toUpperCase() : null;
    this.prefix = prefix ? prefix.toUpperCase() : null;
    this.isWord = false;
    this.children = {};
  }
}

// create prefix tree
class PrefixTree {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  insertWord(word) {
    if (typeof word !== "string") {
      return false;
    }
    if (this.contains(word)) {
      return true;
    }
    let currentNode = this.root;
    word = word.toUpperCase();

    for (let i = 0; i < word.length; i++) {
      const key = word.charAt(i);
      if (!currentNode.children[key]) {
        currentNode.children[key] = new Node(key, word.slice(0, i + 1));
      }
      currentNode = currentNode.children[key];
    }
    currentNode.isWord = true;
    this.size++;
    return true;
  }

  contains(word) {
    if (typeof word !== "string") {
      return false;
    }
    let currentNode = this.root;
    word = word.toUpperCase();

    for (let i = 0; i < word.length; i++) {
      const key = word.charAt(i);
      if (!currentNode.children[key]) {
        return false;
      }
      currentNode = currentNode.children[key];
    }
    return currentNode.isWord;
  }

  isPrefix(prefix) {
    if (typeof prefix !== "string") {
      return false;
    }
    let currentNode = this.root;
    prefix = prefix.toUpperCase();
    for (let i = 0; i < prefix.length; i++) {
      const key = prefix.charAt(i);
      if (!currentNode.children[key]) {
        return false;
      }
      currentNode = currentNode.children[key];
    }
    return true;
  }
}

const tree = new PrefixTree();
const allWords = readFileSync("./sowpods.txt").toString().trim().split("\n");
allWords.forEach((word) => {
  // boggle words should be 3+ characters long
  if (word.length > 2) {
    tree.insertWord(word);
  }
});

function findNeighbors(row, col, graph) {
  const size = graph.length;
  const DIRECTIONS = [
    { row: 1, col: 0 }, // up
    { row: 1, col: 1 }, // up -> right
    { row: 0, col: 1 }, // right
    { row: -1, col: 1 }, // right -> down
    { row: -1, col: 0 }, // down
    { row: -1, col: -1 }, // down -> left
    { row: 0, col: -1 }, // left
    { row: 1, col: -1 }, // left -> up
  ];
  const neighbors = [];
  DIRECTIONS.forEach((direction) => {
    const newRow = row + direction.row;
    const newCol = col + direction.col;
    if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size) {
      return;
    }

    neighbors.push({ row: newRow, col: newCol });
  });
  return neighbors;
}

function processNeighbors(path, neighbors, graph, prefixTree, prefix) {
  let validNeighbors = [];
  neighbors.forEach((neighbor) => {
    for (const point of path) {
      // check if in current path
      if (point.col === neighbor.col && point.row === neighbor.row) {
        return false;
      }
      // check if prefix exists
      const newPrefix =
        prefix + graph[neighbor.row][neighbor.col].toUpperCase();
      if (!prefixTree.isPrefix(newPrefix)) {
        return false;
      }
      // add all of the data as single object
      validNeighbors.push({
        row: neighbor.row,
        col: neighbor.col,
        prefix: newPrefix,
      });
    }
  });
  return validNeighbors;
}

function solve(letterMatrix, prefixTree) {
  // create graph
  const graph = createGraph(letterMatrix);
  const size = graph.length;

  // store found words
  const foundWords = new Set();

  // iterate over each letter, by column then row
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const startingPath = { row: row, col: col };
      const currentLetter = graph[row][col].toUpperCase();
      // dfs
      if (prefixTree.isPrefix(currentLetter)) {
        findWords([startingPath], currentLetter, graph, prefixTree, foundWords);
      }
    }
  }
  return foundWords;
}

function findWords(path, prefix, graph, prefixTree, foundWords) {
  const coords = path[path.length - 1];

  // check if current prefix is valid word
  if (prefixTree.contains(prefix)) {
    foundWords.add(prefix);
  }

  // get neighbors
  const possibleNeighbors = findNeighbors(coords.row, coords.col, graph);

  // This gives us objects that contain neighbors and the prefix at that neighbor
  const validNeighbors = processNeighbors(
    path,
    possibleNeighbors,
    graph,
    prefixTree,
    prefix
  );

  // iterate over neighbors, dfs on each
  validNeighbors.forEach((neighbor) => {
    findWords(
      [...path, { row: neighbor.row, col: neighbor.col }],
      neighbor.prefix,
      graph,
      prefixTree,
      foundWords
    );
  });
}

const sample1 = ["BE", "TQ"];
const sample2 = ["ZQQZ", "ZAEZ", "ZUDZ", "ZQQZ"];
const sample3 = ["MSEF", "RATD", "LONE", "KAFB"];

let answer = solve(sample1, tree);
console.log(answer);
answer = solve(sample2, tree);
console.log(answer);
answer = solve(sample3, tree);
console.log(answer);
