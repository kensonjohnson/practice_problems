// LRUcache on LeetCode

class LimitedDictionary {
  constructor(limit) {
    this.limit = limit;
    this.dictionary = new Map();
    this.size = 0;
  }

  // takes in an integer key, returns the value at that key
  // returns null if key does not exist
  get(key) {
    // use Map.has() for lookup
    // return value
  }

  put(key, value) {}
}

class DoublyLinkedList {
  constructor(limit) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.limit = limit;
  }

  append(node) {
    // null checking of value handled by outer class

    if (this.head === null || this.tail === null) {
      this.head = node;
      this.tail = this.head;
      this.size++;
      return;
    }

    // change to insert at head
    if (this.size < limit) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size++;
      return;
    }

    // add to the front
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    // remove the last

    const lastNode = this.tail.prev;
    lastNode.next = null;
    this.tail = lastNode;
  }

  updateItem() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.lastAccessed = Date.now();
    this.next = null;
    this.prev = null;
  }
}
