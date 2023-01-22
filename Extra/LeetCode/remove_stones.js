// You are given a 0-indexed integer array piles, where piles[i] represents the
// number of stones in the ith pile, and an integer k. You should apply the
// following operation exactly k times:

// Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
// Notice that you can apply the operation on the same pile more than once.

// Return the minimum possible total number of stones remaining after applying
// the k operations.

// floor(x) is the greatest integer that is smaller than or equal to x
// (i.e., rounds x down).

// Example 1:

// Input: piles = [5,4,9], k = 2
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [5,4,5].
// - Apply the operation on pile 0. The resulting piles are [3,4,5].
// The total number of stones in [3,4,5] is 12.

// Example 2:

// Input: piles = [4,3,6,7], k = 3
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [4,3,3,7].
// - Apply the operation on pile 3. The resulting piles are [4,3,3,4].
// - Apply the operation on pile 0. The resulting piles are [2,3,3,4].
// The total number of stones in [2,3,3,4] is 12.

const test1 = [5, 4, 9]; // k = 2 expect 12
const test2 = [4, 3, 6, 7]; // k = 3 expect 12
const test3 = [4122, 9928, 3477, 9942]; // k = 6 expect 8768

import { piles, k } from "./sample_data.js";

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    //create a new child at the end of the heap
    this.heap.push(val);
    let index = this.heap.length - 1;
    this._bubbleUp(index);
  }
  /**
   * This function returns the maximum value in the heap which is the root, i.e., the first value in the array. It does not modify the heap itself. The time complexity of this function is in O(1) constant time.
   */
  getMax() {
    if (this.heap.length != 0) return this.heap[0];
    return null;
  }
  /**
   * This function removes and returns the maximum value in the heap. The time complexity of this function is in O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped.
   */
  removeMax() {
    if (this.heap.length > 1) {
      let max = this.heap[0];
      // move the last child node to root
      this.heap[0] = this.heap.pop();
      this._maxHeapify(0);
      return max;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else return null;
  }
  /**
   * This function restores the heap property after a node is removed. It swaps the values of the parent nodes with the values of their largest child nodes until the heap property is restored. The time complexity of this function is in O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped.
   */
  _maxHeapify(index) {
    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = leftChild + 1;
      let largest = index;
      // if the leftChild exists & index value is less the left child, set the largest to leftChild
      if (
        this.heap.length > leftChild &&
        this.heap[largest] < this.heap[leftChild]
      )
        largest = leftChild;
      // if the rightChild exists & index value is less the right child, set the largest to rightChild
      if (
        this.heap.length > rightChild &&
        this.heap[largest] < this.heap[rightChild]
      )
        largest = rightChild;
      // if root/parent is not largest, then swap with the largest
      if (largest !== index) {
        let temp = this.heap[largest];
        this.heap[largest] = this.heap[index];
        this.heap[index] = temp;
        this._maxHeapify(largest);
      } else break;
    }
  }
  /**
   * This function restores heap property by swapping the value at a parent node if it is less than the value at a child node. The time complexity of this function is in O(log(n)) because that is the maximum number of nodes that would have to be traversed and/or swapped.
   */
  _bubbleUp(index) {
    //Fetch the element that has to be moved
    const element = this.heap[index];
    while (index > 0) {
      // Find the parent element's index and fetch it
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      // if parent is lesser than child,then swap
      if (parent <= element) {
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  /**
   * Let’s build a max-heap now. Suppose we have nn elements in an array which represents our heap. For every node to be positioned in accordance with the max-heap property, we call the _maxHeapify method at every index of that array, starting from the bottom of the heap
   */
  buildHeap(arr) {
    this.heap = arr;
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this._maxHeapify(i);
    }
  }
}

// function takes in array of integers and k integer
// halves a random pile, does this k times
function minStoneSum(piles, k) {
  let tree = new MaxHeap();
  tree.buildHeap(piles);
  for (let i = 0; i < k; i++) {
    let highest = tree.removeMax();
    let halved = highest - Math.floor(highest / 2);
    tree.insert(halved);
  }

  let sum = 0;
  tree.heap.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}

console.log(minStoneSum(test1, 2));
console.log(minStoneSum(test2, 3));
console.log(minStoneSum(test3, 6));
console.log(minStoneSum(piles, k));
