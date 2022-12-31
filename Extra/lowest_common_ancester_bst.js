// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of
// two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is
// defined between two nodes p and q as the lowest node in T that has both p and q
// as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of
// itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const test = [6, 2, 8, 0, 4, 7, 9, 3, 5];
const bst = new BinarySearchTree();
test.forEach((val) => {
  bst.insert(val);
});
const pTestNode = new Node(2);
const qTestNode = new Node(4);

function lca(node, p, q) {
  // base cases
  // 1. both p and q are less than current node
  // traverse left
  if (node.val > p.val && node.val > q.val) {
    return lca(node.left, p, q);
  }

  // 2. both p and q are greater than current node
  // traverse right
  if (node.val < p.val && node.val < q.val) {
    return lca(node.right, p, q);
  }

  // 3. root is one of the nodes given
  // 4. one given node is higher than current node, and other is lower
  // this is lowest common ancestor, return current node
  return node;
}

console.log(lca(bst.root, pTestNode, qTestNode));
