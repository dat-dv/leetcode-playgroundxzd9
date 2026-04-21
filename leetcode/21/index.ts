/* https://leetcode.com/problems/merge-two-sorted-lists/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let out = head;

  while (list1 || list2) {
    let val = 0;
    if (list1 && list2) {
      if (list1.val > list2.val) {
        val = list2.val;
        list2 = list2.next;
      } else {
        val = list1.val;
        list1 = list1.next;
      }
    } else if (list1 === null) {
      val = list2.val;
      list2 = list2.next;
    } else if (list2 === null) {
      val = list1.val;
      list1 = list1.next;
    }
    out.next = new ListNode(val);
    out = out.next;
  }

  return head.next;
}

const l1 = new ListNode(1, new ListNode(2));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2));

// console.log(yourFunction());
