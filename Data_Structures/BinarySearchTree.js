class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  // constructor optionally takes in an array. A balanced BST is formed from that
  // array.
  constructor(array = []) {
    this.root = null;
    this.buildTree(array);
  }

  //----------------------------------------------------------------------------//
  // checkIfNumber(value) -> Returns true if given argument is a number primative.
  checkIfNumber(value) {
    if (typeof value === "number") {
      return true;
    }
    return false;
  }

  //----------------------------------------------------------------------------//
  // insert(item) -> Accepts a number or an array. If an array is given, only number
  // elements will be inserted into the BST.
  // Uses insertNode() helper function to insert nodes in their proper place.
  // Returns true upon successful insertion, otherwise returns false.
  insert(item) {
    if (Array.isArray(item)) {
      item.forEach((value) => {
        this.insert(value);
      });
      return true;
    }
    if (!this.checkIfNumber(item)) {
      return false;
    }
    let newNode = new Node(item);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    this.insertNode(this.root, newNode);
    return true;
  }

  // insertNode(node, newNode) -> Navigates to the proper location in BST to insert
  // newNode at that point.
  insertNode(node, newNode) {
    if (node.value >= newNode.value) {
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

  //----------------------------------------------------------------------------//
  // delete(value) -> Deletes a node with the given value, if it exists.
  // If a node is given as a starting point, only searches that node's subtree.
  delete(value, node = this.root) {
    // Base case
    // Node doesn't exist
    if (node === null) {
      return null;
    }

    // Base case
    // We found a node with our value
    if (node.value === value) {
      // if node has no children, just delete it
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // if node has one child on left,
      // return the child of this node to the parent of this node
      if (node.right === null) {
        node = node.left;
        return node;
      }

      // if node has one child on right
      // return the child of this node to the parent of this node
      if (node.left === null) {
        node = node.right;
        return node;
      }

      // if node has two children
      // find the smallest value in the right subtree,
      // set that value to this node,
      // delete the node that contained that value
      // return this node back up to it's parent
      let smallestNode = this.findSmallestInTree(node.right);
      node.value = smallestNode.value;
      node.right = this.delete(smallestNode.value, node.right);
      return node;
    }

    // Recursion
    if (node.value > value) {
      node.left = this.delete(value, node.left);
      return node;
    }
    if (node.value < value) {
      node.right = this.delete(value, node.right);
      return node;
    }
  }

  //----------------------------------------------------------------------------//
  // buildTree(array) -> takes in an array and builds a balanced bst with it
  // starts by sorting the array, then passing the sorted array to a helper function.
  // If a tree already exists, returns null
  buildTree(array) {
    if (this.root !== null) {
      return null;
    }
    if (array.length === 1) {
      if (this.checkIfNumber(array[0])) {
        this.insert(array[0]);
      }
      return;
    }
    let filteredArray = [];
    array.forEach((value) => {
      if (this.checkIfNumber(value)) {
        filteredArray.push(value);
      }
    });
    filteredArray.sort((a, b) => {
      return a - b;
    });
    this.createFromSortedArray(filteredArray);
  }

  // createFromSortedArray() -> takes in a sorted array and creates/inserts new nodes
  // from it's values.
  // The pattern goes like this: find midpoint, create new node and insert, repeat
  // on left and right sides of midpoint.
  createFromSortedArray(array, start = 0, end = array.length - 1) {
    // Base Case:
    // if array length < 1
    // stop
    if (start > end || array === []) {
      return null;
    }

    // Base Case:
    // if array length === 1
    // create and insert new node, then stop
    if (start === end) {
      this.insert(array[start]);
      return;
    }

    // get the midpoint
    // create node from midpoint
    // insert node
    const midpoint = Math.floor((start + end) / 2);
    this.insert(array[midpoint]);

    // repeat on left and right sides
    this.createFromSortedArray(array, start, midpoint - 1);
    this.createFromSortedArray(array, midpoint + 1, end);
  }

  //----------------------------------------------------------------------------//
  // isBalanced() -> returns true if tree is balanced.
  // Balanced is when the difference in height between the left and right sides of
  // the tree are 0 or 1.
  // If a node is given as a starting point, only searches that node's subtree.
  isBalanced(root = this.root) {
    if (!root) {
      return null;
    }
    let leftHeight = 0;
    let rightHeight = 0;
    if (!root.left && !root.right) {
      return true;
    }
    if (root.left && root.right) {
      leftHeight = this.height(root.left);
      rightHeight = this.height(root.right);
    }
    if (root.right === null) {
      leftHeight = this.height(root.left);
    }
    if (root.left === null) {
      rightHeight = this.height(root.right);
    }

    let difference = Math.abs(leftHeight - rightHeight);
    if (difference > 1) {
      return false;
    }
    return true;
  }

  //----------------------------------------------------------------------------//
  // balanceTree() -> Takes all of the values in the BST, creates an array and creates
  // a balanced tree from it.
  balanceTree() {
    const values = this.inorder();
    this.root = null;
    this.buildTree(values);
  }

  //----------------------------------------------------------------------------//
  // findSmallestInTree(node) -> finds the smallest value node in given node's subtree
  // and returns that node.
  findSmallestInTree(node = this.root) {
    if (node.left === null) {
      return node;
    }
    return this.findSmallestInTree(node.left);
  }

  // findLargestInTree(node) -> finds the largest value node in given node's subtree
  // and returns that node.
  findLargestInTree(node = this.root) {
    if (node.right === null) {
      return node;
    }
    return this.findLargestInTree(node.right);
  }

  // getRootNode() -> returns the BST root node
  getRootNode() {
    return this.root;
  }

  //----------------------------------------------------------------------------//
  // find(value, node) -> returns the first found node of a given value.
  // If a node is given as a starting point, it will only search that
  // node's subtree.
  find(value, node = this.root) {
    if (typeof value !== "number") {
      return null;
    }
    if (node.value === value) {
      return node;
    }
    if (node.value < value) {
      return this.find(value, node.right);
    }
    return this.find(value, node.left);
  }

  //----------------------------------------------------------------------------//
  // preorder(callbackFn, node, list) ->  Accepts a callback function.
  // Traverses the tree via depth-first preorder and yields each node to the provided function
  // as an argument.
  // Returns an array of values if no callback function is given.
  preorder(callbackFn, node = this.root, list = []) {
    if (node === null) {
      return null;
    }
    callbackFn ? callbackFn(node) : list.push(node.value);
    this.preorder(callbackFn, node.left, list);
    this.preorder(callbackFn, node.right, list);

    return list;
  }

  //----------------------------------------------------------------------------//
  // inorder(callbackFn, node, list) ->  Accepts a callback function.
  // Traverses the tree via depth-first inorder and yields each node to the provided function
  // as an argument.
  // Returns an array of values if no callback function is given.
  inorder(callbackFn, node = this.root, list = []) {
    if (node === null) {
      return null;
    }
    this.inorder(callbackFn, node.left, list);
    callbackFn ? callbackFn(node) : list.push(node.value);
    this.inorder(callbackFn, node.right, list);
    return list;
  }

  //----------------------------------------------------------------------------//
  // preorder(callbackFn, node, list) ->  Accepts a callback function.
  // Traverses the tree via depth-first preorder and yields each node to the provided function
  // as an argument.
  // Returns an array of values if no callback function is given.
  postorder(callbackFn, node = this.root, list = []) {
    if (node === null) {
      return null;
    }
    this.postorder(callbackFn, node.left, list);
    this.postorder(callbackFn, node.right, list);
    callbackFn ? callbackFn(node) : list.push(node.value);
    return list;
  }

  //----------------------------------------------------------------------------//
  // levelOrder(callbackFn, node, list) -> Accepts a callback function.
  // Traverses the tree via breadth-first search and yields each node to the provided function
  // as an argument.
  // Returns an array of values if no callback function is given.
  levelOrder(callbackFn, node = this.root, list = []) {
    let queue = [node];
    if (node === null) {
      return;
    }
    while (queue.length > 0) {
      node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      callbackFn ? callbackFn(node) : list.push(node.value);
    }

    return list;
  }

  //----------------------------------------------------------------------------//
  // traverse(options) -> prints all values to console
  // options:
  // none -> outputs in order,
  // preorder: true -> outputs in preorder,
  // postorder: true -> outputs in postorder
  // preorder:true and postorder:true -> invalid use, outputs in order.
  traverse(options = { preorder: false, postorder: false, levelorder: false }) {
    let string = "";
    if (options.preorder && !options.postorder && !options.levelorder) {
      this.preorder((node) => {
        string = string + `${node.value}, `;
      });
      console.log(string + "done");
      return;
    }
    if (options.postorder && !options.preorder && !options.levelorder) {
      this.postorder((node) => {
        string = string + `${node.value}, `;
      });
      console.log(string + "done");
      return;
    }
    if (options.levelorder && !options.preorder && !options.postorder) {
      this.levelOrder((node) => {
        string = string + `${node.value}, `;
      });
      console.log(string + "done");
      return;
    }

    this.inorder((node) => {
      string = string + `${node.value}, `;
    });
    console.log(string + "done");
  }

  //----------------------------------------------------------------------------//
  // height(node) -> takes in a node and returns the height of that node in the tree.
  // Height is the number of edges in the longest path from the node.
  height(node = this.root) {
    // Base Case
    // node doesn't exist
    // return 0
    if (node === null) return 0;

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }

  //----------------------------------------------------------------------------//
  // depth(node) -> takes in a node and returns it's depth.
  // Depth is the number of edges from the root to the node.
  depth(toNode = this.root, from = this.root, depth = 0) {
    // Base Case
    // node doesn't exist
    if (!from) {
      return -1;
    }

    // Base Case
    // we found the given node
    if (toNode === from) {
      return depth;
    }
    // Search for node
    // if found, return its depth,
    // if not found, return -1
    if (from.value > toNode.value) {
      return this.depth(toNode, from.left, ++depth);
    } else {
      return this.depth(toNode, from.right, ++depth);
    }
  }

  //----------------------------------------------------------------------------//
  // printTree() -> outputs a visual representation of the tree to the console.
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
