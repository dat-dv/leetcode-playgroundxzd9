/* https://leetcode.com/problems/reorder-list/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  const arr = [];
  let temp = head;
  let point = 0;
  while (temp) {
    arr[point] = temp;
    point++;
    temp = temp.next;
  }

  temp = head;
  const length = arr.length;
  const odd = length % 2 > 0;
  const mid = Math.floor(length / 2);
  for (let i = 0; i < mid; i++) {
    const currentNode = arr[i];
    const curRightNode = currentNode.next;
    let right = arr[length - i - 1];
    currentNode.next = right;
    if (i + 1 === mid) {
      if (odd) {
        right.next = arr[mid];
        right = right.next;
      }
      right.next = null;
    } else {
      right.next = curRightNode;
    }
  }
}

const input = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reorderList(input);
console.log(JSON.stringify(input));
