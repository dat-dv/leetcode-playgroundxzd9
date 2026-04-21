/* https://leetcode.com/problems/implement-queue-using-stacks/ */

class MyQueue {
  // stack 1: dùng để push (input stack)
  inputStack = [];
  // stack 2: dùng để pop / peek (output stack)
  outputStack = [];

  // 1 2 3
  // -> push (4) => 1 2 3 4
  // -> pop -> phải lấy ra 1 -> nhưng nếu xoá ở đầu thì k o1 được -> xoá ở cuối -> move to outptu stack = [4 3 2 1] -> output pop => [4 3 2]
  // -> peek => 2
  constructor() {}

  // Hàm này đảo ngược thứ tự phần tử
  // Vì stack là LIFO, nhưng queue cần FIFO
  // → phải đảo 1 lần để phần tử vào trước ra trước
  private moveDataToQueue() {
    while (this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop());
    }
  }

  push(x: number): void {
    // push luôn vào inputStack (O(1))
    // chưa cần xử lý gì thêm để tối ưu performance
    this.inputStack.push(x);
  }

  pop(): number {
    // Nếu outputStack rỗng thì mới chuyển inputStack sang outputStack
    // → lazy transfer giúp tối ưu O(1) amortized
    if (!this.outputStack.length) {
      this.moveDataToQueue();
    }
    return this.outputStack.pop();
  }

  peek(): number {
    // Nếu outputStack rỗng thì mới chuyển inputStack sang outputStack
    // → nếu lấy trực tiếp từ inuput stack thì là O(1); nhưng sẽ sai thứ tự
    // → lazy transfer giúp tối ưu O(1) amortized
    if (!this.outputStack.length) {
      this.moveDataToQueue();
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// console.log(yourFunction());
