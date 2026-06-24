class MaxHeap {
  private heap: number[] = [];

  push(value: number): void {
    this.heap.push(value);
    // sau khi push cần reindex lại
    this.bubbleUp();
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;
    this.swap(0, this.heap.length - 1);
    const result = this.heap.pop();
    const newLength = this.heap.length;
    if (newLength === 0) return result;
    this.bubbleDown();
    return result;
  }

  private bubbleUp(): void {
    // nếu mà giá trị đưa vào lớn hơp cha thì đẩy lên k thì break;
    let currentIndex = this.heap.length - 1;

    while (true) {
      let parentIndex = this.getParentIndex(currentIndex);
      let parentValue = this.heap[parentIndex];
      const currentValue = this.heap[currentIndex];

      if (currentValue > parentValue) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private bubbleDown(): void {
    // nếu giá trị bắt đầu từ root mà < left thì có thể sẽ swap left
    // nếu giá trị < right thì có thể sẽ swap right
    // nhưng nên nhớ việc swap xảy ra còn phụ thuộc vào left value và right value => thằng nào lớn nhất trong đây sẽ đưa lên đầu

    let currentIndex = 0;
    const length = this.heap.length;
    while (true) {
      const currentValue = this.heap[currentIndex];
      const leftValue = this.heap[this.getLeftChildIndex(currentIndex)];
      const rightValue = this.heap[this.getRightChildIndex(currentIndex)];

      if (leftValue === undefined) break;

      let biggestIndex = -1;
      if (currentValue < leftValue) {
        biggestIndex = this.getLeftChildIndex(currentIndex);
      }

      if (
        rightValue !== undefined &&
        rightValue > currentValue &&
        rightValue > leftValue
      ) {
        biggestIndex = this.getRightChildIndex(currentIndex);
      }

      if (biggestIndex === -1) break;
      this.swap(currentIndex, biggestIndex);
      currentIndex = biggestIndex;
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  private getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIndex(i: number): number {
    return 2 * i + 2;
  }
}

const maxHeap = new MaxHeap();
maxHeap.push(100);
maxHeap.push(40);
maxHeap.push(80);
maxHeap.push(20);
maxHeap.push(30);
maxHeap.push(60);
maxHeap.push(10);

console.log(maxHeap);

console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
