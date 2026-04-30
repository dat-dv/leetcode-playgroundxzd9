import TreePrinter from '../../problem/4-tries/utils/printer';

/* https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ */

class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(data?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.data = data === undefined ? 0 : data;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const execute = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;
    const mid = Math.floor(left - (left - right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = execute(left, mid - 1);
    node.right = execute(mid + 1, right);
    return node;
  };

  return execute(0, nums.length - 1);
}

const tree = sortedArrayToBST([-10, -3, 0, 5, 9]);
TreePrinter.print(tree, '108-sorted-array-to-bst');
