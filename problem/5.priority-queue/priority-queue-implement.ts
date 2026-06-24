class PriorityQueue {
  // Lưu Binary Heap dưới dạng Array
  private heap: number[] = [];

  constructor() {}

  push(value: number): void {
    this.heap.push(value);
    // sau khi push thì gọi bubbleUp để đưa phần tử mới lên đúng vị trí MinHeap
    this.bubbleUp();
  }

  pop(): number | undefined {
    if (!this.heap.length) return undefined;
    // xoá phần tử đầu tiêp bằng cách swap nó về cuối dùng pop O(1)
    this.swap(0, this.heap.length - 1);
    const result = this.heap.pop();
    // sau khi pop thì cần sắp xếp lại đúng thứ tự ưu tiên
    this.bubbleDown();
    return result;
  }

  // Xem phần tử ưu tiên cao nhất nhưng không xóa
  peek(): number | undefined {
    return this.heap[0];
  }

  // Số lượng phần tử hiện tại
  size(): number {
    return this.heap.length;
  }

  // Kiểm tra queue có rỗng hay không
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Đẩy node vừa thêm lên đúng vị trí
  // Dùng sau push()
  private bubbleUp(): void {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      const parentValue = this.heap[parentIndex];
      const currentValue = this.heap[currentIndex];

      // vì là mean heap nên là node cha phải nhỏ hơn node con
      // nếu node hiện tại bé hơn node cha thì swap k thì thôi
      if (currentValue < parentValue) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        // không cần swap break luôn while
        break;
      }
    }
  }

  // Đẩy root mới xuống đúng vị trí
  // Dùng sau pop()
  private bubbleDown(): void {
    let currentIndex = 0;
    const length = this.heap.length;
    while (true) {
      // mục đích đẩy node cha xuống dưới
      // nếu node cha lớn hơn node con bên trái thì swap
      const currentValue = this.heap[currentIndex];
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const leftValue = this.heap[leftChildIndex];
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      const rightValue = this.heap[rightChildIndex];

      if (leftValue === undefined) break;

      let swapIndex = -1;

      if (currentValue > leftValue) {
        swapIndex = leftChildIndex;
      }

      if (
        rightValue !== undefined &&
        leftValue > rightValue &&
        currentValue > rightValue
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === -1) break;

      this.swap(currentIndex, swapIndex);
      currentIndex = swapIndex;
    }
  }

  // Hoán đổi 2 phần tử trong heap
  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  private getParentIndex(i: number): number {
    // index của node cha luôn
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number): number {
    // tìm node con bên trái // tại sao lại như thế
    return 2 * i + 1;
  }

  private getRightChildIndex(i: number): number {
    // tìm node con bên phải // tại sao lại như thế
    return 2 * i + 2;
  }

  // Tìm chiều cao của cây
  public getHeight(): number {
    const n = this.heap.length;
    if (n === 0) return -1; // Hoặc trả về 0 tùy theo định nghĩa bài toán của anh
    return Math.floor(Math.log2(n));
  }
}

const minHeap = new PriorityQueue();
minHeap.push(10);
minHeap.push(50);
minHeap.push(20);
minHeap.push(80);
minHeap.push(30);
console.log(minHeap);

minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
minHeap.pop();
console.log(minHeap);
