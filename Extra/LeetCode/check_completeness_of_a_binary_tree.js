// Given the root of a binary tree, determine if it is a complete binary tree.

// In a complete binary tree, every level, except possibly the last, is completely
// filled, and all nodes in the last level are as far left as possible. It can have
// between 1 and 2h nodes inclusive at the last level h.

// Example 1:
// Input: root = [1,2,3,4,5,6]
// Output: true
// Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

// Example 2:
// Input: root = [1,2,3,4,5,null,7]
// Output: false
// Explanation: The node with value 7 isn't as far left as possible.

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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  // Setup the queue and initialize it with the root node
  const queue = [root];

  // We're going to look for a "gap" in the nodes on each level
  // To do this, we just keep a record of if the last node was valid
  let foundNullNode = false;

  // We loop until queue is exhausted
  while (queue.length) {
    // Grab the first node out of the queue
    const node = queue.shift();

    // If the node is null, we set our foundNullNode to true,
    // and then start the next iteration
    if (!node) {
      foundNullNode = true;
      continue;
    }

    // If the previous node was null and this one is valid,
    // the tree is not complete and we can return false
    if (foundNullNode) {
      return false;
    }

    // If we made it past our base cases, add current node's
    // children to the queue
    queue.push(node.left, node.right);
  }

  // If we manage to make it through the loop , that means there
  // are no gaps, and the tree is "complete"
  return true;
};
