/* https://leetcode.com/problems/min-stack/ */

class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    const currentMin = this.getMin();
    if (this.minStack.length === 0 || val <= currentMin) {
      this.minStack.push(val);
    } else {
      this.minStack.push(currentMin);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin()); // return -3
obj.pop();
console.log(obj.top()); // return 0
console.log(obj.getMin()); // return -2

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
