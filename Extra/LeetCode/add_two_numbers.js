// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number
// 0 itself.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const test1a = [2, 4, 3];
const test1b = [5, 6, 4];

const test2a = [0];
const test2b = [0];

const test3a = [9, 9, 9, 9, 9, 9, 9];
const test3b = [9, 9, 9, 9];

function addTwoNumbers(l1, l2) {}
