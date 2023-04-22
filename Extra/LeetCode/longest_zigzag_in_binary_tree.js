// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node;
// otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has
// a length of 0).

// Return the longest ZigZag path contained in that tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  // setup function
  let leftResult = 0;
  if (root.left) {
    leftResult = traverseZigZag(root.left, false, 1);
  }

  let rightResult = 0;
  if (root.right) {
    rightResult = traverseZigZag(root.right, true, 1);
  }
  return Math.max(leftResult, rightResult);
};

function traverseZigZag(node, left, numberOfJumps) {
  console.log(numberOfJumps);
  // Base Case:
  // Node doesn't have children
  if (node && !node.left && !node.right) {
    return numberOfJumps;
  }
  let leftResult = 0;
  let rightResult = 0;

  if (left) {
    leftResult = Math.max(
      node.left ? traverseZigZag(node.left, false, numberOfJumps + 1) : 0,
      node.right ? traverseZigZag(node.right, true, 1) : 0
    );
  } else {
    rightResult = Math.max(
      node.left ? traverseZigZag(node.left, false, 1) : 0,
      node.right ? traverseZigZag(node.right, true, numberOfJumps + 1) : 0
    );
  }

  return Math.max(leftResult, rightResult);
}
