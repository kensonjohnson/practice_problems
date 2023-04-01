//Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  // Create new tree
  const newRoot = new TreeNode();
  let tail = newRoot;

  function inOrder(node) {
    // Base Case: node is null
    if (!node) {
      return;
    }

    // Recursion
    inOrder(node.left);
    tail.right = new TreeNode(node.val);
    tail = tail.right;
    inOrder(node.right);
  }
  inOrder(root);
  return newRoot;
};
