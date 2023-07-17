// You are given two non-empty linked lists representing two
// non-negative integers. The most significant digit comes
// first and each of their nodes contains a single digit. Add
// the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading
// zero, except the number 0 itself.

// Example 1:
const l1a = [7, 2, 4, 3],
  l2a = [5, 6, 4];
// Output: [7,8,0,7]

// Example 2:
const l1b = [2, 4, 3],
  l2b = [5, 6, 4];
// Output: [8,0,7]

// Example 3:
const l1c = [0],
  l2c = [0];
// Output: [0]

var addTwoNumbers = function (l1, l2) {
  // Use arrays to represent a stack
  let firstStack = [];
  let secondStack = [];

  // Traverse each list to populate the stacks
  while (l1) {
    firstStack.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    secondStack.push(l2.val);
    l2 = l2.next;
  }

  // Create a new list to store our answer
  let l3 = new ListNode(0);

  // Iterate until both stacks are exhausted
  while (firstStack.length || secondStack.length) {
    let sum = 0;

    // Check if a number is left on each stack and add it to sum
    if (firstStack.length) sum += firstStack.pop();
    if (secondStack.length) sum += secondStack.pop();

    // We take the value of our current node in the answer list
    // and add it to the sum
    sum += l3.val;

    // We can get the last digit with a mod
    l3.val = sum % 10;

    // And we can store the first digit (0 or 1) by dividing
    // We store the first digit in a new node,
    // and point that node at the current node
    let head = new ListNode(Math.floor(sum / 10));
    head.next = l3;

    // Finally, we update our current node to the head
    l3 = head;
  }

  // It's possible that our first digit is a zero,
  // if so, we return the entry to the second node instead of the first
  return l3.val === 0 ? l3.next : l3;
};
