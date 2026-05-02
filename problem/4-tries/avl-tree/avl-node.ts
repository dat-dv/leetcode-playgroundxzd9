class AVLNode<T = number | string> {
  data: T;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;
  height: number = 1;

  constructor(data: T) {
    this.data = data;
  }
}

export default AVLNode;
