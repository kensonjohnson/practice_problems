// Given the head of a linked list, return the node where the cycle begins.
// If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that
// can be reached again by continuously following the next pointer. Internally,
// pos is used to denote the index of the node that tail's next pointer is
// connected to (0-indexed). It is -1 if there is no cycle. Note that pos is
// not passed as a parameter.

// Do not modify the linked list.

// Example 1:
const head1 = [3,2,0,-4], pos1 = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
const head2 = [1,2], pos2 = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
const head3 = [1], pos3 = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

var detectCycle = function(head) {
    // Initialize two points, one that moves one node at a time (slow)
    // and one that moves two nodes at a time (fast)
    let slow = head;
    let fast = head;

    // iterate as long as fast and fast.next is not null
    while (fast?.next) {
        slow = slow.next; // move one forward
        fast = fast.next.next; // move two forward

        // check if fast has caught up with slow
        if (fast === slow) {
            // reset slow to start of list
            slow = head;

            // iterate until slow meets fast again
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            // This will be the start of the cycle
            return slow;
        }
    }

    // no cycle found
    return null;
}

function buildList( )