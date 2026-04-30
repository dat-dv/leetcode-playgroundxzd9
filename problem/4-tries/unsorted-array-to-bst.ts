import TreeNode from './utils/tree-node';
import TreePrinter from './utils/printer';

const input = [2, -10, 9, -3, 0, 13, 5, 7];
const tree = buildTree(input);
TreePrinter.print(tree, 'unsorted-array-to-bst');

// Cách 1: insert từng phần tử (Thực hành: LC 701)
// Cách 2: sort rồi build balanced BST (cách này sẽ dùng arr.sort() xong rồi implement như ví dụ sorted-array-to-bst)

/**
 * 📚 DANH SÁCH BÀI LEETCODE THỰC HÀNH TƯƠNG ỨNG:
 * - LC 108 (Easy): Convert Sorted Array to Binary Search Tree -> Thuật toán chia đôi mảng dựng cây cân bằng.
 * - LC 700 (Easy): Search in a Binary Search Tree -> Thuật toán tìm kiếm cơ bản.
 * - LC 701 (Medium): Insert into a Binary Search Tree -> Chính là logic của hàm `insert` (Cách 1) bên dưới.
 * - LC 98 (Medium): Validate Binary Search Tree -> Dùng thuật toán In-order Traversal để kiểm tra tính hợp lệ của cây.
 * - LC 1382 (Medium): Balance a Binary Search Tree -> Cho cây lệch, yêu cầu xếp lại thành cây cân bằng (Ứng dụng kết hợp In-order duyệt ra mảng tăng dần + LC 108 để dựng lại cây).
 */

function insert(root: TreeNode | null, val: number): TreeNode {
  if (!root) return new TreeNode(val);

  if (val < root.data) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }

  return root;
}

function buildTree(arr: number[]): TreeNode | null {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    insert(root, arr[i]);
  }

  return root;
}
