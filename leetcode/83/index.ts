/* https://leetcode.com/problems/remove-duplicates-from-sorted-list/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let pointer = head;
  let nextPointer = pointer.next;
  const s = new Set([pointer.val]);
  while (nextPointer) {
    const val = nextPointer.val;
    const has = s.has(val);
    if (has) {
      nextPointer = nextPointer.next;
    } else {
      s.add(val);
      pointer.next = nextPointer;
      pointer = pointer.next;
      nextPointer = nextPointer.next;
    }
  }
  pointer.next = null;
  return head;
}

const input = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
console.log(JSON.stringify(deleteDuplicates(input)));
