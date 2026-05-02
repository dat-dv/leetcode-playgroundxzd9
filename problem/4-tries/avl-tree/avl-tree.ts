import TreePrinter from '../utils/printer';
import AVLNode from './avl-node';

class AVLTree<T = number | string> {
  root: AVLNode<T> | null;

  constructor(data?: T) {
    this.root = data !== undefined ? new AVLNode(data) : null;
  }
  public insert(data: T) {
    this.root = this.insertNode(this.root, data);
  }

  private insertNode(node: AVLNode<T> | null, data: T): AVLNode<T> {
    // ---- NHỊP 1: CHÈN NHƯ BST BÌNH THƯỜNG ----
    // Nếu đụng đáy (null), tạo node mới và trả về
    if (!node) {
      return new AVLNode(data);
    }

    // So sánh để rẽ trái hoặc phải
    if (data < node.data) {
      node.left = this.insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertNode(node.right, data);
    } else {
      // Bằng nhau thì không làm gì (cây AVL thường không chứa Duplicate)
      return node;
    }

    // ---- NHỊP 2: LEO LÊN VÀ CẬP NHẬT ----
    // Đoạn code từ đây trở xuống sẽ tự động được chạy khi đệ quy cuộn ngược từ dưới lên!

    // 2.1 - Chấm công lại chiều cao cho node này
    this.updateHeight(node);

    // 2.2 - Lấy hệ số cân bằng xem có bị méo không
    const balance = this.getBalanceFactor(node);

    // ---- NHỊP 3: CÂN BẰNG LẠI (NẾU CẦN) ----

    // ---- LEFT-LEFT CASE ----
    // Cây bị lệch trái và dữ liệu mới lọt vào nhánh trái
    if (balance > 1 && data < node.left!.data) {
      return this.rotateRight(node);
    }

    // ---- RIGHT-RIGHT CASE ----
    // Cây bị lệch phải và dữ liệu mới lọt vào nhánh phải
    if (balance < -1 && data > node.right!.data) {
      return this.rotateLeft(node);
    }

    // ---- LEFT-RIGHT CASE ----
    // Cây bị lệch trái nhưng dữ liệu mới lại lọt vào nhánh phải
    if (balance > 1 && data > node.left!.data) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    // ---- RIGHT-LEFT CASE ----
    // Cây bị lệch phải nhưng dữ liệu mới lại lọt vào nhánh trái
    if (balance < -1 && data < node.right!.data) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    // ---- NHỊP 4: TRẢ VỀ NODE ĐÃ XỬ LÝ ----
    return node;
  }

  private getHeight(node: AVLNode<T> | null) {
    return node?.height || 0;
  }
  private getBalanceFactor(node: AVLNode<T> | null) {
    /**
     * Mục đích xem cây đang bị nghiêng về bên nào
     *
     * Nếu > 1 -> tức là cây đang nghiêng sang bên trái
     * Nếu < 0 -> tức là cây đang nghiêng sang bên phải
     *
     * Nếu = 0 -> cây cân bằng
     */
    return this.getHeight(node?.left) - this.getHeight(node?.right);
  }

  private rotateRight(node: AVLNode<T>) {
    // 1. Xác định node sẽ trở thành cha mới (chính là node trái)
    const newParent = node.left!;
    // 2. Xác định "phần đuôi" (cây con phải của node trái)
    const orphanSubtree = newParent.right;

    // 3. Xoay ngược: Cha mới trỏ sang phải
    newParent.right = node;
    // 4. Gắn phần đuôi vào đúng chỗ còn trống (như ảnh ví dụ)
    node.left = orphanSubtree;

    // 5. Cập nhật lại chiều cao (QUAN TRỌNG! Phải làm từ dưới lên)
    // Node cha cũ (node) giờ ở dưới, phải cập nhật trước
    this.updateHeight(node);
    // Node cha mới (newParent) giờ ở trên, cập nhật sau
    this.updateHeight(newParent);

    // 6. Trả về node cha mới (vì nó sẽ thay thế node cũ trong cây)
    return newParent;
  }

  private rotateLeft(node: AVLNode<T>) {
    // 1. Xác định node sẽ trở thành cha mới (chính là node phải)
    const newParent = node.right!;
    // 2. Xác định "phần đuôi" (cây con trái của node phải)
    const orphanSubtree = newParent.left;

    // 3. Xoay ngược: Cha mới trỏ sang trái
    newParent.left = node;
    // 4. Gắn phần đuôi vào đúng chỗ còn trống (ngược lại với rotateRight)
    node.right = orphanSubtree;

    // 5. Cập nhật lại chiều cao (QUAN TRỌNG! Phải làm từ dưới lên)
    this.updateHeight(node); // Node cũ ở dưới, cập nhật trước
    this.updateHeight(newParent); // Node mới ở trên, cập nhật sau

    // 6. Trả về node cha mới
    return newParent;
  }

  private updateHeight(node: AVLNode<T>) {
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
}

const avlTree = new AVLTree();
avlTree.insert(1);
avlTree.insert(2);
avlTree.insert(3);
avlTree.insert(4);
avlTree.insert(5);
avlTree.insert(6);
avlTree.insert(7);
avlTree.insert(8);

console.log(avlTree);
TreePrinter.printConsole(avlTree.root);
TreePrinter.print(avlTree.root);
