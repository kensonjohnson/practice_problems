// First in First out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    if (typeof value === "undefined") {
      return false;
    }

    const newNode = new Node(value);

    // If Empty
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return true;
    }

    // If not empty
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return true;
  }

  peek() {
    return this.head.value;
  }

  deque() {
    // If empty

    if (this.size <= 0) {
      return null;
    }

    // If last item
    if (this.size === 1) {
      const currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return currentNode.value;
    }

    const currentNode = this.head;
    this.head = currentNode.next;
    currentNode.next = null;
    this.size--;
    return currentNode.value;
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.deque());
console.log(queue);
