class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    // null checking
    if (typeof value === "undefined") {
      return false;
    }

    const newNode = new Node(value);

    // If empty
    if (this.size === 0) {
      this.tail = newNode;
      this.size++;
      return true;
    }

    // If not empty
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;
  }

  peek() {
    return this.tail.value;
  }

  pop() {
    // If empty
    if (this.size <= 0) {
      return null;
    }

    // If last item
    if (this.size === 1) {
      const node = this.tail;
      this.tail = null;
      this.size = 0;
      return node.value;
    }

    const node = this.tail;
    this.tail = node.prev;
    node.prev = null;
    this.size--;
    return node.value;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop()); // Expect 5
console.log(stack);
console.log(stack.peek());
// Last in First out
