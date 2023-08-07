/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // Null checking
  if (!l1) return l2;
  if (!l2) return l1;

  // Check values at current positions
  if (l1.val <= l2.val) {
    // l1 is lower, set next equal to result of recursion
    l1.next = mergeTwoLists(l1.next, l2);
    // Post recursion, return value up the stack
    return l1;
  } else {
    // l2 is lower, set next equal to result of recursion
    l2.next = mergeTwoLists(l1, l2.next);
    // Post recursion, return value up the stack
    return l2;
  }
};
