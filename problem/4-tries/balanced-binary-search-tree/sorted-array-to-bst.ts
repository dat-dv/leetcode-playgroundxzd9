import TreeNode from '../utils/tree-node';
import TreePrinter from '../utils/printer';

/**
 * Cây BST được tạo ra từ mảng đã sắp xếp [-10, -3, 0, 2, 5, 7, 9, 13] bằng thuật toán chia để trị
 * (lấy phần tử ở giữa làm gốc, Math.floor((left+right)/2)) sẽ có cấu trúc như sau:
 *
 *           2
 *         /   \
 *       -3     7
 *       / \   / \
 *     -10  0 5   9
 *                 \
 *                 13
 *
 *  - Nếu như lấy phần tử bất kì làm root thì sẽ dẫn đến không có độ cao tối ưu
 *    + Cây lệch trái hoặc lệch phải sẽ thoái hóa thành Linked List, worse-case tìm kiếm sẽ là O(N)
 *  - Nếu luôn lấy phần tử ở giữa làm root thì sẽ đảm bảo cây luôn cân bằng
 *    + Độ cao của cây sẽ được tối ưu ở mức O(log N)
 *    + Ở ví dụ trên, chúng ta sẽ tạo ra cây có độ cao 4 (tương đương xấp xỉ log2(8) + 1 tầng)
 *
 *
 */

const buildTree = (nums: number[]): TreeNode | null => {
  const excute = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = excute(left, mid - 1);
    root.right = excute(mid + 1, right);

    return root;
  };

  return excute(0, nums.length - 1);
};

const input = [-10, -3, 0, 2, 5, 7, 9, 13];
const tree = buildTree(input);
TreePrinter.print(tree, 'sorted-array-to-bst');
