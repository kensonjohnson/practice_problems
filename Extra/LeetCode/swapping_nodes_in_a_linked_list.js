// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth
// node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:
const head1 = [1, 2, 3, 4, 5];
const k1 = 2;
// Output: [1,4,3,2,5]

// Example 2:
const head2 = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5];
const k2 = 5;
// Output: [7,9,6,6,8,7,3,0,9,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  // Null checking
  if (!head) {
    return null;
  }

  // Create a leftNode and a rightNode and set them both to head
  let leftNode = head;
  let rightNode = head;

  // Find the leftNode at k
  for (let i = 1; i < k; i++) {
    leftNode = leftNode.next;
  }

  // Store a reference to the node at k so we can walk it to the end
  let currentNode = leftNode;

  // Walk from the node at k to the end, updating the rightNode node in step.
  // This will cause the rightNode node to be k steps away from the end
  while (currentNode.next) {
    currentNode = currentNode.next;
    rightNode = rightNode.next;
  }

  // Finally, we can perform the swap
  let temp = leftNode.val;
  leftNode.val = rightNode.val;
  rightNode.val = temp;
  return head;
};

function generateLinkedList(data) {
  const head = { val: data[0], next: null };
  let node = head;
  for (let i = 1; i < data.length; i++) {
    node.next = { val: data[i], next: null };
    node = node.next;
  }
  return head;
}

function printList(list) {
  let print = "";
  while (list) {
    print += list.val.toString();
    list = list.next;
  }
  console.log(print);
}

const list1 = generateLinkedList(head1);
const list2 = generateLinkedList(head2);

printList(list1);
let changedList = swapNodes(list1, k1);
printList(list1);

printList(list2);
changedList = swapNodes(list2, k2);
printList(list2);
