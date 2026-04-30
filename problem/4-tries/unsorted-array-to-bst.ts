import TreeNode from './utils/tree-node';
import TreePrinter from './utils/printer';

const input = [2, -10, 9, -3, 0, 13, 5, 7];
const tree = buildTree(input);
// TreePrinter.print(tree, 'unsorted-array-to-bst');

// Cách 1: insert từng phần tử
// Cách 2: sort rồi build balanced BST ( cách này sẽ dùng arr.sort() xong rồi implement như ví dụ sorted-array-to-bst )

function insert(root: TreeNode | null, val: number): TreeNode {
  if (!root) return new TreeNode(val);

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }

  return root;
}

function buildTree(arr: number[]): TreeNode | null {
  if (arr.length == 0) return null;

  const root = new TreeNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    insert(root, arr[i]);
  }

  return root;
}
