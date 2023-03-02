class MinHeap {
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
   * This function returns the minimum value in the heap which is the root,
   *  i.e., the first value in the array. It does not modify the heap itself.
   *  The time complexity of this function is in O(1) constant time.
   */
  getMin() {
    if (this.heap.length != 0) return this.heap[0];
    return null;
  }
  /**
   * This function removes and returns the minimum value in the heap. The
   *  time complexity of this function is in O(log(n)) because that is the
   *  maximum number of nodes that would have to be traversed and/or swapped.
   */
  removeMin() {
    if (this.heap.length > 1) {
      let min = this.heap[0];
      // move the last child node to root
      this.heap[0] = this.heap.pop();
      this._minHeapify(0);
      return min;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else return null;
  }
  /**
   * This function restores the heap property after a node is removed. It
   *  swaps the values of the parent nodes with the values of their largest
   *  child nodes until the heap property is restored. The time complexity
   *  of this function is in O(log(n)) because that is the maximum number
   *  of nodes that would have to be traversed and/or swapped.
   */
  _minHeapify(index) {
    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = leftChild + 1;
      let smallest = index;
      // if the leftChild exists & index value is less the left child, set
      // the smallest to leftChild
      if (
        this.heap.length > leftChild &&
        this.heap[smallest] > this.heap[leftChild]
      )
        smallest = leftChild;
      // if the rightChild exists & index value is less the right child,
      // set the smallest to rightChild
      if (
        this.heap.length > rightChild &&
        this.heap[smallest] > this.heap[rightChild]
      )
        smallest = rightChild;
      // if root/parent is not smallest, then swap with the smallest
      if (smallest !== index) {
        let temp = this.heap[smallest];
        this.heap[smallest] = this.heap[index];
        this.heap[index] = temp;
        this._minHeapify(smallest);
      } else break;
    }
  }
  /**
   * This function restores heap property by swapping the value at a parent
   *  node if it is less than the value at a child node. The time complexity
   *  of this function is in O(log(n)) because that is the maximum number of
   *  nodes that would have to be traversed and/or swapped.
   */
  _bubbleUp(index) {
    //Fetch the element that has to be moved
    const element = this.heap[index];
    while (index > 0) {
      // Find the parent element's index and fetch it
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      // if parent is lesser than child,then swap
      if (parent >= element) {
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  // Accepts an array to populate the heap
  buildHeap(arr) {
    this.heap = arr;
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this._minHeapify(i);
    }
  }

  // Adds together all numbers in the heap
  get sumTotal() {
    if (this.heap.length === 1) {
      return this.heap[0];
    }
    if (this.heap.length < 1) {
      return null;
    }
    let sum = 0;
    this.heap.forEach((number) => {
      sum = sum + number;
    });
    return sum;
  }
}

const array = [51, 2, 36, 9, 8, 7, 4, 21, 68, 9, 621, 3];
const minHeap = new MinHeap();
array.forEach((number) => {
  minHeap.insert(number);
});
console.log(minHeap);
