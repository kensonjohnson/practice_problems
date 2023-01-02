class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  // prepend(value) -> adds a new node to the start of the list
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length++;
  }

  // append(value) -> adds a new node containing "value" to the end of the list
  append(value) {
    const newNode = new LinkedListNode(value, null);

    if (this.length < 1) {
      // this is the first node added, so set tail and head to this node
      this.head = this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // size -> returns the total number of nodes in the list
  get size() {
    return this.length;
  }

  // head -> returns the value of the first node in the list
  headValue() {
    return this.head.value;
  }

  // tail -> returns the value of the last node in the list
  tailValue() {
    return this.tail.value;
  }

  // at(index) -> returns the value of the node at a given index
  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i <= index - 1; i++) {
      node = node.next;
    }
    return node.value;
  }

  // pop -> removes the last element from the list
  pop() {
    if (this.length <= 1) {
      this.head = this.tail = null;
      return;
    }
    let node = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      node = node.next;
    }
    node.next = null;
    this.tail = node;
    this.length--;
  }

  // contains(value) -> returns true if the value passed is in the list,
  // otherwise returns false
  contains(value) {
    if (typeof value !== "number") {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  // find(value) -> returns the index of the first node containing value,
  // if no node contains given value return null
  find(value) {
    if (typeof value !== "number") {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (node.value === value) {
        return i;
      }
      node = node.next;
    }
    return null;
  }

  // toString -> represents the list nodes as strings, so you can print them out and
  // view them in the console. The output format is:
  // (value) -> (value) -> (value) -> null
  toString() {
    if (this.length < 1) {
      return "";
    }
    let string = `(${this.head.value})`;
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      string =
        string + `${node.next === null ? "->null" : `->(${node.next.value})`}`;
      node = node.next;
    }
    return string;
  }

  // insertAt(value, index) -> inserts a new node with given value at given index
  // returns true upon success and false upon failure
  insertAt(value, index) {
    if (typeof index !== "number" || index >= this.length || index < 0) {
      return false;
    }
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    let newNode = new LinkedListNode(value);
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return true;
  }

  // removeAt(index) -> removes the node at given index from the list
  removeAt(index) {
    if (typeof index !== "number" || index >= this.length || index < 0) {
      return false;
    }
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      node = node.next;
    }
    let toRemove = node.next;
    node.next = toRemove.next;
    toRemove.next = null;
    this.length--;
    return true;
  }
}
