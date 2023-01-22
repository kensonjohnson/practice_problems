// Given the root of a binary tree, return the preorder traversal of
// its nodes' values.

var preorderTraversal = function (root, numbers = []) {
  // base cases
  // if we hit a null
  if (root === null) {
    return [];
  }

  // recursion

  // store value
  numbers.push(root.val);
  // recurse left
  preorderTraversal(root.left, numbers);
  // recurse right
  preorderTraversal(root.right, numbers);

  return numbers;
};
