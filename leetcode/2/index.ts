/* https://leetcode.com/problems/add-two-numbers/ */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let addmore = 0;
  const output = new ListNode();
  let temp = output;
  while (l1 || l2) {
    const v1 = l1?.val || 0;
    const v2 = l2?.val || 0;
    let v = v1 + v2 + addmore;
    if (v >= 10) {
      addmore = 1;
      v = v - 10;
    } else {
      addmore = 0;
    }
    temp.val = v;
    l1 = l1?.next;
    l2 = l2?.next;
    if (l1 || l2) {
      temp.next = new ListNode();
      temp = temp.next;
    } else if (!l1 && !l2 && addmore > 0) {
      temp.next = new ListNode(addmore);
    }
  }

  return output;
}

// console.log();
