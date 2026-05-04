/* https://leetcode.com/problems/remove-nth-node-from-end-of-list/ */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const nodes = [];
  let temp = head;
  while (temp) {
    nodes.push(temp);
    temp = temp.next;
  }
  const removedIndex = nodes.length - n;
  const newNodes = nodes.filter((_, i) => {
    return i !== removedIndex;
  });

  head = null;
  temp = null;

  for (let i = 0; i < newNodes.length; i++) {
    const cur = newNodes[i];
    if (!temp && !head) {
      temp = cur;
      head = cur;
      temp.next = null;
    } else {
      temp.next = cur;
      temp = cur;
      temp.next = null;
    }
  }

  return head;
}
const input = new ListNode(1, new ListNode(2));
console.log(JSON.stringify(removeNthFromEnd(input, 2)));
