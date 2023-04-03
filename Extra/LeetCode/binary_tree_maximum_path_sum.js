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
var maxPathSum = function (root) {
  var max = Number.MIN_SAFE_INTEGER; //-9007199254740991
  getBestPathSum(root);
  // Store the best "path" found so far. This is really just storing the sum
  // of that path.
  return max;
  // Depth First Search (Recursion)
  function getBestPathSum(node) {
    if (!node) return 0;
    // Use depth first search to find the "value" of each node's child tree,
    // where value is the best path found in terms of summing the values.
    const leftSum = getBestPathSum(node.left);
    const rightSum = getBestPathSum(node.right);
    max = Math.max(max, node.val + leftSum + rightSum); // Store new max if current is higher
    return Math.max(0, node.val + leftSum, node.val + rightSum); // Pass callback value up
  }
};
