// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).

// Example 1:
const root1 = [1, 2, 2, 3, 4, 4, 3];
// Output: true

// Example 2:
const root2 = [1, 2, 2, null, 3, null, 3];
// Output: false

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
var isSymmetric = function (root) {
  if (!root) {
    return false;
  }
  // setup the queue with initial values
  let queue = [];
  queue.push([root.left, root.right]);
  // iterate until queue is empty
  while (queue.length) {
    // grab first tuple
    const [node1, node2] = queue.pop();
    // check if items in queue are symmetric
    if (node1 === null && node2 === null) {
      // if both are null, we are still symmetrical,
      // but there are no children to add to queue
      continue;
    }
    // We already checked if both were null,
    // this checks if only one is null
    if (!node1 || !node2) {
      return false;
    }
    // at this point, both nodes exist, so check there value
    if (node1.val !== node2.val) {
      return false;
    }
    // we're still symmetrical, so add the next items in the queue
    queue.push([node1.left, node2.right]);
    queue.push([node1.right, node2.left]);
  }

  // if we make it out of the loop, return true
  return true;
};
