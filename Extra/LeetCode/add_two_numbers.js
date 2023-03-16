import process from "process";

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number
// 0 itself.

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const test1a = [2, 4, 3];
const test1b = [5, 6, 4];

const test2a = [0];
const test2b = [0];

const test3a = [9, 9, 9, 9, 9, 9, 9];
const test3b = [9, 9, 9, 9];

function addTwoNumbers(l1, l2) {
  // create a new list for results and place the head at root
  const result = new ListNode(0);
  let head = result;
  // we need a variable to handle carryover numbers
  let carry = 0;
  while (l1 || l2 || carry) {
    // we sum all three, using ternary operators for null checking
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // if sum is greater than 10, we grab the carryover
    carry = parseInt(sum / 10);
    // and we create a new node to add to our result list with the remainder
    head.next = new ListNode(sum % 10);
    // we move the head forward to the new node
    head = head.next;
    // finally, we use optional chaining to handle setting the next nodes in each list
    l1 = l1?.next;
    l2 = l2?.next;
  }
  // since we initialized the list with an extra zero in front,
  // we return the second node in the list
  return result.next;
}

function addTwoNumbersRecursively(l1, l2, carry) {
  // Base case: All arguments are falsy
  if (!l1 && !l2 && !carry) {
    return null;
  }
  // we sum all three, using ternary operators for null checking
  const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry ?? 0);
  // if sum is greater than 10, we grab the carryover
  carry = parseInt(sum / 10);
  // take advantage of the ListNode constructor to generate our list
  // the first argument is the value of the node, and the second is a
  // reference to the next node
  return new ListNode(
    sum % 10,
    addTwoNumbersRecursively(l1?.next, l2?.next, carry)
  );
}

// ---------- Testing ---------- //

function buildList(numberArray) {
  const list = new ListNode(numberArray[0]);
  let currentNode = list;
  for (let i = 1; i < numberArray.length; i++) {
    currentNode.next = new ListNode(numberArray[i]);
    currentNode = currentNode.next;
  }
  return list;
}

// Test 1
let l1 = buildList(test1a);
let l2 = buildList(test1b);
let answer = addTwoNumbers(l1, l2);
let recursiveAnswer = addTwoNumbersRecursively(l1, l2);
process.stdout.write("Test 1 expects 7 0 8.\nResult: ");
while (answer) {
  process.stdout.write(answer.val + " ");
  answer = answer.next;
} // Expect 7 0 8
process.stdout.write("\nRecursive result: ");
while (recursiveAnswer) {
  process.stdout.write(recursiveAnswer.val + " ");
  recursiveAnswer = recursiveAnswer.next;
}
console.log("\n");

// Test 2
l1 = buildList(test2a);
l2 = buildList(test2b);
answer = addTwoNumbers(l1, l2);
recursiveAnswer = addTwoNumbersRecursively(l1, l2);
process.stdout.write("Test 2 expects 0.\nResult: ");
while (answer) {
  process.stdout.write(answer.val + " ");
  answer = answer.next;
} // Expect 0
process.stdout.write("\nRecursive result: ");
while (recursiveAnswer) {
  process.stdout.write(recursiveAnswer.val + " ");
  recursiveAnswer = recursiveAnswer.next;
}
console.log("\n");

// Test
l1 = buildList(test3a);
l2 = buildList(test3b);
answer = addTwoNumbers(l1, l2);
recursiveAnswer = addTwoNumbersRecursively(l1, l2);
process.stdout.write("Test 3 expects 8 9 9 9 0 0 0 1.\nResult: ");
while (answer) {
  process.stdout.write(answer.val + " ");
  answer = answer.next;
} // Expect 8 9 9 9 0 0 0 1
process.stdout.write("\nRecursive result: ");
while (recursiveAnswer) {
  process.stdout.write(recursiveAnswer.val + " ");
  recursiveAnswer = recursiveAnswer.next;
}
console.log("\n");
