import TreeNode from '../utils/tree-node';
import TreePrinter from '../utils/printer';

const input = [2, -10, 9, -3, 0, 13, 5, 7];
const tree = buildBalancedBST(input);
TreePrinter.print(tree, 'unsorted-array-to-bst');
TreePrinter.printConsole(tree);

// Cách 1: khi insert vào mà muốn cây luôn cân bằng thì cần phải sử dụng thuật toán AVL Tree, cách này sẽ phức tạp hơn so với việc sort rồi build balanced BST
// Cách 2: sort rồi build balanced BST (cách này sẽ dùng arr.sort() xong rồi implement như ví dụ sorted-array-to-bst)

/**
 * 📚 DANH SÁCH BÀI LEETCODE THỰC HÀNH TƯƠNG ỨNG:
 * - LC 108 (Easy): Convert Sorted Array to Binary Search Tree -> Thuật toán chia đôi mảng dựng cây cân bằng.
 * - LC 700 (Easy): Search in a Binary Search Tree -> Thuật toán tìm kiếm cơ bản.
 * - LC 701 (Medium): Insert into a Binary Search Tree -> Chính là logic của hàm `insert` (Cách 1) bên dưới.
 * - LC 98 (Medium): Validate Binary Search Tree -> Dùng thuật toán In-order Traversal để kiểm tra tính hợp lệ của cây.
 * - LC 1382 (Medium): Balance a Binary Search Tree -> Cho cây lệch, yêu cầu xếp lại thành cây cân bằng (Ứng dụng kết hợp In-order duyệt ra mảng tăng dần + LC 108 để dựng lại cây).
 */

/**
 * Cách làm này có 1 hạn ché là chúng ta chỉ build được từ arr thành cây
 * - Muốn insert/delete 1 node vào mà vẫn đảm bảo balanced thì khó cần cách tiếp cập khác
 */

function buildBalancedBST(arr: number[]): TreeNode | null {
  if (arr.length === 0) return null;
  arr.sort((a, b) => a - b);

  const execute = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const mid = Math.floor(left - (left - right) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = execute(left, mid - 1);
    node.right = execute(mid + 1, right);

    return node;
  };

  return execute(0, arr.length - 1);
}
